# Quick Deploy to Railway

## 🚀 Fast Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

### 2. Deploy to Railway

**Option A: Using Railway CLI (Fastest)**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

**Option B: Using Railway Dashboard**
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Click "Deploy"

### 3. Railway will automatically:
- Detect Node.js project
- Install dependencies
- Start the server on port 8080
- Provide you with a public URL

### 4. Get Your URL
After deployment, copy your Railway URL (e.g., `https://your-app.up.railway.app`)

### 5. Update Frontend Environment Variables

Edit `editor/.env.production`:
```env
REACT_APP_API_URL=https://your-app.up.railway.app
REACT_APP_WS_URL=wss://your-app.up.railway.app
```

### 6. Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd editor
vercel --prod
```

Or push to GitHub and connect to Vercel dashboard.

### 7. Add Environment Variables in Vercel

In Vercel dashboard → Settings → Environment Variables:
- `REACT_APP_API_URL` = `https://your-app.up.railway.app`
- `REACT_APP_WS_URL` = `wss://your-app.up.railway.app`

Then redeploy.

## ✅ Done!

Your app is now live:
- Backend (API + WebSockets): Railway
- Frontend (React): Vercel

## 🧪 Test It

1. Open your Vercel URL
2. Create a new session
3. Open the same URL in another tab
4. Type in one tab and see it appear in the other!

## 📝 Notes

- Railway provides 500 hours/month free
- Automatic HTTPS and WSS
- Environment variables are already configured
- CORS is enabled for all origins

## 🐛 Troubleshooting

**Backend not starting?**
- Check Railway logs in dashboard
- Verify `package.json` has correct start script

**WebSocket not connecting?**
- Make sure you're using `wss://` not `ws://`
- Check CORS settings in `api/index.js`

**Frontend can't reach backend?**
- Verify environment variables in Vercel
- Check Railway URL is correct
- Redeploy frontend after updating env vars
