import { useState } from 'react'

function LaboratoryResults() {
  const [results] = useState([
    {
      id: 'LAB-001',
      patientId: 'CC-00125',
      patientName: 'Patient 001',
      testName: 'Complete Blood Count',
      result: 'Normal',
      referenceRange: '4.5 - 11.0 x10⁹/L',
      date: '10 Nov 2026',
      status: 'Verified',
    },
    {
      id: 'LAB-002',
      patientId: 'CC-00126',
      patientName: 'Patient 002',
      testName: 'Blood Glucose',
      result: '6.2 mmol/L',
      referenceRange: '3.9 - 6.1 mmol/L',
      date: '09 Nov 2026',
      status: 'Verified',
    },
    {
      id: 'LAB-003',
      patientId: 'CC-00127',
      patientName: 'Patient 003',
      testName: 'Malaria Test',
      result: 'Negative',
      referenceRange: 'Negative',
      date: '08 Nov 2026',
      status: 'Verified',
    },
  ])

  const [selectedResult, setSelectedResult] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResults = results.filter((result) =>
    result.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container-fluid py-4">

      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Laboratory Results</h3>
          <p className="text-muted mb-0">
            View laboratory test results received from laboratories.
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-success px-3 py-2">
            <i className="bi bi-check-circle me-1"></i>
            Results Available
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Total Results</small>
                  <h3 className="fw-bold mt-2 mb-0">
                    {results.length}
                  </h3>
                </div>

                <div className="text-info fs-2">
                  <i className="bi bi-file-earmark-medical"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Verified Results</small>
                  <h3 className="fw-bold mt-2 mb-0">
                    {
                      results.filter(
                        (result) => result.status === 'Verified'
                      ).length
                    }
                  </h3>
                </div>

                <div className="text-success fs-2">
                  <i className="bi bi-patch-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Latest Result</small>
                  <h6 className="fw-bold mt-2 mb-0">
                    {results[0]?.date}
                  </h6>
                </div>

                <div className="text-warning fs-2">
                  <i className="bi bi-calendar-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Results Card */}
      <div className="card border-0 shadow-sm">

        <div className="card-body">

          {/* Search */}
          <div className="row align-items-center mb-4">

            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-1">
                Laboratory Test Results
              </h5>

              <p className="text-muted small mb-0">
                Review results returned by the laboratory.
              </p>
            </div>

            <div className="col-12 col-md-6 mt-3 mt-md-0">
              <div className="input-group">

                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patient, test or result ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

              </div>
            </div>

          </div>

          {/* Results Table */}
          <div className="table-responsive">

            <table className="table align-middle">

              <thead>
                <tr>
                  <th>Result ID</th>
                  <th>Patient</th>
                  <th>Test</th>
                  <th>Result</th>
                  <th>Reference Range</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <tr key={result.id}>

                      <td className="fw-semibold">
                        {result.id}
                      </td>

                      <td>
                        <div>
                          <strong>{result.patientName}</strong>
                          <small className="d-block text-muted">
                            {result.patientId}
                          </small>
                        </div>
                      </td>

                      <td>
                        {result.testName}
                      </td>

                      <td className="fw-semibold">
                        {result.result}
                      </td>

                      <td>
                        <small className="text-muted">
                          {result.referenceRange}
                        </small>
                      </td>

                      <td>
                        {result.date}
                      </td>

                      <td>
                        <span className="badge bg-success">
                          {result.status}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-info"
                          onClick={() => setSelectedResult(result)}
                        >
                          <i className="bi bi-eye me-1"></i>
                          View
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-5 text-muted"
                    >
                      <i className="bi bi-search fs-3 d-block mb-2"></i>
                      No laboratory results found.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

          <p className="small text-muted mt-3 mb-0">
            <i className="bi bi-info-circle me-1"></i>
            Example data only. Real laboratory results will be received
            from the backend laboratory system.
          </p>

        </div>

      </div>

      {/* View Result Modal */}
      {selectedResult && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >

          <div className="modal-dialog modal-lg modal-dialog-centered">

            <div className="modal-content">

              <div className="modal-header">

                <div>
                  <h5 className="modal-title fw-bold">
                    Laboratory Result
                  </h5>

                  <small className="text-muted">
                    Result ID: {selectedResult.id}
                  </small>
                </div>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedResult(null)}
                  aria-label="Close"
                ></button>

              </div>

              <div className="modal-body">

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="text-muted small">
                      Patient Name
                    </label>
                    <p className="fw-semibold mb-0">
                      {selectedResult.patientName}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted small">
                      Patient ID
                    </label>
                    <p className="fw-semibold mb-0">
                      {selectedResult.patientId}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted small">
                      Test Name
                    </label>
                    <p className="fw-semibold mb-0">
                      {selectedResult.testName}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <label className="text-muted small">
                      Date
                    </label>
                    <p className="fw-semibold mb-0">
                      {selectedResult.date}
                    </p>
                  </div>

                  <div className="col-12">
                    <div className="p-4 bg-light rounded">
                      <small className="text-muted">
                        Test Result
                      </small>

                      <h4 className="fw-bold mt-2 mb-1">
                        {selectedResult.result}
                      </h4>

                      <small className="text-muted">
                        Reference Range: {selectedResult.referenceRange}
                      </small>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="text-muted small">
                      Status
                    </label>

                    <p className="mb-0">
                      <span className="badge bg-success">
                        <i className="bi bi-check-circle me-1"></i>
                        {selectedResult.status}
                      </span>
                    </p>
                  </div>

                </div>

              </div>

              <div className="modal-footer">

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedResult(null)}
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

export default LaboratoryResults