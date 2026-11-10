import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('careconnect-admin-theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('careconnect-admin-theme', theme)
    } catch {
      // Theme still works if storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const currentDate = new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date())

  const currentYear = new Date().getFullYear()

  const handleLogout = (event) => {
    event.preventDefault()
    alert(
      'Logout will be connected to the authentication system when the backend is ready.'
    )
  }

  const handleSidebarClick = (event) => {
    document.querySelectorAll('.sidebar-link').forEach((item) => {
      item.classList.remove('active')
    })

    event.currentTarget.classList.add('active')
  }

  return (
    <div className="admin-page" data-theme={theme}>

      {/* TOP NAVIGATION */}
      <nav className="admin-navbar navbar navbar-expand-lg">
        <div className="container-fluid px-3 px-lg-4">

          <Link className="navbar-brand admin-brand" to="/">
            <i className="bi bi-heart-pulse-fill"></i>
            CareConnect
          </Link>

          <div className="d-flex align-items-center gap-2 order-lg-3">

            {/* LIGHT/DARK MODE */}
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              <i
                className={
                  theme === 'dark'
                    ? 'bi bi-sun-fill'
                    : 'bi bi-moon-stars-fill'
                }
              ></i>

              <span>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>

            <button
              className="navbar-toggler admin-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#adminNavbar"
              aria-controls="adminNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse order-lg-2"
            id="adminNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="bi bi-house-door"></i> Visit Website
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link admin-notification"
                  href="#activity"
                  aria-label="View recent activity"
                >
                  <i className="bi bi-bell"></i>
                  <span className="notification-dot"></span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link admin-profile-link"
                  href="#settings"
                >
                  <span className="admin-avatar">A</span>
                  <span>Administrator</span>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <div className="admin-layout">

        {/* SIDEBAR */}
        <aside className="admin-sidebar" id="adminSidebar">

          <div className="sidebar-heading">MAIN MENU</div>

          <a
            href="#dashboard"
            className="sidebar-link active"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard</span>
          </a>

          <a
            href="#facilities"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-hospital"></i>
            <span>Healthcare Facilities</span>
            <span className="sidebar-count">12</span>
          </a>

          <a
            href="#users"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-people"></i>
            <span>User Management</span>
          </a>

          <a
            href="#referrals"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-arrow-left-right"></i>
            <span>Referrals</span>
          </a>

          <a
            href="#laboratory"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-droplet"></i>
            <span>Laboratory Services</span>
          </a>

          <a
            href="#diagnostics"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-activity"></i>
            <span>Diagnostic Services</span>
          </a>

          <a
            href="#reports"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
          </a>

          <div className="sidebar-heading sidebar-heading-spaced">
            SYSTEM
          </div>

          <a
            href="#activity"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-clock-history"></i>
            <span>Recent Activity</span>
          </a>

          <a
            href="#settings"
            className="sidebar-link"
            onClick={handleSidebarClick}
          >
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </a>

          <div className="sidebar-help">
            <i className="bi bi-shield-check"></i>
            <strong>CareConnect Admin</strong>
            <p>
              Manage the healthcare network responsibly and securely.
            </p>
          </div>

          <a
            href="/login"
            className="sidebar-link sidebar-logout"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-left"></i>
            <span>Log Out</span>
          </a>

        </aside>

        {/* MAIN CONTENT */}
        <main className="admin-main" id="dashboard">

          {/* WELCOME */}
          <div className="admin-welcome">

            <div>
              <p className="admin-eyebrow">ADMINISTRATION</p>

              <h1>Dashboard Overview</h1>

              <p className="admin-subtitle">
                Welcome back! Here's an overview of your CareConnect network.
              </p>
            </div>

            <div className="admin-date">
              <i className="bi bi-calendar3"></i>
              <span>{currentDate}</span>
            </div>

          </div>

          {/* STATISTICS */}
          <section
            className="admin-stats"
            aria-label="System statistics"
          >

            <article className="stat-card">

              <div className="stat-card-top">
                <span className="stat-icon">
                  <i className="bi bi-hospital"></i>
                </span>

                <span className="stat-label">
                  Facilities
                </span>
              </div>

              <h2>128</h2>

              <p>Registered facilities</p>

              <a href="#facilities">
                View facilities
                <i className="bi bi-arrow-right"></i>
              </a>

            </article>

            <article className="stat-card">

              <div className="stat-card-top">
                <span className="stat-icon">
                  <i className="bi bi-people"></i>
                </span>

                <span className="stat-label">
                  Users
                </span>
              </div>

              <h2>240</h2>

              <p>Registered user accounts</p>

              <a href="#users">
                Manage users
                <i className="bi bi-arrow-right"></i>
              </a>

            </article>

            <article className="stat-card">

              <div className="stat-card-top">
                <span className="stat-icon">
                  <i className="bi bi-arrow-left-right"></i>
                </span>

                <span className="stat-label">
                  Referrals
                </span>
              </div>

              <h2>356</h2>

              <p>Total referrals recorded</p>

              <a href="#referrals">
                View referrals
                <i className="bi bi-arrow-right"></i>
              </a>

            </article>

            <article className="stat-card stat-card-pending">

              <div className="stat-card-top">
                <span className="stat-icon">
                  <i className="bi bi-hourglass-split"></i>
                </span>

                <span className="stat-label">
                  Pending
                </span>
              </div>

              <h2>12</h2>

              <p>Facilities awaiting review</p>

              <a href="#facilities">
                Review requests
                <i className="bi bi-arrow-right"></i>
              </a>

            </article>

          </section>

          {/* APPROVALS AND QUICK ACTIONS */}
          <section className="admin-content-grid">

            {/* FACILITY APPROVALS */}
            <div className="admin-panel" id="facilities">

              <div className="panel-heading">

                <div>
                  <h2>Pending Facility Approvals</h2>

                  <p>
                    Facilities awaiting administrator review
                  </p>
                </div>

                <span className="panel-badge">
                  12 pending
                </span>

              </div>

              <div className="table-responsive">

                <table className="table admin-table align-middle">

                  <thead>
                    <tr>
                      <th>Facility</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        <strong>Kisumu Family Clinic</strong>
                        <small>Kisumu County</small>
                      </td>

                      <td>Clinic</td>

                      <td>
                        <span className="status-badge status-pending">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Afya Diagnostic Centre</strong>
                        <small>Nakuru County</small>
                      </td>

                      <td>Diagnostic</td>

                      <td>
                        <span className="status-badge status-pending">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Green Valley Laboratory</strong>
                        <small>Uasin Gishu County</small>
                      </td>

                      <td>Laboratory</td>

                      <td>
                        <span className="status-badge status-review">
                          Under review
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

              <p className="admin-demo-note">
                <i className="bi bi-info-circle"></i>
                Sample records for the interface demonstration.
              </p>

            </div>

            {/* QUICK ACTIONS */}
            <div className="admin-panel" id="settings">

              <div className="panel-heading">

                <div>
                  <h2>Quick Actions</h2>

                  <p>
                    Common administration tasks
                  </p>
                </div>

              </div>

              <div className="quick-actions">

                <a
                  href="#facilities"
                  className="quick-action"
                >
                  <span className="quick-action-icon">
                    <i className="bi bi-building-add"></i>
                  </span>

                  <span>
                    <strong>Review Facilities</strong>
                    <small>Check registration requests</small>
                  </span>

                  <i className="bi bi-chevron-right"></i>
                </a>

                <a
                  href="#users"
                  className="quick-action"
                >
                  <span className="quick-action-icon">
                    <i className="bi bi-person-gear"></i>
                  </span>

                  <span>
                    <strong>Manage Users</strong>
                    <small>Review user accounts and roles</small>
                  </span>

                  <i className="bi bi-chevron-right"></i>
                </a>

                <a
                  href="#reports"
                  className="quick-action"
                >
                  <span className="quick-action-icon">
                    <i className="bi bi-file-earmark-bar-graph"></i>
                  </span>

                  <span>
                    <strong>View Reports</strong>
                    <small>Review platform activity</small>
                  </span>

                  <i className="bi bi-chevron-right"></i>
                </a>

                <a
                  href="#settings"
                  className="quick-action"
                >
                  <span className="quick-action-icon">
                    <i className="bi bi-sliders"></i>
                  </span>

                  <span>
                    <strong>System Settings</strong>
                    <small>Review dashboard preferences</small>
                  </span>

                  <i className="bi bi-chevron-right"></i>
                </a>

              </div>

            </div>

          </section>

          {/* RECENT ACTIVITY */}
          <section
            className="admin-panel activity-panel"
            id="activity"
          >

            <div className="panel-heading">

              <div>
                <h2>Recent System Activity</h2>

                <p>
                  A sample view of activity across the platform
                </p>
              </div>

              <a href="#activity" className="panel-link">
                View all
              </a>

            </div>

            <div className="activity-item">

              <span className="activity-icon">
                <i className="bi bi-hospital"></i>
              </span>

              <div className="activity-description">
                <strong>New facility registration</strong>

                <p>
                  Kisumu Family Clinic submitted a registration request.
                </p>
              </div>

              <span className="activity-time">
                Sample entry
              </span>

            </div>

            <div className="activity-item">

              <span className="activity-icon">
                <i className="bi bi-person-plus"></i>
              </span>

              <div className="activity-description">
                <strong>New user account</strong>

                <p>
                  A healthcare worker account was registered.
                </p>
              </div>

              <span className="activity-time">
                Sample entry
              </span>

            </div>

            <div className="activity-item">

              <span className="activity-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </span>

              <div className="activity-description">
                <strong>Referral activity</strong>

                <p>
                  A referral record was added to the demonstration list.
                </p>
              </div>

              <span className="activity-time">
                Sample entry
              </span>

            </div>

          </section>

          {/* PLACEHOLDERS */}

          <section
            className="admin-panel placeholder-panel"
            id="users"
          >
            <h2>
              <i className="bi bi-people"></i> User Management
            </h2>

            <p>
              The user management table will be connected when the backend is ready.
            </p>
          </section>

          <section
            className="admin-panel placeholder-panel"
            id="referrals"
          >
            <h2>
              <i className="bi bi-arrow-left-right"></i> Referral Management
            </h2>

            <p>
              Referral records and their statuses will be loaded from the backend.
            </p>
          </section>

          <section
            className="admin-panel placeholder-panel"
            id="laboratory"
          >
            <h2>
              <i className="bi bi-droplet"></i> Laboratory Services
            </h2>

            <p>
              Laboratory requests and result workflows will be integrated here.
            </p>
          </section>

          <section
            className="admin-panel placeholder-panel"
            id="diagnostics"
          >
            <h2>
              <i className="bi bi-activity"></i> Diagnostic Services
            </h2>

            <p>
              Diagnostic service activity will be integrated here.
            </p>
          </section>

          <section
            className="admin-panel placeholder-panel"
            id="reports"
          >
            <h2>
              <i className="bi bi-bar-chart"></i> Reports
            </h2>

            <p>
              Reports will use real platform data once the backend is connected.
            </p>
          </section>

          {/* FOOTER */}
          <footer className="admin-footer">

            <p>
              &copy; {currentYear} CareConnect. All rights reserved.
            </p>

            <p>
              Connecting Healthcare, Simplifying Referrals.
            </p>

          </footer>

        </main>

      </div>
    </div>
  )
}

export default AdminDashboard