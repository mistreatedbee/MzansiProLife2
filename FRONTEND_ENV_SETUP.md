# ✅ Frontend Environment Variables Setup

## Yes, You Need a Frontend `.env` File!

---

## 📝 Create `.env` File in Root Directory

Create a file named `.env` in the **root** of your project (same level as `package.json`) with:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔧 What This Does

The frontend uses `VITE_API_URL` to connect to your backend API. This tells your React app where to send API requests.

### For Local Development:
```env
VITE_API_URL=http://localhost:5000/api
```

### For Production (after deploying backend):
```env
VITE_API_URL=https://your-backend-url.vercel.app/api
```

---

## 📋 Quick Setup

1. **Create `.env` file** in the project root:
   ```
   Mzansi-Prolife-Development-Institute-NPC-main/
   ├── .env                    ← Create this file here
   ├── package.json
   ├── src/
   └── backend/
   ```

2. **Add the content:**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Restart your dev server** (if running):
   ```bash
   npm run dev
   ```

---

## 🚀 For Production Deployment

When deploying to Vercel, add this environment variable:

**Variable Name**: `VITE_API_URL`  
**Value**: `https://your-backend-url.vercel.app/api`

Vercel will automatically use this during build.

---

## ✅ Environment Variables Summary

### Frontend (Root `.env`):
- `VITE_API_URL` - Backend API URL

### Backend (`backend/.env`):
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `FRONTEND_URL` - Frontend URL (for CORS)
- `PORT` - Server port
- `NODE_ENV` - Environment (development/production)

---

## 🔒 Security Notes

- ✅ `.env` is already in `.gitignore` - won't be committed
- ⚠️ Never commit `.env` files to Git
- ⚠️ For production, use environment variables in your hosting platform

---

## 🎯 That's It!

Once you create the `.env` file with `VITE_API_URL`, your frontend will be able to connect to your backend!

**Note**: After creating/updating `.env`, you may need to restart your Vite dev server for changes to take effect.

