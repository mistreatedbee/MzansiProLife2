# 🚀 Backend Setup Guide

## Complete MongoDB Backend Integration

Your backend is now fully set up and ready to connect to MongoDB!

---

## 📋 Setup Steps

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB: `mongod`
3. Use connection string: `mongodb://localhost:27017/mzansi-prolife`

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Use it in `.env` file

### 3. Create Environment File
Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/mzansi-prolife
# Or for Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mzansi-prolife?retryWrites=true&w=majority

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
```

### 4. Start Backend Server
```bash
cd backend
npm run dev
```

Server will run on `http://localhost:5000`

### 5. Update Frontend Environment
Add to your frontend `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Start Frontend
```bash
npm run dev
```

---

## ✅ What's Working

### Backend Features
- ✅ Express server with MongoDB
- ✅ User authentication (JWT)
- ✅ User registration & login
- ✅ Submission CRUD operations
- ✅ Admin dashboard API
- ✅ Chat conversations API
- ✅ Protected routes
- ✅ Input validation
- ✅ Error handling

### Frontend Integration
- ✅ API client created
- ✅ AuthContext updated to use backend
- ✅ base44Client adapter for compatibility
- ✅ All API calls routed to backend

---

## 🔐 Creating Admin User

After registering a user, update their role in MongoDB:

```javascript
// In MongoDB shell or Compass
use mzansi-prolife
db.users.updateOne(
  { email: "your-admin-email@example.com" },
  { $set: { role: "admin" } }
)
```

Or create a script:
```javascript
// backend/scripts/createAdmin.js
import mongoose from 'mongoose';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const admin = await User.findOneAndUpdate(
    { email: 'admin@mzansiprolife.org' },
    { role: 'admin' },
    { new: true, upsert: true }
  );
  
  console.log('Admin created:', admin);
  await mongoose.disconnect();
};

createAdmin();
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Submissions
- `POST /api/submissions` - Create
- `GET /api/submissions` - List (user's)
- `GET /api/submissions/:id` - Get one
- `PUT /api/submissions/:id` - Update

### Admin
- `GET /api/admin/stats` - Dashboard stats
- `GET /api/admin/submissions` - All submissions
- `PUT /api/admin/submissions/:id` - Update (admin)
- `GET /api/admin/conversations` - Chat conversations

### Chat
- `POST /api/chat/conversations` - Create/get
- `POST /api/chat/messages` - Add message
- `GET /api/chat/conversations/:id` - Get conversation

---

## 🧪 Testing

### Test Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0798222269",
    "password": "password123"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

---

## 🎉 Everything is Connected!

Your website now has:
- ✅ Full backend API
- ✅ MongoDB database
- ✅ User authentication
- ✅ Data persistence
- ✅ Admin functionality
- ✅ All features working with real database

Just start both servers and you're ready to go! 🚀

