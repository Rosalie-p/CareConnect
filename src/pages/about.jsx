
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* About Hero */}
      <header className="about-hero py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <span className="badge rounded-pill bg-white text-info px-3 py-2 mb-3">
                ABOUT CARECONNECT
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Connecting Healthcare,
                <span className="text-info"> Simplifying Referrals.</span>
              </h1>

              <p className="lead text-secondary mb-4">
                CareConnect is a digital platform designed to help healthcare
                facilities coordinate patient referrals, laboratory results,
                and diagnostic services more efficiently.
              </p>

              <p className="text-secondary mb-4">
                We aim to bridge communication gaps between healthcare
                providers, reduce reliance on paper-based processes, and
                support better coordination of patient care.
              </p>

              <Link to="/services" className="btn btn-info rounded-pill px-4 py-2">
                Explore Our Services
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-5">
              <div className="about-image-wrapper rounded-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  className="img-fluid w-100"
                  alt="Healthcare professionals discussing patient care"
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">

              <span className="text-info fw-semibold text-uppercase">
                Our Story
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-4">
                Why CareConnect?
              </h2>

              <p className="text-secondary fs-5">
                Healthcare facilities do not always have access to every
                specialized test, diagnostic machine, or laboratory service
                their patients may need. Coordinating referrals through
                paper documents and phone calls can also make it difficult
                to track progress and share results promptly.
              </p>

              <p className="text-secondary fs-5 mb-0">
                CareConnect is designed to provide a centralized digital
                platform where participating facilities can coordinate
                referrals, request diagnostic services, and share laboratory
                results through a more organized process.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-section py-5">
        <div className="container py-4">

          <div className="text-center mb-5">
            <span className="text-info fw-semibold text-uppercase">
              Our Purpose
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Our Mission and Vision
            </h2>

            <p className="text-secondary mx-auto" style={{ maxWidth: '650px' }}>
              We aim to make healthcare coordination simpler by connecting
              facilities through accessible digital tools.
            </p>
          </div>

          <div className="row g-4">

            {/* Mission */}
            <div className="col-md-6">
              <div className="purpose-card h-100 p-4 p-lg-5 rounded-4">

                <div className="purpose-icon mb-4">
                  <i className="bi bi-bullseye"></i>
                </div>

                <h3 className="h4 fw-bold mb-3">Our Mission</h3>

                <p className="text-secondary mb-0">
                  To improve communication and coordination among
                  healthcare facilities by supporting digital patient
                  referrals, laboratory result sharing, and access to
                  diagnostic services.
                </p>

              </div>
            </div>

            {/* Vision */}
            <div className="col-md-6">
              <div className="purpose-card h-100 p-4 p-lg-5 rounded-4">

                <div className="purpose-icon mb-4">
                  <i className="bi bi-eye"></i>
                </div>

                <h3 className="h4 fw-bold mb-3">Our Vision</h3>

                <p className="text-secondary mb-0">
                  To contribute to a more connected healthcare system
                  where facilities can collaborate efficiently and
                  patients can access the diagnostic services they need
                  with fewer coordination barriers.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="text-info fw-semibold text-uppercase">
                What We Aim to Achieve
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-3">
                Making Healthcare Coordination Easier
              </h2>

              <p className="text-secondary">
                CareConnect is being designed to support healthcare
                providers in managing referrals and exchanging
                information through one coordinated platform.
              </p>
            </div>

            <div className="col-lg-7">

              <div className="objective-item d-flex align-items-start mb-4">
                <div className="objective-icon me-3">
                  <i className="bi bi-arrow-left-right"></i>
                </div>

                <div>
                  <h3 className="h5 fw-bold">
                    Simplified Patient Referrals
                  </h3>

                  <p className="text-secondary mb-0">
                    Support organized referral requests between
                    participating healthcare facilities.
                  </p>
                </div>
              </div>

              <div className="objective-item d-flex align-items-start mb-4">
                <div className="objective-icon me-3">
                  <i className="bi bi-file-earmark-medical"></i>
                </div>

                <div>
                  <h3 className="h5 fw-bold">
                    Laboratory Result Sharing
                  </h3>

                  <p className="text-secondary mb-0">
                    Help authorized healthcare workers share and
                    access laboratory results digitally.
                  </p>
                </div>
              </div>

              <div className="objective-item d-flex align-items-start mb-4">
                <div className="objective-icon me-3">
                  <i className="bi bi-hospital"></i>
                </div>

                <div>
                  <h3 className="h5 fw-bold">
                    Better Facility Coordination
                  </h3>

                  <p className="text-secondary mb-0">
                    Encourage collaboration between clinics,
                    hospitals, laboratories, and diagnostic centres.
                  </p>
                </div>
              </div>

              <div className="objective-item d-flex align-items-start">
                <div className="objective-icon me-3">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <div>
                  <h3 className="h5 fw-bold">
                    Referral Tracking
                  </h3>

                  <p className="text-secondary mb-0">
                    Make it easier for participating facilities
                    to monitor referral progress and coordinate
                    follow-up actions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta py-5">
        <div className="container py-4 text-center">

          <h2 className="display-6 fw-bold mb-3">
            Let's Build a More Connected Healthcare System
          </h2>

          <p className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Discover how CareConnect is designed to support patient referrals,
            diagnostic services, and collaboration between healthcare facilities.
          </p>

          <Link
            to="/services"
            className="btn btn-light text-info rounded-pill px-4 py-2 fw-semibold me-2 mb-2"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline-light rounded-pill px-4 py-2 mb-2"
          >
            Contact Us
          </Link>

        </div>
      </section>
    </>
  )
}

export default About


