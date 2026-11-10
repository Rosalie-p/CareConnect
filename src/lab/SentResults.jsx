import { useMemo, useState } from 'react'

function SentResults() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedResult, setSelectedResult] = useState(null)

  const [results] = useState([
    {
      id: 'RES-001',
      testId: 'TEST-001',
      patient: 'CC-00120',
      clinic: 'Kisumu Family Clinic',
      test: 'Full Blood Count',
      technician: 'John Kamau',
      verifiedBy: 'Dr. Mary Wanjiku',
      dateSent: '09 Nov 2026',
      status: 'Delivered',
    },
    {
      id: 'RES-002',
      testId: 'TEST-002',
      patient: 'CC-00121',
      clinic: 'Green Valley Clinic',
      test: 'Malaria Test',
      technician: 'Mary Achieng',
      verifiedBy: 'Dr. Peter Otieno',
      dateSent: '09 Nov 2026',
      status: 'Delivered',
    },
    {
      id: 'RES-003',
      testId: 'TEST-003',
      patient: 'CC-00122',
      clinic: 'Sunrise Medical Centre',
      test: 'Urinalysis',
      technician: 'Peter Otieno',
      verifiedBy: 'Dr. Jane Wanjiku',
      dateSent: '08 Nov 2026',
      status: 'Awaiting Acknowledgement',
    },
    {
      id: 'RES-004',
      testId: 'TEST-004',
      patient: 'CC-00123',
      clinic: 'Kisumu Family Clinic',
      test: 'Blood Sugar Test',
      technician: 'Jane Wanjiku',
      verifiedBy: 'Dr. Mary Wanjiku',
      dateSent: '08 Nov 2026',
      status: 'Delivered',
    },
  ])

  const filteredResults = useMemo(() => {
    return results.filter((result) =>
      `${result.id} ${result.testId} ${result.patient} ${result.clinic} ${result.test}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  }, [results, searchTerm])

  const delivered = results.filter(
    (result) => result.status === 'Delivered'
  ).length

  const awaiting = results.filter(
    (result) => result.status === 'Awaiting Acknowledgement'
  ).length

  return (
    <div className="lab-content">

      {/* Page heading */}
      <section className="lab-welcome">
        <div>
          <span className="lab-eyebrow">
            LABORATORY MANAGEMENT
          </span>

          <h2>Sent Results</h2>

          <p>
            Manage verified laboratory reports released to
            referring healthcare facilities.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="lab-stat-grid">

        <div className="lab-stat-card">
          <div className="lab-stat-icon green">
            <i className="bi bi-send-check"></i>
          </div>

          <div>
            <span>Total Results Sent</span>
            <h3>{results.length}</h3>
            <small>Released laboratory reports</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon orange">
            <i className="bi bi-check-circle"></i>
          </div>

          <div>
            <span>Delivered</span>
            <h3>{delivered}</h3>
            <small>Successfully delivered</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon yellow">
            <i className="bi bi-clock-history"></i>
          </div>

          <div>
            <span>Awaiting Acknowledgement</span>
            <h3>{awaiting}</h3>
            <small>Waiting for clinic confirmation</small>
          </div>
        </div>

      </section>

      {/* Results table */}
      <section className="lab-panel">

        <div className="lab-panel-header">
          <div>
            <h4>Released Laboratory Reports</h4>
            <p>
              View reports sent to referring healthcare facilities.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="lab-search">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search by result ID, patient, clinic or test..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="table-responsive">

          <table className="table lab-table align-middle">

            <thead>
              <tr>
                <th>RESULT ID</th>
                <th>TEST ID</th>
                <th>PATIENT ID</th>
                <th>REFERRING CLINIC</th>
                <th>TEST</th>
                <th>DATE SENT</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {filteredResults.map((result) => (

                <tr key={result.id}>

                  <td>
                    <strong>{result.id}</strong>
                  </td>

                  <td>{result.testId}</td>

                  <td>{result.patient}</td>

                  <td>{result.clinic}</td>

                  <td>{result.test}</td>

                  <td>{result.dateSent}</td>

                  <td>
                    <span
                      className={`lab-status ${
                        result.status === 'Delivered'
                          ? 'completed'
                          : 'pending'
                      }`}
                    >
                      {result.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="lab-view-button"
                      onClick={() => setSelectedResult(result)}
                    >
                      View
                    </button>
                  </td>

                </tr>

              ))}

              {filteredResults.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No matching results found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </section>

      {/* Result details */}
      {selectedResult && (
        <section className="lab-panel mt-4">

          <div className="lab-panel-header">
            <div>
              <h4>Result Delivery Details</h4>
              <p>Information about the selected laboratory report.</p>
            </div>

            <button
              className="lab-outline-button"
              onClick={() => setSelectedResult(null)}
            >
              Close
            </button>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <strong>Result ID</strong>
              <p>{selectedResult.id}</p>
            </div>

            <div className="col-md-6">
              <strong>Test ID</strong>
              <p>{selectedResult.testId}</p>
            </div>

            <div className="col-md-6">
              <strong>Patient ID</strong>
              <p>{selectedResult.patient}</p>
            </div>

            <div className="col-md-6">
              <strong>Referring Clinic</strong>
              <p>{selectedResult.clinic}</p>
            </div>

            <div className="col-md-6">
              <strong>Laboratory Test</strong>
              <p>{selectedResult.test}</p>
            </div>

            <div className="col-md-6">
              <strong>Technician</strong>
              <p>{selectedResult.technician}</p>
            </div>

            <div className="col-md-6">
              <strong>Verified By</strong>
              <p>{selectedResult.verifiedBy}</p>
            </div>

            <div className="col-md-6">
              <strong>Date Sent</strong>
              <p>{selectedResult.dateSent}</p>
            </div>

            <div className="col-md-6">
              <strong>Delivery Status</strong>
              <p>
                <span className={`lab-status ${
                  selectedResult.status === 'Delivered'
                    ? 'completed'
                    : 'pending'
                }`}>
                  {selectedResult.status}
                </span>
              </p>
            </div>

          </div>

        </section>
      )}

    </div>
  )
}

export default SentResults