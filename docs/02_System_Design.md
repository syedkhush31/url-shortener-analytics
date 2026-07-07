# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** System Design  
**Last Updated:** July 2026

---

# 1. Introduction

This document describes the overall architecture and design of the URL Shortener with Analytics application.

The application follows a simple three-tier architecture consisting of a frontend, backend, and database. The frontend communicates with the backend using REST APIs, while the backend interacts with the MySQL database to store and retrieve data.

The system is designed to be simple, modular, and easy to maintain.

---

# 2. System Architecture

The application consists of three layers.

```
+----------------------+
|   React Frontend     |
+----------------------+
           |
           | HTTP Requests
           |
           ▼
+----------------------+
| Node.js + Express.js |
+----------------------+
           |
           | SQL Queries
           |
           ▼
+----------------------+
|    MySQL Database    |
+----------------------+
```

---

# 3. Architecture Overview

## Frontend

The frontend provides the user interface.

Responsibilities:

- Accept user input.
- Display shortened URLs.
- Display analytics.
- Send API requests.
- Show success and error messages.

Technology:

- React.js
- CSS
- Axios

---

## Backend

The backend handles all application logic.

Responsibilities:

- Generate short URLs.
- Validate input.
- Redirect users.
- Store analytics.
- Communicate with the database.
- Return API responses.

Technology:

- Node.js
- Express.js

---

## Database

The database stores all application data.

Responsibilities:

- Store original URLs.
- Store short codes.
- Store click analytics.

Technology:

- MySQL

---

# 4. System Components

The application consists of the following components.

## Frontend

- Home Page
- Dashboard
- Analytics Page
- Error Page

---

## Backend

- Routes
- Controllers
- Database Connection
- Middleware

---

## Database

- URLs Table
- Clicks Table

---

# 5. Request Flow

## URL Shortening

```
User

↓

Enter Long URL

↓

React Frontend

↓

POST /api/urls

↓

Express Backend

↓

Validate URL

↓

Generate Short Code

↓

Store in Database

↓

Return Short URL

↓

Display Result
```

---

## URL Redirection

```
User

↓

Open Short URL

↓

Backend

↓

Find Original URL

↓

Store Analytics

↓

Redirect User
```

---

## Analytics

```
Dashboard

↓

Request Analytics

↓

Backend

↓

Database

↓

Return Analytics

↓

Display Dashboard
```

---

# 6. Technology Stack

| Layer           | Technology         |
| --------------- | ------------------ |
| Frontend        | React.js           |
| Styling         | CSS3               |
| HTTP Client     | Axios              |
| Backend         | Node.js            |
| Framework       | Express.js         |
| Database        | MySQL              |
| API Style       | REST API           |
| Version Control | Git                |
| API Testing     | Postman            |
| IDE             | Visual Studio Code |

---

# 7. Project Folder Structure

```
URL-Shortener/

├── client/
├── server/
├── database/
├── docs/
├── screenshots/
├── assets/
├── README.md
├── LICENSE
├── PROJECT_ROADMAP.md
└── .gitignore
```

---

# 8. Backend Structure

```
server/

├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
└── server.js
```

Each folder has a specific responsibility to keep the backend organized and easy to maintain.

---

# 9. Frontend Structure

```
client/

├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
```

The frontend follows a component-based architecture to improve code reusability and maintainability.

---

# 10. Design Principles

The project follows the following design principles.

### Separation of Concerns

Frontend, backend, and database have separate responsibilities.

---

### Modularity

The application is divided into small modules, making it easier to understand and maintain.

---

### Maintainability

A clean folder structure and organized code make future modifications easier.

---

### Security

Basic security measures such as input validation and rate limiting will be implemented.

---

# 11. Design Decisions

The following design decisions were made while planning the project.

| Decision                 | Reason                                               |
| ------------------------ | ---------------------------------------------------- |
| React.js                 | Build a responsive and interactive user interface.   |
| Express.js               | Simple and lightweight backend framework.            |
| MySQL                    | Efficient relational database for structured data.   |
| REST APIs                | Standard communication between frontend and backend. |
| Separate Clicks Table    | Prevent duplicate data and improve scalability.      |
| Modular Folder Structure | Easier maintenance and cleaner code.                 |

---

# 12. Summary

The URL Shortener with Analytics application follows a simple three-tier architecture with a clear separation between the frontend, backend, and database.

The modular design keeps the application organized, easy to understand, and suitable for learning full-stack web development while following software engineering best practices.

---

# Document Revision History

| Version | Date      | Description                    |
| ------- | --------- | ------------------------------ |
| 1.0.0   | July 2026 | Initial System Design Document |

---
