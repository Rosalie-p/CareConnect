
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/about'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

import AdminDashboard from './dashboards/AdminDashboard'
import ClinicDashboard from './dashboards/ClinicDashboard'
import LabDashboard from './dashboards/labDashboard'
import HospitalDashboard from './dashboards/HospitalDashboard'

// Clinic pages
import PatientReferrals from './clinic/PatientReferrals'
import LaboratoryResults from './clinic/LaboratoryResults'
import DiagnosticServices from './clinic/Diagnosticservices'
import TrackReferrals from './clinic/TrackReferrals'
import Appointments from './clinic/Appointments'
import MyProfile from './clinic/MyProfile'
import HelpSupport from './clinic/HelpSupport'

// Laboratory pages
import IncomingRequests from './lab/IncomingRequests'
import SampleManagement from './lab/SampleManagement'
import TestsInProgress from './lab/TestsInProgress'
import EnterTestResults from './lab/EnterTestResults'
import VerifyResults from './lab/VerifyResults'

function AppContent() {
  const location = useLocation()

  const isSpecialPage =
    ['/login', '/forgot-password', '/admin'].includes(
      location.pathname
    ) ||
    location.pathname.startsWith('/lab') ||
    location.pathname.startsWith('/clinic') ||
    location.pathname.startsWith('/hospital')

  return (
    <>
      {!isSpecialPage && <Navbar />}

      <main>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Hospital / Facility dashboard */}
          <Route path="/hospital" element={<HospitalDashboard />} />

          {/* Clinic dashboard and its pages */}
          <Route path="/clinic" element={<ClinicDashboard />}>
            <Route path="referrals" element={<PatientReferrals />} />
            <Route path="lab-results" element={<LaboratoryResults />} />
            <Route path="diagnostics" element={<DiagnosticServices />} />
            <Route path="track-referrals" element={<TrackReferrals />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="help-support" element={<HelpSupport />} />
          </Route>

          {/* Laboratory dashboard */}
          <Route path="/lab" element={<LabDashboard />} />
          <Route path="/lab/requests" element={<LabDashboard />} />
          <Route path="/lab/samples" element={<LabDashboard />} />
          <Route path="/lab/tests" element={<LabDashboard />} />
          <Route path="/lab/results/enter" element={<LabDashboard />} />
          <Route path="/lab/results/verify" element={<LabDashboard />} />
          <Route path="/lab/results/sent" element={<LabDashboard />} />
          <Route path="/lab/results/history" element={<LabDashboard />} />
          <Route path="/lab/profile" element={<LabDashboard />} />

        </Routes>
      </main>

      {!isSpecialPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App









