
function Contact() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-info text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead mb-0">
            We'd love to hear from you. Get in touch with CareConnect.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* CONTACT INFORMATION */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Get In Touch</h2>

              <p className="text-secondary">
                Have questions about patient referrals, laboratory results
                or our diagnostic services? Contact our team.
              </p>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-geo-alt-fill text-info fs-3 me-3"></i>
                <div>
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-secondary">
                    Eldoret, Uasin Gishu County, Kenya
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-envelope-fill text-info fs-3 me-3"></i>
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-secondary">
                    Contact us through our official email.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-clock-fill text-info fs-3 me-3"></i>
                <div>
                  <h5 className="fw-bold">Availability</h5>
                  <p className="text-secondary">
                    We're here to assist you with your enquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-info text-white px-4">
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
