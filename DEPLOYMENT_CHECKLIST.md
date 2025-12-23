# ✅ Production Deployment Checklist

## Complete Step-by-Step Guide

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

#### Backend `.env` File:
```env
MONGODB_URI=mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority

JWT_SECRET=8febfb15a97a4bc4d980b93116f331920912df2e91c31d9e976387806c76857c624b3193743f89e81c87d4972db975f16cfb9402b02928b3fec4ef526dbb52bd

FRONTEND_URL=http://localhost:5173

PORT=5000

NODE_ENV=development

# WhatsApp (set after Meta setup)
WHATSAPP_VERIFY_TOKEN=your-verify-token
WHATSAPP_ACCESS_TOKEN=your-access-token
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id

# Messenger (set after Meta setup)
MESSENGER_VERIFY_TOKEN=your-verify-token
MESSENGER_PAGE_ACCESS_TOKEN=your-page-access-token
```

#### Frontend `.env` File (Root):
```env
VITE_API_URL=http://localhost:5000/api
```

- [ ] Backend `.env` created
- [ ] Frontend `.env` created
- [ ] MongoDB connection string added
- [ ] JWT secret generated and added

---

## 🌐 MongoDB Atlas Configuration

- [ ] MongoDB Atlas account created
- [ ] Database cluster created
- [ ] Network Access configured (allow `0.0.0.0/0` for testing)
- [ ] Database user created
- [ ] Connection string obtained
- [ ] Connection tested locally

---

## 📱 WhatsApp Cloud API Setup

### Step 1: Meta Business Manager
- [ ] Create Meta Business Account
- [ ] Create WhatsApp Business Account
- [ ] Add phone number to WhatsApp Business Account

### Step 2: Get API Credentials
- [ ] Go to Meta Developers Console
- [ ] Create App → Business type
- [ ] Add WhatsApp product
- [ ] Get Phone Number ID
- [ ] Get Access Token (temporary or permanent)
- [ ] Set Webhook Verify Token

### Step 3: Configure Webhook
- [ ] Set webhook URL: `https://your-backend-url.vercel.app/api/whatsapp/webhook`
- [ ] Subscribe to `messages` events
- [ ] Verify webhook (should return challenge)
- [ ] Test incoming message

### Step 4: Environment Variables
- [ ] Add `WHATSAPP_VERIFY_TOKEN` to backend `.env`
- [ ] Add `WHATSAPP_ACCESS_TOKEN` to backend `.env`
- [ ] Add `WHATSAPP_PHONE_NUMBER_ID` to backend `.env`

- [ ] WhatsApp webhook verified
- [ ] Test message sending
- [ ] Test message receiving

---

## 💬 Facebook Messenger Setup

### Step 1: Facebook Page
- [ ] Create Facebook Page
- [ ] Get Page ID

### Step 2: Meta Business Manager
- [ ] Go to Meta Developers Console
- [ ] Add Messenger product to app
- [ ] Link Facebook Page
- [ ] Get Page Access Token

### Step 3: Configure Webhook
- [ ] Set webhook URL: `https://your-backend-url.vercel.app/api/messenger/webhook`
- [ ] Subscribe to `messages` and `messaging_postbacks`
- [ ] Verify webhook
- [ ] Test incoming message

### Step 4: Environment Variables
- [ ] Add `MESSENGER_VERIFY_TOKEN` to backend `.env`
- [ ] Add `MESSENGER_PAGE_ACCESS_TOKEN` to backend `.env`

- [ ] Messenger webhook verified
- [ ] Test message sending
- [ ] Test message receiving

---

## ☁️ File Storage Setup (Production)

### Option A: AWS S3
- [ ] Create AWS account
- [ ] Create S3 bucket
- [ ] Configure bucket permissions
- [ ] Get access keys
- [ ] Update upload route to use S3
- [ ] Test file uploads

### Option B: Cloudinary
- [ ] Create Cloudinary account
- [ ] Get API credentials
- [ ] Update upload route to use Cloudinary
- [ ] Test file uploads

- [ ] File storage configured
- [ ] Upload endpoint tested
- [ ] File retrieval tested

---

## 🚀 Backend Deployment

