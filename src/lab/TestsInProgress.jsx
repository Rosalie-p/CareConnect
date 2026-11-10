
import { useState } from 'react'

function TestsInProgress() {
  const [tests, setTests] = useState([
    {
      id: 'TEST-001',
      requestId: 'LAB-001',
      patient: 'CC-00125',
      clinic: 'Kisumu Family Clinic',
      test: 'Full Blood Count',
      technician: 'John Kamau',
      startDate: '09 Nov 2026',
      progress: 65,
      status: 'In Progress',
    },
    {
      id: 'TEST-002',
      requestId: 'LAB-002',
      patient: 'CC-00126',
      clinic: 'Green Valley Clinic',
      test: 'Malaria Test',
      technician: 'Mary Achieng',
      startDate: '09 Nov 2026',
      progress: 30,
      status: 'In Progress',
    },
    {
      id: 'TEST-003',
      requestId: 'LAB-003',
      patient: 'CC-00127',
      clinic: 'Sunrise Medical Centre',
      test: 'Urinalysis',
      technician: 'Peter Otieno',
      startDate: '08 Nov 2026',
      progress: 100,
      status: 'Completed',
    },
    {
      id: 'TEST-004',
      requestId: 'LAB-004',
      patient: 'CC-00128',
      clinic: 'Kisumu Family Clinic',
      test: 'Blood Sugar Test',
      technician: 'Jane Wanjiku',
      startDate: '09 Nov 2026',
      progress: 10,
      status: 'In Progress',
    },
  ])

  const updateProgress = (id, progress) => {
    setTests((previous) =>
      previous.map((test) => {
        if (test.id === id) {
          return {
            ...test,
            progress: Number(progress),
            status: Number(progress) === 100
              ? 'Completed'
              : 'In Progress',
          }
        }

        return test
      })
    )
  }

  const totalTests = tests.length

  const activeTests = tests.filter(
    (test) => test.status === 'In Progress'
  ).length

  const completedTests = tests.filter(
    (test) => test.status === 'Completed'
  ).length

  return (
    <div className="lab-content">

      {/* Page heading */}
      <section className="lab-welcome">
        <div>
          <span className="lab-eyebrow">
            LABORATORY MANAGEMENT
          </span>

          <h2>Tests in Progress</h2>

          <p>
            Monitor ongoing laboratory investigations and
            update the progress of assigned tests.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="lab-stat-grid">

        <div className="lab-stat-card">
          <div className="lab-stat-icon green">
            <i className="bi bi-microscope"></i>
          </div>

          <div>
            <span>Total Tests</span>
            <h3>{totalTests}</h3>
            <small>Registered tests</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon orange">
            <i className="bi bi-hourglass-split"></i>
          </div>

          <div>
            <span>In Progress</span>
            <h3>{activeTests}</h3>
            <small>Currently being conducted</small>
          </div>
        </div>

        <div className="lab-stat-card">
          <div className="lab-stat-icon yellow">
            <i className="bi bi-check-circle"></i>
          </div>

          <div>
            <span>Completed</span>
            <h3>{completedTests}</h3>
            <small>Awaiting next steps</small>
          </div>
        </div>

      </section>

      {/* Tests table */}
      <section className="lab-panel">

        <div className="lab-panel-header">
          <div>
            <h4>Laboratory Test Activities</h4>
            <p>
              View assigned tests and update their progress.
            </p>
          </div>
        </div>

        <div className="table-responsive">

          <table className="table lab-table align-middle">

            <thead>
              <tr>
                <th>TEST ID</th>
                <th>REQUEST ID</th>
                <th>PATIENT ID</th>
                <th>CLINIC</th>
                <th>TEST REQUIRED</th>
                <th>TECHNICIAN</th>
                <th>START DATE</th>
                <th>PROGRESS</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>

              {tests.map((test) => (
                <tr key={test.id}>

                  <td><strong>{test.id}</strong></td>
                  <td>{test.requestId}</td>
                  <td>{test.patient}</td>
                  <td>{test.clinic}</td>
                  <td>{test.test}</td>
                  <td>{test.technician}</td>
                  <td>{test.startDate}</td>

                  <td style={{ minWidth: '140px' }}>

                    <div className="d-flex justify-content-between mb-1">
                      <small>{test.progress}%</small>
                    </div>

                    <div
                      className="progress"
                      style={{ height: '7px' }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${test.progress}%`,
                          backgroundColor: '#006454',
                        }}
                        aria-valuenow={test.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                  </td>

                  <td>
                    <span className={`lab-status ${
                      test.status === 'Completed'
                        ? 'completed'
                        : 'processing'
                    }`}>
                      {test.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>

      {/* Update test progress */}
      <section className="lab-panel mt-4">

        <div className="lab-panel-header">
          <div>
            <h4>Update Test Progress</h4>
            <p>
              Select a test and update its completion percentage.
            </p>
          </div>
        </div>

        {tests
          .filter((test) => test.status === 'In Progress')
          .map((test) => (

            <div
              key={test.id}
              className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 py-3 border-bottom"
            >

              <div>
                <strong>{test.test}</strong>
                <p className="mb-0 text-muted small">
                  {test.id} · {test.patient}
                </p>
              </div>

              <div style={{ minWidth: '220px' }}>

                <label className="form-label small">
                  Progress: {test.progress}%
                </label>

                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  step="5"
                  value={test.progress}
                  onChange={(e) =>
                    updateProgress(test.id, e.target.value)
                  }
                />

              </div>

            </div>

          ))}

        {activeTests === 0 && (
          <p className="text-muted py-3 mb-0">
            There are no tests currently in progress.
          </p>
        )}

      </section>

    </div>
  )
}

export default TestsInProgress
