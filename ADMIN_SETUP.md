# 🔐 Admin User Setup Guide

This guide explains how to create admin users for the Mzansi Prolife Development Institute NPC admin dashboard.

## 📋 Default Admin Accounts

After running the setup script, you'll have these admin accounts:

### Admin Account 1
- **Email:** `admin@mzansiprolife.org`
- **Password:** `Admin@2024!`
- **Phone:** 079 822 2269

### Admin Account 2
- **Email:** `system@mzansiprolife.org`
- **Password:** `System@2024!`
- **Phone:** 078 081 3955

## 🚀 Quick Setup

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Make sure MongoDB is connected
Ensure your `.env` file has the correct MongoDB connection string:
```env
MONGODB_URI=mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/?appName=MzansiProlife
```

### Step 3: Run the Admin Creation Script
```bash
npm run create-admin
```

This will:
- ✅ Create 2 default admin users
- ✅ Hash passwords securely
- ✅ Set admin role
- ✅ Skip if users already exist

## 🔑 How to Login

1. Navigate to `/admin` in your browser
2. Enter one of the admin email addresses
3. Enter the corresponding password
4. Click "Login"

## ⚠️ IMPORTANT: Change Default Passwords

**After first login, change the default passwords immediately!**

You can change passwords by:
1. Logging into the admin dashboard
2. Going to User Management
3. Finding your admin account
4. Updating the password

Or update directly in MongoDB:
```javascript
// Connect to MongoDB and run:
db.users.updateOne(
  { email: "admin@mzansiprolife.org" },
  { $set: { password: "<new-hashed-password>" } }
)
```

## 🛠️ Creating Custom Admin Users

### Option 1: Using the Script

Edit `backend/scripts/createAdmin.js` and add your admin user to the `adminUsers` array:

```javascript
const adminUsers = [
  {
    name: 'Your Name',
    email: 'your-email@example.com',
    phone: '079 123 4567',
    password: 'YourSecurePassword123!',
    role: 'admin'
  }
];
```

Then run:
```bash
npm run create-admin
```

### Option 2: Using MongoDB Directly

1. Connect to your MongoDB database
2. Create a user with admin role:

```javascript
// In MongoDB shell or Compass:
db.users.insertOne({
  name: "Admin Name",
  email: "admin@example.com",
  phone: "079 123 4567",
  password: "<bcrypt-hashed-password>", // Use bcrypt to hash password
  role: "admin",
  isEmailVerified: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### Option 3: Using the API (After First Admin is Created)

Once you have at least one admin user, you can create more through the User Management section in the admin dashboard.

## 🔒 Security Best Practices

1. **Strong Passwords**: Use passwords with:
   - At least 8 characters
   - Mix of uppercase, lowercase, numbers, and symbols
   - Not easily guessable

2. **Change Default Passwords**: Always change default passwords immediately

3. **Limit Admin Accounts**: Only create admin accounts for trusted personnel

4. **Regular Audits**: Review admin accounts regularly in the User Management section

## 📝 Admin Login Endpoint

The admin login uses a special endpoint that verifies admin role:

**POST** `/api/auth/admin-login`

Request body:
```json
{
  "email": "admin@mzansiprolife.org",
  "password": "Admin@2024!"
}
```

Response:
```json
{
  "success": true,
  "message": "Admin login successful",
  "data": {
    "user": {
      "id": "...",
      "name": "Admin User",
      "email": "admin@mzansiprolife.org",
      "role": "admin"
    },
    "token": "jwt-token-here"
  }
}
```

## ❓ Troubleshooting

### "Access denied. Admin privileges required."
- The user exists but doesn't have admin role
- Solution: Update the user's role to 'admin' in MongoDB:
  ```javascript
  db.users.updateOne(
    { email: "user@example.com" },
    { $set: { role: "admin" } }
  )
  ```

### "Invalid email or password"
- Check that the email and password are correct
- Verify the user exists in the database
- Check that password was hashed correctly

### Script fails to connect to MongoDB
- Verify MongoDB connection string in `.env`
- Ensure MongoDB is running and accessible
- Check network connectivity

## 📞 Support

If you encounter issues creating admin users, check:
1. MongoDB connection is working
2. `.env` file has correct configuration
3. Backend server can connect to MongoDB
4. User model is properly configured

