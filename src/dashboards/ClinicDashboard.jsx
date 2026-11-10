
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/clinic.css'

function ClinicDashboard() {
  const [userName] = useState('Healthcare User')

  const todayDate = new Date().toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  const currentYear = new Date().getFullYear()

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?')

    if (confirmed) {
      window.alert('Demo only: connect logout to the authentication system.')
    }
  }

  const menuItems = [
    { icon: 'bi-grid-1x2-fill', label: 'Home', path: '/clinic', active: true },
    { icon: 'bi-arrow-left-right', label: 'Patient Referrals', path: '/referrals' },
    { icon: 'bi-file-earmark-medical', label: 'Laboratory Results', path: '/lab-results' },
    { icon: 'bi-activity', label: 'Diagnostic Services', path: '/diagnostics' },
    { icon: 'bi-geo-alt', label: 'Track Referrals', path: '/track-referrals' },
    { icon: 'bi-calendar-check', label: 'Appointments', path: '/appointments' }
  ]

  const accountItems = [
    { icon: 'bi-person-circle', label: 'My Profile', path: '/profile' },
    { icon: 'bi-headset', label: 'Help & Support', path: '/contact' }
  ]

  const renderMenu = (items) => items.map((item) => (
    <Link
      key={item.label}
      to={item.path}
      className={`sidebar-link ${item.active ? 'active' : ''}`}
    >
      <i className={`bi ${item.icon}`}></i>
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <div className="cc-home">

      {/* Top Navigation */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container-fluid px-3 px-lg-4">

          <button
            className="btn btn-light d-lg-none me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-label="Open navigation"
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <Link className="navbar-brand fw-bold text-info" to="/clinic">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            CareConnect
          </Link>

          <div className="ms-auto d-flex align-items-center gap-3">
            <button
              className="btn btn-light position-relative"
              type="button"
              aria-label="Notifications"
            >
              <i className="bi bi-bell fs-5"></i>
              <span className="notification-dot"></span>
            </button>

            <div className="dropdown">
              <button
                className="btn d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="user-avatar">H</span>
                <span className="d-none d-sm-inline text-start">
                  <strong className="d-block small">{userName}</strong>
                  <small className="text-muted">My Account</small>
                </span>
                <i className="bi bi-chevron-down small"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person me-2"></i>
                    My Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="cc-layout">

        {/* Desktop Sidebar */}
        <aside className="cc-sidebar d-none d-lg-flex">
          <div className="sidebar-content">
            <p className="sidebar-heading">MAIN MENU</p>

            {renderMenu(menuItems)}

            <p className="sidebar-heading mt-4">ACCOUNT</p>

            {renderMenu(accountItems)}

            <div className="sidebar-help mt-auto">
              <i className="bi bi-shield-check fs-3 text-info"></i>
              <h6 className="fw-bold mt-2">CareConnect</h6>
              <p className="small text-muted mb-0">
                Connecting healthcare, simplifying referrals.
              </p>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div
          className="offcanvas offcanvas-start cc-mobile-sidebar"
          tabIndex="-1"
          id="mobileSidebar"
          aria-labelledby="mobileSidebarLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h5
              className="offcanvas-title text-info fw-bold"
              id="mobileSidebarLabel"
            >
              <i className="bi bi-heart-pulse-fill me-2"></i>
              CareConnect
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body sidebar-content">
            <p className="sidebar-heading">MAIN MENU</p>
            {renderMenu(menuItems)}

            <p className="sidebar-heading mt-4">ACCOUNT</p>
            {renderMenu(accountItems)}
          </div>
        </div>

        {/* Main Content */}
        <main className="cc-main">

          {/* Welcome Section */}
          <section className="welcome-banner">
            <div>
              <p className="welcome-label mb-2">
                <i className="bi bi-sun me-1"></i>
                YOUR WORKSPACE
              </p>

              <h1 className="fw-bold mb-2">
                Welcome back, <span>{userName}</span>!
              </h1>

              <p className="mb-0 welcome-description">
                Manage patient referrals, coordinate diagnostic services,
                and access laboratory results from one place.
              </p>
            </div>

            <div className="welcome-illustration d-none d-md-flex">
              <i className="bi bi-hospital"></i>
            </div>
          </section>

          {/* Page Heading */}
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-4 mb-3">
            <div>
              <h4 className="fw-bold mb-1">Dashboard Overview</h4>
              <p className="text-muted mb-0 small">
                Here is an overview of your facility's activities.
              </p>
            </div>

            <span className="date-label">
              <i className="bi bi-calendar3 me-2"></i>
              {todayDate}
            </span>
          </div>

          {/* Statistics Cards */}
          <section className="row g-3">

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-top">
                  <span>Total Referrals</span>
                  <span className="stat-icon stat-blue">
                    <i className="bi bi-arrow-left-right"></i>
                  </span>
                </div>
                <h2>128</h2>
                <p className="mb-0 text-muted small">All recorded referrals</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-top">
                  <span>Pending Requests</span>
                  <span className="stat-icon stat-orange">
                    <i className="bi bi-hourglass-split"></i>
                  </span>
                </div>
                <h2>12</h2>
                <p className="mb-0 text-muted small">Awaiting further action</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-top">
                  <span>Results Available</span>
                  <span className="stat-icon stat-green">
                    <i className="bi bi-file-earmark-check"></i>
                  </span>
                </div>
                <h2>24</h2>
                <p className="mb-0 text-muted small">Results ready for review</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-top">
                  <span>Appointments</span>
                  <span className="stat-icon stat-purple">
                    <i className="bi bi-calendar2-check"></i>
                  </span>
                </div>
                <h2>8</h2>
                <p className="mb-0 text-muted small">Scheduled appointments</p>
              </div>
            </div>

          </section>

          {/* Quick Actions */}
          <section className="mt-4">
            <h5 className="fw-bold mb-3">Quick Actions</h5>

            <div className="row g-3">

              <div className="col-12 col-md-4">
                <Link to="/referrals" className="quick-action">
                  <span className="quick-action-icon">
                    <i className="bi bi-plus-circle"></i>
                  </span>
                  <span>
                    <strong className="d-block">Create Referral</strong>
                    <small className="text-muted">Start a patient referral</small>
                  </span>
                  <i className="bi bi-chevron-right ms-auto"></i>
                </Link>
              </div>

              <div className="col-12 col-md-4">
                <Link to="/lab-results" className="quick-action">
                  <span className="quick-action-icon">
                    <i className="bi bi-file-earmark-medical"></i>
                  </span>
                  <span>
                    <strong className="d-block">View Lab Results</strong>
                    <small className="text-muted">Review available results</small>
                  </span>
                  <i className="bi bi-chevron-right ms-auto"></i>
                </Link>
              </div>

              <div className="col-12 col-md-4">
                <Link to="/track-referrals" className="quick-action">
                  <span className="quick-action-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <span>
                    <strong className="d-block">Track Referral</strong>
                    <small className="text-muted">Check referral progress</small>
                  </span>
                  <i className="bi bi-chevron-right ms-auto"></i>
                </Link>
              </div>

            </div>
          </section>

          {/* Recent Referrals */}
          <section className="mt-4 mb-4">
            <div className="content-card">

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Recent Referrals</h5>
                  <p className="text-muted small mb-0">
                    A sample view of recent referral activity.
                  </p>
                </div>

                <Link
                  to="/referrals"
                  className="text-info text-decoration-none fw-semibold small"
                >
                  View All <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              <div className="table-responsive">
                <table className="table align-middle cc-table mb-0">
                  <thead>
                    <tr>
                      <th>Referral Code</th>
                      <th>Service</th>
                      <th>Destination</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="fw-semibold">CC-1024</td>
                      <td>Laboratory Test</td>
                      <td>Central Laboratory</td>
                      <td>26 Oct 2026</td>
                      <td>
                        <span className="status-badge status-pending">Pending</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="fw-semibold">CC-1023</td>
                      <td>Ultrasound</td>
                      <td>Referral Hospital</td>
                      <td>25 Oct 2026</td>
                      <td>
                        <span className="status-badge status-completed">Completed</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="fw-semibold">CC-1022</td>
                      <td>X-Ray</td>
                      <td>Diagnostic Centre</td>
                      <td>24 Oct 2026</td>
                      <td>
                        <span className="status-badge status-progress">In Progress</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="small text-muted mt-3 mb-0">
                <i className="bi bi-info-circle me-1"></i>
                Example data only. Real referral records will come from the backend.
              </p>

            </div>
          </section>

          {/* Footer */}
          <footer className="cc-home-footer">
            <p className="mb-0">
              &copy; {currentYear} CareConnect.
              Connecting Healthcare, Simplifying Referrals.
            </p>
          </footer>

        </main>
      </div>
    </div>
  )
}

export default ClinicDashboard
