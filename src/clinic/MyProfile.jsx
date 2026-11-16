
import { useState } from 'react'

function MyProfile() {
  const [isEditing, setIsEditing] = useState(false)

  const [profile, setProfile] = useState({
    fullName: 'Clinic Administrator',
    email: 'admin@careconnect.co.ke',
    phone: '+254 712 345 678',
    role: 'Clinic Administrator',
    facility: 'CareConnect Medical Clinic',
    location: 'Kisii, Kenya',
    licenseNumber: 'CLN-2026-001',
    department: 'Administration'
  })

  const [formData, setFormData] = useState(profile)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    setProfile(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(profile)
    setIsEditing(false)
  }

  return (
    <div className="clinic-page">

      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">My Profile</h2>
        <p className="text-muted mb-0">
          View and manage your clinic account information.
        </p>
      </div>

      <div className="row g-4">

        {/* Profile Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body py-4">

              <div
                className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: '110px',
                  height: '110px',
                  fontSize: '42px'
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>

              <h5 className="fw-bold mb-1">{profile.fullName}</h5>

              <p className="text-muted mb-2">{profile.role}</p>

              <span className="badge bg-success mb-4">
                Active Account
              </span>

              <hr />

              <div className="text-start mt-3">
                <p className="mb-3">
                  <i className="bi bi-envelope text-success me-2"></i>
                  {profile.email}
                </p>

                <p className="mb-3">
                  <i className="bi bi-telephone text-success me-2"></i>
                  {profile.phone}
                </p>

                <p className="mb-0">
                  <i className="bi bi-geo-alt text-success me-2"></i>
                  {profile.location}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">
                Personal Information
              </h5>

              {!isEditing && (
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => {
                    setFormData(profile)
                    setIsEditing(true)
                  }}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Profile
                </button>
              )}
            </div>

            <div className="card-body">

              <form onSubmit={handleSave}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Job Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      className="form-control"
                      value={formData.role}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Healthcare Facility
                    </label>
                    <input
                      type="text"
                      name="facility"
                      className="form-control"
                      value={formData.facility}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      value={formData.department}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Facility License Number
                    </label>
                    <input
                      type="text"
                      name="licenseNumber"
                      className="form-control"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                </div>

                {isEditing && (
                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      <i className="bi bi-check-circle me-2"></i>
                      Save Changes
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                )}

              </form>
            </div>
          </div>

          {/* Account Information */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Account Information</h5>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-semibold mb-1">Account Status</p>
                  <small className="text-muted">
                    Your CareConnect account is active.
                  </small>
                </div>

                <span className="badge bg-success">
                  Active
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-semibold mb-1">Account Role</p>
                  <small className="text-muted">
                    Your assigned system role.
                  </small>
                </div>

                <span className="badge bg-light text-dark">
                  {profile.role}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default MyProfile
