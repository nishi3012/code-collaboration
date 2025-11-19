# Collaborative Code Editor

Real-time collaborative code editor with video chat capabilities. Multiple users can edit code simultaneously with live cursor tracking and video communication.

## Features

- 🔄 **Real-time Collaboration** - Multiple users can edit the same document simultaneously
- 👁️ **Live Cursors** - See other users' cursor positions and selections in real-time
- 💻 **Code Execution** - Run C++, Java, and Python code directly in the browser
- 🎥 **Video Chat** - Built-in WebRTC video calling for pair programming
- 🎨 **Monaco Editor** - Full-featured code editor (same as VS Code)
- 🌐 **Multi-language Support** - Syntax highlighting for multiple languages

## Tech Stack

**Backend:**
- Node.js + Express
- ShareDB (Operational Transformation)
- WebSocket (ws)
- WebRTC signaling server

**Frontend:**
- React
- Monaco Editor
- Ant Design
- ShareDB Client
- WebRTC

## Local Development

### Prerequisites
- Node.js 14+
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd final
```

2. Install dependencies
```bash
# Backend
cd api
npm install

# Frontend
cd ../editor
npm install
```

3. Start development servers
```bash
# Terminal 1 - Backend
cd api
npm start

# Terminal 2 - Frontend
cd editor
npm start
```

4. Open http://localhost:3000

## Deployment

See [RAILWAY_DEPLOY.md](RAILWAY_DEPLOY.md) for detailed deployment instructions.

**Quick Deploy:**
- Backend: Railway (supports WebSockets)
- Frontend: Vercel (static hosting)

## Usage

1. Open the app in your browser
2. Click "Create New Session" to generate a unique room ID
3. Share the URL with collaborators
4. Start coding together in real-time!

## Environment Variables

**Frontend (.env.production):**
```
REACT_APP_API_URL=https://your-backend-url.railway.app
REACT_APP_WS_URL=wss://your-backend-url.railway.app
```

**Backend:**
```
PORT=8080
NODE_ENV=production
```

## Project Structure

```
.
├── api/                    # Backend server
│   ├── index.js           # Main server file
│   ├── Routes/            # API routes
│   └── Helpers/           # Utility functions
├── editor/                # Frontend React app
│   ├── src/
│   │   ├── Components/    # React components
│   │   ├── Containers/    # Container components
│   │   └── EditorBinding/ # ShareDB bindings
│   └── public/
└── README.md
```

## License

MIT

## Contributing

Pull requests are welcome! For major changes, please open an issue first.
