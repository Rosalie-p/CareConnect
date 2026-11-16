
import { useState } from 'react'

function TrackReferrals() {
  const [referrals] = useState([
    {
      id: 'CC-1024',
      patientId: 'CC-00125',
      patientName: 'Patient 001',
      service: 'Laboratory Test',
      destination: 'Central Laboratory',
      date: '10 Nov 2026',
      status: 'Pending',
      progress: 25,
      description: 'Waiting for the receiving facility to review the request.',
    },
    {
      id: 'CC-1023',
      patientId: 'CC-00126',
      patientName: 'Patient 002',
      service: 'Ultrasound',
      destination: 'Referral Hospital',
      date: '09 Nov 2026',
      status: 'Accepted',
      progress: 50,
      description: 'The receiving facility has accepted the referral.',
    },
    {
      id: 'CC-1022',
      patientId: 'CC-00127',
      patientName: 'Patient 003',
      service: 'X-Ray',
      destination: 'Diagnostic Centre',
      date: '08 Nov 2026',
      status: 'In Progress',
      progress: 75,
      description: 'The requested service is currently being processed.',
    },
    {
      id: 'CC-1021',
      patientId: 'CC-00128',
      patientName: 'Patient 004',
      service: 'CT Scan',
      destination: 'Referral Hospital',
      date: '07 Nov 2026',
      status: 'Completed',
      progress: 100,
      description: 'The referral has been completed by the receiving facility.',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedReferral, setSelectedReferral] = useState(null)

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-success'
      case 'In Progress':
        return 'bg-info'
      case 'Accepted':
        return 'bg-primary'
      default:
        return 'bg-warning text-dark'
    }
  }

  const filteredReferrals = referrals.filter((referral) => {
    const matchesSearch =
      referral.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.service.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' || referral.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="container-fluid py-4">

      {/* Page Header */}
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Track Referrals</h3>
        <p className="text-muted mb-0">
          Monitor the progress of patient referrals sent to other healthcare facilities.
        </p>
      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Total Referrals</small>
              <h3 className="fw-bold mt-2 mb-0">{referrals.length}</h3>
              <i className="bi bi-arrow-left-right fs-3 text-info"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Pending</small>
              <h3 className="fw-bold mt-2 mb-0">
                {referrals.filter((r) => r.status === 'Pending').length}
              </h3>
              <i className="bi bi-hourglass-split fs-3 text-warning"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">In Progress</small>
              <h3 className="fw-bold mt-2 mb-0">
                {referrals.filter((r) => r.status === 'In Progress').length}
              </h3>
              <i className="bi bi-arrow-repeat fs-3 text-info"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Completed</small>
              <h3 className="fw-bold mt-2 mb-0">
                {referrals.filter((r) => r.status === 'Completed').length}
              </h3>
              <i className="bi bi-check-circle fs-3 text-success"></i>
            </div>
          </div>
        </div>

      </div>

      {/* Referral Tracking Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-body">

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">

            <div>
              <h5 className="fw-bold mb-1">Referral Tracking Records</h5>
              <p className="text-muted small mb-0">
                Check the current status of each referral.
              </p>
            </div>

            <span className="badge bg-light text-dark p-2">
              {filteredReferrals.length} Records
            </span>

          </div>

          {/* Search and Filter */}
          <div className="row g-3 mb-4">

            <div className="col-12 col-md-7">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by referral code, patient or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

          </div>

          {/* Table */}
          <div className="table-responsive">

            <table className="table align-middle">

              <thead>
                <tr>
                  <th>Referral Code</th>
                  <th>Patient</th>
                  <th>Service</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredReferrals.length > 0 ? (
                  filteredReferrals.map((referral) => (
                    <tr key={referral.id}>

                      <td className="fw-semibold">{referral.id}</td>

                      <td>
                        <strong>{referral.patientName}</strong>
                        <small className="d-block text-muted">
                          {referral.patientId}
                        </small>
                      </td>

                      <td>{referral.service}</td>

                      <td>{referral.destination}</td>

                      <td>{referral.date}</td>

                      <td>
                        <span className={`badge ${getStatusClass(referral.status)}`}>
                          {referral.status}
                        </span>
                      </td>

                      <td style={{ minWidth: '110px' }}>
                        <div className="progress" style={{ height: '7px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${referral.progress}%` }}
                            aria-valuenow={referral.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small className="text-muted">
                          {referral.progress}%
                        </small>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => setSelectedReferral(referral)}
                        >
                          <i className="bi bi-eye me-1"></i>
                          View
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-4">
                      No referrals found.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

          <p className="small text-muted mb-0 mt-3">
            <i className="bi bi-info-circle me-1"></i>
            Example records only. Live referral statuses will be updated
            by the receiving facilities through the backend.
          </p>

        </div>
      </div>

      {/* Referral Details Modal */}
      {selectedReferral && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <div>
                  <h5 className="modal-title fw-bold">Referral Details</h5>
                  <small className="text-muted">
                    {selectedReferral.id}
                  </small>
                </div>

                <button
                  className="btn-close"
                  onClick={() => setSelectedReferral(null)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">

                <div className="row g-3">

                  <div className="col-md-6">
                    <small className="text-muted">Patient Name</small>
                    <p className="fw-semibold">
                      {selectedReferral.patientName}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Patient ID</small>
                    <p className="fw-semibold">
                      {selectedReferral.patientId}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Requested Service</small>
                    <p className="fw-semibold">
                      {selectedReferral.service}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Receiving Facility</small>
                    <p className="fw-semibold">
                      {selectedReferral.destination}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Date Submitted</small>
                    <p className="fw-semibold">
                      {selectedReferral.date}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Current Status</small>
                    <p>
                      <span className={`badge ${getStatusClass(selectedReferral.status)}`}>
                        {selectedReferral.status}
                      </span>
                    </p>
                  </div>

                  <div className="col-12">
                    <label className="fw-semibold mb-2">
                      Referral Progress
                    </label>

                    <div className="progress" style={{ height: '10px' }}>
                      <div
                        className="progress-bar"
                        style={{ width: `${selectedReferral.progress}%` }}
                      ></div>
                    </div>

                    <small className="text-muted">
                      {selectedReferral.progress}% completed
                    </small>
                  </div>

                  <div className="col-12">
                    <div className="bg-light rounded p-3">
                      <strong>Latest Update</strong>
                      <p className="text-muted mb-0 mt-2">
                        {selectedReferral.description}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedReferral(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default TrackReferrals
