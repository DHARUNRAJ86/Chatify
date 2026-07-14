# 💬 Chatify – Real-Time Chat Application

<p align="center">
  🚀 A full-stack real-time chat application built with the MERN stack  
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js">
  <img src="https://img.shields.io/badge/Database-MongoDB-darkgreen?style=for-the-badge&logo=mongodb">
  <img src="https://img.shields.io/badge/RealTime-Socket.IO-black?style=for-the-badge&logo=socket.io">
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge&logo=jsonwebtokens">
</p>

---

## 🌟 Project Overview

**Chatify** is a modern, scalable chat application that enables users to communicate in real-time with a seamless and secure experience.

This project demonstrates strong knowledge of:
✔ Full Stack Development (MERN)
✔ Real-time systems using WebSockets
✔ Authentication & Security
✔ REST API Design
✔ State Management with Redux

---

## ✨ Key Highlights

🔥 Clean and modular architecture
⚡ Real-time communication using Socket.IO
🔐 Secure login & authentication system
📸 Profile image upload with Cloudinary
🟢 Live user status (online/offline)
📦 Scalable backend structure
🎯 Production-ready coding practices

---

## 🛠️ Tech Stack

### 🎨 Frontend

* React.js
* Tailwind CSS
* Redux Toolkit
* Axios

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (Mongoose)

### 🔌 Other Integrations

* Socket.IO (Real-time messaging)
* Cloudinary (Image uploads)
* JWT + bcrypt (Authentication & security)

---

## 🧠 System Architecture

```id="arch123"
Client (React + Redux)
        │
        ▼
 REST API (Express.js)
        │
        ▼
 MongoDB Database
        │
        ▼
 Socket.IO Server (Real-time events)
```

---

## 📂 Folder Structure

```id="struct456"
Chatify/
│── frontend/          # React Application
│── backend/           # Express Server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder:

```id="env789"
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```bash id="clone123"
git clone https://github.com/DHARUNRAJ86/Chatify.git
cd Chatify
```

---

### 2️⃣ Backend Setup

```bash id="backend123"
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash id="frontend123"
cd frontend
npm install
npm run dev
```

---

## 🚀 Core Functionalities

✔ User Registration & Login
✔ JWT-based Authentication
✔ Real-time Messaging
✔ Online/Offline Status Tracking
✔ Profile Update & Avatar Upload
✔ Protected Routes

---

## 📡 API Endpoints (Sample)

| Method | Endpoint                    | Description       |
| ------ | --------------------------- | ----------------- |
| POST   | /api/v1/auth/register       | Register new user |
| POST   | /api/v1/auth/login          | User login        |
| GET    | /api/v1/messages/:id        | Get messages      |
| POST   | /api/v1/messages/send       | Send message      |
| PUT    | /api/v1/user/update-profile | Update profile    |

---

---

## 🎯 Challenges Faced

* Managing real-time synchronization using Socket.IO
* Handling secure authentication flow (JWT + cookies)
* Optimizing frontend state management
* Fixing backend deployment issues (MongoDB Atlas, CORS)

---

## 🔮 Future Improvements

🚀 Group Chat Feature
📞 Voice & Video Calling (WebRTC)
🌐 Deployment (Render / Vercel)
📱 Fully Responsive Mobile UI
🤖 AI Chatbot Integration

---

## 🤝 Contributing

Contributions are welcome!

```id="contri123"
1. Fork the repo  
2. Create your feature branch  
3. Commit changes  
4. Push and open a Pull Request  
```

---

## 📄 License

This project is licensed under the **MIT License**

---

## 👨‍💻 Author

**Dharun Raj P**
💼 Full Stack Developer (MERN)
📍 Passionate about building scalable web applications

---

## 🌟 Show Your Support

If you like this project:
⭐ Star this repository
🍴 Fork it
📢 Share it

---

<p align="center">
  Made with ❤️ by Dharun Raj
</p>
