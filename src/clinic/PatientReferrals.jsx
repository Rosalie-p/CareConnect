import { useState } from 'react'

function PatientReferrals() {
  const [referrals, setReferrals] = useState([
    {
      id: 'CC-1024',
      patient: 'Patient 001',
      service: 'Laboratory Test',
      destination: 'Central Laboratory',
      date: '10 Nov 2026',
      status: 'Pending',
    },
    {
      id: 'CC-1023',
      patient: 'Patient 002',
      service: 'Ultrasound',
      destination: 'Referral Hospital',
      date: '09 Nov 2026',
      status: 'Completed',
    },
  ])

  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    service: '',
    destination: '',
    reason: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.patientName ||
      !formData.patientId ||
      !formData.service ||
      !formData.destination ||
      !formData.reason
    ) {
      alert('Please fill in all fields.')
      return
    }

    const newReferral = {
      id: `CC-${1025 + referrals.length}`,
      patient: formData.patientName,
      service: formData.service,
      destination: formData.destination,
      date: new Date().toLocaleDateString('en-KE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Pending',
    }

    setReferrals([newReferral, ...referrals])

    setFormData({
      patientName: '',
      patientId: '',
      service: '',
      destination: '',
      reason: '',
    })

    alert('Referral created successfully.')
  }

  return (
    <div className="container-fluid py-4">

      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Patient Referrals</h3>
          <p className="text-muted mb-0">
            Create and manage patient referrals to healthcare facilities.
          </p>
        </div>

        <button
          className="btn btn-info text-white"
          data-bs-toggle="modal"
          data-bs-target="#referralModal"
        >
          <i className="bi bi-plus-circle me-2"></i>
          Create Referral
        </button>
      </div>

      {/* Referral Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">Total Referrals</small>
                  <h3 className="fw-bold mt-2 mb-0">{referrals.length}</h3>
                </div>

                <div className="text-info fs-2">
                  <i className="bi bi-arrow-left-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">Pending</small>
                  <h3 className="fw-bold mt-2 mb-0">
                    {referrals.filter((referral) => referral.status === 'Pending').length}
                  </h3>
                </div>

                <div className="text-warning fs-2">
                  <i className="bi bi-hourglass-split"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">Completed</small>
                  <h3 className="fw-bold mt-2 mb-0">
                    {referrals.filter((referral) => referral.status === 'Completed').length}
                  </h3>
                </div>

                <div className="text-success fs-2">
                  <i className="bi bi-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Referrals Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold mb-1">Referral Records</h5>
              <p className="text-muted small mb-0">
                View referrals created by your clinic.
              </p>
            </div>
          </div>

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
                </tr>
              </thead>

              <tbody>

                {referrals.map((referral) => (
                  <tr key={referral.id}>

                    <td className="fw-semibold">
                      {referral.id}
                    </td>

                    <td>
                      {referral.patient}
                    </td>

                    <td>
                      {referral.service}
                    </td>

                    <td>
                      {referral.destination}
                    </td>

                    <td>
                      {referral.date}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          referral.status === 'Completed'
                            ? 'bg-success'
                            : 'bg-warning text-dark'
                        }`}
                      >
                        {referral.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Create Referral Modal */}
      <div
        className="modal fade"
        id="referralModal"
        tabIndex="-1"
        aria-labelledby="referralModalLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-lg modal-dialog-centered">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title fw-bold" id="referralModalLabel">
                Create Patient Referral
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
                    <label className="form-label fw-semibold">
                      Patient Name
                    </label>

                    <input
                      type="text"
                      name="patientName"
                      className="form-control"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter patient name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Patient ID
                    </label>

                    <input
                      type="text"
                      name="patientId"
                      className="form-control"
                      value={formData.patientId}
                      onChange={handleChange}
                      placeholder="Enter patient ID"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Service Required
                    </label>

                    <select
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select service</option>
                      <option value="Laboratory Test">
                        Laboratory Test
                      </option>
                      <option value="X-Ray">
                        X-Ray
                      </option>
                      <option value="Ultrasound">
                        Ultrasound
                      </option>
                      <option value="CT Scan">
                        CT Scan
                      </option>
                      <option value="MRI">
                        MRI
                      </option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Destination Facility
                    </label>

                    <select
                      name="destination"
                      className="form-select"
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">Select facility</option>
                      <option value="Central Laboratory">
                        Central Laboratory
                      </option>
                      <option value="Referral Hospital">
                        Referral Hospital
                      </option>
                      <option value="Diagnostic Centre">
                        Diagnostic Centre
                      </option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Reason for Referral
                    </label>

                    <textarea
                      name="reason"
                      className="form-control"
                      rows="4"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Enter the reason for referring the patient"
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

                <button
                  type="submit"
                  className="btn btn-info text-white"
                >
                  <i className="bi bi-send me-2"></i>
                  Submit Referral
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PatientReferrals