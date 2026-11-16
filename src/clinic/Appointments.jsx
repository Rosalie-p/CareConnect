
import { useState } from 'react'

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 'APT-001',
      patientName: 'Mary Wanjiku',
      patientId: 'CC-00125',
      hospital: 'Kisii Teaching and Referral Hospital',
      service: 'CT Scan',
      date: '2026-11-12',
      time: '09:00',
      status: 'Scheduled',
      notes: 'Abdominal examination'
    },
    {
      id: 'APT-002',
      patientName: 'John Mwangi',
      patientId: 'CC-00126',
      hospital: 'Kisumu County Referral Hospital',
      service: 'X-Ray',
      date: '2026-11-13',
      time: '10:30',
      status: 'Scheduled',
      notes: 'Chest examination'
    },
    {
      id: 'APT-003',
      patientName: 'Grace Achieng',
      patientId: 'CC-00127',
      hospital: 'Kisii Teaching and Referral Hospital',
      service: 'Ultrasound',
      date: '2026-11-08',
      time: '11:00',
      status: 'Completed',
      notes: 'Pelvic ultrasound'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    hospital: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newAppointment = {
      id: `APT-${String(appointments.length + 1).padStart(3, '0')}`,
      ...formData,
      status: 'Scheduled'
    }

    setAppointments([newAppointment, ...appointments])

    setFormData({
      patientName: '',
      patientId: '',
      hospital: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    })

    setShowForm(false)
  }

  const updateStatus = (id, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    )

    setSelectedAppointment(null)
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' || appointment.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const scheduledCount = appointments.filter(
    (a) => a.status === 'Scheduled'
  ).length

  const completedCount = appointments.filter(
    (a) => a.status === 'Completed'
  ).length

  const cancelledCount = appointments.filter(
    (a) => a.status === 'Cancelled'
  ).length

  return (
    <div className="clinic-page">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <h2 className="fw-bold mb-1">Appointments</h2>
          <p className="text-muted mb-0">
            Manage patient appointments with referral hospitals.
          </p>
        </div>

        <button
          className="btn btn-success"
          onClick={() => setShowForm(true)}
        >
          <i className="bi bi-calendar-plus me-2"></i>
          Book Appointment
        </button>
      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Scheduled</p>
                  <h3 className="fw-bold">{scheduledCount}</h3>
                </div>
                <i className="bi bi-calendar-check fs-2 text-success"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Completed</p>
                  <h3 className="fw-bold">{completedCount}</h3>
                </div>
                <i className="bi bi-check-circle fs-2 text-primary"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-1">Cancelled</p>
                  <h3 className="fw-bold">{cancelledCount}</h3>
                </div>
                <i className="bi bi-x-circle fs-2 text-danger"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by patient name, ID or appointment ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Appointments</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <h5 className="fw-bold mb-0">Appointment Records</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>Appointment ID</th>
                  <th>Patient</th>
                  <th>Hospital</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="fw-semibold">{appointment.id}</td>

                      <td>
                        <div className="fw-semibold">
                          {appointment.patientName}
                        </div>
                        <small className="text-muted">
                          {appointment.patientId}
                        </small>
                      </td>

                      <td>{appointment.hospital}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>

                      <td>
                        <span
                          className={`badge ${
                            appointment.status === 'Scheduled'
                              ? 'bg-warning text-dark'
                              : appointment.status === 'Completed'
                              ? 'bg-success'
                              : 'bg-danger'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={() =>
                            setSelectedAppointment(appointment)
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-muted">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* Book Appointment Modal */}
      {showForm && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  Book New Appointment
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Patient Name</label>
                      <input
                        type="text"
                        name="patientName"
                        className="form-control"
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Patient ID</label>
                      <input
                        type="text"
                        name="patientId"
                        className="form-control"
                        value={formData.patientId}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Referral Hospital</label>
                      <input
                        type="text"
                        name="hospital"
                        className="form-control"
                        value={formData.hospital}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Service</label>
                      <select
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="X-Ray">X-Ray</option>
                        <option value="Ultrasound">Ultrasound</option>
                        <option value="CT Scan">CT Scan</option>
                        <option value="MRI">MRI</option>
                        <option value="Laboratory Test">Laboratory Test</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Appointment Date</label>
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleChange}
                        min="2026-11-10"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Appointment Time</label>
                      <input
                        type="time"
                        name="time"
                        className="form-control"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Additional Notes</label>
                      <textarea
                        name="notes"
                        className="form-control"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Enter appointment details..."
                      ></textarea>
                    </div>

                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-check-circle me-2"></i>
                    Save Appointment
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  Appointment Details
                </h5>

                <button
                  className="btn-close"
                  onClick={() => setSelectedAppointment(null)}
                ></button>
              </div>

              <div className="modal-body">
                <p><strong>Appointment ID:</strong> {selectedAppointment.id}</p>
                <p><strong>Patient:</strong> {selectedAppointment.patientName}</p>
                <p><strong>Patient ID:</strong> {selectedAppointment.patientId}</p>
                <p><strong>Hospital:</strong> {selectedAppointment.hospital}</p>
                <p><strong>Service:</strong> {selectedAppointment.service}</p>
                <p><strong>Date:</strong> {selectedAppointment.date}</p>
                <p><strong>Time:</strong> {selectedAppointment.time}</p>
                <p><strong>Notes:</strong> {selectedAppointment.notes || 'None'}</p>
                <p>
                  <strong>Status:</strong> {selectedAppointment.status}
                </p>
              </div>

              <div className="modal-footer">
                {selectedAppointment.status === 'Scheduled' && (
                  <>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        updateStatus(selectedAppointment.id, 'Completed')
                      }
                    >
                      Mark Completed
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        updateStatus(selectedAppointment.id, 'Cancelled')
                      }
                    >
                      Cancel Appointment
                    </button>
                  </>
                )}

                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedAppointment(null)}
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

export default Appointments
