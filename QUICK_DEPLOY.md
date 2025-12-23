# 🚀 Quick Deployment Guide

## Deploy in 5 Steps!

---

## Step 1: Set Up MongoDB Atlas (5 minutes)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create free cluster
4. Get connection string
5. Add network access (allow all IPs: `0.0.0.0/0`)

---

## Step 2: Deploy Backend (10 minutes)

### Option A: Vercel (Recommended)
```bash
cd backend
npm install -g vercel
vercel
# Follow prompts, add environment variables
```

### Option B: Railway
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select `backend` folder
4. Add environment variables
5. Deploy

**Backend URL**: `https://your-backend.vercel.app` (or Railway URL)

---

## Step 3: Deploy Frontend (5 minutes)

### Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. New Project → Import GitHub repo
3. Configure:
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
4. Add Environment Variable:
   - `VITE_API_URL` = `https://your-backend.vercel.app/api`
5. Deploy

**Frontend URL**: `https://your-frontend.vercel.app`

---

## Step 4: Update Backend CORS (2 minutes)

In backend environment variables, add:
```
FRONTEND_URL=https://your-frontend.vercel.app
```

Redeploy backend.

---

## Step 5: Create Admin User (2 minutes)

1. Register a user on your site
2. In MongoDB Atlas, find the user
3. Update role to "admin":
```javascript
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

---

## ✅ Done!

Your platform is now live! 🎉

### Test:
1. Visit your frontend URL
2. Register a user
3. Submit a questionnaire
4. Login as admin
5. View submissions in admin dashboard

---

## 🔧 Environment Variables Summary

### Backend:
- `MONGODB_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Random secret key (min 32 chars)
- `FRONTEND_URL` - Your frontend URL
- `NODE_ENV=production`

### Frontend:
- `VITE_API_URL` - Your backend URL + `/api`

---

## 🎯 That's It!

Everything is ready. Just follow these 5 steps and you're live! 🚀

