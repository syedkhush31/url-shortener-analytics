# 🔗 URL Shortener & Analytics Dashboard

A full-stack URL shortening application with custom aliases, click tracking, search, sorting, and a modern analytics dashboard.

Built with **React, Node.js, Express.js, and MySQL**.

---

## 🚀 Overview

This project allows users to:

- Create short URLs from long URLs
- Optionally create custom aliases
- Redirect users through short URLs
- Track click counts
- View all created links in a dashboard
- Search and sort links
- Copy short URLs
- Delete links
- Automatically refresh analytics when returning to the dashboard

The application follows a modular frontend/backend architecture with a MySQL database and RESTful APIs.

---

## ✨ Features

### URL Shortening
- Generate collision-resistant short codes using `nanoid`
- Create custom aliases such as `/github` or `/portfolio`
- Validate submitted URLs
- Prevent duplicate custom aliases

### Analytics
- Track total URLs
- Track total clicks
- Identify the most-clicked link
- Track clicks for individual short URLs
- Automatically refresh dashboard data when the user returns to the application

### Link Management
- Search by original URL or short code
- Sort by newest
- Sort by oldest
- Sort by clicks
- Copy short URLs to clipboard
- Delete shortened URLs

### User Experience
- Toast notifications
- Loading states
- Empty states
- Responsive dashboard
- Modern dark UI
- Custom alias input
- Mobile-friendly layout

---

## 🛠 Tech Stack

### Frontend

- React
- Axios
- CSS3
- React Hot Toast
- Vite

### Backend

- Node.js
- Express.js
- Nanoid

### Database

- MySQL

### Development Tools

- Git
- GitHub
- Postman
- Visual Studio Code

---

## 🏗 Architecture

```text
                    ┌──────────────────────┐
                    │      React App       │
                    │                      │
                    │  Dashboard / Forms   │
                    │  Search / Analytics  │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │   Express / Node.js  │
                    │                      │
                    │ URL creation         │
                    │ Redirect handling    │
                    │ Click tracking       │
                    │ Validation           │
                    └──────────┬───────────┘
                               │
                               │ SQL
                               ▼
                    ┌──────────────────────┐
                    │        MySQL         │
                    │                      │
                    │      urls table      │
                    └──────────────────────┘
