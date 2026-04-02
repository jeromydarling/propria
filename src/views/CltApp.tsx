import { useState, type ReactNode } from 'react'
import './CltApp.css'
import MagicImport from './MagicImport'

function Sheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null
  return (
    <div className="modal-overlay open" onClick={(e) => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) onClose() }}>
      <div className="modal-sheet">
        <div className="modal-handle"></div>
        {children}
      </div>
    </div>
  )
}

export default function CltApp() {
  const [screen, setScreen] = useState('dashboard')
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [compassOpen, setCompassOpen] = useState(false)
  const [sheet, setSheet] = useState<string|null>(null)
  const [stewTab, setStewTab] = useState('contact')
  const [praecoTab, setPraecoTab] = useState('email')
  const [govTab, setGovTab] = useState('board')
  const [finTab, setFinTab] = useState('overview')
  const [leaseGenerating, setLeaseGenerating] = useState(false)
  const [leaseGenerated, setLeaseGenerated] = useState(false)
  const [checks, setChecks] = useState<Record<string, boolean>>({ task0: true })

  function toggleCheck(id: string) {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function go(name: string) {
    setScreen(name)
    setHamburgerOpen(false)
  }

  const sc = (name: string) => screen === name ? 'screen active' : 'screen'
  const di = (name: string) => screen === name ? 'dsc-item active' : 'dsc-item'
  const ni = (name: string) => screen === name ? 'nav-item active' : 'nav-item'

  return (
    <div className="clt-app">
      <div className="app">

        {/* TOPBAR */}
        <div className="topbar">
          <button className="topbar-hamburger" onClick={() => setHamburgerOpen(true)}>
            <svg viewBox="0 0 18 14"><path d="M0 1h18M0 7h18M0 13h18" strokeLinecap="round"/></svg>
          </button>
          <div className="topbar-brand">
            <div className="topbar-name">Propria<span>.</span></div>
            <div className="topbar-org">Rondo Community Land Trust</div>
          </div>
          <button className="topbar-compass" onClick={() => setCompassOpen(true)}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M8 4v1M8 11v1M4 8h1M11 8h1"/><circle cx="8" cy="8" r="1.5"/></svg>
            <div className="compass-dot"></div>
          </button>
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="desktop-sidebar">
          <div className="dsc-brand">
            <div className="dsc-name">Propria<span>.</span></div>
            <div className="dsc-org">Rondo Community Land Trust</div>
          </div>
          <div className="dsc-section">Core</div>
          <div className={di('dashboard')} onClick={() => go('dashboard')}>
            <svg viewBox="0 0 16 16"><rect x="2" y="2" width="5.5" height="5.5" rx="1"/><rect x="8.5" y="2" width="5.5" height="5.5" rx="1"/><rect x="2" y="8.5" width="5.5" height="5.5" rx="1"/><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1"/></svg>
            Dashboard
          </div>
          <div className={di('stewardship')} onClick={() => go('stewardship')}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>
            Stewardship <span className="dsc-badge">3</span>
          </div>
          <div className={di('pipeline')} onClick={() => go('pipeline')}>
            <svg viewBox="0 0 16 16"><path d="M2 4h12M2 8h8M2 12h5"/></svg>
            Pipeline <span className="dsc-badge gold">7</span>
          </div>
          <div className={di('praeco')} onClick={() => go('praeco')}>
            <svg viewBox="0 0 16 16"><path d="M2 4h12v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg>
            Praeco
          </div>
          <div className={di('resale')} onClick={() => go('resale')}>
            <svg viewBox="0 0 16 16"><path d="M5 2h6a1 1 0 0 1 1 1v12l-4-2.2L4 15V3a1 1 0 0 1 1-1z"/></svg>
            Resale <span className="dsc-badge">1</span>
          </div>
          <div className="dsc-section">Property</div>
          <div className={di('assets')} onClick={() => go('assets')}>
            <svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg>
            Asset management
          </div>
          <div className={di('maintenance')} onClick={() => go('maintenance')}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5"/></svg>
            Maintenance <span className="dsc-badge">1</span>
          </div>
          <div className="dsc-section">Community</div>
          <div className={di('governance')} onClick={() => go('governance')}>
            <svg viewBox="0 0 16 16"><rect x="2" y="5" width="12" height="9" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg>
            Governance
          </div>
          <div className={di('finances')} onClick={() => go('finances')}>
            <svg viewBox="0 0 16 16"><path d="M2 13h12M4 13V7m3-5v11M10 13V9m3-3v7"/></svg>
            Finances
          </div>
          <div className="dsc-section">Account</div>
          <div className={di('settings')} onClick={() => go('settings')}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M4.2 4.2l1 1M10.8 10.8l1 1M4.2 11.8l1-1M10.8 5.2l1-1"/></svg>
            Settings
          </div>
          <div className={di('import')} onClick={() => go('import')}>
            <svg viewBox="0 0 16 16"><path d="M8 2v8M5 7l3 3 3-3"/><path d="M2 12v2h12v-2"/></svg>
            Magic Import
          </div>
          <div className={di('account')} onClick={() => go('account')}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>
            My account
          </div>
          <div className="dsc-spacer"></div>
          <div className="dsc-user">
            <div className="dsc-avatar">SC</div>
            <div>
              <div className="dsc-user-name">Sarah Chen</div>
              <div className="dsc-user-role">Stewardship coordinator</div>
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="content-area">
          <div className="screens">

            {/* DASHBOARD */}
            <div className={sc('dashboard')}>
              <div className="dash-hero">
                <div className="dash-greeting">Good morning, <em>Sarah</em></div>
                <div className="dash-date">Tuesday, April 1, 2026 · Rondo CLT</div>
                <div className="dash-stats">
                  <div className="dash-stat"><div className="dash-stat-label">Families</div><div className="dash-stat-val">47</div><div className="dash-stat-sub up">+2 this quarter</div></div>
                  <div className="dash-stat"><div className="dash-stat-label">Lease collected</div><div className="dash-stat-val">94%</div><div className="dash-stat-sub warn">3 overdue</div></div>
                  <div className="dash-stat"><div className="dash-stat-label">Active applicants</div><div className="dash-stat-val">12</div><div className="dash-stat-sub muted">7 in education</div></div>
                  <div className="dash-stat"><div className="dash-stat-label">Check-ins due</div><div className="dash-stat-val">7</div><div className="dash-stat-sub warn">By Apr 30</div></div>
                </div>
              </div>
              <div className="dash-ground"></div>
              <div className="sec-header" style={{paddingTop:16}}><span className="sec-title">Needs attention</span><span className="sec-action">View all</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="feed-item" onClick={() => go('stewardship')}><div className="feed-avatar av-coral">MT</div><div className="feed-body"><div className="feed-name">Maria Torres — 14 Oak St.</div><div className="feed-detail">No response to 2 check-in attempts. 23 days since last contact.</div></div><div className="feed-meta"><span className="dir-pill dir-cura">Cura</span><span className="feed-time">23d</span></div></div>
                <div className="feed-item" onClick={()=>setSheet('walker')}><div className="feed-avatar av-coral">JW</div><div className="feed-body"><div className="feed-name">James &amp; Denise Walker</div><div className="feed-detail">Ground lease 9 days overdue. $52. No prior late history.</div></div><div className="feed-meta"><span className="dir-pill dir-reconciliatio">Reconciliatio</span><span className="feed-time">9d</span></div></div>
                <div className="feed-item" onClick={()=>setSheet('diaz')}><div className="feed-avatar av-amber">RD</div><div className="feed-body"><div className="feed-name">Roberto &amp; Ana Diaz</div><div className="feed-detail">Annual check-in due this month. No appointment scheduled.</div></div><div className="feed-meta"><span className="dir-pill dir-custodia">Custodia</span><span className="feed-time">Due Apr 30</span></div></div>
                <div className="feed-item" onClick={() => go('pipeline')}><div className="feed-avatar av-blue">KJ</div><div className="feed-body"><div className="feed-name">Keisha Johnson — Applicant</div><div className="feed-detail">Income docs expired Mar 14. Education 60% stalled. Application at risk.</div></div><div className="feed-meta"><span className="dir-pill dir-itiner">Itiner</span><span className="feed-time">17d ago</span></div></div>
                <div className="feed-item" onClick={() => go('maintenance')}><div className="feed-avatar av-teal">PM</div><div className="feed-body"><div className="feed-name">Patricia &amp; Leon Moore</div><div className="feed-detail">Maintenance at 56 Thomas Ave open 31 days. No contractor update.</div></div><div className="feed-meta"><span className="dir-pill dir-reconciliatio">Reconciliatio</span><span className="feed-time">31d</span></div></div>
              </div>
              <div className="sec-header"><span className="sec-title">Today's tasks</span><span className="sec-action">+ Add</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                {[{id:'task0',t:'Call Walker family re: overdue payment',m:''},{id:'task1',t:'Schedule Diaz annual check-in',m:'Custodia'},{id:'task2',t:'Email Keisha Johnson — expired docs',m:'Itiner'},{id:'task3',t:'Follow up Ace Contracting · 56 Thomas',m:'Maintenance'}].map(task=>
                  <div key={task.id} className="cl-row" onClick={()=>toggleCheck(task.id)}>
                    <div className={'cl-box'+(checks[task.id]?' checked':'')}></div>
                    <span className={'cl-text'+(checks[task.id]?' done':'')}>{task.t}</span>
                    {task.m && <span className="cl-meta">{task.m}</span>}
                  </div>
                )}
              </div>
            </div>

            {/* STEWARDSHIP */}
            <div className={sc('stewardship')}>
              <div className="profile-hero"><div className="profile-av">MT</div><div style={{flex:1}}><div className="profile-name">Maria Torres</div><div className="profile-addr">14 Oak Street · Saint Paul, MN 55104</div><div className="profile-tags"><span className="profile-tag cura">Cura signal</span><span className="profile-tag year">Year 6</span><span className="profile-tag year">Since 2020</span></div></div></div>
              <div className="nri-banner"><div className="nri-banner-dot"></div><div className="nri-banner-text">Maria hasn't responded to 2 check-in attempts. Last contact 23 days ago. NRI suggests a door knock or emergency contact outreach.</div></div>
              <div className="tab-bar"><div className={stewTab==='contact'?'tab active':'tab'} onClick={()=>setStewTab('contact')}>Contact history</div><div className={stewTab==='lease'?'tab active':'tab'} onClick={()=>setStewTab('lease')}>Lease &amp; finances</div><div className={stewTab==='life'?'tab active':'tab'} onClick={()=>setStewTab('life')}>Life events</div><div className={stewTab==='note'?'tab active':'tab'} onClick={()=>setStewTab('note')}>Pastoral note</div></div>
              {/* Contact history tab */}
              {stewTab==='contact' && <>
              <div style={{padding:'12px 14px',display:'flex',gap:8}}><button className="btn primary" style={{flex:1}} onClick={()=>setSheet('logContact')}>+ Log contact</button><button className="btn" style={{flex:1}} onClick={()=>setSheet('scheduleCheckin')}>Schedule check-in</button></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="contact-log-row"><div className="contact-log-icon"><svg viewBox="0 0 16 16"><path d="M2 4h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Email sent</div><div className="contact-log-note">Sent spring assembly invitation and check-in scheduling link. No reply.</div></div><div className="contact-log-time">Mar 24</div></div>
                <div className="contact-log-row"><div className="contact-log-icon"><svg viewBox="0 0 16 16"><path d="M4 2h8a1 1 0 0 1 1 1v9l-3-1.5H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Text message sent</div><div className="contact-log-note">Reminder about annual check-in. No response received.</div></div><div className="contact-log-time">Mar 12</div></div>
                <div className="contact-log-row"><div className="contact-log-icon"><svg viewBox="0 0 16 16"><path d="M4 2a2 2 0 0 0-2 2 10 10 0 0 0 10 10 2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1l-2.5-.5a1 1 0 0 0-1 .5L8.8 10C7.3 9.3 6.7 8.7 6 7.2l.5-.7a1 1 0 0 0 .5-1L6.5 3A1 1 0 0 0 5.5 2H4z"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Phone call — answered</div><div className="contact-log-note">Annual check-in completed by phone. Mentioned possible interest in resale in 2–3 years.</div></div><div className="contact-log-time">Jan 15</div></div>
                <div className="contact-log-row"><div className="contact-log-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Home visit</div><div className="contact-log-note">Year 5 annual check-in. Unit in good condition. Mentioned bathroom faucet dripping.</div></div><div className="contact-log-time">Nov 2024</div></div>
              </div>
              </>}

              {/* Lease & finances tab */}
              {stewTab==='lease' && <>
              <div className="equity-bar-wrap">
                <div className="equity-bar-top"><span className="equity-label">Accumulated equity</span><span className="equity-val">$14,200</span></div>
                <div className="equity-track"><div className="equity-fill" style={{width:'62%'}}></div></div>
                <div style={{fontSize:11,color:'var(--ink-faint)',marginTop:5}}>62% of estimated resale appreciation share</div>
              </div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="card-header"><span className="card-title">Ground lease</span></div>
                <div className="finance-stat"><span className="finance-label">Monthly payment</span><span className="finance-val">$48</span></div>
                <div className="finance-stat"><span className="finance-label">Payments on time</span><span className="finance-val green">74 of 74</span></div>
                <div className="finance-stat"><span className="finance-label">Lease start date</span><span className="finance-val">March 2020</span></div>
                <div className="finance-stat"><span className="finance-label">Next renewal</span><span className="finance-val">October 2034</span></div>
                <div className="finance-stat"><span className="finance-label">Current status</span><span className="finance-val green">Current</span></div>
              </div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="card-header"><span className="card-title">Resale formula</span></div>
                <div className="finance-stat"><span className="finance-label">Purchase price (2020)</span><span className="finance-val">$187,000</span></div>
                <div className="finance-stat"><span className="finance-label">Appreciation share (30%)</span><span className="finance-val">$12,000</span></div>
                <div className="finance-stat"><span className="finance-label">Improvement credit</span><span className="finance-val">$2,800</span></div>
                <div className="finance-stat"><span className="finance-label">Est. resale max</span><span className="finance-val green">$201,800</span></div>
              </div>
              </>}

              {/* Life events tab */}
              {stewTab==='life' && <>
              <div style={{padding:'12px 14px',display:'flex',gap:8}}><button className="btn primary" style={{flex:1}} onClick={()=>setSheet('logLife')}>+ Log life event</button></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="contact-log-row"><div className="contact-log-icon" style={{background:'#FDF6E3'}}><svg viewBox="0 0 16 16"><path d="M8 2l1.5 4.5H14l-3.7 2.7 1.4 4.3L8 11 4.3 13.5l1.4-4.3L2 6.5h4.5z"/></svg></div><div className="contact-log-body"><div className="contact-log-type">5-year homeownership milestone</div><div className="contact-log-note">Maria celebrated 5 years in the home. Sent recognition letter.</div></div><div className="contact-log-time">Mar 2025</div></div>
                <div className="contact-log-row"><div className="contact-log-icon" style={{background:'#E1F5EE'}}><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Employment change</div><div className="contact-log-note">Maria started new job at Hennepin County. Income verified for lease compliance.</div></div><div className="contact-log-time">Aug 2023</div></div>
                <div className="contact-log-row"><div className="contact-log-icon" style={{background:'#FAECE7'}}><svg viewBox="0 0 16 16"><circle cx="8" cy="5" r="2.5"/><path d="M4 12c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5"/></svg></div><div className="contact-log-body"><div className="contact-log-type">Household change</div><div className="contact-log-note">Adult child moved out. Household updated in record.</div></div><div className="contact-log-time">Jun 2022</div></div>
              </div>
              </>}

              {/* Pastoral note tab */}
              {stewTab==='note' && <div style={{padding:14}}>
                <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:10,padding:14,marginBottom:12}}>
                  <div style={{fontSize:11,color:'var(--ink-faint)',marginBottom:8}}>Last updated Nov 2024 · Sarah Chen · Confidential</div>
                  <div style={{fontFamily:'var(--serif-body)',fontSize:14,color:'var(--ink)',lineHeight:1.7,fontWeight:300}}>Maria is a strong, independent homeowner who takes great pride in her home. She mentioned in passing that she may want to sell in the next 2–3 years to be closer to her daughter's school district. No urgency — but worth flagging in the resale pipeline when the time comes. She appreciated the 5-year recognition letter.</div>
                </div>
                <button className="btn primary full" onClick={()=>setSheet('editNote')}>Edit pastoral note</button>
              </div>}
            </div>

            {/* PIPELINE */}
            <div className={sc('pipeline')}>
              <div className="profile-hero"><div className="profile-av" style={{background:'#E6F1FB',color:'#0C447C'}}>KJ</div><div style={{flex:1}}><div className="profile-name">Keisha Johnson</div><div className="profile-addr">Applicant · Waitlist #4 · Score: 74 → 89</div><div className="profile-tags"><span className="profile-tag" style={{background:'rgba(184,92,56,0.25)',color:'#E8956D'}}>Docs expired</span><span className="profile-tag" style={{background:'rgba(245,240,232,0.12)',color:'rgba(245,240,232,0.7)'}}>Education 60%</span></div></div></div>
              <div className="nri-banner"><div className="nri-banner-dot"></div><div className="nri-banner-text">Income verification docs expired Mar 14. Education stalled at Module 7 for 14 days. Application at risk — reach out before Apr 7.</div></div>
              <div style={{padding:'12px 14px',background:'white',borderBottom:'0.5px solid var(--border)'}}>
                <div style={{display:'flex',alignItems:'center',gap:3,overflowX:'auto',paddingBottom:4}}>
                  <div className="pipe-stage"><div className="pipe-circle done">1</div><div className="pipe-stage-label">Intake</div></div><div className="pipe-line done"></div>
                  <div className="pipe-stage"><div className="pipe-circle done">2</div><div className="pipe-stage-label">Income</div></div><div className="pipe-line done" style={{background:'var(--terra)'}}></div>
                  <div className="pipe-stage"><div className="pipe-circle blocked">3</div><div className="pipe-stage-label">Docs</div></div><div className="pipe-line"></div>
                  <div className="pipe-stage"><div className="pipe-circle active">4</div><div className="pipe-stage-label">Education</div></div><div className="pipe-line"></div>
                  <div className="pipe-stage"><div className="pipe-circle">5</div><div className="pipe-stage-label">Counselor</div></div><div className="pipe-line"></div>
                  <div className="pipe-stage"><div className="pipe-circle">6</div><div className="pipe-stage-label">Waitlist</div></div><div className="pipe-line"></div>
                  <div className="pipe-stage"><div className="pipe-circle">7</div><div className="pipe-stage-label">Matched</div></div><div className="pipe-line"></div>
                  <div className="pipe-stage"><div className="pipe-circle">8</div><div className="pipe-stage-label">Closed</div></div>
                </div>
              </div>
              <div style={{padding:'10px 14px',display:'flex',gap:8}}><button className="btn warn" style={{flex:1}} onClick={()=>setSheet('requestDocs')}>Request docs</button><button className="btn primary" style={{flex:1}} onClick={()=>setSheet('advancePipeline')}>Advance stage</button></div>
              <div className="sec-header"><span className="sec-title">Document checklist</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Application form</span><span className="cl-meta">Jan 8</span></div>
                <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Photo ID</span><span className="cl-meta">Jan 8</span></div>
                <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Pay stubs (2 months)</span><span className="cl-meta">Jan 15</span></div>
                <div className="cl-row"><div className="cl-box" style={{borderColor:'var(--terra)'}}></div><span className="cl-text" style={{color:'var(--terra)'}}>Income verification letter — EXPIRED Mar 14</span></div>
                <div className="cl-row"><div className="cl-box"></div><span className="cl-text">Bank statements (3 months)</span></div>
                <div className="cl-row"><div className="cl-box"></div><span className="cl-text">Counseling certificate</span></div>
              </div>
              <div className="sec-header"><span className="sec-title">Homebuyer education</span><span className="sec-action">60% complete</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div style={{padding:'10px 14px'}}><div style={{height:6,background:'var(--parchment-dk)',borderRadius:3,overflow:'hidden',marginBottom:8}}><div style={{width:'60%',height:'100%',background:'var(--forest-light)',borderRadius:3}}></div></div><div style={{fontSize:11,color:'var(--ink-faint)'}}>6 of 10 modules complete · Stalled at Module 7</div></div>
              </div>
            </div>

            {/* PRAECO */}
            <div className={sc('praeco')}>
              <div className="screen-header"><div className="screen-header-title">Praeco</div><div className="screen-header-sub">Herald · Communications, events &amp; community</div></div>
              <div className="tab-bar"><div className={praecoTab==='email'?'tab active':'tab'} onClick={()=>setPraecoTab('email')}>Email</div><div className={praecoTab==='events'?'tab active':'tab'} onClick={()=>setPraecoTab('events')}>Events</div><div className={praecoTab==='website'?'tab active':'tab'} onClick={()=>setPraecoTab('website')}>Website</div></div>
              {praecoTab==='email' && <>
              <div style={{padding:'10px 14px 6px',display:'flex',alignItems:'center',gap:8}}><div style={{flex:1,fontSize:12,color:'var(--ink-light)'}}>Gmail connected · sarah@rondoclt.org</div><button className="btn primary" onClick={()=>setSheet('composeEmail')}>+ Compose</button></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="contact-log-row"><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)',marginBottom:2}}>Spring Assembly — all 47 homeowners</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>Sent Mar 28 · 68% open · 23% clicked</div></div><span className="tag tag-green">Sent</span></div>
                <div className="contact-log-row"><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)',marginBottom:2}}>Ground lease reminder — 3 overdue</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>Sent Mar 25 · 100% open rate</div></div><span className="tag tag-green">Sent</span></div>
                <div className="contact-log-row"><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)',marginBottom:2}}>Welcome to Rondo CLT — new homeowners</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>Draft · NRI-generated · not sent</div></div><span className="tag tag-amber">Draft</span></div>
              </div>
              </>}
              {praecoTab==='events' && <>
              <div style={{padding:'10px 14px 6px',display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:12,color:'var(--ink-light)'}}>2 upcoming events</span><button className="btn primary" onClick={()=>setSheet('createEvent')}>+ Create event</button></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="card-header"><span className="card-title">Spring Community Gathering</span><span className="tag tag-green">Apr 12</span></div>
                <div style={{padding:'12px 14px'}}><div style={{fontSize:12,color:'var(--ink-light)',marginBottom:8}}>Rondo Rec Center · 3–6 PM · 47 invited</div><div style={{height:6,background:'var(--parchment-dk)',borderRadius:3,overflow:'hidden',marginBottom:5}}><div style={{width:'62%',height:'100%',background:'var(--forest-light)',borderRadius:3}}></div></div><div style={{fontSize:11,color:'var(--ink-faint)'}}>29 of 47 RSVP'd (62%)</div></div>
              </div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="card-header"><span className="card-title">Annual Homeowner Assembly</span><span className="tag tag-amber">Apr 22</span></div>
                <div style={{padding:'12px 14px'}}><div style={{fontSize:12,color:'var(--ink-light)',marginBottom:8}}>Rondo CLT Office · 6–8 PM · 47 invited</div><div style={{height:6,background:'var(--parchment-dk)',borderRadius:3,overflow:'hidden',marginBottom:5}}><div style={{width:'30%',height:'100%',background:'var(--gold)',borderRadius:3}}></div></div><div style={{fontSize:11,color:'var(--terra)'}}>14 of 47 RSVP'd (30%) — low attendance alert</div><button className="btn full warn" style={{marginTop:10}} onClick={()=>setSheet('rsvpReminder')}>Send RSVP reminder</button></div>
              </div>
              </>}
              {praecoTab==='website' && <div style={{padding:14}}>
                {/* Browser chrome preview */}
                <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:10,overflow:'hidden',marginBottom:14,boxShadow:'0 4px 24px rgba(0,0,0,0.08)'}}>
                  {/* Browser chrome bar */}
                  <div style={{background:'#2A2A2A',padding:'8px 12px',display:'flex',alignItems:'center',gap:8}}>
                    <div style={{display:'flex',gap:5}}>
                      <div style={{width:10,height:10,borderRadius:'50%',background:'#FF5F57'}}></div>
                      <div style={{width:10,height:10,borderRadius:'50%',background:'#FEBC2E'}}></div>
                      <div style={{width:10,height:10,borderRadius:'50%',background:'#28C840'}}></div>
                    </div>
                    <div style={{flex:1,background:'#1A1A1A',borderRadius:5,padding:'4px 12px',display:'flex',alignItems:'center',gap:6}}>
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#666" strokeWidth="1.5"><circle cx="6" cy="6" r="4"/><path d="M6 4v1M6 7v1M4 6h1M7 6h1"/></svg>
                      <span style={{fontSize:11,color:'#999',fontFamily:'var(--sans)'}}>rondoclt.org</span>
                    </div>
                  </div>

                  {/* Live site preview */}
                  <div style={{background:'var(--cream)',padding:0,fontSize:0,lineHeight:0}}>
                    {/* Mini hero */}
                    <div style={{background:'var(--forest)',padding:'24px 20px 20px',position:'relative'}}>
                      <div style={{position:'absolute',bottom:0,left:0,right:0,height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                        <span style={{fontFamily:'var(--serif-display)',fontSize:14,fontWeight:700,color:'var(--parchment)'}}>Rondo CLT<span style={{color:'var(--terra-light)'}}>.</span></span>
                        <div style={{display:'flex',gap:12}}>
                          {['About','Apply','Events'].map(l=><span key={l} style={{fontSize:9,color:'rgba(245,240,232,0.5)',fontFamily:'var(--sans)'}}>{l}</span>)}
                        </div>
                      </div>
                      <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--parchment)',lineHeight:1.2,letterSpacing:'-0.02em',marginBottom:6}}>Affordable homeownership<br/>in the <em style={{color:'var(--terra-light)',fontStyle:'italic'}}>Rondo neighborhood.</em></div>
                      <div style={{fontFamily:'var(--serif-body)',fontSize:10,color:'rgba(245,240,232,0.6)',lineHeight:1.5,fontWeight:300,marginBottom:12}}>A community land trust preserving permanently affordable homes for families in Saint Paul, Minnesota.</div>
                      <div style={{display:'flex',gap:8}}>
                        <span style={{fontSize:9,padding:'5px 12px',borderRadius:3,background:'var(--terra)',color:'var(--parchment)',fontFamily:'var(--sans)',fontWeight:500}}>Apply for a home</span>
                        <span style={{fontSize:9,padding:'5px 12px',borderRadius:3,border:'1px solid rgba(245,240,232,0.3)',color:'rgba(245,240,232,0.7)',fontFamily:'var(--sans)'}}>Learn more</span>
                      </div>
                    </div>

                    {/* Mini content section */}
                    <div style={{padding:'16px 20px'}}>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:16}}>
                        {[{v:'47',l:'Families'},{v:'12',l:'Years serving'},{v:'$0',l:'Foreclosures'}].map((s,i)=>
                          <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:8,padding:'10px',textAlign:'center'}}>
                            <div style={{fontFamily:'var(--serif-display)',fontSize:16,fontWeight:400,color:'var(--forest)',lineHeight:1}}>{s.v}</div>
                            <div style={{fontSize:8,color:'var(--ink-faint)',marginTop:2}}>{s.l}</div>
                          </div>
                        )}
                      </div>
                      <div style={{fontFamily:'var(--serif-display)',fontSize:13,fontWeight:500,color:'var(--forest)',marginBottom:6,letterSpacing:'-0.01em'}}>A CLT keeps homes affordable — forever.</div>
                      <div style={{fontFamily:'var(--sans)',fontSize:9,color:'var(--ink-light)',lineHeight:1.6,fontWeight:300}}>When you buy a Rondo CLT home, the land stays in trust — so the home remains affordable for the next family, and the next. You build real equity while your neighborhood stays stable.</div>
                    </div>

                    {/* Mini events */}
                    <div style={{padding:'0 20px 16px'}}>
                      <div style={{fontSize:8,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:6}}>Upcoming</div>
                      <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:8,overflow:'hidden'}}>
                        {[{t:'Spring Community Gathering',d:'Apr 19 · 2–5 PM'},{t:'Annual Homeowner Assembly',d:'Apr 22 · 6:30 PM'}].map((e,i)=>
                          <div key={i} style={{padding:'8px 10px',borderBottom:i===0?'0.5px solid var(--border-light)':'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div><div style={{fontSize:10,fontWeight:500,color:'var(--ink)'}}>{e.t}</div><div style={{fontSize:8,color:'var(--ink-faint)'}}>{e.d}</div></div>
                            <span style={{fontSize:8,padding:'2px 6px',borderRadius:2,background:'var(--forest)',color:'var(--parchment)'}}>RSVP</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mini footer */}
                    <div style={{background:'var(--forest)',padding:'12px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <span style={{fontFamily:'var(--serif-display)',fontSize:10,color:'var(--parchment)'}}>Rondo CLT<span style={{color:'var(--terra-light)'}}>.</span></span>
                      <span style={{fontSize:8,color:'rgba(245,240,232,0.3)'}}>Powered by Propria</span>
                    </div>
                  </div>
                </div>

                {/* NRI site assistant + actions */}
                <div style={{display:'flex',gap:8,marginBottom:14}}>
                  <button className="btn primary" style={{flex:1}} onClick={()=>setSheet('nriSite')}>✦ NRI site assistant</button>
                  <button className="btn" style={{flex:1}} onClick={()=>setSheet('editPages')}>Edit pages</button>
                </div>

                {/* Pages list */}
                <div className="card">
                  <div className="card-header"><span className="card-title">Pages</span><span className="sec-action">+ Add page</span></div>
                  <div className="cl-row"><div style={{fontSize:13,color:'var(--ink)',flex:1}}>Home</div><span style={{fontSize:11,color:'var(--ink-faint)',marginRight:8}}>Updated 2d ago</span><span className="tag tag-green">Live</span></div>
                  <div className="cl-row"><div style={{fontSize:13,color:'var(--ink)',flex:1}}>About our CLT</div><span style={{fontSize:11,color:'var(--ink-faint)',marginRight:8}}>Updated 1w ago</span><span className="tag tag-green">Live</span></div>
                  <div className="cl-row"><div style={{fontSize:13,color:'var(--ink)',flex:1}}>Apply for a home</div><span style={{fontSize:11,color:'var(--ink-faint)',marginRight:8}}>Updated 3w ago</span><span className="tag tag-green">Live</span></div>
                  <div className="cl-row"><div style={{fontSize:13,color:'var(--ink)',flex:1}}>News &amp; events</div><span style={{fontSize:11,color:'var(--ink-faint)',marginRight:8}}>NRI draft</span><span className="tag tag-amber">Draft</span></div>
                </div>

                {/* Site analytics */}
                <div className="card" style={{marginTop:14}}>
                  <div className="card-header"><span className="card-title">Site analytics</span><span className="card-meta">Last 30 days</span></div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.5px',background:'var(--border-light)'}}>
                    {[{v:'1,240',l:'Visitors'},{v:'3:12',l:'Avg. time'},{v:'340',l:'Apply clicks'}].map((s,i)=>
                      <div key={i} style={{background:'white',padding:'12px',textAlign:'center'}}>
                        <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:400,color:'var(--forest)',letterSpacing:'-0.02em'}}>{s.v}</div>
                        <div style={{fontSize:10,color:'var(--ink-faint)',marginTop:2}}>{s.l}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>}
            </div>

            {/* RESALE */}
            <div className={sc('resale')}>
              <div className="profile-hero"><div className="profile-av" style={{background:'var(--parchment-dk)',color:'var(--forest)'}}><svg viewBox="0 0 16 16" width="20" height="20"><path d="M2 14V7.5L8 2l6 5.5V14H2z" stroke="currentColor" fill="none" strokeWidth="1.4"/><path d="M6 14v-4h4v4" stroke="currentColor" fill="none" strokeWidth="1.4"/></svg></div><div style={{flex:1}}><div className="profile-name">14 Oak Street</div><div className="profile-addr">Seller: Maria Torres · Saint Paul, MN 55104</div><div className="profile-tags"><span className="profile-tag year">Stage 5 of 8</span><span className="profile-tag cura">Buyer matching</span></div></div></div>
              {/* Resale pipeline stages */}
              <div style={{padding:'12px 14px',background:'white',borderBottom:'0.5px solid var(--border)'}}>
                <div style={{display:'flex',alignItems:'center',gap:3,overflowX:'auto',paddingBottom:4}}>
                  {[{n:1,l:'Intent filed',s:'done'},{n:2,l:'Formula set',s:'done'},{n:3,l:'Inspection',s:'done'},{n:4,l:'Price set',s:'done'},{n:5,l:'Buyer match',s:'active'},{n:6,l:'Contract',s:''},{n:7,l:'Closing',s:''},{n:8,l:'Transferred',s:''}].map((st,i,arr)=><>
                    <div key={st.n} className="pipe-stage"><div className={'pipe-circle '+(st.s||'')}>{st.s==='done'?'✓':st.n}</div><div className="pipe-stage-label">{st.l}</div></div>
                    {i<arr.length-1 && <div className={'pipe-line'+(st.s==='done'?' done':'')}></div>}
                  </>)}
                </div>
              </div>
              <div style={{padding:'8px 14px',display:'flex',gap:8}}>
                <button className="btn" style={{flex:1}} onClick={()=>setSheet('resaleCalc')}>Resale calculator</button>
                <button className="btn primary" style={{flex:1}} onClick={()=>setSheet('advanceResale')}>Advance stage</button>
              </div>
              <div className="card" style={{margin:'0 14px 14px'}}><div className="card-header"><span className="card-title">Resale formula</span><span className="tag tag-green">Active</span></div>
                <div className="finance-stat"><span className="finance-label">Purchase price (2020)</span><span className="finance-val">$187,000</span></div>
                <div className="finance-stat"><span className="finance-label">+ 30% appreciation</span><span className="finance-val">$12,000</span></div>
                <div className="finance-stat"><span className="finance-label">+ Improvement credit</span><span className="finance-val">$2,800</span></div>
                <div className="finance-stat" style={{background:'var(--parchment)'}}><span className="finance-label" style={{fontWeight:500,color:'var(--ink)'}}>Max resale price</span><span className="finance-val green" style={{fontFamily:'var(--serif-display)',fontSize:18}}>$201,800</span></div>
              </div>
              <div className="sec-header"><span className="sec-title">Buyer matches</span><span className="sec-action">View all</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="feed-item" onClick={()=>setSheet('buyerDetail')}><div className="feed-avatar av-blue">DH</div><div className="feed-body"><div className="feed-name">David &amp; Rosa Hernandez</div><div className="feed-detail">Match score 91 · Pre-approval pending Apr 7 · Education complete</div></div><div className="feed-meta"><span className="tag tag-green">Top match</span></div></div>
                <div className="feed-item"><div className="feed-avatar av-amber">AO</div><div className="feed-body"><div className="feed-name">Amara Osei</div><div className="feed-detail">Match score 88 · Education complete · Counselor session done</div></div><div className="feed-meta"><span className="tag tag-blue">Ready</span></div></div>
                <div className="feed-item"><div className="feed-avatar av-teal">MW</div><div className="feed-body"><div className="feed-name">Marcus &amp; Tanya Webb</div><div className="feed-detail">Match score 74 · Counselor session pending</div></div><div className="feed-meta"><span className="tag tag-amber">In progress</span></div></div>
                <div style={{padding:'10px 14px'}}><button className="btn primary full" onClick={()=>setSheet('advanceResale')}>Advance to contract →</button></div>
              </div>
            </div>

            {/* ASSETS */}
            <div className={sc('assets')}>
              <div className="screen-header"><div className="screen-header-title">Asset Management</div><div className="screen-header-sub">47 properties · inspections · capital</div></div>
              <div className="stat-row" style={{padding:14}}>
                <div className="stat-card"><div className="stat-label">Properties</div><div className="stat-val">47</div><div className="stat-sub muted">Active portfolio</div></div>
                <div className="stat-card"><div className="stat-label">Inspections due</div><div className="stat-val">3</div><div className="stat-sub warn">This quarter</div></div>
                <div className="stat-card"><div className="stat-label">Open repairs</div><div className="stat-val">1</div><div className="stat-sub warn">31 days open</div></div>
                <div className="stat-card"><div className="stat-label">Capital forecast</div><div className="stat-val">$34k</div><div className="stat-sub muted">Next 12 months</div></div>
              </div>
              <div className="sec-header"><span className="sec-title">Portfolio</span><span className="sec-action">+ Add property</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="asset-row"><div className="asset-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg></div><div className="asset-body"><div className="asset-addr">14 Oak Street</div><div className="asset-meta">Maria Torres · Resale in progress · Built 1948</div></div><span className="tag tag-amber">Resale</span></div>
                <div className="asset-row"><div className="asset-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg></div><div className="asset-body"><div className="asset-addr">56 Thomas Avenue</div><div className="asset-meta">Patricia &amp; Leon Moore · Open repair 31d</div></div><span className="tag tag-coral">Repair due</span></div>
                <div className="asset-row"><div className="asset-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg></div><div className="asset-body"><div className="asset-addr">88 Iglehart Avenue</div><div className="asset-meta">James &amp; Denise Walker · Built 1952</div></div><span className="tag tag-amber">Inspect Q2</span></div>
                <div className="asset-row"><div className="asset-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg></div><div className="asset-body"><div className="asset-addr">221 Minnehaha Avenue</div><div className="asset-meta">Roberto &amp; Ana Diaz · Built 1961</div></div><span className="tag tag-green">Good</span></div>
                <div style={{padding:'10px 14px',fontSize:12,color:'var(--ink-faint)',textAlign:'center'}}>43 more properties</div>
              </div>
            </div>

            {/* MAINTENANCE */}
            <div className={sc('maintenance')}>
              <div className="screen-header"><div className="screen-header-title">Maintenance</div><div className="screen-header-sub">1 open · Ace Contracting · 31 days</div></div>
              <div style={{padding:'10px 14px',display:'flex',gap:8}}><button className="btn primary" style={{flex:1}} onClick={()=>setSheet('newRequest')}>+ New request</button><button className="btn" style={{flex:1}} onClick={()=>setSheet('contractors')}>Contractors</button></div>
              <div className="sec-header"><span className="sec-title">Open (1)</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="maint-row" onClick={()=>setSheet('maintDetail')} style={{cursor:'pointer'}}><div style={{flexShrink:0,marginTop:4}}><div style={{width:8,height:8,borderRadius:'50%',background:'var(--terra)'}}></div></div><div className="maint-body"><div className="maint-addr">56 Thomas Avenue — Bathroom faucet</div><div className="maint-desc">Dripping faucet in main bathroom. Homeowner reports consistent drip since November 2024.</div><div className="maint-meta"><span className="maint-days">31 days open</span><span className="tag tag-amber">Ace Contracting</span></div></div></div>
              </div>
              <div className="sec-header"><span className="sec-title">Closed (12)</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="maint-row"><div style={{flexShrink:0,marginTop:4}}><div style={{width:8,height:8,borderRadius:'50%',background:'var(--forest-light)'}}></div></div><div className="maint-body"><div className="maint-addr">14 Oak Street — Furnace inspection</div><div className="maint-desc">Annual furnace check. Passed. Filter replaced.</div><div className="maint-meta"><span className="tag tag-green">Closed</span><span className="cl-meta">Feb 2025</span></div></div></div>
                <div className="maint-row"><div style={{flexShrink:0,marginTop:4}}><div style={{width:8,height:8,borderRadius:'50%',background:'var(--forest-light)'}}></div></div><div className="maint-body"><div className="maint-addr">88 Iglehart Ave — Roof repair</div><div className="maint-desc">Three shingles replaced after winter storm damage.</div><div className="maint-meta"><span className="tag tag-green">Closed</span><span className="cl-meta">Jan 2025</span></div></div></div>
              </div>
            </div>

            {/* GOVERNANCE */}
            <div className={sc('governance')}>
              <div className="screen-header"><div className="screen-header-title">Governance</div><div className="screen-header-sub">Board · Assembly · Documents · Volunteers</div></div>
              <div className="tab-bar"><div className={govTab==='board'?'tab active':'tab'} onClick={()=>setGovTab('board')}>Board</div><div className={govTab==='assembly'?'tab active':'tab'} onClick={()=>setGovTab('assembly')}>Assembly</div><div className={govTab==='documents'?'tab active':'tab'} onClick={()=>setGovTab('documents')}>Documents</div><div className={govTab==='volunteers'?'tab active':'tab'} onClick={()=>setGovTab('volunteers')}>Volunteers</div></div>
              {govTab==='board' && <>
              <div style={{padding:'10px 14px 4px',display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:12,color:'var(--ink-light)'}}>7 board members · Next meeting Apr 18</span><button className="btn" onClick={()=>setSheet('boardMeeting')}>Meeting agenda</button></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="gov-member-row"><div className="gov-av">CR</div><div style={{flex:1}}><div className="gov-name">Constance Rivera</div><div className="gov-role">Chair · Term ends 2026</div></div><span className="tag tag-forest">Chair</span></div>
                <div className="gov-member-row"><div className="gov-av">TW</div><div style={{flex:1}}><div className="gov-name">Thomas Wheeler</div><div className="gov-role">Treasurer · Term ends 2027</div></div><span className="tag tag-blue">Treasurer</span></div>
                <div className="gov-member-row"><div className="gov-av">AG</div><div style={{flex:1}}><div className="gov-name">Amara Gomez</div><div className="gov-role">Secretary · Term ends 2026</div></div><span className="tag tag-blue">Secretary</span></div>
                <div className="gov-member-row"><div className="gov-av">SL</div><div style={{flex:1}}><div className="gov-name">Samuel Lee</div><div className="gov-role">Homeowner rep · Term ends 2025</div></div><span className="tag tag-amber">Up for election</span></div>
                <div className="gov-member-row"><div className="gov-av">+3</div><div style={{flex:1}}><div className="gov-name">3 more members</div></div></div>
              </div>
              </>}
              {govTab==='assembly' && <div style={{padding:'10px 14px'}}>
                <div className="card"><div className="card-header"><span className="card-title">Annual Homeowner Assembly</span><span className="tag tag-amber">Apr 22</span></div>
                <div style={{padding:'12px 14px'}}><div style={{fontSize:12,color:'var(--terra)',fontWeight:500,marginBottom:8}}>Only 30% RSVP'd — send reminder</div><div style={{fontSize:13,color:'var(--ink)',fontWeight:500,marginBottom:6}}>Agenda</div><div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:12}}>{['1. Year in review — staff report','2. Financial report — Thomas Wheeler','3. Board election — Samuel Lee seat','4. Homeowner open forum','5. Community updates'].map((a,i)=><div key={i} style={{fontSize:13,color:'var(--ink-mid)',fontWeight:300}}>{a}</div>)}</div><button className="btn full warn" onClick={()=>setSheet('rsvpReminder')}>Send RSVP reminder</button></div></div>
              </div>}
              {govTab==='documents' && <>
                <div style={{padding:'10px 14px',display:'flex',justifyContent:'flex-end'}}><button className="btn primary" onClick={()=>setSheet('uploadDoc')}>+ Upload document</button></div>
                <div className="card" style={{margin:'0 14px 14px'}}>
                  {['Ground lease template 2024','Board meeting minutes — Mar 2025','Financial statements — 2024','Homeowner handbook v3.2','Resale formula policy'].map((d,i)=><div key={i} className="cl-row"><div style={{fontSize:13,color:'var(--ink)',flex:1}}>{d}</div><span className="tag tag-blue">PDF</span></div>)}
                </div>
              </>}
              {govTab==='volunteers' && <div style={{padding:14}}>
                <div className="stat-row" style={{marginBottom:14}}><div className="stat-card"><div className="stat-label">Hours logged</div><div className="stat-val">142</div><div className="stat-sub muted">This year</div></div><div className="stat-card"><div className="stat-label">Active volunteers</div><div className="stat-val">18</div><div className="stat-sub up">Good health</div></div></div>
                <div className="card"><div className="card-header"><span className="card-title">Spring Gathering helpers needed</span></div>
                <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Setup crew (3 people)</span><span className="cl-meta">Filled</span></div>
                <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Food coordinators (2 people)</span><span className="cl-meta">Filled</span></div>
                <div className="cl-row"><div className="cl-box"></div><span className="cl-text">Cleanup crew (2 people)</span><span className="cl-meta" style={{color:'var(--terra)'}}>0 of 2</span></div></div>
              </div>}
            </div>

            {/* FINANCES */}
            <div className={sc('finances')}>
              <div className="screen-header"><div className="screen-header-title">Finances</div><div className="screen-header-sub">Stripe Connect · ground lease · grants</div></div>
              <div className="tab-bar"><div className={finTab==='overview'?'tab active':'tab'} onClick={()=>setFinTab('overview')}>Overview</div><div className={finTab==='hud'?'tab active':'tab'} onClick={()=>setFinTab('hud')}>HUD-9902</div></div>
              {finTab==='overview' && <>
              <div className="stat-row" style={{padding:14}}>
                <div className="stat-card"><div className="stat-label">Monthly lease income</div><div className="stat-val">$2,256</div><div className="stat-sub up">94% collected</div></div>
                <div className="stat-card"><div className="stat-label">Overdue</div><div className="stat-val">$156</div><div className="stat-sub warn">3 homeowners</div></div>
                <div className="stat-card"><div className="stat-label">Grants (YTD)</div><div className="stat-val">$48k</div><div className="stat-sub muted">$0 platform fee</div></div>
                <div className="stat-card"><div className="stat-label">Open invoices</div><div className="stat-val">4</div><div className="stat-sub warn">2 overdue</div></div>
              </div>
              <div className="sec-header"><span className="sec-title">Overdue payments</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="finance-stat"><div><div className="finance-label" style={{fontSize:13,color:'var(--ink)',fontWeight:500}}>James &amp; Denise Walker</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>88 Iglehart Ave · 9 days overdue</div></div><div style={{textAlign:'right'}}><div className="finance-val warn">$52</div></div></div>
                <div className="finance-stat"><div><div className="finance-label" style={{fontSize:13,color:'var(--ink)',fontWeight:500}}>Patricia &amp; Leon Moore</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>56 Thomas Ave · 14 days overdue</div></div><div style={{textAlign:'right'}}><div className="finance-val warn">$48</div></div></div>
                <div className="finance-stat"><div><div className="finance-label" style={{fontSize:13,color:'var(--ink)',fontWeight:500}}>Samuel Okafor</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>33 Charles Ave · 3 days overdue</div></div><div style={{textAlign:'right'}}><div className="finance-val warn">$56</div></div></div>
              </div>
              <div className="sec-header"><span className="sec-title">April ledger</span></div>
              <div className="card" style={{margin:'0 14px 14px'}}>
                <div className="finance-stat"><span className="finance-label">Ground lease collected</span><span className="finance-val green">$2,100</span></div>
                <div className="finance-stat"><span className="finance-label">Overdue balance</span><span className="finance-val warn">$156</span></div>
                <div className="finance-stat"><span className="finance-label">Grant disbursement (CCHD)</span><span className="finance-val green">$15,000</span></div>
                <div className="finance-stat"><span className="finance-label">Platform fee (grants)</span><span className="finance-val">$0</span></div>
                <div className="finance-stat"><span className="finance-label">Contractor payment (Ace)</span><span className="finance-val">$340</span></div>
              </div>
              </>}
              {finTab==='hud' && <>
              <div style={{padding:'12px 14px'}}><div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'14px 16px',display:'flex',gap:10,alignItems:'center'}}><div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',animation:'pulse 2s ease-in-out infinite',flexShrink:0}}></div><div><div style={{fontSize:13,fontWeight:500,color:'#633806'}}>Q2 2026 report ready for review</div><div style={{fontSize:12,color:'#854F0B',fontWeight:300}}>3 fields need attention before export</div></div></div></div>
              {[{s:'Section A: Agency Info',f:[['Agency Name','Rondo CLT',true],['HCS ID','10234567',true],['Period','Q2 2026',true]]},{s:'Section B: Counseling',f:[['Clients counseled','12',true],['Pre-purchase','8',true],['Post-purchase','4',true],['Hours logged','36',false]]},{s:'Section C: Education',f:[['Group sessions','2',true],['Individual','8',true],['Certificates','3',false]]},{s:'Section D: Outcomes',f:[['Homes purchased','2',true],['Defaults prevented','1',true],['Action plans','7',true],['Referrals','4',false]]}].map((sec,si)=>
                <div key={si} className="card" style={{margin:'0 14px 12px'}}>
                  <div className="card-header"><span className="card-title">{sec.s}</span>{sec.f.every(f=>f[2])?<span className="tag tag-green">Complete</span>:<span className="tag tag-amber">Review</span>}</div>
                  {sec.f.map((f,fi)=><div key={fi} className="finance-stat"><span className="finance-label" style={{color:f[2]?undefined:'var(--terra)',fontWeight:f[2]?undefined:500}}>{f[0] as string}{!f[2]&&' ⚠'}</span><span className="finance-val">{f[1] as string}</span></div>)}
                </div>
              )}
              <div style={{padding:'0 14px 14px',display:'flex',gap:10}}>
                <button className="btn" style={{flex:1}}>Save draft</button>
                <button className="btn primary" style={{flex:2}}>Export HUD-9902 PDF →</button>
              </div>
              </>}
            </div>

            {/* SETTINGS */}
            <div className={sc('settings')}>
              <div style={{padding:'14px 14px 8px'}}><div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:2}}>Settings</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>Rondo Community Land Trust</div></div>
              <div style={{padding:'8px 14px 4px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Organization</div>
              <div className="card" style={{margin:'0 14px 12px'}}>
                <div className="settings-row"><div className="settings-icon-row"><div className="settings-icon"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/></svg></div><div><div className="settings-label">Organization details</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Name, address, contact</div></div></div><svg className="settings-chevron" viewBox="0 0 14 14"><path d="M5 2l4 5-4 5"/></svg></div>
                <div className="settings-row"><div className="settings-icon-row"><div className="settings-icon"><svg viewBox="0 0 16 16"><path d="M2 13h12M4 13V7m3-5v11M10 13V9m3-3v7"/></svg></div><div><div className="settings-label">Resale formula</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Appreciation rate · credits</div></div></div><svg className="settings-chevron" viewBox="0 0 14 14"><path d="M5 2l4 5-4 5"/></svg></div>
              </div>
              <div style={{padding:'8px 14px 4px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Integrations</div>
              <div className="card" style={{margin:'0 14px 12px'}}>
                <div className="settings-row"><div className="settings-icon-row"><div className="settings-icon"><svg viewBox="0 0 16 16"><path d="M2 4h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg></div><div><div className="settings-label">Gmail</div><div style={{fontSize:11,color:'var(--forest-light)'}}>sarah@rondoclt.org · Connected</div></div></div><span className="tag tag-green">Active</span></div>
                <div className="settings-row"><div className="settings-icon-row"><div className="settings-icon"><svg viewBox="0 0 16 16"><path d="M3 8h10M8 3v10"/></svg></div><div><div className="settings-label">Stripe Connect</div><div style={{fontSize:11,color:'var(--forest-light)'}}>Payments enabled · Connected</div></div></div><span className="tag tag-green">Active</span></div>
              </div>
              <div style={{padding:'8px 14px 4px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Billing</div>
              <div className="card" style={{margin:'0 14px 12px'}}>
                <div className="finance-stat"><span className="finance-label">Plan</span><span className="finance-val">47 homes</span></div>
                <div className="finance-stat"><span className="finance-label">Monthly</span><span className="finance-val">$274/mo</span></div>
                <div className="finance-stat"><span className="finance-label">Next billing</span><span className="finance-val">May 1, 2026</span></div>
              </div>
            </div>

            {/* ACCOUNT */}
            <div className={sc('account')}>
              <div style={{padding:'20px 14px 16px',display:'flex',alignItems:'center',gap:14}}>
                <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(27,58,45,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--serif-display)',fontSize:20,fontWeight:400,color:'var(--forest)',flexShrink:0}}>SC</div>
                <div><div style={{fontFamily:'var(--serif-display)',fontSize:19,fontWeight:500,color:'var(--forest)'}}>Sarah Chen</div><div style={{fontSize:12,color:'var(--ink-faint)',fontWeight:300}}>Stewardship coordinator · Rondo CLT</div></div>
              </div>
              <div className="card" style={{margin:'0 14px 12px'}}>
                <div className="settings-row"><span className="settings-label">Edit profile</span><svg className="settings-chevron" viewBox="0 0 14 14"><path d="M5 2l4 5-4 5"/></svg></div>
                <div className="settings-row"><span className="settings-label">Change password</span><svg className="settings-chevron" viewBox="0 0 14 14"><path d="M5 2l4 5-4 5"/></svg></div>
              </div>
              <div style={{padding:'0 14px 4px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Notifications</div>
              <div className="card" style={{margin:'0 14px 12px'}}>
                <div className="settings-row"><span className="settings-label">Disengagement signals</span><div className="toggle-pill on"><div className="toggle-thumb"></div></div></div>
                <div className="settings-row"><span className="settings-label">Payment overdue alerts</span><div className="toggle-pill on"><div className="toggle-thumb"></div></div></div>
                <div className="settings-row"><span className="settings-label">Annual check-in reminders</span><div className="toggle-pill on"><div className="toggle-thumb"></div></div></div>
                <div className="settings-row"><span className="settings-label">NRI compass auto-open</span><div className="toggle-pill on"><div className="toggle-thumb"></div></div></div>
              </div>
              <div style={{padding:'0 14px 16px'}}><button className="btn full terra">Sign out</button></div>
            </div>

            {/* MAGIC IMPORT */}
            <div className={sc('import')} style={{overflow:'auto'}}>
              <MagicImport />
            </div>

            {/* GROUND LEASE GENERATOR */}
            <div className={sc('groundlease')}>
              <div className="screen-header"><div className="screen-header-title">Ground Lease Generator</div><div className="screen-header-sub">Generate signing-ready documents</div></div>
              <div style={{padding:14}}>
                <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Select template</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:16}}>
                  {[['Standard 99-Year','Most common',true],['Affordable Housing','HUD-compliant',false]].map(([t,d,sel],i)=>
                    <div key={i} style={{background:sel?'var(--forest)':'white',border:sel?'2px solid var(--forest)':'1px solid var(--border)',borderRadius:12,padding:14,cursor:'pointer'}}>
                      <div style={{fontSize:13,fontWeight:500,color:sel?'var(--parchment)':'var(--ink)',marginBottom:3}}>{t as string}</div>
                      <div style={{fontSize:11,color:sel?'rgba(245,240,232,0.6)':'var(--ink-light)'}}>{d as string}</div>
                    </div>
                  )}
                </div>
                <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Auto-populated fields</div>
                <div className="card" style={{marginBottom:16}}>
                  {[['Homeowner','David & Rosa Hernandez'],['Address','14 Oak Street, Saint Paul, MN'],['Price','$201,800'],['Lease fee','$48/month'],['Term','99 years'],['Appreciation','30% (Fixed-rate)'],['CLT','Rondo Community Land Trust']].map(([l,v],i)=>
                    <div key={i} className="finance-stat"><span className="finance-label">{l}</span><span className="finance-val">{v}</span></div>
                  )}
                </div>
                {!leaseGenerated ? <button className="btn primary full" onClick={()=>{setLeaseGenerating(true);setTimeout(()=>{setLeaseGenerating(false);setLeaseGenerated(true)},1500)}} disabled={leaseGenerating}>{leaseGenerating?'Generating...':'Generate Ground Lease PDF →'}</button>
                : <div style={{background:'#E1F5EE',border:'1px solid #8DCFAD',borderRadius:12,padding:16,textAlign:'center'}}>
                  <div style={{fontSize:20,marginBottom:6}}>📄</div>
                  <div style={{fontSize:14,fontWeight:500,color:'#085041',marginBottom:3}}>Document ready</div>
                  <div style={{fontSize:12,color:'#085041',fontWeight:300,marginBottom:12}}>Hernandez_GroundLease.pdf · 24 pages</div>
                  <div style={{display:'flex',gap:10,justifyContent:'center'}}><button className="btn">Preview</button><button className="btn primary">Download PDF</button></div>
                </div>}
              </div>
            </div>

          </div>{/* /screens */}

          {/* BOTTOM NAV */}
          <div className="bottom-nav">
            <button className={ni('dashboard')} onClick={() => go('dashboard')}>
              <svg className="nav-icon" viewBox="0 0 22 22"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/></svg>
              <span className="nav-label">Dashboard</span>
            </button>
            <button className={ni('stewardship')} onClick={() => go('stewardship')}>
              <svg className="nav-icon" viewBox="0 0 22 22"><circle cx="11" cy="8" r="4"/><path d="M3 19c0-3.5 3.5-6 8-6s8 2.5 8 6"/></svg>
              <span className="nav-label">Stewardship</span>
              <span className="nav-badge">3</span>
            </button>
            <button className={ni('pipeline')} onClick={() => go('pipeline')}>
              <svg className="nav-icon" viewBox="0 0 22 22"><path d="M3 6h16M3 11h11M3 16h7"/></svg>
              <span className="nav-label">Pipeline</span>
              <span className="nav-badge gold">7</span>
            </button>
            <button className={ni('praeco')} onClick={() => go('praeco')}>
              <svg className="nav-icon" viewBox="0 0 22 22"><path d="M3 6h16v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/><path d="M3 6l8 7 8-7"/></svg>
              <span className="nav-label">Praeco</span>
            </button>
            <button className={ni('finances')} onClick={() => go('finances')}>
              <svg className="nav-icon" viewBox="0 0 22 22"><path d="M3 18h16M5 18V8m4 10V5m4 13V10m4 8V7"/></svg>
              <span className="nav-label">Finances</span>
            </button>
          </div>
        </div>{/* /content-area */}

        {/* HAMBURGER OVERLAY */}
        <div className={'hamburger-overlay' + (hamburgerOpen ? ' open' : '')} onClick={(e) => { if ((e.target as HTMLElement).classList.contains('hamburger-overlay')) setHamburgerOpen(false) }}>
          <div className="hamburger-menu">
            <div className="hm-header"><div className="hm-brand">Propria<span>.</span></div><div className="hm-org">Rondo Community Land Trust</div></div>
            <div className="hm-section">Property</div>
            <div className="hm-item" onClick={() => go('assets')}><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg>Asset management</div>
            <div className="hm-item" onClick={() => go('maintenance')}><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5"/></svg>Maintenance <span className="hm-badge">1</span></div>
            <div className="hm-item" onClick={() => go('resale')}><svg viewBox="0 0 16 16"><path d="M5 2h6a1 1 0 0 1 1 1v12l-4-2.2L4 15V3a1 1 0 0 1 1-1z"/></svg>Resale engine <span className="hm-badge">1</span></div>
            <div className="hm-item" onClick={() => go('groundlease')}><svg viewBox="0 0 16 16"><path d="M4 2h5l4 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M9 2v4h4"/></svg>Ground lease docs</div>
            <div className="hm-section">Community</div>
            <div className="hm-item" onClick={() => go('governance')}><svg viewBox="0 0 16 16"><rect x="2" y="5" width="12" height="9" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg>Governance</div>
            <div className="hm-section">Account</div>
            <div className="hm-item" onClick={() => go('settings')}><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M4.2 4.2l1 1M10.8 10.8l1 1M4.2 11.8l1-1M10.8 5.2l1-1"/></svg>Settings</div>
            <div className="hm-item" onClick={() => go('account')}><svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>My account</div>
            <div className="hm-spacer"></div>
            <div className="hm-user"><div className="hm-avatar">SC</div><div><div className="hm-user-name">Sarah Chen</div><div className="hm-user-role">Stewardship coordinator</div></div></div>
          </div>
        </div>

        {/* NRI COMPASS DRAWER */}
        <div className={'compass-overlay' + (compassOpen ? ' open' : '')} onClick={(e) => { if ((e.target as HTMLElement).classList.contains('compass-overlay')) setCompassOpen(false) }}>
          <div className="compass-drawer">
            <div className="compass-handle"></div>
            <div className="compass-header"><div className="compass-header-dot"></div><div className="compass-header-title">NRI Companion</div><div className="compass-direction">Cura</div></div>
            <div className="compass-body">
              <div style={{fontSize:12,color:'rgba(245,240,232,0.5)',marginBottom:10,fontWeight:300,fontStyle:'italic'}}>Here's what needs your attention today.</div>
              <div className="compass-nudge"><div className="compass-nudge-dir cura">Cura</div><div className="compass-nudge-msg">Maria Torres hasn't responded to 2 check-in attempts. Last contact was 23 days ago. Consider a door knock or reaching her emergency contact.</div><div className="compass-nudge-action" onClick={() => { go('stewardship'); setCompassOpen(false) }}>→ Open stewardship record</div></div>
              <div className="compass-nudge"><div className="compass-nudge-dir reconciliatio">Reconciliatio</div><div className="compass-nudge-msg">3 homeowners have ground lease payments 7+ days overdue, totaling $156. Walker, Moore, and Okafor.</div><div className="compass-nudge-action" onClick={() => { go('finances'); setCompassOpen(false) }}>→ Send payment reminders</div></div>
              <div className="compass-nudge"><div className="compass-nudge-dir custodia">Custodia</div><div className="compass-nudge-msg">7 families are due for their annual check-in this quarter. Schedule before April ends.</div><div className="compass-nudge-action">→ View check-in queue</div></div>
              <div className="compass-quick-prompts">
                <div className="compass-prompt">Log a contact attempt for Maria</div>
                <div className="compass-prompt">Send payment reminder to Walker family</div>
                <div className="compass-prompt">Schedule Diaz annual check-in</div>
                <div className="compass-prompt">What's Keisha's pipeline status?</div>
              </div>
            </div>
            <div className="compass-input-row">
              <input className="compass-input" type="text" placeholder="Ask NRI anything…" />
              <button className="compass-send"><svg viewBox="0 0 16 16"><path d="M14 8H2M8 2l6 6-6 6"/></svg></button>
            </div>
          </div>
        </div>

      </div>{/* /app */}

      {/* ══ ALL MODAL SHEETS ══ */}
      <Sheet open={sheet==='walker'} onClose={()=>setSheet(null)}>
        <div className="modal-title">James &amp; Denise Walker</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">Walker family has no prior late payment history in 3 years. NRI suggests a courtesy call before a formal notice.</div></div>
        <div className="modal-label">Action</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:12}}><button className="btn primary" onClick={()=>setSheet(null)}>Call family</button><button className="btn" onClick={()=>setSheet(null)}>Send reminder</button><button className="btn" onClick={()=>setSheet(null)}>Log contact</button></div>
        <button className="btn full" onClick={()=>{go('finances');setSheet(null)}}>View in Finances →</button>
      </Sheet>

      <Sheet open={sheet==='diaz'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Schedule Check-in — Diaz Family</div>
        <div className="modal-label">Date</div><input className="modal-input" type="date" defaultValue="2026-04-15"/>
        <div className="modal-label">Method</div><select className="modal-select"><option>In-person home visit</option><option>Phone call</option><option>Video call</option></select>
        <div className="modal-label">Notes</div><textarea className="modal-textarea" rows={3} placeholder="Any prep notes…"></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Schedule</button></div>
      </Sheet>

      <Sheet open={sheet==='logContact'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Log Contact — Maria Torres</div>
        <div className="modal-label">Method</div><select className="modal-select"><option>Phone call</option><option>Text message</option><option>Email</option><option>In-person</option><option>Door knock</option></select>
        <div className="modal-label">Outcome</div><select className="modal-select"><option>Answered — spoke with homeowner</option><option>Left voicemail</option><option>No answer</option><option>Text sent</option></select>
        <div className="modal-label">Notes</div><textarea className="modal-textarea" rows={4} placeholder="What was discussed…"></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Save log</button></div>
      </Sheet>

      <Sheet open={sheet==='scheduleCheckin'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Schedule Annual Check-in</div>
        <div className="modal-label">Date</div><input className="modal-input" type="date"/>
        <div className="modal-label">Method</div><select className="modal-select"><option>Home visit</option><option>Phone</option><option>Video</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Schedule</button></div>
      </Sheet>

      <Sheet open={sheet==='editNote'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Edit Pastoral Note — Maria Torres</div>
        <div style={{fontSize:11,color:'var(--terra)',marginBottom:10}}>⚠ Confidential — visible to CLT staff only</div>
        <textarea className="modal-textarea" rows={7} defaultValue="Maria is a strong, independent homeowner who takes great pride in her home. She mentioned in passing that she may want to sell in the next 2–3 years to be closer to her daughter's school district."></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Save note</button></div>
      </Sheet>

      <Sheet open={sheet==='logLife'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Log Life Event</div>
        <div className="modal-label">Event type</div><select className="modal-select"><option>Employment change</option><option>Household change</option><option>Milestone anniversary</option><option>Financial hardship</option><option>Health event</option><option>Other</option></select>
        <div className="modal-label">Notes</div><textarea className="modal-textarea" rows={4} placeholder="What happened and what was the CLT response…"></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Save event</button></div>
      </Sheet>

      <Sheet open={sheet==='requestDocs'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Request Documents — Keisha Johnson</div>
        <div className="modal-label">Documents to request</div>
        <div className="card" style={{marginBottom:12}}>
          <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Income verification letter (expired)</span></div>
          <div className="cl-row"><div className="cl-box"></div><span className="cl-text">Bank statements (3 months)</span></div>
        </div>
        <div className="modal-label">Message to applicant</div>
        <textarea className="modal-textarea" rows={4} defaultValue="Hi Keisha — your income verification letter expired on March 14. Please resubmit an updated letter from your employer to keep your application active."></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Send request</button></div>
      </Sheet>

      <Sheet open={sheet==='advancePipeline'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Advance Pipeline Stage</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">Keisha cannot advance until income verification is resolved. NRI recommends sending a document request first.</div></div>
        <div className="modal-label">Move to stage</div><select className="modal-select"><option>Stage 4 — Education (current)</option><option>Stage 5 — Counselor session</option><option>Stage 6 — Waitlist</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Advance stage</button></div>
      </Sheet>

      <Sheet open={sheet==='composeEmail'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Compose Email</div>
        <div className="modal-label">To</div><select className="modal-select"><option>All 47 homeowners</option><option>Overdue homeowners (3)</option><option>Specific homeowner…</option><option>All applicants</option></select>
        <div className="modal-label">Subject</div><input className="modal-input" type="text" placeholder="Email subject…"/>
        <div className="modal-label">Message</div><textarea className="modal-textarea" rows={5} placeholder="Write your message…"></textarea>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">NRI can draft this email in the Rondo CLT voice. Tap to generate a draft.</div></div>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Save draft</button><button className="btn primary" onClick={()=>setSheet(null)}>Send via Gmail</button></div>
      </Sheet>

      <Sheet open={sheet==='createEvent'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Create Event</div>
        <div className="modal-label">Event name</div><input className="modal-input" type="text" placeholder="e.g. Summer Block Party"/>
        <div className="modal-label">Date &amp; time</div><input className="modal-input" type="datetime-local"/>
        <div className="modal-label">Location</div><input className="modal-input" type="text" placeholder="e.g. Rondo Rec Center"/>
        <div className="modal-label">Description</div><textarea className="modal-textarea" rows={3} placeholder="What should attendees know…"></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Create event</button></div>
      </Sheet>

      <Sheet open={sheet==='rsvpReminder'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Send RSVP Reminder</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">Only 30% of homeowners have RSVP'd. NRI has drafted a reminder in the Rondo CLT voice.</div></div>
        <div className="modal-label">Message</div><textarea className="modal-textarea" rows={4} defaultValue="Hi — the Annual Homeowner Assembly is April 22. We need your voice — board elections and budget review. Please RSVP at rondoclt.org/assembly. Hope to see you there!"></textarea>
        <div className="modal-label">Send via</div><select className="modal-select"><option>Email</option><option>Text message</option><option>Both</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Send reminder</button></div>
      </Sheet>

      <Sheet open={sheet==='nriSite'} onClose={()=>setSheet(null)}>
        <div className="modal-title">NRI Site Assistant</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">NRI can help you write and update pages for rondoclt.org. Describe what you want to change.</div></div>
        <div className="modal-label">What would you like to update?</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:12}}>
          {['Update homepage hero text','Add a new event','Write an "About" page','Create an application page','Draft a news post'].map((p,i)=><span key={i} style={{fontSize:12,padding:'6px 12px',borderRadius:16,border:'1px solid var(--border)',background:'white',color:'var(--ink-light)',cursor:'pointer'}}>{p}</span>)}
        </div>
        <textarea className="modal-textarea" rows={3} placeholder="Or describe what you need…"></textarea>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Generate with NRI</button></div>
      </Sheet>

      <Sheet open={sheet==='advanceResale'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Advance to Contract — 14 Oak St.</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">Hernandez pre-approval is the only open item. Advancing triggers notifications to both seller and buyer with next steps.</div></div>
        <div className="modal-label">Selected buyer</div><select className="modal-select"><option>David &amp; Rosa Hernandez — Score 91</option><option>Amara Osei — Score 88</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Advance to contract →</button></div>
      </Sheet>

      <Sheet open={sheet==='buyerDetail'} onClose={()=>setSheet(null)}>
        <div className="modal-title">David &amp; Rosa Hernandez</div>
        <div className="finance-stat"><span className="finance-label">Match score</span><span className="finance-val green">91</span></div>
        <div className="finance-stat"><span className="finance-label">Education</span><span className="finance-val green">Complete</span></div>
        <div className="finance-stat"><span className="finance-label">Counselor session</span><span className="finance-val green">Complete</span></div>
        <div className="finance-stat"><span className="finance-label">Pre-approval</span><span className="finance-val warn">Pending — due Apr 7</span></div>
        <div className="finance-stat"><span className="finance-label">Waitlist position</span><span className="finance-val">#1 for 14 Oak St.</span></div>
        <div style={{marginTop:14}}><button className="btn primary full" onClick={()=>setSheet(null)}>Select as buyer</button></div>
      </Sheet>

      <Sheet open={sheet==='newRequest'} onClose={()=>setSheet(null)}>
        <div className="modal-title">New Maintenance Request</div>
        <div className="modal-label">Property</div><select className="modal-select"><option>Select property…</option><option>14 Oak Street</option><option>56 Thomas Avenue</option><option>88 Iglehart Avenue</option></select>
        <div className="modal-label">Issue description</div><textarea className="modal-textarea" rows={4} placeholder="Describe the problem…"></textarea>
        <div className="modal-label">Priority</div><select className="modal-select"><option>Standard</option><option>Urgent</option><option>Emergency</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Submit request</button></div>
      </Sheet>

      <Sheet open={sheet==='maintDetail'} onClose={()=>setSheet(null)}>
        <div className="modal-title">56 Thomas Ave — Faucet Repair</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">This request has been open 31 days. Ace Contracting was assigned but no update has been logged. Recommend following up today.</div></div>
        <div className="finance-stat"><span className="finance-label">Opened</span><span className="finance-val">Feb 28, 2026</span></div>
        <div className="finance-stat"><span className="finance-label">Contractor</span><span className="finance-val">Ace Contracting</span></div>
        <div className="finance-stat"><span className="finance-label">Status</span><span className="finance-val warn">Assigned — no update</span></div>
        <div style={{marginTop:14,display:'flex',gap:8}}><button className="btn" style={{flex:1}} onClick={()=>setSheet(null)}>Log update</button><button className="btn primary" style={{flex:1}} onClick={()=>setSheet(null)}>Call contractor</button></div>
      </Sheet>

      <Sheet open={sheet==='contractors'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Contractor Directory</div>
        {[{n:'Ace Contracting',s:'Plumbing, HVAC',p:'(651) 555-0180',a:true},{n:'Summit Roofing',s:'Roofing, gutters',p:'(651) 555-0192',a:true},{n:'Rondo Handyman Co.',s:'General repairs',p:'(651) 555-0164',a:false}].map((c,i)=>
          <div key={i} style={{display:'flex',gap:10,padding:'10px 0',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{c.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{c.s} · {c.p}</div></div>
            <span className={c.a?'tag tag-green':'tag tag-gray'}>{c.a?'Available':'Busy'}</span>
          </div>
        )}
      </Sheet>

      <Sheet open={sheet==='boardMeeting'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Board Meeting Agenda — April 18</div>
        <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:14}}>
          {['1. Call to order','2. Approval of March minutes','3. Financial report — Thomas Wheeler','4. Maintenance update — 56 Thomas Ave','5. Resale status — 14 Oak Street','6. New business','7. Adjournment'].map((a,i)=><div key={i} style={{fontSize:13,color:'var(--ink-mid)',fontWeight:300}}>{a}</div>)}
        </div>
        <button className="btn primary full" onClick={()=>setSheet(null)}>Share with board</button>
      </Sheet>

      <Sheet open={sheet==='uploadDoc'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Upload Document</div>
        <div className="modal-label">Document type</div><select className="modal-select"><option>Board minutes</option><option>Financial statement</option><option>Ground lease template</option><option>Policy document</option><option>Other</option></select>
        <div style={{border:'2px dashed var(--border)',borderRadius:12,padding:'24px',textAlign:'center',cursor:'pointer',background:'var(--cream)',marginTop:12,marginBottom:12}}><div style={{fontSize:24,marginBottom:6}}>📄</div><div style={{fontSize:13,color:'var(--ink-light)'}}>Drop file or tap to browse</div></div>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Upload</button></div>
      </Sheet>

      <Sheet open={sheet==='sendReminder'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Send Payment Reminder</div>
        <div className="modal-nri"><div className="modal-nri-dot"></div><div className="modal-nri-text">NRI has drafted a gentle reminder message. Review and send via email or text.</div></div>
        <div className="modal-label">Message</div>
        <textarea className="modal-textarea" rows={5} defaultValue="Hi — just a quick reminder that your Rondo CLT ground lease payment is now past due. You can pay online at rondoclt.org/pay or call us at (651) 555-0142. Please reach out if you have any questions."></textarea>
        <div className="modal-label">Send via</div><select className="modal-select"><option>Email</option><option>Text message</option><option>Both</option></select>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Send reminder</button></div>
      </Sheet>

      <Sheet open={sheet==='export'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Export All Data</div>
        <div style={{fontSize:13,color:'var(--ink-light)',fontWeight:300,lineHeight:1.6,marginBottom:14}}>Export a complete copy of all Rondo CLT data. Your data belongs to you.</div>
        <div className="modal-label">Format</div><select className="modal-select"><option>CSV (spreadsheet)</option><option>JSON (developer)</option><option>PDF (human-readable)</option></select>
        <div className="modal-label">Include</div>
        <div className="card" style={{marginBottom:12}}>
          <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Homeowner records + contact history</span></div>
          <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Financial records + invoices</span></div>
          <div className="cl-row"><div className="cl-box checked"></div><span className="cl-text">Asset management records</span></div>
        </div>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Cancel</button><button className="btn primary" onClick={()=>setSheet(null)}>Export data</button></div>
      </Sheet>

      <Sheet open={sheet==='editPages'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Edit Page — Home</div>
        <div style={{display:'flex',gap:6,marginBottom:16,overflowX:'auto'}}>
          {['Home','About our CLT','Apply for a home','News & events'].map((p,i)=>
            <span key={i} style={{fontSize:12,padding:'6px 12px',borderRadius:6,border:i===0?'2px solid var(--forest)':'1px solid var(--border)',background:i===0?'var(--forest)':'white',color:i===0?'var(--parchment)':'var(--ink-light)',cursor:'pointer',whiteSpace:'nowrap',fontFamily:'var(--sans)',fontWeight:i===0?500:400}}>{p}</span>
          )}
        </div>

        {/* Page settings */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
          <div><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>Page status</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Last edited 2 days ago by Sarah</div></div>
          <div style={{width:40,height:24,borderRadius:12,background:'var(--forest)',position:'relative',cursor:'pointer'}}><div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:2,left:18,boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}></div></div>
        </div>

        {/* Content blocks */}
        <div className="modal-label">Content blocks</div>
        <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:14}}>
          {[
            {type:'Hero',content:'Affordable homeownership in the Rondo neighborhood.',icon:'🏠'},
            {type:'Stats Bar',content:'47 families · 12 years · $0 foreclosures',icon:'📊'},
            {type:'Text Block',content:'A CLT keeps homes affordable — forever. When you buy a Rondo CLT home...',icon:'📝'},
            {type:'Events',content:'2 upcoming events (auto-synced from Praeco)',icon:'📅'},
            {type:'Apply CTA',content:'Button: "Apply for a home" → application form',icon:'🔗'},
          ].map((block,i)=>
            <div key={i} style={{background:'var(--parchment)',border:'0.5px solid var(--border)',borderRadius:8,padding:'10px 12px',display:'flex',gap:10,alignItems:'flex-start',cursor:'grab'}}>
              <span style={{fontSize:16,flexShrink:0}}>{block.icon}</span>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:12,fontWeight:500,color:'var(--ink)',marginBottom:2}}>{block.type}</div>
                <div style={{fontSize:11,color:'var(--ink-light)',lineHeight:1.4,fontWeight:300}}>{block.content}</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:2,flexShrink:0}}>
                <div style={{width:16,height:6,display:'flex',flexDirection:'column',justifyContent:'space-between',cursor:'pointer',opacity:0.3}}>
                  <div style={{width:16,height:1,background:'var(--ink-faint)'}}></div>
                  <div style={{width:16,height:1,background:'var(--ink-faint)'}}></div>
                  <div style={{width:16,height:1,background:'var(--ink-faint)'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="btn full" style={{marginBottom:10,border:'2px dashed var(--border)',background:'var(--cream)',color:'var(--ink-light)'}}>+ Add content block</button>

        {/* Edit hero text */}
        <div className="modal-label">Hero headline</div>
        <textarea className="modal-textarea" rows={2} defaultValue="Affordable homeownership in the Rondo neighborhood."></textarea>

        <div className="modal-label">Hero subtext</div>
        <textarea className="modal-textarea" rows={2} defaultValue="A community land trust preserving permanently affordable homes for families in Saint Paul, Minnesota."></textarea>

        <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:8,padding:'10px 14px',display:'flex',gap:8,alignItems:'flex-start',margin:'12px 0'}}>
          <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',animation:'pulse 2s ease-in-out infinite',flexShrink:0,marginTop:3}}></div>
          <div style={{fontSize:12,color:'#633806',lineHeight:1.5,fontWeight:300}}>NRI can rewrite this content in the Rondo CLT voice, optimize for SEO, or generate new sections based on your CLT data.</div>
        </div>

        <div className="modal-btns">
          <button className="btn" onClick={()=>setSheet(null)}>Cancel</button>
          <button className="btn primary" onClick={()=>setSheet(null)}>Save &amp; publish</button>
        </div>
      </Sheet>

      <Sheet open={sheet==='resaleCalc'} onClose={()=>setSheet(null)}>
        <div className="modal-title">Resale Price Calculator</div>
        <div className="modal-label">Purchase price</div><input className="modal-input" type="text" defaultValue="$187,000"/>
        <div className="modal-label">Years owned</div><input className="modal-input" type="text" defaultValue="6.2"/>
        <div className="modal-label">Formula type</div>
        <select className="modal-select"><option>Fixed-rate (3%/yr)</option><option>Appraisal-based (4%/yr)</option><option>CPI-indexed (2.5%/yr)</option></select>
        <div className="modal-label">Appreciation share</div><input className="modal-input" type="text" defaultValue="30%"/>
        <div className="modal-label">Improvement credits</div><input className="modal-input" type="text" defaultValue="$2,800"/>
        <div style={{background:'var(--forest)',borderRadius:10,padding:16,marginTop:16}}>
          <div style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:13,color:'rgba(245,240,232,0.6)'}}>Purchase price</span><span style={{fontSize:13,color:'var(--parchment)'}}>$187,000</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:13,color:'rgba(245,240,232,0.6)'}}>Owner share (30% of $34,680)</span><span style={{fontSize:13,color:'var(--gold)'}}>$10,404</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:13,color:'rgba(245,240,232,0.6)'}}>Improvement credits</span><span style={{fontSize:13,color:'var(--parchment)'}}>$2,800</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0 4px'}}><span style={{fontFamily:'var(--serif-display)',fontSize:16,color:'var(--parchment)'}}>Max resale price</span><span style={{fontFamily:'var(--serif-display)',fontSize:22,color:'var(--gold)'}}>$200,204</span></div>
        </div>
        <div className="modal-btns"><button className="btn" onClick={()=>setSheet(null)}>Close</button><button className="btn primary" onClick={()=>setSheet(null)}>Generate PDF</button></div>
      </Sheet>

    </div>
  )
}
