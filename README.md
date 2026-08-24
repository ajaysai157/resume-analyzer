# 🚀 AI Resume Analyzer

An AI-powered Resume Analyzer built using the **MERN Stack** and **Google Gemini AI** that analyzes resumes against job descriptions, calculates an ATS score, identifies missing keywords, and provides actionable feedback to improve hiring chances.

---

## 📌 Features

- 🔐 JWT Authentication (Register/Login)
- 📄 Upload Resume (PDF)
- 🤖 AI Resume Analysis using Google Gemini
- 📊 ATS Score Calculation
- ✅ Matched Keywords Detection
- ❌ Missing Keywords Detection
- 💡 AI Suggestions & Improvements
- 📈 User Dashboard
- 🕒 Resume Analysis History
- 🗑 Delete Previous Analyses
- 🔒 Protected Routes
- 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- Tailwind CSS
- React Dropzone
- React Hot Toast
- React Icons
- React Circular Progressbar
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF Parse
- Google Gemini API

---

## 📂 Project Structure

```
AI_RESUME_ANALYZER
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── app.js
│   └── server.js
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/ajaysai157/resume-analyzer.git

cd ai_resume_analyzer
```

---

## 2. Install Dependencies

### Root

```bash
npm install
```

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Create a `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# ▶️ Running the Project

## Backend

```bash
cd server

npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd client

npm run dev
```

Runs on:

```
http://localhost:5173
```

---



# 🧠 AI Analysis Output

The AI analyzes resumes and provides:

- ATS Score
- Matched Skills
- Missing Keywords
- Resume Strengths
- Improvement Suggestions
- Overall Feedback

---

# 🔒 Authentication

The project uses:

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Authorization Middleware

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | User Profile |

---

## Resume Analysis

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/analyze | Analyze Resume |

---

## History

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/history | Get All Analyses |
| GET | /api/history/:id | Get Single Analysis |
| DELETE | /api/history/:id | Delete Analysis |

---

# 🚀 Deployment

## Frontend

- Vercel

## Backend

- Render

## Database

- MongoDB Atlas

---

# 📈 Future Improvements

- Resume PDF Preview
- Download Analysis Report
- Dark Mode
- Multiple Resume Comparison
- AI Resume Builder
- Interview Question Generator
- Cover Letter Generator
- Email Resume Sharing

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push the branch

```
git push origin feature-name
```

5. Create a Pull Request

---

# 👨‍💻 Author

**Bhargav Ajay Sai Chonga**

- GitHub: https://github.com/ajaysai157/resume-analyzer
- LinkedIn: https://www.linkedin.com/in/bhargav-ajay-sai-chonga-0551a0334/

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects!

---
