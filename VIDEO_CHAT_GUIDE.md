# Video Chat Testing Guide

## 🎥 How Video Chat Works

The app uses **WebRTC** for peer-to-peer video calling:
- Direct connection between browsers (no video goes through server)
- Signaling server (WebSocket) only exchanges connection info
- Supports 2 users per session

## 🧪 Testing Video Chat (2 Users)

### Setup
You need **2 browser windows** (can be same computer):
- Window 1: Normal browser
- Window 2: Incognito/Private window (or different browser)

### Step-by-Step Test

**1. User 1 - Start Session**
```
1. Open http://localhost:3000
2. Create a new session
3. Copy the URL (e.g., http://localhost:3000/abc-123)
4. Click the video camera icon (top right)
5. Allow camera/microphone access
6. You should see yourself in the video window
7. Wait for User 2...
```

**2. User 2 - Join Session**
```
1. Open the same URL in incognito window
2. Click the video camera icon
3. Allow camera/microphone access
4. You should see yourself
5. Wait a moment...
```

**3. User 1 - Initiate Call**
```
1. Click the "Start" button in the video window
2. Status changes to "Connecting..."
3. Wait for connection...
```

**4. Both Users - Connected!**
```
✅ User 1 sees User 2's video (large)
✅ User 1 sees their own video (small, bottom right)
✅ User 2 sees User 1's video (large)
✅ User 2 sees their own video (small, bottom right)
✅ Audio works both ways
```

## 🎮 Video Controls

Once connected, both users can:
- 📹 Toggle video on/off
- 🎤 Toggle microphone on/off
- 🖱️ Drag the video window around

## 🐛 Troubleshooting

**"Start" button doesn't appear?**
- Check if camera/microphone permissions were granted
- Look for browser permission prompt (usually top left)
- Try refreshing and allowing permissions again

**Stuck on "Connecting..."?**
- Check browser console for errors (F12)
- Verify WebSocket connection to `/foo` endpoint
- Make sure both users are in the same session
- Try refreshing both windows

**No video/audio?**
- Check if camera/microphone are working (test in other apps)
- Verify permissions are granted
- Check if another app is using the camera
- Try different browser

**Can't hear the other person?**
- Check volume settings
- Verify microphone is not muted
- Check browser audio permissions

## 🔧 Technical Details

**WebRTC Flow:**
1. User 1 creates offer (SDP)
2. Offer sent via WebSocket to User 2
3. User 2 creates answer (SDP)
4. Answer sent back to User 1
5. ICE candidates exchanged
6. Direct P2P connection established

**Signaling Server:**
- WebSocket endpoint: `/foo`
- Only exchanges connection info
- Video/audio streams directly between browsers

**STUN/TURN Servers:**
- STUN: `stun.l.google.com:19302` (Google's public STUN)
- TURN: `numb.viagenie.ca` (fallback for restrictive networks)

## 📝 Notes

- Video chat is **1-to-1** (two users only)
- If a 3rd user joins, they won't see the video call
- Video window is **draggable** - move it anywhere on screen
- Your own video is always **muted** (to prevent echo)
- Connection is **peer-to-peer** (low latency, high quality)

## ✅ Expected Behavior

**Before Connection:**
- Each user sees only themselves
- "Start" button visible for User 1
- User 2 waits automatically

**After Connection:**
- Both see each other's video
- Audio works both ways
- Controls appear (video/audio toggle)
- Can drag video window

**On Disconnect:**
- Video stops
- Connection closes
- Can reconnect by clicking "Start" again

## 🚀 Production Notes

When deployed:
- Use `wss://` (secure WebSocket) instead of `ws://`
- TURN server may be needed for restrictive networks
- Consider using your own TURN server for production
- Test on different networks (WiFi, mobile, corporate)

Happy video chatting! 🎉
