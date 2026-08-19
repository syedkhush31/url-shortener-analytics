import { useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

function UrlForm({ refreshUrls }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl.trim()) {
      toast.error("Please enter a URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/shorten", {
        original_url: originalUrl.trim(),
        custom_alias: customAlias.trim() || undefined,
      });

      setResult(response.data);
      setOriginalUrl("");
      setCustomAlias("");

      toast.success("Short URL created!");
      await refreshUrls();
    } catch (error) {
      console.error(error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const copyResult = async () => {
    if (!result?.short_url) return;

    try {
      await navigator.clipboard.writeText(result.short_url);
      toast.success("Short URL copied!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy.");
    }
  };

  return (
    <>
      <form className="shortener-form" onSubmit={handleSubmit}>
        <div className="url-input-wrapper">
          <span className="input-icon">🔗</span>

          <input
            className="url-input"
            type="url"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="alias-input-wrapper">
          <span className="alias-prefix">/</span>

          <input
            className="alias-input"
            type="text"
            placeholder="custom-alias"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            disabled={loading}
            maxLength={50}
          />
        </div>

        <button className="shorten-button" type="submit" disabled={loading}>
          {loading ? (
            "Creating..."
          ) : (
            <>
              Shorten URL <span>→</span>
            </>
          )}
        </button>
      </form>

      {result && (
        <div className="short-url-result">
          <div className="result-icon">✓</div>

          <div className="result-content">
            <span className="result-label">SHORT URL CREATED</span>

            <a
              className="result-link"
              href={result.short_url}
              target="_blank"
              rel="noreferrer"
            >
              {result.short_url}
            </a>
          </div>

          <button className="result-copy" type="button" onClick={copyResult}>
            Copy
          </button>
        </div>
      )}
    </>
  );
}

export default UrlForm;
