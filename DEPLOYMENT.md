# Deployment Guide - Railway

## Prerequisites
- GitHub account
- Railway account (sign up at https://railway.app)

## Step 1: Prepare Your Repository

1. Push your code to GitHub:
```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

## Step 2: Deploy Backend to Railway

1. Go to https://railway.app
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose this repository
5. Railway will auto-detect and deploy

## Step 3: Configure Environment Variables

In Railway dashboard, add these environment variables:
- `PORT` = 8080 (Railway will override this automatically)
- `NODE_ENV` = production

## Step 4: Get Your Railway URL

After deployment, Railway will give you a URL like:
`https://your-app-name.up.railway.app`

## Step 5: Deploy Frontend to Vercel

1. Update `editor/.env.production` with your Railway URL:
```
REACT_APP_SERVER_URL=https://your-app-name.up.railway.app
REACT_APP_WEB_SOCKET_URL=wss://your-app-name.up.railway.app
```

2. Deploy to Vercel:
```bash
cd editor
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard.

## Step 6: Update Frontend Code

Make sure the frontend uses environment variables:
- API calls should use `process.env.REACT_APP_SERVER_URL`
- WebSocket connections should use `process.env.REACT_APP_WEB_SOCKET_URL`

## Testing

1. Backend health check: `https://your-app-name.up.railway.app/`
2. Frontend: Your Vercel URL
3. Test real-time collaboration by opening the same session in multiple tabs

## Important Notes

- Railway provides HTTPS automatically
- WebSocket URLs use `wss://` (secure WebSocket)
- Make sure CORS is enabled in backend for your Vercel domain
- Code execution requires compilers (g++, java, python) installed on Railway

## Troubleshooting

- Check Railway logs for backend errors
- Check browser console for frontend errors
- Verify environment variables are set correctly
- Ensure WebSocket connections are using `wss://` not `ws://`
