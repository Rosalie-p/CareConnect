
function Services() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-info text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Our Services</h1>
          <p className="lead mb-0">
            Digital solutions designed to improve healthcare coordination.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">What We Offer</h2>
            <p className="text-secondary">
              Connecting healthcare facilities through one platform.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <i className="bi bi-person-plus-fill display-4 text-info"></i>
                <h4 className="fw-bold mt-3">Patient Referrals</h4>
                <p className="text-secondary">
                  Create and send patient referrals from smaller healthcare
                  facilities to larger hospitals and specialized centres.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <i className="bi bi-file-earmark-medical-fill display-4 text-info"></i>
                <h4 className="fw-bold mt-3">Laboratory Results</h4>
                <p className="text-secondary">
                  Support the sharing and management of laboratory results
                  between connected healthcare facilities.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <i className="bi bi-activity display-4 text-info"></i>
                <h4 className="fw-bold mt-3">Diagnostic Services</h4>
                <p className="text-secondary">
                  Coordinate access to X-rays, ultrasound scans, CT scans
                  and MRI services.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <i className="bi bi-clipboard-check-fill display-4 text-info"></i>
                <h4 className="fw-bold mt-3">Referral Tracking</h4>
                <p className="text-secondary">
                  Monitor referral progress and keep healthcare providers
                  updated on the status of patient referrals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
