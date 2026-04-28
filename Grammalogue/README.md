# VocaLyze — AI-Powered Language Assessment Platform

**VocaLyze** is a full-stack web application designed to assess language proficiency using AI-driven analysis. It provides real-time feedback on **grammar, vocabulary, and pronunciation** by analyzing users’ spoken responses.

The platform combines:

* **React frontend** for interactive UI
* **Node.js / Express backend** for authentication & data storage
* **FastAPI backend** for audio processing & AI feedback generation
* **MongoDB** for persistence
* **AWS S3** for video storage

---

# 🚀 Features

* 🎤 **AI Interview Modules** — Record video responses to dynamic questions
* ⚡ **Real-time Feedback** — Analysis of pauses, vocabulary, and correctness
* ☁️ **Cloud Storage** — Automatic video uploads to AWS S3
* 📊 **Progress Tracking** — View past reports and performance trends
* 🔐 **User Management** — Authentication and session handling
* 🧠 **AI Evaluation** — Grammar, pronunciation, and fluency scoring

---

# 🏗 Architecture

Frontend → React (Vite)
Backend 1 → Node.js + Express (User & DB)
Backend 2 → FastAPI (AI + Audio Processing)
Database → MongoDB
Storage → AWS S3

---

# 🛠 Prerequisites

Make sure the following are installed:

* Node.js (v16 or higher)
* Python (3.9 or higher)
* MongoDB (Local or Atlas)
* FFmpeg (Required for audio processing)
* npm or yarn

---

# ⚙️ Environment Setup

You must configure **three `.env` files**:

* `backend/.env`
* `fastapi/.env`
* `frontend/.env`

⚠️ Ensure **MongoDB database name is same** across services.

Get the `.env` files before running the project.

---

# ▶️ Running the Project

## 1. Start Node.js Backend

```bash
cd backend
npm install
npm start
```

Server runs on:

```
http://localhost:5001
```

---

## 2. Start FastAPI Server

```bash
cd fastapi
python -m venv venv
```

Activate virtual environment:

### Mac/Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start server:

```bash
uvicorn main:app --reload
```

Server runs on:

```
http://localhost:8000
```

---

## 3. Start React Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

# 📂 Project Structure

```
VocaLyze/
│
├── frontend/        # React UI
├── backend/         # Node.js API
├── fastapi/         # AI + audio processing
│
├── README.md
└── .env files
```

---

# 🔄 Data Flow

1. User records video response
2. Video uploaded to AWS S3
3. Audio sent to FastAPI
4. AI analyzes speech
5. Feedback returned
6. Node backend stores results
7. Frontend displays report

---

# 🧠 AI Analysis Includes

* Grammar Score
* Vocabulary Strength
* Pronunciation Quality
* Pause Detection
* Fluency Score
* Overall Rating

---

# ☁️ AWS S3 Integration

Videos are:

* Automatically uploaded
* Stored securely
* Linked to user history
* Used for progress tracking

---

# 📈 Future Enhancements

* Live speaking tests
* Multi-language support
* Interview simulation mode
* Resume-based question generation
* Leaderboard & analytics

---

# 👨‍💻 Authors

VocaLyze Team
AI Language Assessment Platform

---

# 📄 License

This project is for educational and research purposes.
