
import { useState } from 'react'

function HelpSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const faqs = [
    {
      question: 'How do I create a patient referral?',
      answer:
        'Open the Patient Referrals page, select the option to create a referral, enter the patient details and referral information, then submit the form.'
    },
    {
      question: 'How can I view laboratory results?',
      answer:
        'Navigate to Laboratory Results from your clinic dashboard. You can search for a patient or use their patient ID to find available results.'
    },
    {
      question: 'How do I track a patient referral?',
      answer:
        'Open the Track Referrals page. Search using the referral ID or patient details to check the current referral status.'
    },
    {
      question: 'How can I book an appointment?',
      answer:
        'Go to the Appointments page and select Book Appointment. Enter the patient information, hospital, service, date and time.'
    },
    {
      question: 'What should I do if I cannot access my account?',
      answer:
        'Contact the CareConnect support team and provide your registered email address and a description of the problem.'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      issueType: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="clinic-page">

      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Help & Support</h2>
        <p className="text-muted mb-0">
          Find answers to common questions or contact our support team.
        </p>
      </div>

      {/* Support Cards */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <i className="bi bi-envelope-at fs-1 text-success mb-3"></i>
              <h5 className="fw-bold">Email Support</h5>
              <p className="text-muted small">
                Send us your questions or technical issues.
              </p>
              <a href="mailto:support@careconnect.co.ke">
                support@careconnect.co.ke
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <i className="bi bi-telephone fs-1 text-success mb-3"></i>
              <h5 className="fw-bold">Phone Support</h5>
              <p className="text-muted small">
                Contact our team for assistance.
              </p>
              <span className="text-muted">
                Contact details to be provided
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center py-4">
              <i className="bi bi-clock-history fs-1 text-success mb-3"></i>
              <h5 className="fw-bold">Support Hours</h5>
              <p className="text-muted small">
                Our support availability.
              </p>
              <span className="text-muted">
                Working hours to be confirmed
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="row g-4">

        {/* Frequently Asked Questions */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">

            <div className="card-header bg-white py-3">
              <h5 className="fw-bold mb-0">
                <i className="bi bi-question-circle text-success me-2"></i>
                Frequently Asked Questions
              </h5>
            </div>

            <div className="card-body">

              <div className="accordion" id="faqAccordion">

                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>

                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>

                    <div
                      id={`faq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted">
                        {faq.answer}
                      </div>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

        {/* Contact Support Form */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white py-3">
              <h5 className="fw-bold mb-0">
                <i className="bi bi-chat-dots text-success me-2"></i>
                Submit a Support Request
              </h5>
            </div>

            <div className="card-body">

              {submitted && (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Your support request has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Issue Type
                  </label>
                  <select
                    name="issueType"
                    className="form-select"
                    value={formData.issueType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select issue type</option>
                    <option value="Account Access">Account Access</option>
                    <option value="Patient Referrals">Patient Referrals</option>
                    <option value="Laboratory Results">Laboratory Results</option>
                    <option value="Appointments">Appointments</option>
                    <option value="Technical Problem">Technical Problem</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter the subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Describe the problem you are experiencing..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <i className="bi bi-send me-2"></i>
                  Submit Request
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HelpSupport
