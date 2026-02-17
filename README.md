
# PrimeTrade Assignment - Full Stack Task Manager

This is a modern, full-stack web application built as an internship assignment. It features a secure login system, a protected dashboard, and a fully functional Task Management system with CRUD operations.

## 🚀 Features

### **Frontend**

* **Modern UI**: Built with React.js and styled with **Tailwind CSS**.
* **Authentication**: Secure login page with JWT token storage in `localStorage`.
* **Protected Routes**: Dashboard is inaccessible without a valid login session.
* **Task Management**:
  * Add new tasks.
  * View your personal task list.
  * Delete tasks.
* **Responsive Design**: Professional dashboard layout that works on mobile and desktop.
* **Loading States**: Smooth loading indicators for better UX.

### **Backend**

* **Node.js & Express**: Fast and lightweight server.
* **JWT Authentication**: Secure API endpoints using JSON Web Tokens.
* **In-Memory Database**: Tasks are stored temporarily in memory (reset on server restart).
* **API Routes**:
  * `POST /api/login` (Auth)
  * `GET /api/profile` (Protected User Data)
  * `GET /api/tasks` (Fetch Tasks)
  * `POST /api/tasks` (Add Task)
  * `DELETE /api/tasks/:id` (Delete Task)

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), Tailwind CSS, Axios, React Router DOM
* **Backend**: Node.js, Express.js, JSON Web Token (JWT), CORS

---

## 📦 Installation & Setup

Follow these steps to run the project locally.

### **1. Prerequisites**

* Node.js installed (v16 or higher).

### **2. Setup Backend**

1. Open a terminal and navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm run dev
    ```

    *The server will run on `http://localhost:5000`*

### **3. Setup Frontend**

1. Open a **new** terminal and navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React app:

    ```bash
    npm run dev
    ```

    *The app will run on `http://localhost:5173`*

---

## 🔑 Test Credentials

Use the following credentials to log in:

* **Email**: `user@example.com`
* **Password**: `password123`

---

## 📂 Project Structure

primetrade-assignment/
│
├── backend/                 # Node.js Express Server
│   ├── middleware/          # Auth middleware
│   ├── routes/              # API routes (auth.js, tasks.js)
│   ├── server.js            # Entry point
│   └── package.json
│
├── frontend/                # React Vite App
│   ├── src/
│   │   ├── components/      # Reusable components (AddTask, TaskList, ProtectedRoute)
│   │   ├── pages/           # Pages (Login, Dashboard)
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── tailwind.config.js   # Tailwind configuration
│   └── package.json
│
└── README.md                # Project Documentation

## 📝 API Endpoints

| Method | Endpoint | Description | Protected |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/login` | Authenticate user & get JWT | No |
| `GET` | `/api/profile` | Get logged-in user details | **Yes** |
| `GET` | `/api/tasks` | Get all tasks for user | **Yes** |
| `POST` | `/api/tasks` | Create a new task | **Yes** |
| `DELETE` | `/api/tasks/:id` | Delete a task by ID | **Yes** |

---

## 👨‍💻 Developer Notes

* This project uses an **in-memory** array to store tasks. If you restart the backend server, the tasks will reset to the default list.
* The frontend uses `Promise.all` to fetch user profile and tasks simultaneously for better performance.
