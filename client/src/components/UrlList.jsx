import { deleteUrl } from "../services/api";
import toast from "react-hot-toast";

function UrlList({ urls, refreshUrls }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this URL?")) return;

    try {
      await deleteUrl(id);
      toast.success("URL deleted successfully!");
      refreshUrls();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete URL.");
    }
  };

  const copyToClipboard = async (shortCode) => {
    const shortUrl = `http://localhost:5000/${shortCode}`;

    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success("Short URL copied!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy.");
    }
  };

  if (urls.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">↗</div>
        <h3>No links found</h3>
        <p>Create a short link above to see it here.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {urls.map((url) => {
            let hostname = url.original_url;

            try {
              hostname = new URL(url.original_url).hostname;
            } catch {
              // Keep original URL if parsing fails
            }

            return (
              <tr key={url.id}>
                {/* ORIGINAL LINK */}
                <td>
                  <div className="link-cell">
                    <div className="link-favicon">
                      {hostname.charAt(0).toUpperCase()}
                    </div>

                    <div className="link-info">
                      <a
                        href={url.original_url}
                        target="_blank"
                        rel="noreferrer"
                        className="original-link"
                      >
                        {hostname}
                      </a>

                      <span className="original-url">{url.original_url}</span>
                    </div>
                  </div>
                </td>

                {/* SHORT URL */}
                <td>
                  <a
                    href={`http://localhost:5000/${url.short_code}`}
                    target="_blank"
                    rel="noreferrer"
                    className="short-code"
                  >
                    {url.short_code}
                  </a>
                </td>

                {/* CLICKS */}
                <td>
                  <span className="click-count">
                    <span className="click-arrow">↗</span>
                    {url.clicks}
                  </span>
                </td>

                {/* CREATED */}
                <td>
                  <span className="created-date">
                    {new Date(url.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className="icon-action copy-action"
                      title="Copy short URL"
                      aria-label="Copy short URL"
                      onClick={() => copyToClipboard(url.short_code)}
                    >
                      <span>▣</span>
                    </button>

                    <button
                      type="button"
                      className="icon-action delete-action"
                      title="Delete URL"
                      aria-label="Delete URL"
                      onClick={() => handleDelete(url.id)}
                    >
                      ×
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UrlList;
