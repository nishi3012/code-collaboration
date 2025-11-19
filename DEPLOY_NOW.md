# 🚀 Deploy Your App NOW - Step by Step

## ✅ Step 1: Deploy Backend to Railway (5 minutes)

### Option A: Using Railway Dashboard (Easiest)

1. **Go to Railway**
   - Open: https://railway.app
   - Click "Login" (use GitHub to sign in)

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository: `nishi3012/code-collaboration`
   - Click "Deploy Now"

3. **Wait for Deployment**
   - Railway will automatically:
     - Detect Node.js
     - Install dependencies
     - Start the server
   - Takes about 2-3 minutes

4. **Get Your URL**
   - Click on your deployment
   - Go to "Settings" tab
   - Click "Generate Domain"
   - Copy the URL (e.g., `https://code-collaboration-production.up.railway.app`)

### Option B: Using Railway CLI (Faster)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to project
railway init

# Deploy
railway up
```

## ✅ Step 2: Update Frontend Environment Variables

1. **Edit the production environment file**
   - Open: `editor/.env.production`
   - Replace with your Railway URL:

```env
REACT_APP_API_URL=https://your-app-name.up.railway.app
REACT_APP_WS_URL=wss://your-app-name.up.railway.app
```

2. **Commit and push**
```bash
git add editor/.env.production
git commit -m "Update production URLs"
git push origin main
```

## ✅ Step 3: Deploy Frontend to Vercel (3 minutes)

### Option A: Using Vercel Dashboard

1. **Go to Vercel**
   - Open: https://vercel.com
   - Click "Login" (use GitHub)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your repository: `nishi3012/code-collaboration`
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: `Create React App`
   - Root Directory: `editor`
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add:
     - `REACT_APP_API_URL` = `https://your-railway-url.up.railway.app`
     - `REACT_APP_WS_URL` = `wss://your-railway-url.up.railway.app`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your Vercel URL!

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd editor
vercel --prod
```

## ✅ Step 4: Test Your Deployed App

1. **Open your Vercel URL**
   - Example: `https://code-collaboration.vercel.app`

2. **Create a session**
   - Click "Create New Session"

3. **Test collaboration**
   - Open the same URL in another tab
   - Type in one tab
   - See it appear in the other!

4. **Test video chat**
   - Click video icon in both tabs
   - Click "Start" in one tab
   - See each other!

## 🎉 You're Live!

Your app is now deployed and accessible worldwide!

**Share your app:**
- Frontend URL: `https://your-app.vercel.app`
- Backend URL: `https://your-app.up.railway.app`

## 🔧 Troubleshooting

**Backend not starting on Railway?**
- Check Railway logs in dashboard
- Verify `package.json` has correct start script
- Check if port 8080 is configured

**Frontend can't connect to backend?**
- Verify environment variables in Vercel
- Make sure URLs use `https://` and `wss://`
- Redeploy frontend after updating env vars

**WebSocket not connecting?**
- Check Railway logs for WebSocket errors
- Verify Railway domain is correct
- Make sure using `wss://` not `ws://`

**CORS errors?**
- Backend already has CORS enabled for all origins
- If issues persist, check Railway logs

## 📊 Free Tier Limits

**Railway:**
- $5 free credit per month
- ~500 hours of runtime
- Enough for development and testing

**Vercel:**
- 100 GB bandwidth per month
- Unlimited deployments
- Perfect for frontend hosting

## 🔄 Updating Your App

**To update backend:**
```bash
git add .
git commit -m "Update backend"
git push origin main
# Railway auto-deploys!
```

**To update frontend:**
```bash
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys!
```

## 📝 Next Steps

- [ ] Test all features on production
- [ ] Share the URL with friends
- [ ] Monitor Railway logs for errors
- [ ] Set up custom domain (optional)
- [ ] Add analytics (optional)

---

**Need help?** Check the logs:
- Railway: Dashboard → Deployments → Logs
- Vercel: Dashboard → Deployments → Function Logs
