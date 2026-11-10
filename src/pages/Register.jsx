
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setMessage({
        type: 'danger',
        text: 'Passwords do not match. Please try again.'
      })
      return
    }

    setMessage({
      type: 'info',
      text: 'Your form is valid! Account creation will work once the backend registration system is connected.'
    })
  }

  return (
    <div className="register-page">

      {/* Registration Section */}
      <section className="register-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">

              <div className="register-card bg-white shadow-sm rounded-4 p-4 p-md-5">

                {/* Heading */}
                <div className="text-center mb-4">
                  <div className="register-icon mb-3">
                    <i className="bi bi-person-plus-fill"></i>
                  </div>

                  <h2 className="fw-bold">
                    Create Your CareConnect Account
                  </h2>

                  <p className="text-muted">
                    Join our network and help improve healthcare coordination.
                  </p>
                </div>

                {/* Registration Form */}
                <form id="registerForm" onSubmit={handleSubmit}>

                  {/* Personal Information */}
                  <h5 className="text-info mb-3">
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Personal Information
                  </h5>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="jobRole" className="form-label">
                        Your Role
                      </label>

                      <select
                        className="form-select"
                        id="jobRole"
                        name="jobRole"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="facility_admin">Facility Administrator</option>
                        <option value="healthcare_worker">Healthcare Worker</option>
                        <option value="laboratory_staff">Laboratory Staff</option>
                        <option value="diagnostic_staff">Diagnostic Centre Staff</option>
                      </select>
                    </div>

                  </div>

                  <hr className="my-4" />

                  {/* Healthcare Facility Information */}
                  <h5 className="text-info mb-3">
                    <i className="bi bi-hospital me-2"></i>
                    Healthcare Facility Information
                  </h5>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label htmlFor="facilityName" className="form-label">
                        Facility Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="facilityName"
                        name="facilityName"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="facilityType" className="form-label">
                        Facility Type
                      </label>

                      <select
                        className="form-select"
                        id="facilityType"
                        name="facilityType"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>Select facility type</option>
                        <option value="clinic">Clinic / Health Centre</option>
                        <option value="hospital">Hospital</option>
                        <option value="laboratory">Laboratory</option>
                        <option value="diagnostic">Diagnostic Centre</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="location" className="form-label">
                        Facility Location
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        required
                      />
                    </div>

                  </div>

                  <hr className="my-4" />

                  {/* Account Security */}
                  <h5 className="text-info mb-3">
                    <i className="bi bi-shield-lock me-2"></i>
                    Account Security
                  </h5>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        autoComplete="new-password"
                        minLength={8}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />

                      <small className="text-muted">
                        Use at least 8 characters.
                      </small>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="new-password"
                        minLength={8}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                      />
                    </div>

                  </div>

                  {/* Terms and Conditions */}
                  <div className="form-check mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      required
                    />

                    <label className="form-check-label" htmlFor="terms">
                      I agree to the CareConnect terms and privacy policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-info text-white w-100 mt-4 py-2"
                  >
                    <i className="bi bi-person-check-fill me-2"></i>
                    Create Account
                  </button>

                  {/* Login Link */}
                  <p className="text-center text-muted mt-4 mb-0">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="text-info fw-semibold text-decoration-none"
                    >
                      Log in
                    </Link>
                  </p>

                  {/* Registration Message */}
                  {message && (
                    <div
                      className={`alert alert-${message.type} mt-3`}
                      role="status"
                      aria-live="polite"
                    >
                      {message.text}
                    </div>
                  )}

                </form>
              </div>

              <p className="text-center text-muted small mt-4">
                <i className="bi bi-shield-check me-1"></i>
                CareConnect is designed to support secure healthcare coordination.
              </p>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Register
