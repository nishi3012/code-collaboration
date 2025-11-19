# Testing Guide - Quick Start

## 🎯 Current Status

✅ Backend running on: http://localhost:8080
✅ Frontend running on: http://localhost:3000

## 🚀 Quick Test (2 minutes)

### Step 1: Open the App
Open your browser and go to: **http://localhost:3000**

### Step 2: Create a Session
Click the button to create a new collaborative session.

### Step 3: Test Real-time Collaboration
1. Copy the URL from your browser (e.g., `http://localhost:3000/abc-123`)
2. Open the same URL in a **new tab** or **incognito window**
3. Type in one window
4. Watch it appear instantly in the other window! 🎉

### Step 4: Test Code Execution
1. Paste this code in the editor:
```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Hello from collaborative editor!";
    return 0;
}
```
2. Click **"Run Code"**
3. See the output appear below!

## 🎥 Test Video Chat (Optional)

**User 1 (First Tab):**
1. Click the video camera icon (top right)
2. Allow camera/microphone access
3. You'll see yourself in the video window
4. Click the **"Start"** button

**User 2 (Second Tab):**
1. Click the video camera icon
2. Allow camera/microphone access
3. Wait for connection...

**Result:** Both users should see each other's video! 🎉

For detailed video chat testing, see [VIDEO_CHAT_GUIDE.md](VIDEO_CHAT_GUIDE.md)

## ✅ What Should Work

- ✅ Real-time text synchronization
- ✅ Live cursor positions
- ✅ Code execution (C++, Python, Java)
- ✅ Input/Output handling
- ✅ Video chat with WebRTC
- ✅ Multiple users in same session

## 🐛 If Something Doesn't Work

**Check the browser console (F12):**
- Look for red errors
- Check the Network tab for failed requests
- Verify WebSocket connections are established

**Check the terminal:**
- Backend should show: "Server started on port 8080"
- Frontend should show: "Compiled successfully!"

**Common fixes:**
- Refresh the browser (Ctrl+R)
- Clear browser cache (Ctrl+Shift+R)
- Restart both servers
- Check if ports 3000 and 8080 are available

## 📝 Notes

- The app uses **WebSockets** for real-time features
- Code execution happens on the **backend server**
- Video chat uses **WebRTC** peer-to-peer connections
- Each session has a **unique ID** in the URL

## 🚀 Next Steps

Once everything works locally:
1. Follow [RAILWAY_DEPLOY.md](RAILWAY_DEPLOY.md) to deploy
2. Update environment variables for production
3. Test the deployed version

Happy coding! 🎉
