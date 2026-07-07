# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** API Design  
**Last Updated:** July 2026

---

# 1. Introduction

This document defines the REST API endpoints used by the URL Shortener with Analytics application.

The APIs allow communication between the React frontend and the Node.js backend.

All responses are returned in JSON format except the URL redirection endpoint, which performs an HTTP redirect.

---

# 2. Base URL

During development:

```
http://localhost:5000
```

---

# 3. API Overview

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /api/urls          | Create a shortened URL   |
| GET    | /api/urls          | Get all shortened URLs   |
| GET    | /api/analytics/:id | Get analytics for a URL  |
| GET    | /:shortCode        | Redirect to original URL |

---

# 4. API Details

---

## 4.1 Create Short URL

### Endpoint

```
POST /api/urls
```

### Description

Creates a new shortened URL.

---

### Request Body

```json
{
  "originalUrl": "https://www.google.com"
}
```

---

### Success Response

**Status Code**

```
201 Created
```

```json
{
  "success": true,
  "message": "Short URL created successfully",
  "data": {
    "id": 1,
    "originalUrl": "https://www.google.com",
    "shortCode": "Ab12Cd",
    "shortUrl": "http://localhost:5000/Ab12Cd"
  }
}
```

---

### Error Response

**Status Code**

```
400 Bad Request
```

```json
{
  "success": false,
  "message": "Invalid URL"
}
```

---

## 4.2 Get All URLs

### Endpoint

```
GET /api/urls
```

### Description

Returns all shortened URLs stored in the database.

---

### Success Response

**Status Code**

```
200 OK
```

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "originalUrl": "https://google.com",
      "shortCode": "Ab12Cd",
      "createdAt": "2026-07-07T12:30:00Z"
    },
    {
      "id": 2,
      "originalUrl": "https://youtube.com",
      "shortCode": "Xy91Lm",
      "createdAt": "2026-07-07T12:45:00Z"
    }
  ]
}
```

---

## 4.3 Redirect URL

### Endpoint

```
GET /:shortCode
```

### Description

Searches for the short code.

If found:

- Records analytics
- Redirects the visitor to the original URL

---

### Example

```
GET /Ab12Cd
```

---

### Success Response

**Status Code**

```
302 Found
```

The user is automatically redirected to the original URL.

---

### Error Response

**Status Code**

```
404 Not Found
```

```json
{
  "success": false,
  "message": "Short URL not found"
}
```

---

## 4.4 Get Analytics

### Endpoint

```
GET /api/analytics/:id
```

### Description

Returns analytics for a specific shortened URL.

---

### Example

```
GET /api/analytics/1
```

---

### Success Response

**Status Code**

```
200 OK
```

```json
{
  "success": true,
  "data": {
    "totalClicks": 15,
    "analytics": [
      {
        "browser": "Chrome",
        "device": "Desktop",
        "referrer": "Google",
        "clickedAt": "2026-07-07T13:00:00Z"
      },
      {
        "browser": "Firefox",
        "device": "Mobile",
        "referrer": "Direct",
        "clickedAt": "2026-07-07T13:15:00Z"
      }
    ]
  }
}
```

---

### Error Response

**Status Code**

```
404 Not Found
```

```json
{
  "success": false,
  "message": "Analytics not found"
}
```

---

# 5. HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | Request Successful    |
| 201         | Resource Created      |
| 302         | Redirect              |
| 400         | Bad Request           |
| 404         | Resource Not Found    |
| 500         | Internal Server Error |

---

# 6. API Validation Rules

The backend validates every request before processing.

Rules:

- URL must not be empty.
- URL must be valid.
- Short code must exist before redirecting.
- Invalid requests return appropriate error messages.

---

# 7. Error Response Format

All API errors follow a common structure.

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# 8. Success Response Format

Successful requests follow a consistent structure.

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

---

# 9. API Flow

## URL Creation

```
User

↓

React

↓

POST /api/urls

↓

Backend

↓

Database

↓

Return Short URL
```

---

## Redirect

```
Visitor

↓

GET /:shortCode

↓

Find URL

↓

Store Analytics

↓

Redirect
```

---

## Analytics

```
Dashboard

↓

GET /api/analytics/:id

↓

Backend

↓

Database

↓

Return Analytics
```

---

# 10. API Summary

| API                    | Purpose                  |
| ---------------------- | ------------------------ |
| POST /api/urls         | Create shortened URL     |
| GET /api/urls          | Retrieve all URLs        |
| GET /:shortCode        | Redirect to original URL |
| GET /api/analytics/:id | View analytics           |

---

# 11. Summary

The REST API provides all functionality required for Version 1 of the URL Shortener with Analytics application.

The API is intentionally kept small, consistent, and easy to understand while following RESTful design principles.

Future versions may introduce additional endpoints as new features are added.

---

# Document Revision History

| Version | Date      | Description                 |
| ------- | --------- | --------------------------- |
| 1.0.0   | July 2026 | Initial API Design Document |

---
