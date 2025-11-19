# 🚀 Deploy Frontend to Vercel

## Step-by-Step Guide

### Step 1: Go to Vercel

Open: **https://vercel.com**

### Step 2: Sign Up/Login

- Click **"Sign Up"** or **"Login"**
- Use **GitHub** to sign in (easiest)
- Authorize Vercel to access your GitHub

### Step 3: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your repository: **`nishi3012/code-collaboration`**
3. Click **"Import"**

### Step 4: Configure Project Settings

**Framework Preset:**
- Select: **"Create React App"**

**Root Directory:**
- Click **"Edit"**
- Enter: `editor`
- Click **"Continue"**

**Build Settings:**
- Build Command: `npm run build` (should be auto-filled)
- Output Directory: `build` (should be auto-filled)
- Install Command: `npm install` (should be auto-filled)

### Step 5: Add Environment Variables

Click **"Environment Variables"** section and add:

**Variable 1:**
- Name: `REACT_APP_API_URL`
- Value: `https://code-collaboration-backend.onrender.com`

**Variable 2:**
- Name: `REACT_APP_WS_URL`
- Value: `wss://code-collaboration-backend.onrender.com`

Make sure to add them for **"Production"** environment.

### Step 6: Deploy!

1. Click **"Deploy"**
2. Vercel will start building
3. Takes 2-3 minutes
4. Watch the build logs

### Step 7: Get Your URL

Once deployed:
- Vercel gives you a URL like: `https://code-collaboration.vercel.app`
- Click on it to open your app!

## ✅ Testing Your Deployed App

1. **Open your Vercel URL**
2. **Create a new session**
3. **Open the same URL in another tab**
4. **Type in one tab** - should appear in the other!
5. **Test code execution** - write and run code
6. **Test video chat** - click video icon in both tabs

## 🐛 Troubleshooting

**Build fails?**
- Check if root directory is set to `editor`
- Verify environment variables are correct
- Check build logs for specific errors

**App loads but can't connect to backend?**
- Verify environment variables are correct
- Make sure Render backend is running
- Check browser console for errors

**WebSocket not connecting?**
- Make sure `REACT_APP_WS_URL` uses `wss://` (not `ws://`)
- Check if Render backend is awake (free tier spins down)
- Wait 30-60 seconds for Render to wake up on first request

**Code execution not working?**
- Check if backend has required compilers (g++, python, java)
- This might not work on Render free tier due to security restrictions

## 💡 Important Notes

**Render Free Tier:**
- Backend spins down after 15 minutes of inactivity
- First request takes 30-60 seconds to wake up
- This is normal for free tier

**Auto-Deploy:**
- Both Render and Vercel auto-deploy when you push to GitHub
- Any changes you push will automatically deploy

**Custom Domain:**
- You can add a custom domain in Vercel settings
- Free on Vercel!

## 🎉 You're Live!

Once deployed, share your app:
- **Frontend:** Your Vercel URL
- **Backend:** https://code-collaboration-backend.onrender.com

Congratulations! Your collaborative code editor is now live! 🚀
