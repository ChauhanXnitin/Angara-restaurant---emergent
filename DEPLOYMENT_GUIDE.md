# 🚀 Deployment Guide - Angara Restaurant Website

## Overview
Your website has two parts:
1. **Frontend** (React) → Deploy to **Vercel**
2. **Backend** (FastAPI) → Deploy to **Railway**

---

## 📦 Part 1: Deploy Frontend to Vercel

### Folder to Deploy
```
/app/frontend
```

### Step-by-Step Instructions

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Frontend**
   ```bash
   cd /app/frontend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name: `angara-restaurant` (or your choice)
   - Directory: `.` (current directory)
   - Override settings? **Yes**
   - Build command: `yarn build`
   - Output directory: `build`
   - Development command: `yarn start`

5. **Set Environment Variable in Vercel Dashboard**
   - Go to your project in Vercel Dashboard
   - Settings → Environment Variables
   - Add: `REACT_APP_BACKEND_URL` = `https://your-railway-backend-url.railway.app`
   - **Important**: You'll get this URL after deploying backend to Railway (Step 2)

6. **Redeploy** (after adding backend URL)
   ```bash
   vercel --prod
   ```

### Alternative: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import Git Repository (if you have pushed to GitHub)
3. Select `/app/frontend` as root directory
4. Framework Preset: Create React App
5. Build Command: `yarn build`
6. Output Directory: `build`
7. Add environment variable: `REACT_APP_BACKEND_URL`
8. Deploy!

---

## 🚂 Part 2: Deploy Backend to Railway

### Folder to Deploy
```
/app/backend
```

### Step-by-Step Instructions

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

3. **Login to Railway**
   ```bash
   railway login
   ```

4. **Deploy Backend**
   ```bash
   cd /app/backend
   railway init
   ```
   - Select "Create new project"
   - Project name: `angara-backend` (or your choice)

5. **Link and Deploy**
   ```bash
   railway up
   ```

6. **Set Environment Variables in Railway Dashboard**
   - Go to your project: https://railway.app/project/your-project
   - Click on your service
   - Go to **Variables** tab
   - Add these variables:
   
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbyNxYGF3eN0P5U9zv6XMElupZMNL9QQjKk0CRm0zs2bP8yEsJephEpGyf8IUJfiU_Cx6w/exec
   CORS_ORIGINS=https://your-vercel-frontend-url.vercel.app
   ```
   
   **Note**: MongoDB is NOT needed! Reservations are saved directly to Google Sheets.

7. **Generate Domain**
   - In Railway dashboard, go to **Settings** tab
   - Under **Networking**, click **Generate Domain**
   - Copy the domain (e.g., `your-app.railway.app`)
   - Use this as `REACT_APP_BACKEND_URL` in Vercel

8. **Update Frontend with Backend URL**
   - Go back to Vercel
   - Update `REACT_APP_BACKEND_URL` with Railway domain
   - Redeploy frontend

### Alternative: Deploy via Railway Dashboard

1. Go to https://railway.app/new
2. Select "Deploy from GitHub repo" (if you have pushed to GitHub)
3. Select your repository
4. Railway will auto-detect Python/FastAPI
5. Add environment variables (same as above)
6. Deploy!

---

## 📝 Files to Deploy

### Frontend Files (already in /app/frontend):
```
frontend/
├── package.json
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── App.js
│   └── index.js
├── .env (created automatically by Vercel)
└── README.md
```

### Backend Files (already in /app/backend):
```
backend/
├── server.py
├── requirements.txt
├── .env (set in Railway dashboard)
└── Procfile (create this - see below)
```

---

## 🔧 Additional Railway Setup

### Create Procfile in /app/backend
Create a file named `Procfile` (no extension) with:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

### Create railway.json (Optional)
Create `railway.json` in /app/backend:
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn server:app --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

---

## ✅ Deployment Checklist

### Before Deploying:
- [ ] Google Sheets webhook URL is working (test with curl)
- [ ] Frontend builds locally without errors (`yarn build`)
- [ ] Backend runs locally without errors
- [ ] All required files are present

### After Deploying Backend:
- [ ] Copy Railway backend URL
- [ ] Update Vercel environment variable `REACT_APP_BACKEND_URL`
- [ ] Redeploy frontend

### After Deploying Frontend:
- [ ] Copy Vercel frontend URL
- [ ] Update Railway `CORS_ORIGINS` with frontend URL
- [ ] Redeploy backend if needed

### Final Testing:
- [ ] Visit your Vercel frontend URL
- [ ] Submit a test reservation
- [ ] Check Google Sheet for new entry
- [ ] Test WhatsApp widget
- [ ] Test all navigation links
- [ ] Test on mobile devices

---

## 🎯 Quick Deploy Summary

**FRONTEND (Vercel):**
```bash
cd /app/frontend
vercel
# Set REACT_APP_BACKEND_URL in Vercel dashboard
vercel --prod
```

**BACKEND (Railway):**
```bash
cd /app/backend
railway init
railway up
# Set environment variables in Railway dashboard
# Copy domain and update Vercel
```

---

## 🔗 Important URLs After Deployment

1. **Frontend**: `https://your-app.vercel.app`
2. **Backend**: `https://your-app.railway.app`
3. **Google Sheets**: Your Google Sheet with reservations
4. **Instagram**: https://www.instagram.com/angaraofficials/

---

## 🆘 Troubleshooting

### Frontend Issues:
- **Error: REACT_APP_BACKEND_URL not defined**
  - Add it in Vercel dashboard environment variables
  - Redeploy

- **CORS Error**
  - Update `CORS_ORIGINS` in Railway to include Vercel URL

### Backend Issues:
- **502 Bad Gateway**
  - Check Railway logs
  - Ensure `PORT` environment variable is used
  - Check Procfile/railway.json

- **Reservation not saving**
  - Verify Google Sheets webhook URL in Railway variables
  - Test webhook URL directly with curl

### General:
- Check deployment logs in Vercel/Railway dashboards
- Verify all environment variables are set correctly
- Ensure frontend and backend URLs are updated in both services

---

## 💰 Cost Estimate

- **Vercel**: Free tier (sufficient for restaurant website)
- **Railway**: $5/month (free $5 credit initially)
- **Google Sheets**: Free
- **Total**: ~$0-5/month

---

## 🔒 Security Checklist

- [ ] Never commit `.env` files to Git
- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS (automatic on Vercel/Railway)
- [ ] Keep Google Sheets webhook URL private
- [ ] Set proper CORS origins

---

## 📱 Post-Deployment

1. **Test thoroughly** - Submit real reservations
2. **Monitor Google Sheet** - Check entries are being saved
3. **Share website URL** - with customers and on social media
4. **Set up monitoring** - Use Railway/Vercel analytics
5. **Regular backups** - Download Google Sheet periodically

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Check logs**: Both platforms have excellent log viewers

Good luck with your deployment! 🚀
