
import { useState } from 'react'

function IncomingRequests() {
  const [requests, setRequests] = useState([
    {
      id: 'LAB-001',
      patient: 'CC-00125',
      clinic: 'Kisumu Family Clinic',
      test: 'Full Blood Count',
      date: '09 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'LAB-002',
      patient: 'CC-00126',
      clinic: 'Green Valley Clinic',
      test: 'Malaria Test',
      date: '09 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'LAB-003',
      patient: 'CC-00127',
      clinic: 'Sunrise Medical Centre',
      test: 'Urinalysis',
      date: '08 Nov 2026',
      status: 'Accepted',
    },
  ])

  const updateStatus = (id, status) => {
    setRequests((previous) =>
      previous.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    )
  }

  return (
    <div className="lab-content">

      <div className="lab-welcome">
        <div>
          <span className="lab-eyebrow">
            LABORATORY MANAGEMENT
          </span>
          <h2>Incoming Test Requests</h2>
          <p>
            Review and manage test requests submitted
            by healthcare facilities.
          </p>
        </div>
      </div>

      <div className="lab-stat-grid">

        <div className="lab-stat-card">
          <div className="lab-stat-icon yellow">
            <i className="bi bi-inbox"></i>
          </div>
          <div>
            <span>Total Requests</span>
            <h3>{requests.length}</h3>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon orange">
            <i className="bi bi-hourglass-split"></i>
          </div>
          <div>
            <span>Pending Requests</span>
            <h3>
              {requests.filter(r => r.status === 'Pending').length}
            </h3>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <div>
            <span>Accepted Requests</span>
            <h3>
              {requests.filter(r => r.status === 'Accepted').length}
            </h3>
          </div>
        </div>

      </div>

      <div className="lab-panel">

        <div className="lab-panel-header">
          <div>
            <h4>Clinic Test Requests</h4>
            <p>Review requests and update their status.</p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table lab-table align-middle">

            <thead>
              <tr>
                <th>REQUEST ID</th>
                <th>PATIENT ID</th>
                <th>REFERRING CLINIC</th>
                <th>TEST REQUIRED</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td><strong>{request.id}</strong></td>
                  <td>{request.patient}</td>
                  <td>{request.clinic}</td>
                  <td>{request.test}</td>
                  <td>{request.date}</td>

                  <td>
                    <span className={`lab-status ${
                      request.status === 'Pending'
                        ? 'pending'
                        : request.status === 'Accepted'
                        ? 'accepted'
                        : 'completed'
                    }`}>
                      {request.status}
                    </span>
                  </td>

                  <td>
                    {request.status === 'Pending' ? (
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm"
                          style={{
                            background: '#006454',
                            color: 'white'
                          }}
                          onClick={() =>
                            updateStatus(request.id, 'Accepted')
                          }
                        >
                          Accept
                        </button>

                        <button
                          className="btn btn-sm"
                          style={{
                            background: '#E26D33',
                            color: 'white'
                          }}
                          onClick={() => {
                            const reason = window.prompt(
                              'Enter reason for rejecting this request:'
                            )

                            if (reason && reason.trim()) {
                              updateStatus(request.id, 'Rejected')
                            }
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-muted">Reviewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

export default IncomingRequests
