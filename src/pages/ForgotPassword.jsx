
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setMessage(
      'Your request has been received.'
    )
  }

  return (
    <div className="login-page">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">

          <Link to="/" className="navbar-brand fw-bold fs-3 text-info">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            CareConnect
          </Link>

          <Link to="/login" className="btn btn-outline-info rounded-pill px-3">
            <i className="bi bi-box-arrow-in-right me-1"></i>
            Back to Login
          </Link>

        </div>
      </nav>

      {/* Forgot Password Section */}
      <main className="login-section">
        <div className="container">

          <div className="row justify-content-center align-items-center">

            <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4">

              <div className="login-card p-4 p-md-5 rounded-4">

                {/* Heading */}
                <div className="text-center mb-4">

                  <div className="login-icon mx-auto mb-3">
                    <i className="bi bi-key-fill"></i>
                  </div>

                  <h1 className="h3 fw-bold mb-2">
                    Forgot Your Password?
                  </h1>

                  <p className="text-secondary mb-0">
                    Enter your registered email address and we'll help you
                    recover access to your account.
                  </p>

                </div>

                {/* Reset Form */}
                <form onSubmit={handleSubmit}>

                  <div className="mb-4">

                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder=" "
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />

                    </div>

                  </div>

                  <div className="d-grid mb-3">

                    <button
                      type="submit"
                      className="btn btn-info btn-lg rounded-pill fw-semibold text-white"
                    >
                      Send Reset Link
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                  {message && (
                    <div className="alert alert-info text-center small" role="status">
                      {message}
                    </div>
                  )}

                </form>

                {/* Back to Login */}
                <div className="text-center mt-4">

                  <Link
                    to="/login"
                    className="text-info fw-semibold text-decoration-none"
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Login
                  </Link>

                </div>

                {/* Security Note */}
                <div className="login-security mt-4 p-3 rounded-3 text-center">

                  <i className="bi bi-shield-lock-fill text-info me-1"></i>

                  <small className="text-secondary">
                    Secure access for authorized healthcare users
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  )
}

export default ForgotPassword
