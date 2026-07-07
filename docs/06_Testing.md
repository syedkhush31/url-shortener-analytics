# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** Testing Plan  
**Last Updated:** July 2026

---

# 1. Introduction

This document defines the testing strategy for the URL Shortener with Analytics application.

The purpose of testing is to verify that every feature works as expected, handles invalid input correctly, and provides a stable user experience.

Testing will be performed throughout development using manual testing and Postman for API testing.

---

# 2. Testing Objectives

The testing process aims to verify:

- All application features work correctly.
- APIs return expected responses.
- Invalid inputs are handled properly.
- Database operations are successful.
- URL redirection functions correctly.
- Analytics are recorded accurately.

---

# 3. Testing Scope

The following areas will be tested.

- Frontend
- Backend APIs
- Database
- URL Redirection
- Analytics
- Input Validation
- Error Handling

---

# 4. Testing Tools

| Tool               | Purpose               |
| ------------------ | --------------------- |
| Postman            | API Testing           |
| Google Chrome      | Frontend Testing      |
| MySQL Workbench    | Database Verification |
| Visual Studio Code | Development           |

---

# 5. Test Cases

## 5.1 Create Short URL

| Test Case   | Expected Result                | Status     |
| ----------- | ------------------------------ | ---------- |
| Valid URL   | Short URL created successfully | ⬜ Pending |
| Empty Input | Validation error displayed     | ⬜ Pending |
| Invalid URL | Validation error displayed     | ⬜ Pending |

---

## 5.2 Redirect URL

| Test Case         | Expected Result          | Status     |
| ----------------- | ------------------------ | ---------- |
| Valid Short URL   | Redirect to original URL | ⬜ Pending |
| Invalid Short URL | 404 Error                | ⬜ Pending |

---

## 5.3 Dashboard

| Test Case           | Expected Result           | Status     |
| ------------------- | ------------------------- | ---------- |
| Display URLs        | All URLs displayed        | ⬜ Pending |
| Display Click Count | Correct click count shown | ⬜ Pending |

---

## 5.4 Analytics

| Test Case         | Expected Result              | Status     |
| ----------------- | ---------------------------- | ---------- |
| Display Browser   | Browser shown correctly      | ⬜ Pending |
| Display Device    | Device shown correctly       | ⬜ Pending |
| Display Referrer  | Referrer shown correctly     | ⬜ Pending |
| Display Timestamp | Correct click time displayed | ⬜ Pending |

---

# 6. API Testing

The following endpoints will be tested.

| Method | Endpoint                  | Status     |
| ------ | ------------------------- | ---------- |
| POST   | /api/urls                 | ⬜ Pending |
| GET    | /api/urls                 | ⬜ Pending |
| GET    | /api/analytics/:shortCode | ⬜ Pending |
| GET    | /:shortCode               | ⬜ Pending |

---

# 7. Database Testing

The following database operations will be verified.

| Operation                | Expected Result         | Status     |
| ------------------------ | ----------------------- | ---------- |
| Insert URL               | Record inserted         | ⬜ Pending |
| Retrieve URL             | Correct record returned | ⬜ Pending |
| Insert Analytics         | Analytics stored        | ⬜ Pending |
| Foreign Key Relationship | Relationship maintained | ⬜ Pending |

---

# 8. Input Validation Testing

The application should reject invalid inputs.

| Input              | Expected Result  | Status     |
| ------------------ | ---------------- | ---------- |
| Empty URL          | Validation Error | ⬜ Pending |
| Invalid URL        | Validation Error | ⬜ Pending |
| Missing Short Code | 404 Error        | ⬜ Pending |

---

# 9. Error Handling Testing

The application should display appropriate errors.

| Scenario      | Expected Result       | Status     |
| ------------- | --------------------- | ---------- |
| Invalid URL   | Error Message         | ⬜ Pending |
| URL Not Found | 404 Page              | ⬜ Pending |
| Server Error  | Internal Server Error | ⬜ Pending |

---

# 10. Browser Testing

The application should work correctly on:

- Google Chrome
- Microsoft Edge

Status

⬜ Pending

---

# 11. Responsive Testing

The application should display correctly on:

- Desktop
- Tablet
- Mobile

Status

⬜ Pending

---

# 12. Test Execution Log

| Date | Module | Result | Remarks |
| ---- | ------ | ------ | ------- |
| -    | -      | -      | -       |

---

# 13. Known Issues

No known issues at the time of writing this document.

---

# 14. Summary

Testing will be performed throughout the development process to ensure the application behaves correctly under normal usage and invalid input scenarios.

Each completed feature will be tested before moving to the next development phase.

---

# Document Revision History

| Version | Date      | Description          |
| ------- | --------- | -------------------- |
| 1.0.0   | July 2026 | Initial Testing Plan |

---
