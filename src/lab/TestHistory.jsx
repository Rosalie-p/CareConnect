import { useState } from 'react'

function TestHistory() {
  const [searchTerm, setSearchTerm] = useState('')

  const [tests] = useState([
    {
      id: 'TEST-001',
      patient: 'CC-00120',
      clinic: 'Kisumu Family Clinic',
      test: 'Full Blood Count',
      date: '07 Nov 2026',
      technician: 'John Kamau',
      status: 'Verified',
    },
    {
      id: 'TEST-002',
      patient: 'CC-00121',
      clinic: 'Green Valley Clinic',
      test: 'Malaria Test',
      date: '06 Nov 2026',
      technician: 'Mary Achieng',
      status: 'Sent',
    },
    {
      id: 'TEST-003',
      patient: 'CC-00122',
      clinic: 'Sunrise Medical Centre',
      test: 'Urinalysis',
      date: '05 Nov 2026',
      technician: 'Peter Otieno',
      status: 'Verified',
    },
    {
      id: 'TEST-004',
      patient: 'CC-00123',
      clinic: 'Kisumu Family Clinic',
      test: 'Blood Sugar Test',
      date: '04 Nov 2026',
      technician: 'Jane Wanjiku',
      status: 'Sent',
    },
  ])

  const filteredTests = tests.filter((test) =>
    `${test.id} ${test.patient} ${test.clinic} ${test.test}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div className="lab-content">

      <section className="lab-welcome">
        <div>
          <span className="lab-eyebrow">
            LABORATORY MANAGEMENT
          </span>

          <h2>Test History</h2>

          <p>
            Review previously completed laboratory tests
            and their processing records.
          </p>
        </div>
      </section>

      <section className="lab-stat-grid">

        <div className="lab-stat-card">
          <div className="lab-stat-icon green">
            <i className="bi bi-clipboard-check"></i>
          </div>

          <div>
            <span>Total Tests</span>
            <h3>{tests.length}</h3>
            <small>Recorded tests</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon orange">
            <i className="bi bi-patch-check"></i>
          </div>

          <div>
            <span>Verified</span>
            <h3>
              {tests.filter((test) => test.status === 'Verified').length}
            </h3>
            <small>Approved results</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon yellow">
            <i className="bi bi-send-check"></i>
          </div>

          <div>
            <span>Sent</span>
            <h3>
              {tests.filter((test) => test.status === 'Sent').length}
            </h3>
            <small>Released to clinics</small>
          </div>
        </div>

      </section>

      <section className="lab-panel">

        <div className="lab-panel-header">
          <div>
            <h4>Previous Laboratory Tests</h4>
            <p>Historical records of completed investigations.</p>
          </div>
        </div>

        <div className="lab-search">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search by test ID, patient, clinic or test..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="table-responsive">

          <table className="table lab-table align-middle">

            <thead>
              <tr>
                <th>TEST ID</th>
                <th>PATIENT ID</th>
                <th>REFERRING CLINIC</th>
                <th>TEST</th>
                <th>DATE COMPLETED</th>
                <th>TECHNICIAN</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>

              {filteredTests.map((test) => (
                <tr key={test.id}>

                  <td><strong>{test.id}</strong></td>
                  <td>{test.patient}</td>
                  <td>{test.clinic}</td>
                  <td>{test.test}</td>
                  <td>{test.date}</td>
                  <td>{test.technician}</td>

                  <td>
                    <span className={`lab-status ${
                      test.status === 'Sent'
                        ? 'completed'
                        : 'verified'
                    }`}>
                      {test.status}
                    </span>
                  </td>

                </tr>
              ))}

              {filteredTests.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No matching test records found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  )
}

export default TestHistory