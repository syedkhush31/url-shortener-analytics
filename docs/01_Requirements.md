# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** Software Requirements Specification (SRS)  
**Last Updated:** July 2026

---

# 1. Project Overview

The URL Shortener with Analytics is a full-stack web application that allows users to convert long URLs into short, easy-to-share links. The application also provides basic analytics by tracking the number of clicks, browser information, device type, referrer, and click timestamp for each shortened URL.

The project is designed to demonstrate the development of a production-style web application using React, Node.js, Express.js, and MySQL while following clean coding practices and a modular architecture.

---

# 2. Problem Statement

Long URLs are difficult to share, remember, and manage, especially on social media, emails, and messaging platforms.

This project solves that problem by generating shorter URLs that redirect users to the original destination while also providing useful click analytics.

---

# 3. Project Objectives

The main objectives of this project are:

- Build a URL shortening service.
- Generate unique short URLs.
- Redirect users to the original URL.
- Track click analytics.
- Store data efficiently using MySQL.
- Build a clean and maintainable full-stack application.
- Learn modern web development concepts and best practices.

---

# 4. Project Scope

## In Scope

The application will include the following features:

- Generate shortened URLs
- Redirect shortened URLs
- View all shortened URLs
- View analytics for each URL
- Track browser information
- Track device type
- Track referrer
- Track click timestamp
- Responsive user interface
- RESTful APIs
- MySQL database integration
- Input validation
- Error handling
- Rate limiting

---

## Out of Scope (Version 1.0)

The following features are intentionally excluded from this version:

- User Authentication
- User Accounts
- QR Code Generation
- Custom Short URLs
- Link Expiration
- Link Editing
- Link Deletion

These features may be implemented in future versions.

---

# 5. Functional Requirements

### FR-1: Create Short URL

The user shall be able to enter a valid URL and receive a unique shortened URL.

---

### FR-2: URL Validation

The system shall validate every submitted URL before storing it.

Invalid URLs shall be rejected with an appropriate error message.

---

### FR-3: URL Redirection

When a user opens a shortened URL, the application shall automatically redirect the user to the corresponding original URL.

---

### FR-4: Click Analytics

Every successful redirection shall create an analytics record containing:

- Browser
- Device Type
- Referrer
- Click Timestamp

---

### FR-5: Dashboard

The dashboard shall display:

- Original URL
- Short URL
- Total Clicks
- Date Created

---

### FR-6: Error Handling

The application shall handle the following errors gracefully:

- Invalid URL
- Missing URL
- Short URL not found
- Internal Server Error

---

### FR-7: Security

The backend shall provide:

- Input Validation
- Rate Limiting
- Secure API Responses

---

# 6. Non-Functional Requirements

The application should satisfy the following quality requirements.

## Performance

- Fast API response time
- Efficient database queries

---

## Reliability

The application should remain stable during normal usage.

---

## Maintainability

The codebase should follow a modular and organized structure.

---

## Security

The application should validate user input and protect against common misuse.

---

## Usability

The application should provide a simple and responsive user interface.

---

# 7. User Stories

### User Story 1

As a user,

I want to shorten a long URL,

so that I can easily share it.

---

### User Story 2

As a visitor,

I want a shortened URL to redirect me automatically,

so I can quickly access the intended website.

---

### User Story 3

As a user,

I want to view click analytics,

so I can understand how my shortened links are performing.

---

### User Story 4

As a user,

I want invalid URLs to be rejected,

so that incorrect data is not stored.

---

# 8. Assumptions

The project assumes:

- Users have internet access.
- Submitted URLs are publicly accessible.
- MySQL Server is running.
- Modern web browsers are used.
- The frontend communicates with the backend using REST APIs.

---

# 9. Constraints

The project will be developed using:

- React.js
- Node.js
- Express.js
- MySQL
- RESTful API Architecture
- Git for Version Control

---

# 10. Future Enhancements

Possible future improvements include:

- User Authentication
- Custom Short URLs
- QR Code Generation
- Link Expiration
- Link Editing
- Link Deletion

---

# 11. Success Criteria

The project will be considered successful if:

- Users can shorten valid URLs.
- Short URLs correctly redirect users.
- Analytics are recorded successfully.
- Invalid requests are handled properly.
- The application follows a clean architecture.
- The project is suitable for demonstration during technical interviews.

---

# Document Revision History

| Version | Date      | Description                                 |
| ------- | --------- | ------------------------------------------- |
| 1.0.0   | July 2026 | Initial Software Requirements Specification |

---
