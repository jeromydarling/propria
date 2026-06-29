import { useState } from 'react'
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Marketing from './views/Marketing'
import CltApp from './views/CltApp'
import Homeowner from './views/Homeowner'
import Gardener from './views/Gardener'
import Education from './views/Education'
import CounselorCert from './views/CounselorCert'
import CounselorDash from './views/CounselorDash'
import Directory from './views/Directory'
import ApplicantPortal from './views/ApplicantPortal'
import Pricing from './views/Pricing'

const NAV_ITEMS = [
  { path: '/', label: 'Marketing' },
  { path: '/app', label: 'CLT App' },
  { path: '/homeowner', label: 'Homeowner' },
  { path: '/applicant', label: 'Applicant' },
  { path: '/gardener', label: 'Gardener' },
  { path: '/education', label: 'Education' },
  { path: '/certification', label: 'Counselor Cert' },
  { path: '/counselor', label: 'Counselor Dash' },
  { path: '/directory', label: 'Directory' },
]

function DevNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="dev-nav">
      {open && (
        <div className="dev-nav-menu">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
      <button className="dev-nav-toggle" onClick={() => setOpen(!open)}>
        {open ? '×' : 'DEV'}
      </button>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/app" element={<CltApp />} />
        <Route path="/homeowner" element={<Homeowner />} />
        <Route path="/applicant" element={<ApplicantPortal />} />
        <Route path="/gardener" element={<Gardener />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certification" element={<CounselorCert />} />
        <Route path="/counselor" element={<CounselorDash />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <DevNav />
    </HashRouter>
  )
}

export default App
