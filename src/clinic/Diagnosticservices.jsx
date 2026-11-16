
import { useState } from 'react'

function DiagnosticServices() {
  const [requests, setRequests] = useState([
    {
      id: 'DIA-001',
      patientId: 'CC-00125',
      patientName: 'Patient 001',
      service: 'Ultrasound',
      facility: 'Referral Hospital',
      date: '10 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'DIA-002',
      patientId: 'CC-00126',
      patientName: 'Patient 002',
      service: 'X-Ray',
      facility: 'Diagnostic Centre',
      date: '09 Nov 2026',
      status: 'Completed',
    },
    {
      id: 'DIA-003',
      patientId: 'CC-00127',
      patientName: 'Patient 003',
      service: 'CT Scan',
      facility: 'Referral Hospital',
      date: '08 Nov 2026',
      status: 'In Progress',
    },
  ])

  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    service: '',
    facility: '',
    reason: '',
    preferredDate: '',
  })

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newRequest = {
      id: `DIA-${String(requests.length + 1).padStart(3, '0')}`,
      patientId: formData.patientId,
      patientName: formData.patientName,
      service: formData.service,
      facility: formData.facility,
      date: new Date().toLocaleDateString('en-KE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Pending',
    }

    setRequests((previous) => [newRequest, ...previous])

    setFormData({
      patientName: '',
      patientId: '',
      service: '',
      facility: '',
      reason: '',
      preferredDate: '',
    })

    const modal = document.getElementById('diagnosticModal')
    const bootstrapModal = window.bootstrap?.Modal.getInstance(modal)
    bootstrapModal?.hide()

    alert('Diagnostic request submitted successfully.')
  }

  const filteredRequests = requests.filter((request) =>
    request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container-fluid py-4">

      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Diagnostic Services</h3>
          <p className="text-muted mb-0">
            Request diagnostic examinations for your patients.
          </p>
        </div>

        <button
          className="btn btn-info text-white"
          data-bs-toggle="modal"
          data-bs-target="#diagnosticModal"
        >
          <i className="bi bi-plus-circle me-2"></i>
          New Diagnostic Request
        </button>
      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Total Requests</small>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold mt-2 mb-0">{requests.length}</h3>
                <i className="bi bi-activity fs-2 text-info"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Pending Requests</small>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold mt-2 mb-0">
                  {requests.filter((r) => r.status === 'Pending').length}
                </h3>
                <i className="bi bi-hourglass-split fs-2 text-warning"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Completed Requests</small>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold mt-2 mb-0">
                  {requests.filter((r) => r.status === 'Completed').length}
                </h3>
                <i className="bi bi-check-circle fs-2 text-success"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Available Services */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Available Diagnostic Services</h5>

          <div className="row g-3">

            {[
              { name: 'X-Ray', icon: 'bi-person-bounding-box', description: 'Medical imaging using X-ray radiation.' },
              { name: 'Ultrasound', icon: 'bi-soundwave', description: 'Imaging using high-frequency sound waves.' },
              { name: 'CT Scan', icon: 'bi-hospital', description: 'Detailed cross-sectional body imaging.' },
              { name: 'MRI', icon: 'bi-magnet', description: 'Detailed imaging using magnetic fields.' },
            ].map((service) => (
              <div className="col-12 col-sm-6 col-xl-3" key={service.name}>
                <div className="border rounded p-3 h-100">
                  <i className={`bi ${service.icon} fs-2 text-info`}></i>
                  <h6 className="fw-bold mt-2">{service.name}</h6>
                  <p className="small text-muted mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Requests Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">

          <div className="row align-items-center mb-3">
            <div className="col-md-6">
              <h5 className="fw-bold mb-1">Diagnostic Requests</h5>
              <p className="text-muted small mb-0">
                Monitor diagnostic requests submitted by your clinic.
              </p>
            </div>

            <div className="col-md-6 mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search patient, service or request ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Patient</th>
                  <th>Service</th>
                  <th>Facility</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="fw-semibold">{request.id}</td>
                      <td>
                        <strong>{request.patientName}</strong>
                        <small className="d-block text-muted">
                          {request.patientId}
                        </small>
                      </td>
                      <td>{request.service}</td>
                      <td>{request.facility}</td>
                      <td>{request.date}</td>
                      <td>
                        <span
                          className={`badge ${
                            request.status === 'Completed'
                              ? 'bg-success'
                              : request.status === 'In Progress'
                                ? 'bg-info'
                                : 'bg-warning text-dark'
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-4">
                      No diagnostic requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="small text-muted mb-0">
            <i className="bi bi-info-circle me-1"></i>
            Example records only. Actual requests and diagnostic reports
            will be managed through the backend.
          </p>

        </div>
      </div>

      {/* New Diagnostic Request Modal */}
      <div
        className="modal fade"
        id="diagnosticModal"
        tabIndex="-1"
        aria-labelledby="diagnosticModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="diagnosticModalLabel">
                New Diagnostic Request
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Patient Name</label>
                    <input
                      type="text"
                      name="patientName"
                      className="form-control"
                      value={formData.patientName}
                      onChange={handleChange}
                      required
                      placeholder="Enter patient name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Patient ID</label>
                    <input
                      type="text"
                      name="patientId"
                      className="form-control"
                      value={formData.patientId}
                      onChange={handleChange}
                      required
                      placeholder="Enter patient ID"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Diagnostic Service</label>
                    <select
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select service</option>
                      <option value="X-Ray">X-Ray</option>
                      <option value="Ultrasound">Ultrasound</option>
                      <option value="CT Scan">CT Scan</option>
                      <option value="MRI">MRI</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Destination Facility</label>
                    <select
                      name="facility"
                      className="form-select"
                      value={formData.facility}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select facility</option>
                      <option value="Referral Hospital">Referral Hospital</option>
                      <option value="Diagnostic Centre">Diagnostic Centre</option>
                      <option value="Central Hospital">Central Hospital</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      className="form-control"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Reason for Examination</label>
                    <textarea
                      name="reason"
                      className="form-control"
                      rows="3"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      placeholder="Describe why the examination is required"
                    ></textarea>
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-info text-white">
                  <i className="bi bi-send me-2"></i>
                  Submit Request
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default DiagnosticServices
