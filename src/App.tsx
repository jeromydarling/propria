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
import ResaleCalculator from './views/ResaleCalculator'
import EquityProjector from './views/EquityProjector'
import MagicImport from './views/MagicImport'
import HudReport from './views/HudReport'

const NAV_ITEMS = [
  { path: '/', label: 'Marketing' },
  { path: '/app', label: 'CLT App' },
  { path: '/homeowner', label: 'Homeowner' },
  { path: '/gardener', label: 'Gardener' },
  { path: '/education', label: 'Education' },
  { path: '/certification', label: 'Counselor Cert' },
  { path: '/counselor', label: 'Counselor Dash' },
  { path: '/directory', label: 'Directory' },
  { path: '/resale-calculator', label: 'Resale Calc' },
  { path: '/equity', label: 'Equity Projector' },
  { path: '/import', label: 'Magic Import' },
  { path: '/hud-report', label: 'HUD-9902' },
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
        <Route path="/gardener" element={<Gardener />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certification" element={<CounselorCert />} />
        <Route path="/counselor" element={<CounselorDash />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/resale-calculator" element={<ResaleCalculator />} />
        <Route path="/equity" element={<EquityProjector />} />
        <Route path="/import" element={<MagicImport />} />
        <Route path="/hud-report" element={<HudReport />} />
      </Routes>
      <DevNav />
    </HashRouter>
  )
}

export default App
