
Notes App A fullstack notes application built with Express, MongoDB, and React (Vite). Easily add, edit, and delete your notes from anywhere—perfect for learning or quick productivity.

Features Create, read, update, and delete notes

Fast React frontend (Vite)

Express.js REST API for backend

MongoDB Atlas for cloud database

CORS-configured for cloud deployment

Tech Stack Layer Technology Frontend React (Vite) Backend Express.js (Node.js) Database MongoDB Atlas Hosting Vercel (Frontend), Render (Backend) Getting Started Prerequisites Node.js and npm

MongoDB Atlas account

Git

Install dependencies bash cd backend npm install cd ../frontend npm install Environment Variables Backend (backend/.env) text MONGODB_URI=your-atlas-uri PORT=3000 Frontend (frontend/.env) text VITE_API_URL=https://your-backend.onrender.com/api Running Locally Backend:

bash cd backend npm start Frontend:

bash cd frontend npm run dev The Vite proxy in vite.config.js lets you use /api endpoints.

Deployment Frontend: Push to GitHub, deploy on Vercel.

Backend: Push to GitHub, deploy on Render.

Set environment variables for backend (Atlas URI) and frontend (VITE_API_URL).

License MIT

Credits Express.js

Vite

MongoDB Atlas

Vercel

Render
