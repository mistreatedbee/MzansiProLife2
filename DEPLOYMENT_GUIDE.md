# 🚀 Deployment Guide - Vercel

## Complete Deployment Instructions

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

#### Frontend Environment Variables (Vercel)
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app/api
   ```

#### Backend Environment Variables (Vercel or Railway)
1. Add to your backend hosting platform:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secure_random_secret_key
   FRONTEND_URL=https://your-frontend-url.vercel.app
   NODE_ENV=production
   PORT=5000
   ```

---

## 🌐 Step 1: Deploy Backend

### Option A: Deploy to Vercel (Serverless)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to backend:**
   ```bash
   cd backend
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set environment variables in Vercel dashboard:**
   - MONGODB_URI
   - JWT_SECRET
   - FRONTEND_URL

5. **Get your backend URL** (e.g., `https://mzansi-backend.vercel.app`)

### Option B: Deploy to Railway/Render

1. **Railway:**
   - Connect GitHub repo
   - Select `backend` folder
   - Add environment variables
   - Deploy

2. **Render:**
   - Create new Web Service
   - Point to `backend` folder
   - Add environment variables
   - Deploy

---

## 🎨 Step 2: Deploy Frontend to Vercel

### Method 1: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure:**
   - Framework Preset: Vite
   - Root Directory: `.` (root)
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Add Environment Variable:**
   - `VITE_API_URL` = Your backend URL + `/api`
6. **Deploy**

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **In project root:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Link to existing project or create new
   - Set environment variables

4. **Deploy:**
   ```bash
   vercel --prod
   ```

---

## 🔧 Step 3: Configure MongoDB Atlas

1. **Create MongoDB Atlas Account:**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create free cluster

2. **Get Connection String:**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

3. **Add to Backend Environment:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mzansi-prolife?retryWrites=true&w=majority
   ```

4. **Network Access:**
   - Add `0.0.0.0/0` to allow all IPs (or specific Vercel IPs)

---

## 🔐 Step 4: Security Configuration

### Generate JWT Secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Add to backend environment variables.

### Update CORS:
Backend already configured to accept frontend URL.

---

## ✅ Step 5: Verify Deployment

### Test Frontend:
1. Visit your Vercel URL
2. Test all pages load
3. Test login/signup
4. Test questionnaire submission

### Test Backend:
1. Visit `https://your-backend.vercel.app/api/health`
2. Should return: `{"status":"OK",...}`

### Test Integration:
1. Register a user
2. Submit a questionnaire
3. Login as admin
4. View submissions in admin dashboard

---

## 🌍 Step 6: Custom Domain (Optional)

### In Vercel Dashboard:
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Follow DNS configuration instructions

### DNS Records:
- Add A record pointing to Vercel
- Or CNAME to Vercel domain

---

## 📊 Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Backend API responds
- [ ] MongoDB connection working
- [ ] User registration works
- [ ] Login works
- [ ] Questionnaire submission works
- [ ] Admin dashboard accessible
- [ ] Admin can view submissions
- [ ] Admin can update submissions
- [ ] All tabs in admin dashboard work
- [ ] Export functionality works
- [ ] Security measures active

---

## 🐛 Troubleshooting

### Backend not connecting to MongoDB:
- Check MONGODB_URI format
- Verify network access in Atlas
- Check connection string has correct password

### Frontend can't reach backend:
- Verify VITE_API_URL is correct
- Check CORS settings in backend
- Verify backend is deployed and running

### Admin login not working:
- Verify user has admin role in database
- Check JWT_SECRET is set
- Verify token is being stored

---

## 🎉 Deployment Complete!

Your platform is now live and ready to use! 🚀

