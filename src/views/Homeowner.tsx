import './Homeowner.css'

export default function Homeowner() {
  return (
    <div className="hw">
      <div className="hw-topbar">
        <div>
          <div className="hw-topbar-brand">Propria<span>.</span></div>
          <div className="hw-topbar-org">Rondo Community Land Trust</div>
        </div>
      </div>

      <div className="hw-sidebar">
        <div className="hw-sidebar-brand">
          <div className="hw-sidebar-name">Propria<em>.</em></div>
          <div className="hw-sidebar-org">Rondo Community Land Trust</div>
        </div>
        <div className="hw-sidebar-user">
          <div className="hw-sidebar-av">MT</div>
          <div><div className="hw-sidebar-user-name">Maria Torres</div><div className="hw-sidebar-user-addr">14 Oak Street</div></div>
        </div>
        <div className="hw-sidebar-item active"><svg viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>Home</div>
        <div className="hw-sidebar-item"><svg viewBox="0 0 16 16"><path d="M2 14V7.5L8 2l6 5.5V14H2z"/><path d="M6 14v-4h4v4"/></svg>My Home</div>
        <div className="hw-sidebar-item"><svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>Community</div>
        <div className="hw-sidebar-item"><svg viewBox="0 0 16 16"><path d="M2 4h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg>Contact CLT</div>
        <div className="hw-sidebar-item"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14"/></svg>Account</div>
      </div>

      <div className="hw-main">
        <div className="hw-screens">
          <div className="hw-greeting"><div className="hw-greeting-text">Good morning, <em>Maria</em></div><div className="hw-greeting-sub">14 Oak Street · Rondo Community Land Trust</div></div>

          <div className="hw-home-card">
            <div className="hw-home-addr">14 Oak Street</div>
            <div className="hw-home-stats">
              <div><div className="hw-home-stat-label">Years owned</div><div className="hw-home-stat-val">6.2</div><div className="hw-home-stat-sub">Since March 2020</div></div>
              <div><div className="hw-home-stat-label">Equity built</div><div className="hw-home-stat-val">$14.2k</div><div className="hw-home-stat-sub">30% appreciation</div></div>
              <div><div className="hw-home-stat-label">Ground lease</div><div className="hw-home-stat-val">$48</div><div className="hw-home-stat-sub">/month</div></div>
            </div>
          </div>

          <div className="hw-payment"><div><div className="hw-payment-label">April ground lease</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>Autopay · Chase ****4821</div></div><div className="hw-payment-status">Collected ✓</div></div>

          <div className="hw-equity">
            <div className="hw-equity-top"><span className="hw-equity-label">Accumulated equity</span><span className="hw-equity-val">$14,200</span></div>
            <div className="hw-equity-track"><div className="hw-equity-fill" style={{width:'62%'}}></div></div>
            <div className="hw-equity-sub">62% of estimated resale appreciation share · $187,000 purchase price</div>
          </div>

          <div style={{padding:'0 16px 16px'}}>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Upcoming</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px'}}>
              <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:4}}>Spring Community Gathering</div>
              <div style={{fontSize:12,color:'var(--ink-light)'}}>April 12 · 3–6 PM · Rondo Rec Center</div>
              <div style={{fontSize:12,color:'var(--forest-light)',marginTop:6,fontWeight:500,cursor:'pointer'}}>RSVP →</div>
            </div>
          </div>

          <div style={{padding:'0 16px 80px'}}>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Quick actions</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',cursor:'pointer'}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>Submit maintenance</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>Report an issue</div></div>
              <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',cursor:'pointer'}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>Contact Rondo CLT</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>Message your team</div></div>
              <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',cursor:'pointer'}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>Payment history</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>74 of 74 on time</div></div>
              <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',cursor:'pointer'}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>Resale calculator</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>Estimate your equity</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hw-nav">
        <button className="hw-nav-item active"><svg viewBox="0 0 22 22"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/></svg><span>Home</span></button>
        <button className="hw-nav-item"><svg viewBox="0 0 22 22"><path d="M3 18V9.5L11 3l8 6.5V18H3z"/><path d="M8 18v-5h6v5"/></svg><span>My Home</span></button>
        <button className="hw-nav-item"><svg viewBox="0 0 22 22"><circle cx="11" cy="8" r="4"/><path d="M3 19c0-3.5 3.5-6 8-6s8 2.5 8 6"/></svg><span>Community</span></button>
        <button className="hw-nav-item"><svg viewBox="0 0 22 22"><path d="M3 6h16v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/><path d="M3 6l8 7 8-7"/></svg><span>Contact</span></button>
        <button className="hw-nav-item"><svg viewBox="0 0 22 22"><circle cx="11" cy="11" r="3"/><path d="M11 4v2M11 16v2M4 11h2M16 11h2"/></svg><span>Account</span></button>
      </div>
    </div>
  )
}
