
import { useState } from 'react'

function EnterTestResults() {
  const initialResults = {
    testId: '',
    patientName: '',
    testName: '',
    result: '',
    referenceRange: '',
    remarks: '',
  }

  const [results, setResults] = useState(initialResults)
  const [report, setReport] = useState(null)
  const [savedResults, setSavedResults] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    setResults((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReportChange = (e) => {
    const file = e.target.files[0]

    if (!file) return

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOC or DOCX document.')
      e.target.value = ''
      return
    }

    setReport(file)
  }

  const handleRemoveReport = () => {
    setReport(null)

    const fileInput = document.getElementById('lab-report')
    if (fileInput) fileInput.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!report) {
      alert('Please upload the laboratory report before saving.')
      return
    }

    setSavedResults((prev) => [
      ...prev,
      {
        ...results,
        id: `RES-${prev.length + 1}`,
        reportName: report.name,
        reportFile: report,
        status: 'Pending Verification',
      },
    ])

    setResults(initialResults)
    setReport(null)

    const fileInput = document.getElementById('lab-report')
    if (fileInput) fileInput.value = ''

    alert('Results and laboratory report saved successfully as a draft!')
  }

  return (
    <div className="lab-page">
      <div className="lab-page-header">
        <div>
          <h2>Enter Test Results</h2>
          <p>Record laboratory findings for completed tests.</p>
        </div>
      </div>

      <div className="lab-form-card">
        <h4>Patient Test Information</h4>

        <form onSubmit={handleSubmit}>
          <div className="lab-form-grid">
            <div className="lab-form-group">
              <label>Test ID</label>
              <input
                type="text"
                name="testId"
                value={results.testId}
                onChange={handleChange}
                placeholder="e.g. TEST-001"
                required
              />
            </div>

            <div className="lab-form-group">
              <label>Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={results.patientName}
                onChange={handleChange}
                placeholder="Enter patient name"
                required
              />
            </div>

            <div className="lab-form-group">
              <label>Test Name</label>
              <select
                name="testName"
                value={results.testName}
                onChange={handleChange}
                required
              >
                <option value="">Select test</option>
                <option value="Full Blood Count">Full Blood Count</option>
                <option value="Malaria Test">Malaria Test</option>
                <option value="Blood Sugar">Blood Sugar</option>
                <option value="Urinalysis">Urinalysis</option>
                <option value="Liver Function Test">Liver Function Test</option>
              </select>
            </div>

            <div className="lab-form-group">
              <label>Test Result</label>
              <input
                type="text"
                name="result"
                value={results.result}
                onChange={handleChange}
                placeholder="Enter test result and units"
                required
              />
            </div>

            <div className="lab-form-group">
              <label>Reference Range</label>
              <input
                type="text"
                name="referenceRange"
                value={results.referenceRange}
                onChange={handleChange}
                placeholder="Enter laboratory reference range"
              />
            </div>

            <div className="lab-form-group">
              <label>Remarks</label>
              <textarea
                name="remarks"
                value={results.remarks}
                onChange={handleChange}
                placeholder="Additional laboratory observations"
                rows="3"
              />
            </div>
          </div>

          {/* Laboratory Report Upload */}
          <div className="lab-form-group mt-4">
            <label htmlFor="lab-report">
              <i className="bi bi-file-earmark-medical"></i> Laboratory Report
              <span className="text-danger"> *</span>
            </label>

            <p className="text-muted">
              Upload the completed laboratory report (PDF, DOC or DOCX).
            </p>

            <input
              id="lab-report"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleReportChange}
              required
            />

            {report && (
              <div className="mt-3 p-3 border rounded">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div>
                    <i className="bi bi-file-earmark-check text-success"></i>{' '}
                    <strong>{report.name}</strong>

                    <small className="d-block text-muted">
                      {(report.size / 1024).toFixed(2)} KB
                    </small>
                  </div>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={handleRemoveReport}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lab-form-actions">
            <button type="submit" className="lab-primary-btn">
              <i className="bi bi-save"></i> Save Draft
            </button>
          </div>
        </form>
      </div>

      <div className="lab-table-card">
        <h4>Recently Entered Results</h4>

        <div className="table-responsive">
          <table className="table lab-table">
            <thead>
              <tr>
                <th>Result ID</th>
                <th>Patient</th>
                <th>Test</th>
                <th>Result</th>
                <th>Laboratory Report</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {savedResults.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No results entered yet.
                  </td>
                </tr>
              ) : (
                savedResults.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.patientName}</td>
                    <td>{item.testName}</td>
                    <td>{item.result}</td>
                    <td>
                      <span title={item.reportName}>
                        <i className="bi bi-file-earmark-pdf"></i>{' '}
                        {item.reportName}
                      </span>
                    </td>
                    <td>
                      <span className="lab-status pending">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EnterTestResults

