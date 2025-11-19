# 🚀 Deployment Checklist

## Before Deployment
- [x] Code pushed to GitHub
- [x] Environment variables configured
- [x] Tested locally
- [x] All features working

## Railway Deployment (Backend)
- [ ] Sign up at https://railway.app
- [ ] Create new project from GitHub
- [ ] Select repository: `nishi3012/code-collaboration`
- [ ] Wait for deployment to complete
- [ ] Generate domain
- [ ] Copy Railway URL: `_______________________________`

## Update Environment Variables
- [ ] Open `editor/.env.production`
- [ ] Update `REACT_APP_API_URL` with Railway URL
- [ ] Update `REACT_APP_WS_URL` with Railway URL (use `wss://`)
- [ ] Commit and push changes

## Vercel Deployment (Frontend)
- [ ] Sign up at https://vercel.com
- [ ] Import project from GitHub
- [ ] Set root directory to `editor`
- [ ] Add environment variables:
  - [ ] `REACT_APP_API_URL`
  - [ ] `REACT_APP_WS_URL`
- [ ] Deploy
- [ ] Copy Vercel URL: `_______________________________`

## Testing Production
- [ ] Open Vercel URL in browser
- [ ] Create new session
- [ ] Open same URL in another tab
- [ ] Test real-time collaboration
- [ ] Test code execution
- [ ] Test video chat
- [ ] Check for console errors

## Post-Deployment
- [ ] Monitor Railway logs
- [ ] Monitor Vercel logs
- [ ] Test from different devices
- [ ] Share with friends!

## URLs
**Production URLs:**
- Frontend: `_______________________________`
- Backend: `_______________________________`

**Repository:**
- GitHub: https://github.com/nishi3012/code-collaboration

## Notes
- Railway auto-deploys on git push
- Vercel auto-deploys on git push
- Free tier limits: Railway ($5/month), Vercel (100GB/month)
