# URL Shortener with Analytics

**Project:** URL Shortener with Analytics  
**Version:** 1.0.0  
**Author:** Syed Khush  
**Status:** In Development  
**Document:** Database Design  
**Last Updated:** July 2026

---

# 1. Introduction

This document describes the database design for the URL Shortener with Analytics application.

The application uses MySQL as its relational database management system (RDBMS). The database is designed to store shortened URLs and basic click analytics while maintaining data integrity and reducing data redundancy.

The database follows a simple and normalized structure that is easy to understand and maintain.

---

# 2. Database Overview

**Database Name**

```
url_shortener
```

**Database Management System**

```
MySQL 8.x
```

**Character Set**

```
utf8mb4
```

**Collation**

```
utf8mb4_unicode_ci
```

---

# 3. Database Objectives

The database should:

- Store original URLs.
- Store generated short codes.
- Store click analytics.
- Maintain relationships between URLs and clicks.
- Prevent duplicate short codes.
- Support fast retrieval of URLs and analytics.

---

# 4. Entity Relationship Diagram (ER Diagram)

```
+---------------------------+
|           URLs            |
+---------------------------+
| id (PK)                   |
| original_url              |
| short_code                |
| created_at                |
+---------------------------+
            |
            | 1
            |
            |
            |-------------------------<
                                      N
                         +-------------------------+
                         |        Clicks          |
                         +-------------------------+
                         | id (PK)                |
                         | url_id (FK)            |
                         | browser               |
                         | device                |
                         | referrer              |
                         | clicked_at            |
                         +-------------------------+
```

---

# 5. Table Design

## 5.1 URLs Table

### Purpose

Stores every shortened URL created by the application.

### Columns

| Column       | Data Type   | Constraints                 | Description                        |
| ------------ | ----------- | --------------------------- | ---------------------------------- |
| id           | INT         | PRIMARY KEY, AUTO_INCREMENT | Unique identifier                  |
| original_url | TEXT        | NOT NULL                    | Original URL submitted by the user |
| short_code   | VARCHAR(10) | UNIQUE, NOT NULL            | Generated short code               |
| created_at   | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP   | Date and time the URL was created  |

---

## 5.2 Clicks Table

### Purpose

Stores analytics information whenever a shortened URL is visited.

### Columns

| Column     | Data Type    | Constraints                 | Description                           |
| ---------- | ------------ | --------------------------- | ------------------------------------- |
| id         | INT          | PRIMARY KEY, AUTO_INCREMENT | Unique click identifier               |
| url_id     | INT          | FOREIGN KEY                 | References the URL that was clicked   |
| browser    | VARCHAR(50)  | NOT NULL                    | Browser used by the visitor           |
| device     | VARCHAR(30)  | NOT NULL                    | Device type (Desktop, Mobile, Tablet) |
| referrer   | VARCHAR(255) | NULL                        | Website that referred the visitor     |
| clicked_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | Date and time of the click            |

---

# 6. Relationship Between Tables

The application contains a **one-to-many** relationship.

- One shortened URL can receive many clicks.
- Each click belongs to only one shortened URL.

Relationship

```
URLs (1)
      |
      |
      |
Clicks (Many)
```

---

# 7. Primary Keys

### URLs

```
id
```

### Clicks

```
id
```

Primary keys uniquely identify each record in their respective tables.

---

# 8. Foreign Key

The Clicks table contains the following foreign key.

```
url_id
```

References

```
URLs.id
```

This relationship ensures that every click record belongs to a valid shortened URL.

---

# 9. Constraints

### URLs Table

- Primary Key
- Auto Increment
- NOT NULL
- UNIQUE (short_code)

---

### Clicks Table

- Primary Key
- Auto Increment
- Foreign Key
- NOT NULL

---

# 10. Indexing Strategy

Indexes improve database performance during searches.

| Column     | Reason                             |
| ---------- | ---------------------------------- |
| id         | Primary Key Lookup                 |
| short_code | Fast URL lookup during redirection |
| url_id     | Faster analytics queries           |

---

# 11. Database Normalization

The database follows **Third Normal Form (3NF)**.

Instead of storing the original URL inside every click record, only the corresponding URL ID is stored.

This approach:

- Reduces duplicate data.
- Improves maintainability.
- Saves storage.
- Makes updates easier.

---

# 12. Data Flow

## Creating a Short URL

```
User

↓

Submit URL

↓

Backend

↓

Generate Short Code

↓

Store in URLs Table
```

---

## Redirecting a User

```
Visitor

↓

Open Short URL

↓

Backend

↓

Find Original URL

↓

Redirect User
```

---

## Recording Analytics

```
Visitor

↓

Redirect Request

↓

Backend

↓

Store Click Information

↓

Clicks Table
```

---

# 13. Sample Data

## URLs Table

| id  | original_url        | short_code |
| --- | ------------------- | ---------- |
| 1   | https://google.com  | Ab12Cd     |
| 2   | https://youtube.com | Xy91Lm     |

---

## Clicks Table

| id  | url_id | browser | device  |
| --- | ------ | ------- | ------- |
| 1   | 1      | Chrome  | Desktop |
| 2   | 1      | Edge    | Mobile  |
| 3   | 2      | Firefox | Desktop |

---

# 14. Database Design Decisions

### Separate URLs and Clicks Tables

The analytics information is stored separately from the URL information to avoid duplicate data and improve scalability.

---

### Integer Primary Keys

Integer IDs provide fast indexing and efficient joins.

---

### Unique Short Codes

Every shortened URL must be unique to prevent conflicts during redirection.

---

### Foreign Key Relationship

The Clicks table references the URLs table to maintain data consistency.

---

# 15. Summary

The database is designed to provide a simple, organized, and efficient structure for storing shortened URLs and click analytics.

The design minimizes duplicate data, maintains referential integrity, and supports the application's core functionality while remaining easy to understand for future development.

---

# Document Revision History

| Version | Date      | Description                      |
| ------- | --------- | -------------------------------- |
| 1.0.0   | July 2026 | Initial Database Design Document |

---
