
function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-6">
              <p className="text-info fw-bold">
                HEALTHCARE · REFERRALS · RESULTS
              </p>

              <h1 className="display-4 fw-bold">
                Connecting Healthcare,
                <span className="text-info"> Simplifying Referrals</span>
              </h1>

              <p className="lead text-secondary mt-3">
                CareConnect is a digital platform that connects healthcare
                facilities, making patient referrals, laboratory results
                and diagnostic services easier to manage.
              </p>

              <div className="mt-4">
                <a href="/register" className="btn btn-info text-white px-4 me-2">
                  Get Started
                </a>

                <a href="/about" className="btn btn-outline-info px-4">
                  Learn More
                </a>
              </div>

              <div className="mt-4">
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Easier patient referrals
                </p>

                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Faster access to laboratory results
                </p>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div className="display-1 text-info">
                <i className="bi bi-hospital"></i>
              </div>

              <h3 className="fw-bold mt-3">Connected Healthcare</h3>

              <p className="text-secondary">
                Bringing healthcare facilities closer together.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* ABOUT SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="display-1 text-info text-center">
                <i className="bi bi-heart-pulse-fill"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <p className="text-info fw-bold">
                ABOUT CARECONNECT
              </p>

              <h2 className="fw-bold">
                A Smarter Way to Manage Patient Referrals
              </h2>

              <p className="text-secondary mt-3">
                CareConnect is a digital healthcare platform designed
                to connect healthcare facilities and simplify the
                management of patient referrals, laboratory results
                and diagnostic services.
              </p>

              <p className="text-secondary">
                Our goal is to reduce paperwork, improve communication
                between healthcare facilities and make it easier to
                access and track patient referrals and laboratory results.
              </p>

              <a href="/about" className="btn btn-info text-white px-4">
                Read More About Us
              </a>
            </div>

          </div>
        </div>
      </section>
      
      {/* SERVICES */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <p className="text-info fw-bold">WHAT WE OFFER</p>
            <h2 className="fw-bold">Our Healthcare Services</h2>
            <p className="text-secondary">
              Making healthcare coordination easier through digital solutions.
            </p>
          </div>

          <div className="row g-4">

            {/* PATIENT REFERRALS */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <i className="bi bi-person-plus-fill display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Patient Referrals</h5>
                <p className="text-secondary">
                  Refer patients from one healthcare facility to another
                  quickly and efficiently.
                </p>
              </div>
            </div>

            {/* LABORATORY RESULTS */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <i className="bi bi-file-earmark-medical-fill display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Laboratory Results</h5>
                <p className="text-secondary">
                  Access and share laboratory results between connected
                  healthcare facilities.
                </p>
              </div>
            </div>

            {/* DIAGNOSTIC SERVICES */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <i className="bi bi-activity display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Diagnostic Services</h5>
                <p className="text-secondary">
                  Coordinate X-rays, ultrasound scans, CT scans and MRI
                  services.
                </p>
              </div>
            </div>

            {/* REFERRAL TRACKING */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <i className="bi bi-clipboard-check-fill display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Referral Tracking</h5>
                <p className="text-secondary">
                  Follow the progress of patient referrals and stay
                  updated on their status.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* HOW IT WORKS */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <p className="text-info fw-bold">SIMPLE PROCESS</p>
            <h2 className="fw-bold">How CareConnect Works</h2>
            <p className="text-secondary">
              Four simple steps to connect healthcare facilities.
            </p>
          </div>

          <div className="row g-4 text-center">

            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded shadow-sm p-4 h-100">
                <div className="display-5 fw-bold text-info">01</div>
                <i className="bi bi-person-plus display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Create a Referral</h5>
                <p className="text-secondary">
                  A healthcare provider creates a patient referral
                  through the platform.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded shadow-sm p-4 h-100">
                <div className="display-5 fw-bold text-info">02</div>
                <i className="bi bi-send display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Send to a Facility</h5>
                <p className="text-secondary">
                  The referral is sent to a suitable healthcare
                  facility for further services.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded shadow-sm p-4 h-100">
                <div className="display-5 fw-bold text-info">03</div>
                <i className="bi bi-hospital display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Provide the Service</h5>
                <p className="text-secondary">
                  The receiving facility provides the required
                  laboratory or diagnostic service.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white rounded shadow-sm p-4 h-100">
                <div className="display-5 fw-bold text-info">04</div>
                <i className="bi bi-file-earmark-check display-4 text-info"></i>
                <h5 className="fw-bold mt-3">Share Results</h5>
                <p className="text-secondary">
                  Results are shared with the referring facility
                  through the platform.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* JOIN US SECTION */}
      <section className="py-5 text-center bg-info text-white">
        <div className="container py-4">

          <i className="bi bi-heart-pulse-fill display-3"></i>

          <h2 className="fw-bold mt-3">
            Be Part of Connected Healthcare
          </h2>

          <p className="lead mt-3">
            Join CareConnect and help make patient referrals,
            laboratory results and diagnostic services easier to manage.
          </p>

          <a href="/register" className="btn btn-light text-info fw-bold px-4 mt-3">
            Get Started Today
          </a>

        </div>
      </section>


    </>
  );
}

export default Home;
