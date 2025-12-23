# 📝 Environment Files Setup Guide

## You Need TWO `.env` Files!

---

## 1️⃣ Frontend `.env` (Root Directory)

**Location**: Create in the **root** of your project (same level as `package.json`)

**File**: `.env`

**Content**:
```env
VITE_API_URL=http://localhost:5000/api
```

**Purpose**: Tells your frontend where to find the backend API

---

## 2️⃣ Backend `.env` (Backend Directory)

**Location**: Create in the `backend` folder

**File**: `backend/.env`

**Content**:
```env
MONGODB_URI=mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority

JWT_SECRET=8febfb15a97a4bc4d980b93116f331920912df2e91c31d9e976387806c76857c624b3193743f89e81c87d4972db975f16cfb9402b02928b3fec4ef526dbb52bd

FRONTEND_URL=http://localhost:5173

PORT=5000

NODE_ENV=development
```

**Purpose**: Backend configuration (database, secrets, etc.)

---

## 📁 File Structure

```
Mzansi-Prolife-Development-Institute-NPC-main/
├── .env                    ← Frontend .env (CREATE THIS)
├── .env.example            ← Frontend example (already created)
├── package.json
├── src/
├── backend/
│   ├── .env                ← Backend .env (CREATE THIS)
│   ├── server.js
│   └── ...
└── ...
```

---

## ✅ Quick Setup Steps

### Step 1: Create Frontend `.env`
1. In the **root** directory, create `.env`
2. Add: `VITE_API_URL=http://localhost:5000/api`

### Step 2: Create Backend `.env`
1. In the `backend` directory, create `.env`
2. Copy the content from above (MongoDB URI, JWT secret, etc.)

### Step 3: Restart Dev Servers
After creating `.env` files, restart:
- Frontend: `npm run dev` (in root)
- Backend: `npm run dev` (in backend folder)

---

## 🚀 For Production Deployment

### Frontend (Vercel):
Add environment variable:
- **Name**: `VITE_API_URL`
- **Value**: `https://your-backend-url.vercel.app/api`

### Backend (Vercel/Railway/Render):
Add environment variables:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Your JWT secret
- `FRONTEND_URL` - Your frontend URL
- `NODE_ENV` - `production`

---

## 🔒 Security Notes

- ✅ Both `.env` files are in `.gitignore` - won't be committed
- ⚠️ **Never commit** `.env` files to Git
- ⚠️ **Never share** your MongoDB connection string or JWT secret
- ✅ `.env.example` files are safe to commit (they don't contain secrets)

---

## 💡 Why Two Files?

- **Frontend `.env`**: Used by Vite during build/dev - only needs API URL
- **Backend `.env`**: Used by Node.js server - needs database, secrets, etc.

They're separate because:
1. Different technologies (Vite vs Node.js)
2. Different security requirements
3. Different deployment locations

---

## ✅ That's It!

Once you create both `.env` files, everything will work perfectly!

**Note**: After creating `.env` files, restart your dev servers for changes to take effect.

