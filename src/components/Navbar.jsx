
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold fs-4" href="/">
          <i className="bi bi-heart-pulse-fill text-info"></i>
          <span className="text-info"> CareConnect</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>

            <li className="nav-item">
              <a href="/login" className="btn btn-outline-info px-4">
                Login
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