### Option A: Vercel
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Navigate to `backend` folder
- [ ] Run `vercel`
- [ ] Set environment variables in Vercel dashboard
- [ ] Deploy: `vercel --prod`
- [ ] Get backend URL

### Option B: Railway
- [ ] Create Railway account
- [ ] New Project → Deploy from GitHub
- [ ] Select `backend` folder
- [ ] Add environment variables
- [ ] Deploy
- [ ] Get backend URL

### Option C: Render
- [ ] Create Render account
- [ ] New Web Service
- [ ] Connect GitHub repo
- [ ] Set root directory: `backend`
- [ ] Add environment variables
- [ ] Deploy
- [ ] Get backend URL

**Backend Environment Variables to Set**:
- `MONGODB_URI`
- `JWT_SECRET`
- `FRONTEND_URL` (will update after frontend deploy)
- `NODE_ENV=production`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `MESSENGER_VERIFY_TOKEN`
- `MESSENGER_PAGE_ACCESS_TOKEN`

- [ ] Backend deployed
- [ ] Backend URL obtained
- [ ] Health check working: `https://your-backend-url/api/health`
- [ ] All environment variables set

---

## 🎨 Frontend Deployment

### Vercel Deployment
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] New Project → Import GitHub repo
- [ ] Configure:
  - Framework Preset: **Vite**
  - Root Directory: `.` (root)
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Add Environment Variable:
  - `VITE_API_URL` = `https://your-backend-url.vercel.app/api`
- [ ] Deploy
- [ ] Get frontend URL

- [ ] Frontend deployed
- [ ] Frontend URL obtained
- [ ] Frontend loads correctly

---

## 🔄 Update Backend CORS

- [ ] Update `FRONTEND_URL` in backend environment variables
- [ ] Set to: `https://your-frontend-url.vercel.app`
- [ ] Redeploy backend (if needed)
- [ ] Test CORS working

---

## ✅ Post-Deployment Testing

### Authentication
- [ ] User registration works
- [ ] User login works
- [ ] Profile page loads
- [ ] Logout works

### Submissions
- [ ] All 8 questionnaire types submit correctly
- [ ] Reference numbers generated
- [ ] Data appears in admin dashboard
- [ ] File uploads work (if configured)

### Admin Dashboard
- [ ] Admin login works
- [ ] Stats display correctly
- [ ] Submissions list loads
- [ ] Filters work
- [ ] Search works
- [ ] Update submission works
- [ ] Export works (CSV, Excel, PDF)
- [ ] User management works
- [ ] Analytics display
- [ ] Content management works
- [ ] Communications work

### WhatsApp
- [ ] Webhook receives messages
- [ ] Bot responds correctly
- [ ] Conversations saved to MongoDB
- [ ] Admin can view conversations
- [ ] Admin can send messages

### Messenger
- [ ] Webhook receives messages
- [ ] Bot responds correctly
- [ ] Conversations saved to MongoDB
- [ ] Admin can view conversations
- [ ] Admin can send messages

### Data Integrity
- [ ] All data saves to MongoDB
- [ ] No data loss
- [ ] Relationships work correctly
- [ ] Timestamps correct

---

## 🔒 Security Checklist

- [ ] JWT tokens working
- [ ] Passwords hashed
- [ ] Admin routes protected
- [ ] CORS configured correctly
- [ ] Environment variables not exposed
- [ ] Rate limiting active (if configured)
- [ ] Input validation working
- [ ] File upload validation working

---

## 📊 Monitoring Setup

- [ ] Error logging configured
- [ ] MongoDB connection monitoring
- [ ] API response monitoring
- [ ] Webhook delivery monitoring

---

## 🎯 Final Steps

- [ ] Create first admin user in database
- [ ] Test complete user flow
- [ ] Test complete admin flow
- [ ] Document any issues
- [ ] Set up backups (MongoDB Atlas)
- [ ] Configure custom domain (optional)

---

## ✅ Deployment Complete!

Once all items are checked, your platform is live and ready! 🎉

---

## 📝 Notes

- Keep `.env` files secure and never commit them
- Update environment variables in hosting platform, not in code
- Test thoroughly before going live
- Monitor logs for errors
- Set up alerts for critical issues

---

**Last Updated**: Complete Audit Report  
**Status**: Ready for Deployment (after manual configuration)

