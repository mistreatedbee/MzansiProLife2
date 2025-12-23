# 🚀 Backend Setup Instructions

## Step 1: Create `.env` File

Create a file named `.env` in the `backend` folder with the following content:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority

# JWT Secret (use the generated secret below)
JWT_SECRET=YOUR_GENERATED_SECRET_HERE

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Server Port
PORT=5000

# Environment
NODE_ENV=development
```

## Step 2: Generate JWT Secret

Run this command in the `backend` folder:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the output and replace `YOUR_GENERATED_SECRET_HERE` in the `.env` file.

## Step 3: Install Dependencies

```bash
cd backend
npm install
```

## Step 4: Start the Server

```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected: mzansiprolife-shard-00-00.ktpi4oa.mongodb.net
📊 Database: mzansi-prolife
🚀 Server running on port 5000
📡 API available at http://localhost:5000/api
```

## ✅ Done!

Your backend is now connected to MongoDB Atlas!

---

## 🔒 Security Notes

- ✅ `.env` file is already in `.gitignore` - it won't be committed
- ⚠️ Never share your MongoDB connection string publicly
- ⚠️ For production, use environment variables in your hosting platform

---

## 🌐 For Production Deployment

When deploying to Vercel/Railway/Render, add these environment variables:

1. **MONGODB_URI**: `mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority`
2. **JWT_SECRET**: (your generated secret)
3. **FRONTEND_URL**: (your frontend URL)
4. **NODE_ENV**: `production`

---

## 📋 MongoDB Atlas Network Access

Make sure to allow network access in MongoDB Atlas:

1. Go to MongoDB Atlas Dashboard
2. Click "Network Access"
3. Click "Add IP Address"
4. For development: Add `0.0.0.0/0` (allow all - for testing)
5. For production: Add specific IPs of your hosting platform

---

## 🎯 Your Connection is Ready!

The database will automatically:
- Create the `mzansi-prolife` database
- Create all collections (users, submissions, etc.)
- Set up indexes for performance

