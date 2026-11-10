
import { useState } from 'react'

function SampleManagement() {
  const [samples, setSamples] = useState([
    {
      id: 'SMP-001',
      requestId: 'LAB-001',
      patient: 'CC-00125',
      clinic: 'Kisumu Family Clinic',
      type: 'Blood',
      received: '09 Nov 2026',
      status: 'Received',
    },
    {
      id: 'SMP-002',
      requestId: 'LAB-002',
      patient: 'CC-00126',
      clinic: 'Green Valley Clinic',
      type: 'Blood',
      received: '09 Nov 2026',
      status: 'Processing',
    },
    {
      id: 'SMP-003',
      requestId: 'LAB-003',
      patient: 'CC-00127',
      clinic: 'Sunrise Medical Centre',
      type: 'Urine',
      received: '08 Nov 2026',
      status: 'Received',
    },
  ])

  const [formData, setFormData] = useState({
    requestId: '',
    patient: '',
    clinic: '',
    type: 'Blood',
  })

  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const registerSample = (e) => {
    e.preventDefault()

    const newSample = {
      id: `SMP-${String(samples.length + 1).padStart(3, '0')}`,
      ...formData,
      received: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Received',
    }

    setSamples([...samples, newSample])

    setFormData({
      requestId: '',
      patient: '',
      clinic: '',
      type: 'Blood',
    })

    setShowForm(false)
  }

  const updateStatus = (id, status) => {
    setSamples((previous) =>
      previous.map((sample) =>
        sample.id === id ? { ...sample, status } : sample
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
          <h2>Sample Management</h2>
          <p>
            Register, monitor and manage physical samples
            received from healthcare facilities.
          </p>
        </div>

        <button
          className="btn"
          style={{ background: '#006454', color: 'white' }}
          onClick={() => setShowForm(!showForm)}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Register Sample
        </button>
      </div>

      <div className="lab-stat-grid">

        <div className="lab-stat-card">
          <div className="lab-stat-icon yellow">
            <i className="bi bi-box-seam"></i>
          </div>
          <div>
            <span>Total Samples</span>
            <h3>{samples.length}</h3>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <div>
            <span>Received</span>
            <h3>
              {samples.filter(s => s.status === 'Received').length}
            </h3>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon orange">
            <i className="bi bi-hourglass-split"></i>
          </div>
          <div>
            <span>Processing</span>
            <h3>
              {samples.filter(s => s.status === 'Processing').length}
            </h3>
          </div>
        </div>

      </div>

      {showForm && (
        <div className="lab-panel">
          <div className="lab-panel-header">
            <div>
              <h4>Register New Sample</h4>
              <p>Enter the details of the sample received.</p>
            </div>
          </div>

          <form onSubmit={registerSample}>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Request ID</label>
                <input
                  className="form-control"
                  name="requestId"
                  value={formData.requestId}
                  onChange={handleChange}
                  placeholder="e.g. LAB-004"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Patient ID</label>
                <input
                  className="form-control"
                  name="patient"
                  value={formData.patient}
                  onChange={handleChange}
                  placeholder="e.g. CC-00128"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Referring Clinic</label>
                <input
                  className="form-control"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  placeholder="Enter clinic name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Sample Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option>Blood</option>
                  <option>Urine</option>
                  <option>Stool</option>
                  <option>Swab</option>
                  <option>Other</option>
                </select>
              </div>

            </div>

            <div className="d-flex gap-2 mt-4">
              <button
                type="submit"
                className="btn"
                style={{ background: '#006454', color: 'white' }}
              >
                Save Sample
              </button>

              <button
                type="button"
                className="btn btn-light"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="lab-panel">
        <div className="lab-panel-header">
          <div>
            <h4>Laboratory Samples</h4>
            <p>Track samples received from healthcare facilities.</p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table lab-table align-middle">
            <thead>
              <tr>
                <th>SAMPLE ID</th>
                <th>REQUEST ID</th>
                <th>PATIENT ID</th>
                <th>CLINIC</th>
                <th>SAMPLE TYPE</th>
                <th>DATE RECEIVED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {samples.map((sample) => (
                <tr key={sample.id}>
                  <td><strong>{sample.id}</strong></td>
                  <td>{sample.requestId}</td>
                  <td>{sample.patient}</td>
                  <td>{sample.clinic}</td>
                  <td>{sample.type}</td>
                  <td>{sample.received}</td>

                  <td>
                    <span className={`lab-status ${
                      sample.status === 'Received'
                        ? 'accepted'
                        : 'pending'
                    }`}>
                      {sample.status}
                    </span>
                  </td>

                  <td>
                    {sample.status === 'Received' && (
                      <button
                        className="btn btn-sm"
                        style={{
                          background: '#006454',
                          color: 'white',
                        }}
                        onClick={() =>
                          updateStatus(sample.id, 'Processing')
                        }
                      >
                        Start Processing
                      </button>
                    )}

                    {sample.status === 'Processing' && (
                      <span className="text-muted">In progress</span>
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

export default SampleManagement
