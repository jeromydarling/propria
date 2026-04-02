import './CltApp.css'
import { useState } from 'react'

const SCREENS = [
  { id: 'dashboard', label: 'Dashboard', icon: <svg viewBox="0 0 22 22"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/></svg> },
  { id: 'stewardship', label: 'Stewardship', icon: <svg viewBox="0 0 22 22"><circle cx="11" cy="8" r="4"/><path d="M4 19c0-3.3 3.1-6 7-6s7 2.7 7 6"/></svg>, badge: '3' },
  { id: 'pipeline', label: 'Pipeline', icon: <svg viewBox="0 0 22 22"><path d="M4 6h14M4 11h10M4 16h6"/></svg>, badge: '7', badgeGold: true },
  { id: 'praeco', label: 'Praeco', icon: <svg viewBox="0 0 22 22"><path d="M4 6h14v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/><path d="M4 6l7 5 7-5"/></svg> },
  { id: 'finances', label: 'Finances', icon: <svg viewBox="0 0 22 22"><path d="M4 18h14M6 18V10m4 8V7m4 11V12m4 6V9"/></svg> },
]

const SIDEBAR_ITEMS = [
  { section: 'Core', items: [
    { id: 'dashboard', label: 'Dashboard', icon: <svg viewBox="0 0 16 16"><rect x="2" y="2" width="5.5" height="5.5" rx="1"/><rect x="8.5" y="2" width="5.5" height="5.5" rx="1"/><rect x="2" y="8.5" width="5.5" height="5.5" rx="1"/><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1"/></svg> },
    { id: 'stewardship', label: 'Stewardship', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>, badge: '3' },
    { id: 'pipeline', label: 'Pipeline', icon: <svg viewBox="0 0 16 16"><path d="M2 4h12M2 8h8M2 12h5"/></svg>, badge: '7', badgeGold: true },
    { id: 'praeco', label: 'Praeco', icon: <svg viewBox="0 0 16 16"><path d="M2 4h12v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg> },
    { id: 'resale', label: 'Resale', icon: <svg viewBox="0 0 16 16"><path d="M5 2h6a1 1 0 0 1 1 1v12l-4-2.2L4 15V3a1 1 0 0 1 1-1z"/></svg>, badge: '1' },
  ]},
  { section: 'Property', items: [
    { id: 'assets', label: 'Asset management', icon: <svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg> },
    { id: 'maintenance', label: 'Maintenance', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5"/></svg>, badge: '1' },
  ]},
  { section: 'Community', items: [
    { id: 'governance', label: 'Governance', icon: <svg viewBox="0 0 16 16"><rect x="2" y="5" width="12" height="9" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg> },
    { id: 'finances', label: 'Finances', icon: <svg viewBox="0 0 16 16"><path d="M2 13h12M4 13V7m3-5v11M10 13V9m3-3v7"/></svg> },
  ]},
  { section: 'Account', items: [
    { id: 'settings', label: 'Settings', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M4.2 4.2l1 1M10.8 10.8l1 1M4.2 11.8l1-1M10.8 5.2l1-1"/></svg> },
    { id: 'account', label: 'My account', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg> },
  ]},
]

const HAMBURGER_ITEMS = [
  { section: 'Property', items: [
    { id: 'dashboard', label: 'Dashboard', icon: <svg viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg> },
    { id: 'stewardship', label: 'Stewardship', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>, badge: '3' },
    { id: 'pipeline', label: 'Pipeline', icon: <svg viewBox="0 0 16 16"><path d="M2 4h12M2 8h8M2 12h5"/></svg>, badge: '7', badgeGold: true },
    { id: 'praeco', label: 'Praeco', icon: <svg viewBox="0 0 16 16"><path d="M2 4h12v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg> },
    { id: 'resale', label: 'Resale', icon: <svg viewBox="0 0 16 16"><path d="M5 2h6a1 1 0 0 1 1 1v12l-4-2.2L4 15V3a1 1 0 0 1 1-1z"/></svg> },
    { id: 'assets', label: 'Assets', icon: <svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg> },
    { id: 'maintenance', label: 'Maintenance', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5"/></svg> },
    { id: 'governance', label: 'Governance', icon: <svg viewBox="0 0 16 16"><rect x="2" y="5" width="12" height="9" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg> },
    { id: 'finances', label: 'Finances', icon: <svg viewBox="0 0 16 16"><path d="M2 13h12M4 13V7m3-5v11M10 13V9m3-3v7"/></svg> },
  ]},
  { section: 'Account', items: [
    { id: 'settings', label: 'Settings', icon: <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="3"/><path d="M8 2v1M8 13v1M2 8h1M13 8h1M4.2 4.2l.7.7M11.1 11.1l.7.7M4.2 11.8l.7-.7M11.1 4.9l.7-.7"/></svg> },
  ]},
]

export default function CltApp() {
  const [screen, setScreen] = useState('dashboard')
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [compassOpen, setCompassOpen] = useState(false)

  function navigate(id: string) {
    setScreen(id)
    setHamburgerOpen(false)
  }

  return (
    <div className="clt">
      <div className="clt-app">
        {/* TOPBAR (mobile) */}
        <div className="clt-topbar">
          <button className="clt-topbar-hamburger" onClick={() => setHamburgerOpen(true)}>
            <svg viewBox="0 0 18 14"><path d="M0 1h18M0 7h18M0 13h18" strokeLinecap="round" /></svg>
          </button>
          <div className="clt-topbar-brand">
            <div className="clt-topbar-name">Propria<span>.</span></div>
            <div className="clt-topbar-org">Rondo Community Land Trust</div>
          </div>
          <button className="clt-topbar-compass" onClick={() => setCompassOpen(true)}>
            <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" /><path d="M8 4v1M8 11v1M4 8h1M11 8h1" /><circle cx="8" cy="8" r="1.5" /></svg>
            <div className="clt-compass-dot" />
          </button>
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="clt-desktop-sidebar">
          <div className="dsc-brand">
            <div className="dsc-name">Propria<span>.</span></div>
            <div className="dsc-org">Rondo Community Land Trust</div>
          </div>
          {SIDEBAR_ITEMS.map(group => (
            <div key={group.section}>
              <div className="dsc-section">{group.section}</div>
              {group.items.map(item => (
                <div
                  key={item.id}
                  className={'dsc-item' + (screen === item.id ? ' active' : '')}
                  onClick={() => setScreen(item.id)}
                >
                  {item.icon}
                  {item.label}
                  {item.badge && <span className={'dsc-badge' + (item.badgeGold ? ' gold' : '')}>{item.badge}</span>}
                </div>
              ))}
            </div>
          ))}
          <div className="dsc-spacer" />
          <div className="dsc-user">
            <div className="dsc-avatar">SC</div>
            <div>
              <div className="dsc-user-name">Sarah Chen</div>
              <div className="dsc-user-role">Stewardship coordinator</div>
            </div>
          </div>
        </div>

        {/* SCREENS */}
        <div className="clt-screens">
          {/* DASHBOARD */}
          <div className={'clt-screen' + (screen === 'dashboard' ? ' active' : '')} id="screen-dashboard">
            <div className="dash-hero">
              <div className="dash-greeting">Good morning, <em>Sarah</em></div>
              <div className="dash-date">Tuesday, April 1, 2026 · Rondo CLT</div>
              <div className="dash-stats">
                <div className="dash-stat"><div className="dash-stat-val">47</div><div className="dash-stat-label">Families</div><div className="dash-stat-sub up">+2 this quarter</div></div>
                <div className="dash-stat"><div className="dash-stat-val">94%</div><div className="dash-stat-label">Lease collected</div><div className="dash-stat-sub warn">3 overdue</div></div>
                <div className="dash-stat"><div className="dash-stat-val">12</div><div className="dash-stat-label">Active applicants</div><div className="dash-stat-sub muted">7 in education</div></div>
                <div className="dash-stat"><div className="dash-stat-val">7</div><div className="dash-stat-label">Check-ins due</div><div className="dash-stat-sub warn">By Apr 30</div></div>
              </div>
            </div>
            <div className="dash-ground" />
            <div className="sec-header"><span className="sec-title">Needs attention</span><span className="sec-action">View all</span></div>
            <div className="clt-card" style={{ margin: '0 14px 14px' }}>
              <div className="feed-item" onClick={() => setScreen('stewardship')}>
                <div className="feed-avatar av-coral">MT</div>
                <div className="feed-body"><div className="feed-name">Maria Torres — 14 Oak St.</div><div className="feed-detail">No response to 2 check-in attempts. 23 days since last contact.</div></div>
                <div className="feed-meta"><span className="dir-pill dir-cura">Cura</span><span className="feed-time">23d</span></div>
              </div>
              <div className="feed-item">
                <div className="feed-avatar av-coral">JW</div>
                <div className="feed-body"><div className="feed-name">James Walker — 22 Elm Ave.</div><div className="feed-detail">Ground lease 9 days overdue · $48 balance</div></div>
                <div className="feed-meta"><span className="dir-pill dir-reconciliatio">Reconciliatio</span><span className="feed-time">9d</span></div>
              </div>
              <div className="feed-item" onClick={() => setScreen('pipeline')}>
                <div className="feed-avatar av-blue">KJ</div>
                <div className="feed-body"><div className="feed-name">Keisha Johnson</div><div className="feed-detail">Income docs expired · Education stalled at 64%</div></div>
                <div className="feed-meta"><span className="dir-pill dir-itiner">Itiner</span><span className="feed-time">5d</span></div>
              </div>
            </div>
          </div>

          {/* PLACEHOLDER SCREENS */}
          {['stewardship','pipeline','praeco','finances','resale','assets','maintenance','governance','settings','account'].map(id => (
            <div key={id} className={'clt-screen' + (screen === id ? ' active' : '')}>
              <div style={{ padding: 16 }}>
                <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: 22, color: 'var(--ink)', marginBottom: 16, textTransform: 'capitalize' }}>{id}</h2>
                <p style={{ color: 'var(--ink-light)' }}>Screen content coming soon.</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NAV (mobile) */}
        <div className="clt-bottom-nav">
          {SCREENS.map(s => (
            <button
              key={s.id}
              className={'clt-nav-item' + (screen === s.id ? ' active' : '')}
              onClick={() => setScreen(s.id)}
            >
              <span className="clt-nav-icon">{s.icon}</span>
              <span className="clt-nav-label">{s.label}</span>
              {s.badge && <span className={'clt-nav-badge' + (s.badgeGold ? ' gold' : '')}>{s.badge}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* HAMBURGER OVERLAY */}
      <div className={'clt-hamburger-overlay' + (hamburgerOpen ? ' open' : '')} onClick={(e) => { if ((e.target as HTMLElement).classList.contains('clt-hamburger-overlay')) setHamburgerOpen(false) }}>
        <div className="clt-hamburger-menu">
          <div className="hm-header">
            <div className="hm-brand">Propria<span>.</span></div>
            <div className="hm-org">Rondo Community Land Trust</div>
          </div>
          {HAMBURGER_ITEMS.map(group => (
            <div key={group.section}>
              <div className="hm-section">{group.section}</div>
              {group.items.map(item => (
                <div key={item.id} className="hm-item" onClick={() => navigate(item.id)}>
                  {item.icon}
                  {item.label}
                  {item.badge && <span className={'hm-badge' + (item.badgeGold ? ' gold' : '')}>{item.badge}</span>}
                </div>
              ))}
            </div>
          ))}
          <div className="hm-spacer" />
          <div className="hm-user">
            <div className="hm-avatar">SC</div>
            <div>
              <div className="hm-user-name">Sarah Chen</div>
              <div className="hm-user-role">Stewardship coordinator</div>
            </div>
          </div>
        </div>
      </div>

      {/* NRI COMPASS DRAWER */}
      <div className={'clt-compass-overlay' + (compassOpen ? ' open' : '')} onClick={(e) => { if ((e.target as HTMLElement).classList.contains('clt-compass-overlay')) setCompassOpen(false) }}>
        <div className="clt-compass-drawer">
          <div className="compass-handle" />
          <div className="compass-header">
            <div className="compass-header-dot" />
            <div className="compass-header-title">NRI Compass</div>
          </div>
          <div className="compass-body">
            <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>Natural Relational Intelligence — your stewardship copilot.</p>
          </div>
          <div className="compass-input-row">
            <input className="compass-input" placeholder="Ask about a family or situation..." />
            <button className="compass-send">
              <svg viewBox="0 0 16 16"><path d="M14 8H2M8 2l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
