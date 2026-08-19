function DashboardStats({ urls }) {
  const totalLinks = urls.length;

  const totalClicks = urls.reduce(
    (total, url) => total + Number(url.clicks || 0),
    0,
  );

  const topUrl = urls.reduce((top, url) => {
    if (!top || Number(url.clicks) > Number(top.clicks)) {
      return url;
    }

    return top;
  }, null);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">↗</div>

        <div className="stat-content">
          <span className="stat-label">TOTAL LINKS</span>
          <h3>{totalLinks}</h3>
          <p>Short links created</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">◉</div>

        <div className="stat-content">
          <span className="stat-label">TOTAL CLICKS</span>
          <h3>{totalClicks}</h3>
          <p>Tracked visits</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">★</div>

        <div className="stat-content">
          <span className="stat-label">TOP LINK</span>

          <h3 className="top-link">{topUrl ? topUrl.short_code : "—"}</h3>

          <p>
            {topUrl
              ? `${topUrl.clicks} ${
                  Number(topUrl.clicks) === 1 ? "click" : "clicks"
                }`
              : "No clicks yet"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
