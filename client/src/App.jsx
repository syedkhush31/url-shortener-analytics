import { useCallback, useEffect, useMemo, useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import DashboardStats from "./components/DashboardStats";
import { getAllUrls } from "./services/api";
import "./styles/global.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const loadUrls = useCallback(async () => {
    try {
      const res = await getAllUrls();
      setUrls(res.data.data);
    } catch (error) {
      console.error("Failed to load URLs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchUrls = async () => {
      await loadUrls();
    };

    fetchUrls();

    // Refresh when the user comes back to the dashboard
    const handleFocus = () => {
      loadUrls();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadUrls();
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [loadUrls]);

  const filteredUrls = useMemo(() => {
    const query = search.toLowerCase().trim();

    const filtered = urls.filter((url) => {
      return (
        url.original_url.toLowerCase().includes(query) ||
        url.short_code.toLowerCase().includes(query)
      );
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return a.id - b.id;

        case "clicks":
          return b.clicks - a.clicks;

        default:
          return b.id - a.id;
      }
    });
  }, [urls, search, sortBy]);

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">↗</div>

          <div>
            <div className="brand-name">Linkly</div>
            <div className="brand-subtitle">URL Analytics</div>
          </div>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          System operational
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-badge">
            <span>✦</span>
            Simple links. Powerful analytics.
          </div>

          <h1>
            Shorten your links.
            <br />
            <span>Understand your audience.</span>
          </h1>

          <p>
            Create clean, shareable URLs and track every click from one simple
            dashboard.
          </p>

          <UrlForm refreshUrls={loadUrls} />
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OVERVIEW</span>
              <h2>Performance</h2>
            </div>
          </div>

          <DashboardStats urls={urls} />
        </section>

        <section className="links-section">
          <div className="links-header">
            <div>
              <span className="eyebrow">MANAGE</span>
              <h2>Your links</h2>
            </div>

            <div className="links-count">
              {filteredUrls.length}{" "}
              {filteredUrls.length === 1 ? "link" : "links"}
            </div>
          </div>

          <div className="toolbar">
            <div className="search-wrapper">
              <span className="search-icon">⌕</span>

              <input
                className="search-input"
                type="text"
                placeholder="Search your links..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  type="button"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="clicks">Most clicked</option>
            </select>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading your links...</p>
            </div>
          ) : (
            <UrlList urls={filteredUrls} refreshUrls={loadUrls} />
          )}
        </section>
      </main>

      <footer className="footer">
        <span>Linkly</span>
        <span>Built with React, Node.js & MySQL</span>
      </footer>
    </div>
  );
}

export default App;
