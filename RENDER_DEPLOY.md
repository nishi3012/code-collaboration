# 🚀 Deploy to Render - Step by Step

## Why Render?
- ✅ Free tier with 750 hours/month
- ✅ Supports WebSockets (real-time features work!)
- ✅ Auto-deploys from GitHub
- ✅ Easy setup
- ✅ More reliable than Railway

## 📋 Deployment Steps

### Step 1: Sign Up for Render

1. Go to **https://render.com**
2. Click **"Get Started"**
3. Sign up with **GitHub** (easiest option)
4. Authorize Render to access your GitHub

### Step 2: Create New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Connect your repository:
   - Click **"Connect account"** if needed
   - Find and select: **`nishi3012/code-collaboration`**
   - Click **"Connect"**

### Step 3: Configure the Service

Fill in these settings:

**Basic Settings:**
- **Name:** `code-collaboration-backend` (or any name you like)
- **Region:** Choose closest to you (e.g., Singapore, Oregon)
- **Branch:** `main`
- **Root Directory:** Leave empty (or put `api` if it asks)

**Build & Deploy:**
- **Runtime:** `Node`
- **Build Command:** `cd api && npm install`
- **Start Command:** `cd api && node index.js`

**Instance Type:**
- Select **"Free"** plan

### Step 4: Add Environment Variables (Optional)

Click **"Advanced"** and add:
- `NODE_ENV` = `production`
- `PORT` = `8080` (Render sets this automatically, but you can add it)

### Step 5: Deploy!

1. Click **"Create Web Service"**
2. Render will start building and deploying
3. Watch the logs - takes 2-3 minutes
4. Look for: **"Server started on port 8080"** ✅

### Step 6: Get Your URL

Once deployed:
- Render gives you a URL like: `https://code-collaboration-backend.onrender.com`
- Copy this URL - you'll need it for the frontend!

## ✅ Testing Your Backend

Once deployed, test your backend:

1. Open: `https://your-app-name.onrender.com`
2. You should see a response (might be empty, that's ok)
3. The important thing is it loads without errors

## 🎯 Next Steps

Once your backend is deployed:

1. **Copy your Render URL**
2. **Update frontend environment variables:**
   - Edit `editor/.env.production`
   - Set `REACT_APP_API_URL` to your Render URL
   - Set `REACT_APP_WS_URL` to your Render URL (with `wss://`)
3. **Deploy frontend to Vercel**

## 🐛 Troubleshooting

**Build fails?**
- Check the build logs in Render dashboard
- Make sure build command is: `cd api && npm install`
- Make sure start command is: `cd api && node index.js`

**App not starting?**
- Check the logs for errors
- Look for "Server started on port 8080"
- Make sure PORT environment variable is set

**Can't access the URL?**
- Wait 1-2 minutes after deployment
- Make sure you're using `https://` not `http://`
- Check if the service is "Live" in Render dashboard

## 💡 Important Notes

**Free Tier Limitations:**
- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds (cold start)
- 750 hours/month free (enough for development)

**To keep it always on:**
- Upgrade to paid plan ($7/month)
- Or use a service like UptimeRobot to ping it every 10 minutes

## 📊 Monitoring

In Render dashboard you can:
- View logs in real-time
- See deployment history
- Monitor resource usage
- Set up custom domains

---

**Ready?** Go to https://render.com and let's deploy! 🚀
