
# 🏢 Company Announcement System – SincXLearn Project

This is a full-stack web application that enables company administrators to manage announcements like policy updates, event notifications, compliance alerts, IT notices, etc.

---

## 📁 Folder Structure

```
SincXLearn-Project-Company-Announcement/
│
├── backend/                    # Backend - Node.js, Express, MySQL
│   ├── config/                 # DB connection config
│   ├── controllers/           # Route controllers
│   ├── routes/                # API route handlers
│   ├── utils/                 # Utility files
│   ├── .env                   # Environment variables
│   ├── initDB.js              # DB + Table setup script
│   ├── server.js              # Entry point of Express server
│   ├── package.json           # Backend dependencies
│
├── frontend/                  # Frontend - React, Vite, ShadCN, Tailwind
│   ├── public/                # Static files
│   ├── src/                   # React source files
│   ├── .gitignore             # Ignore frontend build + dependencies
│   ├── vite.config.js         # Vite config
│   ├── index.html             # HTML template
│   ├── package.json           # Frontend dependencies
│
├── .gitignore                 # Root-level ignore rules
└── README.md                  # You're here!
```

---


## ScreenShots
![UI Screenshot](https://github.com/user-attachments/assets/8f2b3ab4-42fc-48f3-8f40-6be957e840f0)
![UI Screenshot](https://github.com/user-attachments/assets/838d7bed-4d5f-4f1e-885b-40fbc74e0696)
![UI Screenshot](https://github.com/user-attachments/assets/5f9d8e53-4d9d-4681-99fe-a0ab21745127)
![UI Screenshot](https://github.com/user-attachments/assets/6ae332d8-dee9-4cef-be0c-5dcee4de6ee0)


## 🚀 Features

- Post and manage announcements (means CRUD of Announcements)
- RESTful API using Express
- MySQL for persistent storage
- Tailwind CSS + ShadCN UI for beautiful frontend
- Fully commented source code using AI assistance

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Vite)
- Tailwind CSS
- ShadCN UI

**Backend:**
- Node.js
- Express.js
- MySQL

---

## 🔧 Installation & Setup Guide

### Prerequisites

- Node.js & npm
- MySQL server running
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/AryanKumar231/SincXLearn-Project-Company-Announcement.git
cd SincXLearn-Project-Company-Announcement
```

---

### 2. Backend Setup

```bash
cd backend
npm install          # Install backend dependencies
cp .env.example .env # Create .env file (if not exists)
```

#### 👉 Setup your `.env` like:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=company_announcements
PORT=5000
```

#### Initialize DB and Tables

```bash
node initDB.js       # Creates DB and tables
```

#### Start Backend Server

```bash
npm start            # Starts Express server at http://localhost:5000
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install          # Install frontend dependencies
```

#### Start React App

```bash
npm run dev          # Runs on http://localhost:5173
```

---

## 🧪 API Endpoints (Backend)

| Method | Endpoint                        | Description                         |
|--------|---------------------------------|-------------------------------------|
| GET    | `/api/get-all-announcements`    | Fetch all announcements             |
| DELETE | `/api/get-announcement/:id`     | Fetch single announcement by ID     |
| POST   | `/api/create-announcement`      | Create a new announcement           |
| PUT    | `/api/update-announcement/:id`  | Update announcement by ID           |
| DELETE | `/api/delete-announcements/:id` | Delete announcement by ID           |

> All endpoints are in `backend/routes/company_announcements_route.js`  
> Logic is handled in `controllers/company_announcement.js`

---

## 🤖 AI-Powered Commenting

Each file (backend & frontend) is thoroughly **AI-commented** to enhance readability and learning experience.

---

## 🧾 Sample `.gitignore`

```gitignore
# Node
node_modules/
.env
*.log

# Build
dist/
build/

# Editor
.vscode/
.DS_Store
```

---

## 📸 UI Libraries Used

- [ShadCN UI](https://ui.shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---


## 🧠 Author

👤 **Aryan Kumar**  
📍 MCA Student @ Quantum University  
📬 [LinkedIn](https://www.linkedin.com/in/aryan-kumar-768353323)

---

> 💡 Tip: Always run `node initDB.js` before first-time backend launch to avoid DB errors.
