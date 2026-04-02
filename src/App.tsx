import { useState } from 'react'
import './App.css'
import Marketing from './views/Marketing'
import CltApp from './views/CltApp'
import Homeowner from './views/Homeowner'
import Gardener from './views/Gardener'
import Education from './views/Education'
import CounselorCert from './views/CounselorCert'
import CounselorDash from './views/CounselorDash'
import Directory from './views/Directory'

const VIEWS = [
  { id: 'v-mkt', label: 'Marketing', component: Marketing },
  { id: 'v-clt', label: 'CLT App', component: CltApp },
  { id: 'v-hw', label: 'Homeowner', component: Homeowner },
  { id: 'v-grd', label: 'Gardener', component: Gardener },
  { id: 'v-edu', label: 'Education', component: Education },
  { id: 'v-crt', label: 'Counselor Cert', component: CounselorCert },
  { id: 'v-dsh', label: 'Counselor Dash', component: CounselorDash },
  { id: 'v-dir', label: 'Directory', component: Directory },
] as const

function App() {
  const [activeView, setActiveView] = useState('v-mkt')

  return (
    <>
      <div className="sw">
        <div className="sw-logo">Propria<span>.</span></div>
        <div className="sw-sep" />
        {VIEWS.map(v => (
          <button
            key={v.id}
            className={'sw-btn' + (activeView === v.id ? ' on' : '')}
            onClick={() => setActiveView(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      {VIEWS.map(v => (
        <div key={v.id} className={'pv' + (activeView === v.id ? ' on' : '')} id={v.id}>
          <div className="pv-inner" id={'vid_' + v.id}>
            <v.component />
          </div>
        </div>
      ))}
    </>
  )
}

export default App
