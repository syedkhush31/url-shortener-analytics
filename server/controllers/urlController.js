const db = require("../config/db");
const { nanoid } = require("nanoid");

// Create Short URL
const shortenUrl = (req, res) => {
  const { original_url, custom_alias } = req.body;

  // Validate original URL
  if (!original_url) {
    return res.status(400).json({
      success: false,
      message: "URL is required",
    });
  }

  try {
    new URL(original_url);
  } catch {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid URL",
    });
  }

  // Clean custom alias
  const alias = custom_alias?.trim();

  // Validate custom alias if provided
  if (alias) {
    if (!/^[a-zA-Z0-9-_]+$/.test(alias)) {
      return res.status(400).json({
        success: false,
        message:
          "Custom alias can only contain letters, numbers, hyphens, and underscores",
      });
    }

    if (alias.length < 3 || alias.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Custom alias must be between 3 and 50 characters",
      });
    }
  }

  // If custom alias is provided, check whether it already exists
  if (alias) {
    const checkAliasSql =
      "SELECT id FROM urls WHERE custom_alias = ? OR short_code = ?";

    db.query(checkAliasSql, [alias, alias], (checkErr, results) => {
      if (checkErr) {
        console.error(checkErr);

        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          success: false,
          message: "This custom alias is already taken",
        });
      }

      createUrl(alias);
    });

    return;
  }

  // No custom alias → generate a random short code
  createUrl(null);

  function createUrl(customAlias) {
    const short_code = customAlias || nanoid(6);

    const checkCodeSql =
      "SELECT id FROM urls WHERE short_code = ? OR custom_alias = ?";

    db.query(checkCodeSql, [short_code, short_code], (checkErr, results) => {
      if (checkErr) {
        console.error(checkErr);

        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      // Extremely unlikely nanoid collision → generate another code
      if (results.length > 0) {
        if (customAlias) {
          return res.status(409).json({
            success: false,
            message: "This custom alias is already taken",
          });
        }

        return createUrl(null);
      }

      const insertSql = `
          INSERT INTO urls
          (original_url, short_code, custom_alias)
          VALUES (?, ?, ?)
        `;

      db.query(
        insertSql,
        [original_url, short_code, customAlias],
        (err, result) => {
          if (err) {
            console.error(err);

            return res.status(500).json({
              success: false,
              message: "Database Error",
            });
          }

          res.json({
            success: true,
            id: result.insertId,
            original_url,
            short_code,
            custom_alias: customAlias,
            short_url: `${process.env.BASE_URL}/${short_code}`,
          });
        },
      );
    });
  }
};

// Redirect using Short Code or Custom Alias
const redirectUrl = (req, res) => {
  const { shortCode } = req.params;

  const sql = `
    SELECT *
    FROM urls
    WHERE short_code = ?
       OR custom_alias = ?
    LIMIT 1
  `;

  db.query(sql, [shortCode, shortCode], (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    const url = results[0];

    const updateSql = "UPDATE urls SET clicks = clicks + 1 WHERE id = ?";

    db.query(updateSql, [url.id], (updateErr) => {
      if (updateErr) {
        console.error(updateErr);
      }

      res.redirect(url.original_url);
    });
  });
};

// Get All URLs
const getAllUrls = (req, res) => {
  const sql = `
    SELECT
      id,
      original_url,
      short_code,
      custom_alias,
      clicks,
      created_at
    FROM urls
    ORDER BY id DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      count: results.length,
      data: results,
    });
  });
};

// Delete URL
const deleteUrl = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM urls WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    res.json({
      success: true,
      message: "URL deleted successfully",
    });
  });
};

module.exports = {
  shortenUrl,
  redirectUrl,
  getAllUrls,
  deleteUrl,
};
