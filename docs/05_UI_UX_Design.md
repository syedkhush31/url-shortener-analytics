# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** UI/UX Design  
**Last Updated:** July 2026

---

# 1. Introduction

This document describes the user interface and user experience design for the URL Shortener with Analytics application.

The primary goal of the UI is to provide a simple, clean, and intuitive experience where users can easily shorten URLs and view analytics.

The design follows a minimal approach, focusing on usability rather than visual complexity.

---

# 2. Design Goals

The application should:

- Be simple to use.
- Require minimal user interaction.
- Display information clearly.
- Be responsive on desktop and mobile devices.
- Maintain a clean and modern appearance.

---

# 3. Application Pages

The application consists of four pages.

1. Home Page
2. Dashboard
3. Analytics Page
4. 404 Error Page

---

# 4. Home Page

## Purpose

Allow users to create a shortened URL.

---

## Components

- Navigation Bar
- Project Title
- URL Input Field
- Shorten Button
- Generated Short URL Card
- Copy Button

---

## Layout

```
------------------------------------------------

               URL Shortener

 Enter your long URL

 -----------------------------------------
| https://example.com                     |
 -----------------------------------------

        [ Shorten URL ]

-------------------------------------------

Original URL

https://example.com

Short URL

http://localhost:5000/Ab12Cd

[ Copy ]

------------------------------------------------
```

---

# 5. Dashboard

## Purpose

Display every shortened URL created.

---

## Components

- Navigation Bar
- Table of URLs

---

## Table Columns

| Column           |
| ---------------- |
| Original URL     |
| Short URL        |
| Total Clicks     |
| Created Date     |
| Analytics Button |

---

## Layout

```
--------------------------------------------------

Dashboard

--------------------------------------------------

Original URL

Short URL

Clicks

Created

Action

--------------------------------------------------

google.com

Ab12Cd

15

07-07-2026

[ View Analytics ]

--------------------------------------------------
```

---

# 6. Analytics Page

## Purpose

Display click analytics for a selected URL.

---

## Components

- Back Button
- URL Information
- Analytics Table

---

## Table Columns

| Column     |
| ---------- |
| Browser    |
| Device     |
| Referrer   |
| Clicked At |

---

## Layout

```
--------------------------------------------------

Analytics

Short URL

Ab12Cd

Total Clicks

15

--------------------------------------------------

Browser

Device

Referrer

Clicked At

--------------------------------------------------

Chrome

Desktop

Google

07-07-2026

--------------------------------------------------

Firefox

Mobile

Direct

07-07-2026

--------------------------------------------------
```

---

# 7. 404 Error Page

## Purpose

Display an error when an invalid short URL is requested.

---

## Components

- Error Message
- Return Home Button

---

## Layout

```
404

Short URL Not Found

The requested URL does not exist.

[ Return Home ]
```

---

# 8. Navigation

Navigation Bar

```
Logo            Home      Dashboard
```

The navigation bar remains visible on all pages.

---

# 9. Color Palette

| Element    | Color   |
| ---------- | ------- |
| Primary    | #2563EB |
| Success    | #22C55E |
| Background | #F8FAFC |
| Text       | #1F2937 |
| Border     | #E5E7EB |
| Error      | #EF4444 |

---

# 10. Typography

| Element     | Font    |
| ----------- | ------- |
| Font Family | Inter   |
| Heading     | Bold    |
| Body        | Regular |

---

# 11. Buttons

Primary Button

```
[ Shorten URL ]
```

Secondary Button

```
[ Copy ]
```

Navigation Button

```
[ View Analytics ]
```

Back Button

```
[ Back ]
```

---

# 12. User Flow

## Shorten URL

```
Home

↓

Enter URL

↓

Click "Shorten URL"

↓

Display Short URL

↓

Copy URL
```

---

## View Analytics

```
Dashboard

↓

Click "View Analytics"

↓

Analytics Page

↓

View Click Information
```

---

# 13. Responsive Design

The application should work on:

- Desktop
- Tablet
- Mobile

The layout should automatically adjust based on screen size.

---

# 14. User Experience Principles

The application follows these principles:

- Simple navigation.
- Clear feedback messages.
- Consistent layout.
- Minimal user input.
- Fast interaction.

---

# 15. Success Messages

### URL Created

```
Short URL created successfully.
```

---

### URL Copied

```
Short URL copied to clipboard.
```

---

# 16. Error Messages

Invalid URL

```
Please enter a valid URL.
```

---

Short URL Not Found

```
The requested short URL does not exist.
```

---

Server Error

```
Something went wrong. Please try again.
```

---

# 17. Summary

The UI is designed to be simple, responsive, and easy to use.

The application focuses on providing a smooth experience for creating shortened URLs and viewing analytics while maintaining a clean and professional interface.

---

# Document Revision History

| Version | Date      | Description                   |
| ------- | --------- | ----------------------------- |
| 1.0.0   | July 2026 | Initial UI/UX Design Document |

---
