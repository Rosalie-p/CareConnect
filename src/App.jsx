
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


import IncomingRequests from './lab/IncomingRequests'
import SampleManagement from './lab/SampleManagement'
import TestsInProgress from './lab/TestsInProgress'
import EnterTestResults from './lab/EnterTestResults'
import VerifyResults from './lab/VerifyResults'

function AppContent() {
  const location = useLocation()

const isSpecialPage =
  ['/login', '/forgot-password', '/admin', '/clinic'].includes(
    location.pathname
  ) || location.pathname.startsWith('/lab')

  return (
    <>
      {!isSpecialPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/clinic" element={<ClinicDashboard />} />

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







