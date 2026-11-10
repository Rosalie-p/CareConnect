
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold">
              <i className="bi bi-heart-pulse-fill text-info me-2"></i>
              CareConnect
            </h4>

            <p className="text-white-50 mt-3">
              Connecting healthcare facilities through simplified
              patient referrals, laboratory results and diagnostic services.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white-50 text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white-50 text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* ACCOUNT LINKS */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Account</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/login" className="text-white-50 text-decoration-none">Login</a>
              </li>
              <li className="mb-2">
                <a href="/register" className="text-white-50 text-decoration-none">Register</a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center text-white-50">
          <p className="mb-0">
            &copy; 2026 CareConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
