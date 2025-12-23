# ✅ MongoDB Connection String Configured!

## Your MongoDB Atlas Connection

I've received your MongoDB connection string and configured everything for you.

---

## 📝 What You Need to Do

### 1. Create `.env` File in `backend` Folder

Create a file named `.env` in the `backend` directory with this content:

```env
MONGODB_URI=mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority

JWT_SECRET=generate-this-with-the-command-below

FRONTEND_URL=http://localhost:5173

PORT=5000

NODE_ENV=development
```

### 2. Generate JWT Secret

Open terminal in the `backend` folder and run:

**Windows PowerShell:**
```powershell
cd backend
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**Or Command Prompt:**
```cmd
cd backend
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the output (a long random string) and paste it as `JWT_SECRET` in your `.env` file.

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Start the Server

```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected: mzansiprolife-shard-00-00.ktpi4oa.mongodb.net
📊 Database: mzansi-prolife
🚀 Server running on port 5000
```

---

## 🔒 Security Checklist

- ✅ `.env` file is in `.gitignore` - won't be committed to Git
- ⚠️ **Never commit** your `.env` file
- ⚠️ **Never share** your MongoDB connection string publicly
- ⚠️ For production, use environment variables in your hosting platform

---

## 🌐 MongoDB Atlas Network Access

Before the connection works, you need to allow network access:

1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com)
2. Click **"Network Access"** in the left menu
3. Click **"Add IP Address"**
4. For development/testing: Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
5. For production: Add specific IPs of your hosting platform (Vercel, Railway, etc.)

---

## 🚀 For Production Deployment

When deploying to Vercel/Railway/Render, add these environment variables:

### Backend Environment Variables:

1. **MONGODB_URI**
   ```
   mongodb+srv://ashleymashigo013_db_user:PvOvKqThqoFFd9sV@mzansiprolife.ktpi4oa.mongodb.net/mzansi-prolife?retryWrites=true&w=majority
   ```

2. **JWT_SECRET**
   ```
   (your generated secret from step 2)
   ```

3. **FRONTEND_URL**
   ```
   https://your-frontend-url.vercel.app
   ```

4. **NODE_ENV**
   ```
   production
   ```

---

## ✅ What Happens Automatically

Once connected, MongoDB will automatically:
- ✅ Create the `mzansi-prolife` database
- ✅ Create all collections (users, submissions, chatconversations, etc.)
- ✅ Set up indexes for optimal performance
- ✅ Handle connections and reconnections

---

## 🎯 Connection String Format

Your connection string format:
```
mongodb+srv://username:password@cluster.mongodb.net/database?options
```

The app will automatically:
- Use database name: `mzansi-prolife`
- Add retry logic
- Handle connection errors gracefully

---

## 📋 Quick Start Checklist

- [ ] Create `backend/.env` file
- [ ] Add MongoDB connection string
- [ ] Generate JWT secret
- [ ] Add JWT secret to `.env`
- [ ] Install dependencies (`npm install`)
- [ ] Configure MongoDB Atlas network access
- [ ] Start server (`npm run dev`)
- [ ] Verify connection success

---

## 🎉 You're All Set!

Once you complete these steps, your backend will be connected to MongoDB Atlas and ready to use!

See `backend/SETUP_INSTRUCTIONS.md` for more details.

