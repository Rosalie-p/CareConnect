
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setFeedback(
      'The login form is ready, but authentication must be connected to the CareConnect backend.'
    )
  }

  return (
    <div className="login-page">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">

          <Link className="navbar-brand fw-bold fs-3 text-info" to="/">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            CareConnect
          </Link>

          <Link to="/" className="btn btn-info rounded-pill px-3">
            <i className="bi bi-house-door me-1"></i> Home
          </Link>

        </div>
      </nav>

      {/* Login Section */}
      <main className="login-section">
        <div className="container">

          <div className="row justify-content-center align-items-center">

            <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4">

              {/* Login Card */}
              <div className="login-card p-4 p-md-5 rounded-4">

                {/* Logo Icon */}
                <div className="text-center mb-4">

                  <div className="login-icon mx-auto mb-3">
                    <i className="bi bi-person-lock"></i>
                  </div>

                  <h1 className="h3 fw-bold mb-2">
                    Welcome Back!
                  </h1>

                  <p className="text-secondary mb-0">
                    Sign in to your CareConnect account
                  </p>

                </div>

                {/* Login Form */}
                <form id="loginForm" onSubmit={handleSubmit}>

                  {/* Email */}
                  <div className="mb-3">

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
                        placeholder="Enter your email"
                        autoComplete="username"
                        required
                      />

                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">

                    <div className="d-flex justify-content-between">

                      <label htmlFor="password" className="form-label fw-semibold">
                        Password
                      </label>

                      <Link
                        to="/forgot-password"
                        className="small text-info text-decoration-none"
                      >
                        Forgot password?
                      </Link>

                    </div>

                    <div className="input-group">

                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>

                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                      />

                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        aria-pressed={showPassword}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                      </button>

                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="form-check mb-4">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                    />

                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>

                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-3">

                    <button
                      type="submit"
                      className="btn btn-info btn-lg rounded-pill fw-semibold"
                    >
                      Sign In
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>

                  {/* Feedback */}
                  <div
                    id="loginFeedback"
                    className={`small text-center ${feedback ? 'text-danger mt-3' : ''}`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback}
                  </div>

                </form>

                {/* Registration Link */}
                <div className="text-center mt-4">

                  <p className="text-secondary mb-0">
                    Don't have an account?{' '}
                    <Link
                      to="/register"
                      className="text-info fw-semibold text-decoration-none"
                    >
                      Register here
                    </Link>
                  </p>

                </div>

                {/* Security Note */}
                <div className="login-security mt-4 p-3 rounded-3 text-center">

                  <i className="bi bi-shield-lock-fill text-info me-1"></i>

                  <small className="text-secondary">
                    Secure access for authorized healthcare users
                  </small>

                </div>

              </div>

              <p className="text-center text-secondary small mt-4">
                &copy; {new Date().getFullYear()} CareConnect.
                All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Login
