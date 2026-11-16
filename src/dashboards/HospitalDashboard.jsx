
import { Link } from 'react-router-dom'

function HospitalDashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <div className="container-fluid py-4">

      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-success">
            Hospital Dashboard
          </h2>
          <p className="text-secondary mb-0">
            Welcome to your CareConnect facility portal.
          </p>
        </div>

        <button
          className="btn btn-outline-danger"
          onClick={() => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user')
            window.location.href = '/login'
          }}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>

      {/* Welcome Card */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-4">
          <h4 className="fw-bold">
            Welcome, {user.username || 'Hospital User'}!
          </h4>

          <p className="text-secondary mb-1">
            You are logged in as a facility user.
          </p>

          <span className="badge bg-success">
            {user.role || 'Facility'}
          </span>
        </div>
      </div>

      {/* Dashboard Statistics */}
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <i className="bi bi-arrow-left-right fs-2 text-success"></i>
              <h6 className="text-secondary mt-3">
                Referrals
              </h6>
              <h3 className="fw-bold">0</h3>
              <p className="text-secondary small mb-0">
                Total referrals
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <i className="bi bi-file-earmark-medical fs-2 text-info"></i>
              <h6 className="text-secondary mt-3">
                Laboratory Results
              </h6>
              <h3 className="fw-bold">0</h3>
              <p className="text-secondary small mb-0">
                Available results
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <i className="bi bi-calendar-check fs-2 text-warning"></i>
              <h6 className="text-secondary mt-3">
                Appointments
              </h6>
              <h3 className="fw-bold">0</h3>
              <p className="text-secondary small mb-0">
                Scheduled appointments
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">

          <h5 className="fw-bold mb-4">
            Quick Actions
          </h5>

          <div className="row g-3">

            <div className="col-md-4">
              <Link
                to="/hospital"
                className="btn btn-outline-success w-100 py-3"
              >
                <i className="bi bi-plus-circle me-2"></i>
                Create Referral
              </Link>
            </div>

            <div className="col-md-4">
              <Link
                to="/hospital"
                className="btn btn-outline-info w-100 py-3"
              >
                <i className="bi bi-file-earmark-medical me-2"></i>
                View Laboratory Results
              </Link>
            </div>

            <div className="col-md-4">
              <Link
                to="/hospital"
                className="btn btn-outline-primary w-100 py-3"
              >
                <i className="bi bi-person-circle me-2"></i>
                My Profile
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default HospitalDashboard
