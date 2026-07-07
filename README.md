# URL Shortener with Analytics

A production-style URL Shortener with Analytics built using **React**, **Node.js**, **Express.js**, and **MySQL**.

---

## Project Overview

This application allows users to shorten long URLs and track basic analytics for every visit.

The project is designed as a beginner-friendly full-stack application while following professional software engineering practices such as modular architecture, REST APIs, database normalization, documentation, testing, and version control.

---

## Features

- Generate short URLs
- Redirect using short URLs
- View all shortened URLs
- Track click analytics
- Browser detection
- Device detection
- Referrer tracking
- Dashboard
- Input validation
- Error handling
- Rate limiting

---

## Tech Stack

### Frontend

- React.js
- Axios
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MySQL

### Tools

- Git
- GitHub
- Postman
- Visual Studio Code

---

## Project Structure

```

URL-Shortener/

├── assets/
├── client/
├── server/
├── database/
├── docs/
├── screenshots/
├── README.md
├── LICENSE
├── PROJECT_ROADMAP.md
└── .gitignore

```

---

## Documentation

Project documentation is available in the **docs** directory.

- Software Requirements Specification
- System Design
- Database Design
- API Design
- UI/UX Design
- Testing Plan
- Development Log

---

## Installation

### Clone Repository

```bash
git clone https://github.com/syedkhush31/url-shortener-analytics.git
```

---

### Backend

```bash
cd server
npm install
npm run dev
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| POST   | /api/urls                 | Create Short URL |
| GET    | /api/urls                 | Get All URLs     |
| GET    | /:shortCode               | Redirect         |
| GET    | /api/analytics/:shortCode | View Analytics   |

---

## Screenshots

Screenshots will be added after implementation.

---

## Learning Objectives

This project demonstrates:

- React Fundamentals
- Express.js
- REST APIs
- MySQL
- Database Design
- Backend Development
- Frontend Development
- API Testing
- Version Control

---

## Future Improvements

Potential future enhancements include:

- User Authentication
- Custom Short URLs
- QR Code Generation
- Link Expiration
- Link Editing
- Link Deletion

---

## Author

**Syed Khush**

GitHub: https://github.com/syedkhush31

---

## License

This project is licensed under the MIT License.
