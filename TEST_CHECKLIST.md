# Local Testing Checklist

## ✅ Servers Running

Both servers should be running:
- Backend: http://localhost:8080
- Frontend: http://localhost:3000

## 🧪 Tests to Perform

### 1. Basic Functionality
- [ ] Open http://localhost:3000 in your browser
- [ ] Click "Create New Session" button
- [ ] Verify you're redirected to a URL like `http://localhost:3000/abc-123-def`
- [ ] Editor loads without errors

### 2. Real-time Collaboration
- [ ] Copy the session URL
- [ ] Open it in a new browser tab or incognito window
- [ ] Type in one window
- [ ] Verify text appears in real-time in the other window
- [ ] Check cursor positions are visible

### 3. Code Execution
- [ ] Write a simple program (e.g., C++):
```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Hello World!";
    return 0;
}
```
- [ ] Click "Run Code" button
- [ ] Verify output appears in the output panel

### 4. Input/Output
- [ ] Write a program that takes input:
```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}
```
- [ ] Add input in the input panel: `5 10`
- [ ] Click "Run Code"
- [ ] Verify output shows: `15`

### 5. Language Support
- [ ] Test C++ code execution
- [ ] Test Python code execution
- [ ] Test Java code execution

### 6. Video Chat (Optional)
- [ ] Click video chat icon
- [ ] Allow camera/microphone permissions
- [ ] Open same session in another tab
- [ ] Click "Call" button
- [ ] Verify video connection establishes

## 🐛 Common Issues

**Editor not loading?**
- Check browser console for errors (F12)
- Verify both servers are running
- Check WebSocket connection in Network tab

**Code not executing?**
- Verify you have compilers installed (g++, python, java)
- Check backend logs for errors
- Verify the code has no syntax errors

**Real-time sync not working?**
- Check WebSocket connection in browser DevTools
- Verify backend is running on port 8080
- Check for CORS errors in console

**Video chat not working?**
- Allow camera/microphone permissions
- Check WebSocket connection to `/foo` endpoint
- Verify both users are in the same session

## 📊 Expected Results

✅ All features should work locally
✅ No console errors
✅ Real-time sync is instant
✅ Code execution works for all languages
✅ Video chat connects successfully

## 🚀 Ready for Deployment?

If all tests pass, you're ready to deploy to Railway!
See [RAILWAY_DEPLOY.md](RAILWAY_DEPLOY.md) for deployment instructions.
