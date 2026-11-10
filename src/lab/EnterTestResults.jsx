
import { useState } from 'react'

function EnterTestResults() {
  const [results, setResults] = useState({
    testId: '',
    patientName: '',
    testName: '',
    result: '',
    referenceRange: '',
    remarks: '',
  })

  const [savedResults, setSavedResults] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    setResults((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSavedResults((prev) => [
      ...prev,
      {
        ...results,
        id: `RES-${prev.length + 1}`,
        status: 'Pending Verification',
      },
    ])

    setResults({
      testId: '',
      patientName: '',
      testName: '',
      result: '',
      referenceRange: '',
      remarks: '',
    })

    alert('Results saved successfully as a draft!')
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
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {savedResults.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
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
