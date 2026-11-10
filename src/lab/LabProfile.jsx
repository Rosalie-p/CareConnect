function LaboratoryProfile() {
  return (
    <div className="lab-content">

      <section className="lab-welcome">
        <div>
          <span className="lab-eyebrow">
            LABORATORY ACCOUNT
          </span>

          <h2>Laboratory Profile</h2>

          <p>
            View your laboratory information and account details.
          </p>
        </div>
      </section>

      <section className="lab-panel">

        <div className="lab-panel-header">
          <div>
            <h4>Laboratory Information</h4>
            <p>Registered laboratory details.</p>
          </div>
        </div>

        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label">Laboratory Name</label>
            <p className="fw-semibold">CareConnect Diagnostic Laboratory</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Laboratory ID</label>
            <p className="fw-semibold">LAB-CC-001</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Location</label>
            <p className="fw-semibold">Kisumu, Kenya</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Laboratory Type</label>
            <p className="fw-semibold">Diagnostic Laboratory</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <p className="fw-semibold">laboratory@careconnect.co.ke</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <p className="fw-semibold">+254 700 000 000</p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Account Status</label>
            <p>
              <span className="lab-status verified">
                Active
              </span>
            </p>
          </div>

          <div className="col-md-6">
            <label className="form-label">Account Type</label>
            <p className="fw-semibold">Laboratory Account</p>
          </div>

        </div>

      </section>

      <section className="lab-panel mt-4">

        <div className="lab-panel-header">
          <div>
            <h4>Laboratory Services</h4>
            <p>Diagnostic services offered by this laboratory.</p>
          </div>
        </div>

        <div className="row g-3">

          {[
            'Full Blood Count',
            'Malaria Testing',
            'Urinalysis',
            'Blood Sugar Testing',
            'Liver Function Tests',
            'Kidney Function Tests',
          ].map((service) => (
            <div className="col-md-4" key={service}>
              <div className="p-3 rounded border d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success"></i>
                <span>{service}</span>
              </div>
            </div>
          ))}

        </div>

      </section>

      <section className="lab-panel mt-4">

        <div className="lab-panel-header">
          <div>
            <h4>Laboratory Account</h4>
            <p>Account management information.</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="lab-avatar">L</div>

          <div>
            <strong>Laboratory Staff</strong>
            <p className="text-muted mb-0">
              Laboratory Administrator
            </p>
          </div>
        </div>

      </section>

    </div>
  )
}

export default LaboratoryProfile