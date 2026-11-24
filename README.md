# InterviewIQ.AI

AI-powered mock interview platform. Practice role-based interviews with smart follow-up questions, adaptive difficulty, and real-time performance evaluation.

**Live Demo:** https://interview-iq-q33a.vercel.app/
**Repository:** https://github.com/manishkr92318-gif/interviewIQ

---

## Features

- **Google Sign-In** using Firebase Authentication
- **Role & Experience Selection**: choose your target role and experience level (HR or technical interviews)
- **Resume Upload**: upload your resume (PDF) and get questions tailored to it
- **Smart Voice Interview**: answer by voice, get AI-generated follow-up questions with adaptive difficulty
- **Performance Report**: detailed evaluation with charts and score breakdown
- **Download Report as PDF**
- **Interview History**: revisit all your past interviews and reports
- **Credits System**: pay-per-interview credits with Razorpay payments

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React 19, Vite, Tailwind CSS 4, Redux Toolkit, React Router, Recharts, Motion, jsPDF |
| Backend | Node.js, Express 5, MongoDB (Mongoose), JWT (cookie-based auth), Multer, pdfjs-dist |
| AI | OpenRouter API |
| Auth | Firebase Authentication (Google) |
| Payments | Razorpay |
| Hosting | Vercel (frontend), Render (backend) |

## Project Structure

```
interviewIQ/
├── client/          # React + Vite frontend
│   └── src/
└── server/          # Express backend
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── services/
    └── index.js
```

## Getting Started (Local Setup)

### Prerequisites

- Node.js 18+
- A MongoDB database (MongoDB Atlas or local)
- A Firebase project with Google sign-in enabled
- An OpenRouter API key
- A Razorpay account (test keys are fine)

### 1. Clone the repository

```bash
git clone https://github.com/manishkr92318-gif/interviewIQ.git
cd interviewIQ
```

### 2. Backend setup

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the app:

```bash
npm run dev
```

The app runs at `http://localhost:5173` and the API at `http://localhost:8000`.

## Environment Variables

### Server

| Variable | Description |
|----------|-------------|
| `PORT` | Port the server listens on (local only) |
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign JWT tokens |
| `OPENROUTER_API_KEY` | API key for AI question generation and evaluation |
| `RAZORPAY_KEY_ID` | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret |
| `FRONTEND_URL` | Allowed frontend origin for CORS |

### Client

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_APIKEY` | Firebase web API key |
| `VITE_RAZORPAY_KEY_ID` | Razorpay key ID (public) |

> **Never commit `.env` files.** Make sure `.env` and `node_modules` are listed in `.gitignore`.

## Deployment

- **Frontend (Vercel):** import the repo, set Root Directory to `client`, framework preset Vite, and add the client environment variables.
- **Backend (Render):** create a Web Service with Root Directory `server`, build command `npm install`, start command `node index.js`, and add the server environment variables.
- **Firebase:** add your deployed frontend domain to Authentication → Settings → Authorized domains.
- **MongoDB Atlas:** allow access from your hosting provider in Network Access.

## How It Works

1. Sign in with Google.
2. Pick a role, experience level, and (optionally) upload your resume.
3. Take the AI voice interview with adaptive follow-up questions.
4. Get a detailed performance report, download it as PDF, and track progress in your history.

## Author

**Manish Kumar**
GitHub: [@manishkr92318-gif](https://github.com/manishkr92318-gif)

## License

This project is for learning and personal use. Add a license of your choice if you plan to open-source it.
