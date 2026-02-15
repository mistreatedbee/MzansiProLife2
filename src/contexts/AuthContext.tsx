import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authAPI, removeAuthToken } from '@/api/apiClient';

interface User {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const syncAdminSession = (nextUser: User | null) => {
    if (nextUser?.role === 'admin') {
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_email', nextUser.email || '');
      localStorage.setItem('admin_name', nextUser.name || '');
    } else {
      localStorage.removeItem('admin_authenticated');
      localStorage.removeItem('admin_email');
      localStorage.removeItem('admin_name');
    }
  };

  useEffect(() => {
    // Check for existing session by verifying token
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const response = await authAPI.getMe();
          if (response.user) {
            const nextUser = {
              id: response.user._id || response.user.id,
              name: response.user.name,
              email: response.user.email,
              phone: response.user.phone,
              role: response.user.role,
            };
            setUser(nextUser);
            syncAdminSession(nextUser);
          }
        } catch (error) {
          // Token invalid, remove it
          removeAuthToken();
          syncAdminSession(null);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await authAPI.login(email, password);
      if (response.user && response.token) {
        const nextUser = {
          id: response.user._id || response.user.id,
          name: response.user.name,
          email: response.user.email,
          phone: response.user.phone,
          role: response.user.role,
        };
        setUser(nextUser);
        syncAdminSession(nextUser);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      throw new Error(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, phone: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await authAPI.register({ name, email, phone, password });
      if (response.user && response.token) {
        const nextUser = {
          id: response.user._id || response.user.id,
          name: response.user.name,
          email: response.user.email,
          phone: response.user.phone,
          role: response.user.role,
        };
        setUser(nextUser);
        syncAdminSession(nextUser);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      throw new Error(error.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeAuthToken();
    syncAdminSession(null);
    setUser(null);
  };

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      try {
        const response = await authAPI.updateProfile({
          name: userData.name,
          phone: userData.phone,
        });
        if (response.user) {
          setUser({
            id: response.user._id || response.user.id || user.id,
            name: response.user.name,
            email: response.user.email,
            phone: response.user.phone,
            role: response.user.role || user.role,
          });
        }
      } catch (error) {
        console.error('Failed to update profile:', error);
        // Still update local state even if API call fails
        setUser({ ...user, ...userData });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

