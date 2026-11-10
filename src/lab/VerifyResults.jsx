
import { useState } from 'react'

function VerifyResults() {
  const [results, setResults] = useState([
    {
      id: 'RES-001',
      patient: 'John Kamau',
      patientId: 'CC-00125',
      test: 'Full Blood Count',
      result: 'Normal',
      referenceRange: 'As per lab reference range',
      technician: 'Lab Technician 1',
      status: 'Pending Verification',
    },
    {
      id: 'RES-002',
      patient: 'Mary Achieng',
      patientId: 'CC-00126',
      test: 'Malaria Test',
      result: 'Negative',
      referenceRange: 'Negative',
      technician: 'Lab Technician 2',
      status: 'Pending Verification',
    },
    {
      id: 'RES-003',
      patient: 'Peter Otieno',
      patientId: 'CC-00127',
      test: 'Blood Sugar',
      result: '5.2 mmol/L',
      referenceRange: 'Use applicable lab reference range',
      technician: 'Lab Technician 1',
      status: 'Pending Verification',
    },
  ])

  const [selectedResult, setSelectedResult] = useState(null)
  const [remarks, setRemarks] = useState('')

  const updateStatus = (id, status) => {
    setResults((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    )

    setSelectedResult(null)
    setRemarks('')
  }

  const pendingCount = results.filter(
    (item) => item.status === 'Pending Verification'
  ).length

  const verifiedCount = results.filter(
    (item) => item.status === 'Verified'
  ).length

  const rejectedCount = results.filter(
    (item) => item.status === 'Rejected'
  ).length

  return (
    <div className="lab-page">
      <div className="lab-page-header">
        <div>
          <h2>Verify Test Results</h2>
          <p>Review and approve laboratory results before release.</p>
        </div>
      </div>

      <div className="lab-verification-stats">
        <div className="lab-verification-stat">
          <span>Pending Verification</span>
          <h3>{pendingCount}</h3>
        </div>

        <div className="lab-verification-stat">
          <span>Verified Results</span>
          <h3>{verifiedCount}</h3>
        </div>

        <div className="lab-verification-stat">
          <span>Rejected Results</span>
          <h3>{rejectedCount}</h3>
        </div>
      </div>

      <div className="lab-table-card">
        <h4>Results Awaiting Review</h4>

        <div className="table-responsive">
          <table className="table lab-table">
            <thead>
              <tr>
                <th>Result ID</th>
                <th>Patient</th>
                <th>Test</th>
                <th>Result</th>
                <th>Technician</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {results.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {item.patient}
                    <br />
                    <small>{item.patientId}</small>
                  </td>
                  <td>{item.test}</td>
                  <td>{item.result}</td>
                  <td>{item.technician}</td>
                  <td>
                    <span
                      className={`lab-status ${
                        item.status === 'Verified'
                          ? 'verified'
                          : item.status === 'Rejected'
                          ? 'rejected'
                          : 'pending'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === 'Pending Verification' ? (
                      <button
                        className="lab-review-btn"
                        onClick={() => setSelectedResult(item)}
                      >
                        Review
                      </button>
                    ) : (
                      <span className="text-muted">Reviewed</span>
                    )}
                  </td>
                </tr>
              ))}

              {results.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">
                    No results available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedResult && (
        <div className="lab-review-overlay">
          <div className="lab-review-modal">
            <h4>Review Laboratory Result</h4>

            <p><strong>Result ID:</strong> {selectedResult.id}</p>
            <p><strong>Patient:</strong> {selectedResult.patient}</p>
            <p><strong>Patient ID:</strong> {selectedResult.patientId}</p>
            <p><strong>Test:</strong> {selectedResult.test}</p>
            <p><strong>Result:</strong> {selectedResult.result}</p>
            <p><strong>Reference Range:</strong> {selectedResult.referenceRange}</p>
            <p><strong>Entered By:</strong> {selectedResult.technician}</p>

            <label>Verification Remarks</label>
            <textarea
              rows="3"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter review comments..."
            />

            <div className="lab-review-actions">
              <button
                className="lab-approve-btn"
                onClick={() => updateStatus(selectedResult.id, 'Verified')}
              >
                Verify Result
              </button>

              <button
                className="lab-reject-btn"
                onClick={() => updateStatus(selectedResult.id, 'Rejected')}
              >
                Reject Result
              </button>

              <button
                className="lab-cancel-btn"
                onClick={() => {
                  setSelectedResult(null)
                  setRemarks('')
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyResults
