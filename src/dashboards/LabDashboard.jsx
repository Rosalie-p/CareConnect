import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import IncomingRequests from '../lab/IncomingRequests'
import SampleManagement from '../lab/SampleManagement'
import TestsInProgress from '../lab/TestsInProgress'
import EnterTestResults from '../lab/EnterTestResults'
import VerifyResults from '../lab/VerifyResults'
import TestHistory from '../lab/TestHistory'
import Profile from '../lab/LabProfile'
import SentResults from '../lab/SentResults'

function LabDashboard() {
  const navigate = useNavigate()
  const location = useLocation()

  const [searchTerm, setSearchTerm] = useState('')

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-grid', path: '/lab' },
    {
      name: 'Incoming Requests',
      icon: 'bi-inbox',
      path: '/lab/requests',
    },
    {
      name: 'Sample Management',
      icon: 'bi-droplet',
      path: '/lab/samples',
    },
    {
      name: 'Tests in Progress',
      icon: 'bi-microscope',
      path: '/lab/tests',
    },
    {
      name: 'Enter Test Results',
      icon: 'bi-file-earmark-medical',
      path: '/lab/results/enter',
    },
    {
      name: 'Verify Results',
      icon: 'bi-file-check',
      path: '/lab/results/verify',
    },
    {
      name: 'Sent Results',
      icon: 'bi-send',
      path: '/lab/results/sent',
    },
    {
      name: 'Test History',
      icon: 'bi-clock-history',
      path: '/lab/results/history',
    },
    {
      name: 'Laboratory Profile',
      icon: 'bi-building',
      path: '/lab/profile',
    },
  ]

  const requests = [
    {
      id: 'LAB-001',
      patient: 'Patient CC-00125',
      clinic: 'Kisumu Family Clinic',
      test: 'Full Blood Count',
      date: '09 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'LAB-002',
      patient: 'Patient CC-00126',
      clinic: 'Green Valley Clinic',
      test: 'Malaria Test',
      date: '09 Nov 2026',
      status: 'Accepted',
    },
    {
      id: 'LAB-003',
      patient: 'Patient CC-00127',
      clinic: 'Sunrise Medical Centre',
      test: 'Urinalysis',
      date: '08 Nov 2026',
      status: 'Processing',
    },
    {
      id: 'LAB-004',
      patient: 'Patient CC-00128',
      clinic: 'Kisumu Family Clinic',
      test: 'Blood Sugar Test',
      date: '08 Nov 2026',
      status: 'Completed',
    },
  ]

  const filteredRequests = useMemo(() => {
    return requests.filter((request) =>
      `${request.id} ${request.patient} ${request.clinic} ${request.test}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  /*
   * Determine which laboratory page is currently open.
   */
  const getActivePage = () => {
    switch (location.pathname) {
      case '/lab/requests':
        return 'Incoming Requests'

      case '/lab/samples':
        return 'Sample Management'

      case '/lab/tests':
        return 'Tests in Progress'

      case '/lab/results/enter':
        return 'Enter Test Results'

      case '/lab/results/verify':
        return 'Verify Results'

      case '/lab/results/sent':
        return 'Sent Results'

      case '/lab/results/history':
        return 'Test History'

      case '/lab/profile':
        return 'Laboratory Profile'

      default:
        return 'Dashboard'
    }
  }

  const activeMenu = getActivePage()

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'lab-status pending'

      case 'Accepted':
        return 'lab-status accepted'

      case 'Processing':
        return 'lab-status processing'

      case 'Completed':
        return 'lab-status completed'

      default:
        return 'lab-status'
    }
  }

  /*
   * Navigate to a laboratory page.
   */
  const handleNavigation = (item) => {
    navigate(item.path)
  }

  /*
   * Display the correct page inside the laboratory layout.
   */
  const renderPageContent = () => {
    switch (location.pathname) {
      case '/lab/requests':
        return <IncomingRequests />

      case '/lab/samples':
        return <SampleManagement />

      case '/lab/tests':
        return <TestsInProgress />

      case '/lab/results/enter':
        return <EnterTestResults />

      case '/lab/results/verify':
        return <VerifyResults />

      case '/lab/results/sent':
        return <SentResults />

      case '/lab/results/history':
          return <TestHistory />

       case '/lab/profile':
        return (
          <div className="lab-content">
            <section className="lab-welcome">
              <div>
                <span className="lab-eyebrow">
                  LABORATORY ACCOUNT
                </span>

                <h2>Laboratory Profile</h2>

                <p>
                  View and manage laboratory account information.
                </p>
              </div>
            </section>

            <section className="lab-panel">
              <div className="lab-panel-header">
                <div>
                  <h4>Laboratory Information</h4>
                  <p>Current laboratory account details.</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <strong>Laboratory Name</strong>
                  <p className="text-muted">
                    CareConnect Laboratory
                  </p>
                </div>

                <div className="col-md-6">
                  <strong>Location</strong>
                  <p className="text-muted">
                    Kisumu, Kenya
                  </p>
                </div>

                <div className="col-md-6">
                  <strong>Account Type</strong>
                  <p className="text-muted">
                    Laboratory Account
                  </p>
                </div>

                <div className="col-md-6">
                  <strong>Contact</strong>
                  <p className="text-muted">
                    Laboratory Administrator
                  </p>
                </div>
              </div>
            </section>
          </div>
        )

      default:
        return (
          <>
            {/* Welcome section */}
            <section className="lab-welcome">

              <div>
                <span className="lab-eyebrow">
                  LABORATORY OVERVIEW
                </span>

                <h2>
                  Welcome to your Laboratory Dashboard
                </h2>

                <p>
                  Manage test requests, track samples and deliver
                  verified results to healthcare facilities.
                </p>
              </div>

              <div className="lab-date">
                <i className="bi bi-calendar3"></i>
                {today}
              </div>

            </section>

            {/* Statistics */}
            <section className="lab-stat-grid">

              <div className="lab-stat-card">
                <div className="lab-stat-icon green">
                  <i className="bi bi-inbox"></i>
                </div>

                <div>
                  <span>New Requests</span>
                  <h3>24</h3>
                  <small>Awaiting review</small>
                </div>
              </div>

              <div className="lab-stat-card">
                <div className="lab-stat-icon orange">
                  <i className="bi bi-droplet"></i>
                </div>

                <div>
                  <span>Samples Received</span>
                  <h3>12</h3>
                  <small>Recorded samples</small>
                </div>
              </div>

              <div className="lab-stat-card">
                <div className="lab-stat-icon yellow">
                  <i className="bi bi-microscope"></i>
                </div>

                <div>
                  <span>Tests Processing</span>
                  <h3>8</h3>
                  <small>Currently in progress</small>
                </div>
              </div>

              <div className="lab-stat-card">
                <div className="lab-stat-icon green">
                  <i className="bi bi-file-earmark-check"></i>
                </div>

                <div>
                  <span>Results Ready</span>
                  <h3>15</h3>
                  <small>
                    Ready for verification or release
                  </small>
                </div>
              </div>

            </section>

            {/* Recent requests */}
            <section className="lab-panel">

              <div className="lab-panel-header">

                <div>
                  <h4>Recent Test Requests</h4>
                  <p>
                    Requests received from healthcare facilities
                  </p>
                </div>

                <button
                  className="lab-outline-button"
                  onClick={() => navigate('/lab/requests')}
                >
                  View All
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

              <div className="lab-search">

                <i className="bi bi-search"></i>

                <input
                  type="text"
                  placeholder="Search by request ID, patient or clinic..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                />

              </div>

              <div className="table-responsive">

                <table className="table lab-table align-middle">

                  <thead>
                    <tr>
                      <th>REQUEST ID</th>
                      <th>PATIENT</th>
                      <th>REFERRING CLINIC</th>
                      <th>TEST</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>

                  <tbody>

                    {filteredRequests.map((request) => (

                      <tr key={request.id}>

                        <td>
                          <strong>{request.id}</strong>
                        </td>

                        <td>{request.patient}</td>

                        <td>{request.clinic}</td>

                        <td>{request.test}</td>

                        <td>{request.date}</td>

                        <td>
                          <span
                            className={getStatusClass(
                              request.status
                            )}
                          >
                            {request.status}
                          </span>
                        </td>

                        <td>
                          <button
                            className="lab-view-button"
                            onClick={() =>
                              navigate('/lab/requests')
                            }
                          >
                            View
                          </button>
                        </td>

                      </tr>

                    ))}

                    {filteredRequests.length === 0 && (
                      <tr>
                        <td
                          colSpan="7"
                          className="text-center py-4"
                        >
                          No matching requests found.
                        </td>
                      </tr>
                    )}

                  </tbody>

                </table>

              </div>

            </section>

            {/* Bottom panels */}
            <section className="lab-bottom-grid">

              {/* Workflow */}
              <div className="lab-panel">

                <div className="lab-panel-header">
                  <div>
                    <h4>Laboratory Workflow</h4>
                    <p>
                      Stages of processing test requests
                    </p>
                  </div>
                </div>

                <div className="lab-workflow">

                  <div className="lab-workflow-item">
                    <span className="workflow-number">
                      01
                    </span>

                    <div>
                      <strong>Receive Request</strong>
                      <small>
                        Review clinic test requests
                      </small>
                    </div>
                  </div>

                  <div className="lab-workflow-item">
                    <span className="workflow-number">
                      02
                    </span>

                    <div>
                      <strong>Receive Sample</strong>
                      <small>
                        Record and inspect specimens
                      </small>
                    </div>
                  </div>

                  <div className="lab-workflow-item">
                    <span className="workflow-number">
                      03
                    </span>

                    <div>
                      <strong>Conduct Test</strong>
                      <small>
                        Perform the requested laboratory test
                      </small>
                    </div>
                  </div>

                  <div className="lab-workflow-item">
                    <span className="workflow-number">
                      04
                    </span>

                    <div>
                      <strong>Verify and Send</strong>
                      <small>
                        Release verified results to the clinic
                      </small>
                    </div>
                  </div>

                </div>

              </div>

              {/* Quick actions */}
              <div className="lab-panel">

                <div className="lab-panel-header">
                  <div>
                    <h4>Quick Actions</h4>
                    <p>
                      Frequently used laboratory tasks
                    </p>
                  </div>
                </div>

                <div className="lab-quick-actions">

                  <button
                    onClick={() =>
                      navigate('/lab/requests')
                    }
                  >
                    <i className="bi bi-inbox"></i>
                    <span>Review Requests</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </button>

                  <button
                    onClick={() =>
                      navigate('/lab/samples')
                    }
                  >
                    <i className="bi bi-droplet"></i>
                    <span>Record Samples</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </button>

                  <button
                    onClick={() =>
                      navigate('/lab/results/enter')
                    }
                  >
                    <i className="bi bi-file-earmark-medical"></i>
                    <span>Enter Test Results</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </button>

                  <button
                    onClick={() =>
                      navigate('/lab/results/sent')
                    }
                  >
                    <i className="bi bi-send"></i>
                    <span>View Sent Results</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </button>

                </div>

              </div>

            </section>
          </>
        )
    }
  }

  return (
    <div className="lab-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="lab-sidebar">

        <div className="lab-brand">

          <div className="lab-brand-icon">
            <i className="bi bi-hospital"></i>
          </div>

          <div>
            <h4>CareConnect</h4>
            <span>Laboratory Portal</span>
          </div>

        </div>

        <div className="lab-sidebar-heading">
          WORKSPACE
        </div>

        <nav className="lab-navigation">

          {menuItems.map((item) => (

            <button
              key={item.name}
              className={`lab-nav-link ${
                activeMenu === item.name
                  ? 'active'
                  : ''
              }`}
              onClick={() =>
                handleNavigation(item)
              }
            >

              <i
                className={`bi ${item.icon}`}
              ></i>

              <span>{item.name}</span>

            </button>

          ))}

        </nav>

        <div className="lab-sidebar-bottom">

          <div className="lab-profile">

            <div className="lab-avatar">
              L
            </div>

            <div>
              <strong>Laboratory Staff</strong>
              <small>Laboratory Account</small>
            </div>

          </div>

          <button
            className="lab-logout"
            onClick={() =>
              alert(
                'Logout functionality will be connected to authentication.'
              )
            }
          >
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="lab-main">

        {/* Topbar */}
        <header className="lab-topbar">

          <div>

            <span className="lab-topbar-label">
              CARECONNECT / LABORATORY
            </span>

            <h5>{activeMenu}</h5>

          </div>

          <div className="lab-topbar-actions">

            <button
              className="lab-icon-button"
              title="Notifications"
            >
              <i className="bi bi-bell"></i>
              <span className="lab-notification-dot"></span>
            </button>

            <div className="lab-user">

              <div className="lab-avatar">
                L
              </div>

              <div>
                <strong>Laboratory Staff</strong>
                <small>Laboratory</small>
              </div>

            </div>

          </div>

        </header>

        {/* Page content */}
        {renderPageContent()}

        {/* Footer */}
        <footer className="lab-footer">

          <span>
            © {new Date().getFullYear()} CareConnect.
          </span>

          <span>
            Connecting Healthcare, Simplifying Referrals.
          </span>

        </footer>

      </main>

    </div>
  )
}

export default LabDashboard

