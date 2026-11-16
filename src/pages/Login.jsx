
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setFeedback('')
    setLoading(true)

    try {
      // Step 1: Authenticate the user
      const data = await loginUser(username, password)

      // Step 2: Save JWT tokens
      localStorage.setItem('accessToken', data.access)
      localStorage.setItem('refreshToken', data.refresh)

      // Step 3: Get the authenticated user's details
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/accounts/me/`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${data.access}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Unable to retrieve your account details.')
      }

      const user = await response.json()

      // Step 4: Define dashboard routes for each role
      const dashboardRoutes = {
        admin: '/admin',
        clinic_doctor: '/clinic',
        lab_technician: '/lab',
        facility: '/hospital',
      }

      // Step 5: Identify the user's dashboard
      const destination = dashboardRoutes[user.role]

      if (!destination) {
        throw new Error(
          'Your account does not have an assigned dashboard.'
        )
      }

      // Step 6: Save user information
      localStorage.setItem('user', JSON.stringify(user))

      // Step 7: Redirect to the correct dashboard
      navigate(destination, { replace: true })

    } catch (error) {
      // Clear saved authentication data if login fails
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')

      setFeedback(error.message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">

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

      <main className="login-section">
        <div className="container">

          <div className="row justify-content-center align-items-center">

            <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4">

              <div className="login-card p-4 p-md-5 rounded-4">

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

                <form id="loginForm" onSubmit={handleSubmit}>

                  {/* Username */}
                  <div className="mb-3">

                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>

                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        autoComplete="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                      disabled={loading}
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                      {!loading && <i className="bi bi-arrow-right ms-2"></i>}
                    </button>

                  </div>

                  {/* Feedback */}
                  <div
                    className={`small text-center ${feedback ? 'mt-3' : ''}`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback && (
                      <span className="text-danger">
                        {feedback}
                      </span>
                    )}
                  </div>

                </form>

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


