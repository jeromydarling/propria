import { useState } from 'react'
import './Homeowner.css'

export default function Homeowner() {
  const [screen, setScreen] = useState('home')
  const ni = (n: string) => screen === n ? 'hw-nav-item active' : 'hw-nav-item'
  const si = (n: string) => screen === n ? 'hw-sidebar-item active' : 'hw-sidebar-item'

  return (
    <div className="hw">
      <div className="hw-topbar">
        <div>
          <div className="hw-topbar-brand">Propria<span>.</span></div>
          <div className="hw-topbar-org">Rondo Community Land Trust</div>
        </div>
      </div>

      <div className="hw-sidebar">
        <div className="hw-sidebar-brand"><div className="hw-sidebar-name">Propria<em>.</em></div><div className="hw-sidebar-org">Rondo Community Land Trust</div></div>
        <div className="hw-sidebar-user"><div className="hw-sidebar-av">MT</div><div><div className="hw-sidebar-user-name">Maria Torres</div><div className="hw-sidebar-user-addr">14 Oak Street</div></div></div>
        <div className={si('home')} onClick={()=>setScreen('home')}><svg viewBox="0 0 16 16"><path d="M2 8L8 2l6 6v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8z"/><path d="M6 16v-5h4v5"/></svg>Home</div>
        <div className={si('myhome')} onClick={()=>setScreen('myhome')}><svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M2 6h12M6 6v8"/></svg>My Home</div>
        <div className={si('community')} onClick={()=>setScreen('community')}><svg viewBox="0 0 16 16"><circle cx="6" cy="5" r="2.5"/><path d="M1 13c0-2.5 2-4 5-4"/><circle cx="11" cy="5" r="2.5"/><path d="M15 13c0-2.5-2-4-5-4"/></svg>Community</div>
        <div className={si('contact')} onClick={()=>setScreen('contact')}><svg viewBox="0 0 16 16"><path d="M2 3h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z"/><path d="M2 3l6 5 6-5"/></svg>Contact CLT</div>
        <div className={si('account')} onClick={()=>setScreen('account')}><svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/></svg>Account</div>
      </div>

      <div className="hw-main">
        <div className="hw-screens">

          {/* HOME */}
          {screen==='home' && <>
            <div className="hw-greeting"><div className="hw-greeting-text">Good morning, <em>Maria</em></div><div className="hw-greeting-sub">14 Oak Street · Rondo Community Land Trust</div></div>
            <div className="hw-home-card"><div className="hw-home-addr">14 Oak Street</div><div className="hw-home-stats"><div><div className="hw-home-stat-label">Years owned</div><div className="hw-home-stat-val">6.2</div><div className="hw-home-stat-sub">Since March 2020</div></div><div><div className="hw-home-stat-label">Equity built</div><div className="hw-home-stat-val">$14.2k</div><div className="hw-home-stat-sub">30% appreciation</div></div><div><div className="hw-home-stat-label">Ground lease</div><div className="hw-home-stat-val">$48</div><div className="hw-home-stat-sub">/month</div></div></div></div>
            <div className="hw-payment"><div><div className="hw-payment-label">April ground lease</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>Autopay · Visa ···4821 · always on time</div></div><div className="hw-payment-status">Collected ✓</div></div>
            <div className="hw-equity"><div className="hw-equity-top"><span className="hw-equity-label">Your equity</span><span className="hw-equity-val">$14,200</span></div><div className="hw-equity-track"><div className="hw-equity-fill" style={{width:'38%'}}></div></div><div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--ink-faint)',marginBottom:8}}><span>Purchased Oct 2019</span><span>Today</span></div>
              <div style={{borderTop:'0.5px solid var(--border)',paddingTop:8,display:'flex',flexDirection:'column',gap:6}}>
                <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:12,color:'var(--ink-light)'}}>Original purchase price</span><span style={{fontSize:12,color:'var(--ink)'}}>$187,000</span></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:12,color:'var(--ink-light)'}}>Appreciation (6.2 yrs × 1.5%)</span><span style={{fontSize:12,color:'var(--gold)'}}>+ $17,423</span></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:12,color:'var(--ink-light)'}}>Kitchen improvement credit</span><span style={{fontSize:12,color:'var(--gold)'}}>+ $2,800</span></div>
                <div style={{display:'flex',justifyContent:'space-between',paddingTop:6,borderTop:'0.5px solid var(--border)'}}><span style={{fontSize:12,color:'var(--ink)'}}>If you sold today, you'd receive</span><span style={{fontFamily:'var(--serif-display)',fontSize:16,color:'var(--forest)'}}>≈ $14,200</span></div>
              </div>
              <div className="hw-equity-sub" style={{marginTop:8,fontStyle:'italic'}}>This equity is enough for a full down payment on a market-rate home — if and when you're ever ready.</div>
            </div>
            <div style={{padding:'0 16px 16px'}}>
              <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>From Rondo CLT</div>
              <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
                {[{t:'Spring Community Gathering — April 19',d:'Rondo Park · 2–5 PM · Potluck and lawn games.',time:'2d ago'},{t:'Annual Assembly — April 22 · RSVP needed',d:'Your voice matters. Board elections this year.',time:'3d ago'},{t:'Welcome, Rondo CLT\'s 47th family',d:'A new family joined our community this month.',time:'1wk ago'}].map((u,i)=>
                  <div key={i} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',cursor:'pointer'}}>
                    <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)',marginBottom:2}}>{u.t}</div><div style={{fontSize:12,color:'var(--ink-light)',fontWeight:300}}>{u.d}</div></div>
                    <div style={{fontSize:11,color:'var(--ink-faint)',flexShrink:0}}>{u.time}</div>
                  </div>
                )}
              </div>
            </div>
          </>}

          {/* MY HOME */}
          {screen==='myhome' && <div style={{padding:16}}>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Property details</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5px',background:'var(--border-light)'}}>
                {[['Address','14 Oak St.'],['City','Saint Paul, MN'],['Bedrooms','3'],['Bathrooms','1.5'],['Built','1948'],['Sq. footage','1,240'],['Last inspection','Feb 2026'],['Condition','Good']].map(([l,v],i)=>
                  <div key={i} style={{background:'white',padding:'10px 14px'}}><div style={{fontSize:10,color:'var(--ink-faint)',marginBottom:2}}>{l}</div><div style={{fontSize:13,fontWeight:500,color:v==='Good'||v==='Feb 2026'?'var(--forest-light)':'var(--ink)'}}>{v}</div></div>
                )}
              </div>
            </div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Ground lease</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5px',background:'var(--border-light)'}}>
                {[['Status','Current'],['Monthly','$48.00'],['Lease start','Oct 2019'],['Renewal','Oct 2034'],['On time','74 of 74'],['Autopay','Active']].map(([l,v],i)=>
                  <div key={i} style={{background:'white',padding:'10px 14px'}}><div style={{fontSize:10,color:'var(--ink-faint)',marginBottom:2}}>{l}</div><div style={{fontSize:13,fontWeight:500,color:['Current','Active','74 of 74'].includes(v)?'var(--forest-light)':'var(--ink)'}}>{v}</div></div>
                )}
              </div>
              <div style={{padding:'12px 14px',borderTop:'0.5px solid var(--border-light)'}}><button style={{width:'100%',padding:10,borderRadius:8,border:'0.5px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:12,cursor:'pointer',fontFamily:'var(--sans)'}}>View ground lease document</button></div>
            </div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Your documents</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {[['Ground lease agreement','Signed Oct 15, 2019 · PDF'],['Homebuyer education certificate','Completed Sep 2019 · PDF'],['Homeowner handbook','Rondo CLT · 2023 edition']].map(([n,d],i)=>
                <div key={i} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
                  <div style={{width:32,height:32,borderRadius:8,background:'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="var(--ink-light)" strokeWidth="1.3"><path d="M4 2h5l4 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M9 2v4h4"/></svg></div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{n}</div><div style={{fontSize:11,color:'var(--ink-faint)',fontWeight:300}}>{d}</div></div>
                </div>
              )}
            </div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Equity projector</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,marginBottom:16}}>
              <div style={{fontSize:13,color:'var(--ink-light)',marginBottom:8}}>If you stay 5 more years, your equity grows to:</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:28,fontWeight:400,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:4}}>≈ $22,800</div>
              <div style={{fontSize:12,color:'var(--ink-faint)',marginBottom:12}}>Based on current 1.5% annual appreciation + $2,800 improvement credits</div>
              <div style={{display:'flex',gap:4,alignItems:'flex-end',height:80,marginBottom:8}}>
                {[{y:'2020',v:0},{y:'2022',v:18},{y:'2024',v:38},{y:'2026',v:55},{y:'2028',v:72},{y:'2031',v:90}].map((p,i)=>
                  <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
                    <div style={{width:'100%',background:i<=3?'var(--forest)':'var(--gold)',borderRadius:'2px 2px 0 0',height:Math.max(4,p.v*0.75)}}></div>
                    <div style={{fontSize:8,color:'var(--ink-faint)'}}>{p.y}</div>
                  </div>
                )}
              </div>
              <div style={{display:'flex',gap:12,justifyContent:'center',fontSize:10,color:'var(--ink-faint)'}}>
                <span><span style={{display:'inline-block',width:8,height:8,borderRadius:2,background:'var(--forest)',marginRight:3,verticalAlign:'middle'}}></span>Earned</span>
                <span><span style={{display:'inline-block',width:8,height:8,borderRadius:2,background:'var(--gold)',marginRight:3,verticalAlign:'middle'}}></span>Projected</span>
              </div>
            </div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Maintenance history</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {[{t:'Bathroom pipe — under-sink leak',d:'Dec 2025 · Ace Contracting · Resolved',s:'Resolved'},{t:'Furnace filter + inspection',d:'Oct 2025 · Annual preventive · $85',s:'Done'},{t:'Front porch railing — loose post',d:'Jul 2025 · Volunteer crew · No cost',s:'Done'}].map((m,i)=>
                <div key={i} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'var(--forest-light)',flexShrink:0}}></div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{m.t}</div><div style={{fontSize:11,color:'var(--ink-faint)',fontWeight:300}}>{m.d}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>{m.s}</span>
                </div>
              )}
              <div style={{padding:'12px 14px',borderTop:'0.5px solid var(--border-light)'}}><button style={{width:'100%',padding:10,borderRadius:8,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:12,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>+ Request a repair</button></div>
            </div>
          </div>}

          {/* COMMUNITY */}
          {screen==='community' && <div style={{padding:16}}>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Upcoming events</div>
            {[{m:'Apr',d:'19',t:'Spring Community Gathering',v:'Rondo Park · 2:00–5:00 PM',r:62,n:'29 of 47 RSVP\'d'},{m:'Apr',d:'22',t:'Annual Homeowner Assembly',v:'Rondo Education Center · 6:30–8:30 PM',r:30,n:'14 of 47 RSVP\'d'},{m:'May',d:'10',t:'Financial Wellness Workshop',v:'Rondo Library · 10:00 AM–12:00 PM',r:0,n:'Registration opening soon'}].map((e,i)=>
              <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:14,marginBottom:12,display:'flex',gap:14,cursor:'pointer'}}>
                <div style={{width:48,minWidth:48,height:48,borderRadius:8,background:'var(--parchment)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}><div style={{fontSize:10,color:'var(--ink-faint)',fontWeight:500}}>{e.m}</div><div style={{fontSize:18,fontWeight:500,color:e.r<50&&e.r>0?'var(--terra)':'var(--forest)'}}>{e.d}</div></div>
                <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:3}}>{e.t}</div><div style={{fontSize:12,color:'var(--ink-light)',marginBottom:6}}>{e.v}</div><div style={{height:4,background:'var(--parchment-dk)',borderRadius:2,overflow:'hidden',marginBottom:4}}><div style={{width:e.r+'%',height:'100%',background:e.r>=50?'var(--forest-light)':e.r>0?'var(--terra)':'transparent',borderRadius:2}}></div></div><div style={{fontSize:11,color:e.r<50&&e.r>0?'var(--terra)':'var(--ink-faint)'}}>{e.n}</div></div>
              </div>
            )}
            <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:16,marginBottom:16}}>
              <div style={{fontFamily:'var(--serif-display)',fontSize:15,fontStyle:'italic',color:'var(--forest)',lineHeight:1.5,marginBottom:8}}>"Owning our home here changed everything. My kids grew up in the same house, the same neighborhood. That stability — you can't put a price on it."</div>
              <div style={{fontSize:11,color:'#854F0B'}}>Samuel Okafor · 103 Selby Avenue · Rondo CLT homeowner, 8 years</div>
            </div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Your CLT by the numbers</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.5px',background:'var(--border-light)'}}>
                {[['47','Families'],['12','Years serving'],['$0','Foreclosures']].map(([v,l],i)=>
                  <div key={i} style={{background:'white',padding:'14px 12px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:24,fontWeight:400,color:'var(--forest)',letterSpacing:'-0.02em'}}>{v}</div><div style={{fontSize:9,color:'var(--ink-faint)',marginTop:2,textTransform:'uppercase',letterSpacing:'0.06em'}}>{l}</div></div>
                )}
              </div>
            </div>
          </div>}

          {/* CONTACT CLT */}
          {screen==='contact' && <div style={{padding:16}}>
            <div style={{background:'var(--forest)',borderRadius:12,padding:16,marginBottom:16,textAlign:'center'}}>
              <div style={{fontSize:11,color:'rgba(245,240,232,0.4)',marginBottom:4}}>Your stewardship coordinator</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--parchment)',marginBottom:2}}>Sarah Chen</div>
              <div style={{fontSize:12,color:'rgba(245,240,232,0.5)'}}>sarah@rondoclt.org</div>
            </div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {[{t:'Send a message',d:'Sarah usually responds within one business day',bg:'var(--forest)'},{t:'Call the CLT office',d:'(651) 555-0120 · Mon–Fri, 9 AM–5 PM',bg:'var(--forest-mid)'},{t:'Request a repair',d:'Submit a maintenance request for your home',bg:'var(--terra)'}].map((a,i)=>
                <div key={i} style={{display:'flex',gap:12,padding:'14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
                  <div style={{width:40,height:40,borderRadius:10,background:a.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="var(--parchment)" strokeWidth="1.3"><path d="M2 4h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l6 5 6-5"/></svg></div>
                  <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{a.t}</div><div style={{fontSize:12,color:'var(--ink-light)',fontWeight:300}}>{a.d}</div></div>
                </div>
              )}
            </div>
          </div>}

          {/* ACCOUNT */}
          {screen==='account' && <div style={{padding:16}}>
            <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
              <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(27,58,45,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--serif-display)',fontSize:20,color:'var(--forest)'}}            >MT</div>
              <div><div style={{fontFamily:'var(--serif-display)',fontSize:19,fontWeight:500,color:'var(--forest)'}}>Maria Torres</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>14 Oak Street · Rondo CLT</div></div>
            </div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {['Edit profile','Change password','Manage autopay','Notification preferences'].map((l,i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 14px',borderBottom:'0.5px solid var(--border-light)',cursor:'pointer'}}><span style={{fontSize:14,color:'var(--ink)'}}>{l}</span><svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="var(--ink-faint)" strokeWidth="1.5"><path d="M5 2l4 5-4 5"/></svg></div>
              )}
            </div>
            <button style={{width:'100%',padding:12,borderRadius:8,background:'var(--terra)',color:'var(--parchment)',border:'none',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Sign out</button>
          </div>}

        </div>
      </div>

      <div className="hw-nav">
        <button className={ni('home')} onClick={()=>setScreen('home')}><svg viewBox="0 0 22 22"><path d="M3 10L11 3l8 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z"/><path d="M8 20v-6h6v6"/></svg><span>Home</span></button>
        <button className={ni('myhome')} onClick={()=>setScreen('myhome')}><svg viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="1.5"/><path d="M3 8h16M8 8v11"/></svg><span>My Home</span></button>
        <button className={ni('community')} onClick={()=>setScreen('community')}><svg viewBox="0 0 22 22"><circle cx="8" cy="7" r="3"/><path d="M2 18c0-3 2.5-5 6-5"/><circle cx="15" cy="7" r="3"/><path d="M20 18c0-3-2.5-5-6-5"/></svg><span>Community</span></button>
        <button className={ni('contact')} onClick={()=>setScreen('contact')}><svg viewBox="0 0 22 22"><path d="M3 6h16v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/><path d="M3 6l8 7 8-7"/></svg><span>Contact</span></button>
        <button className={ni('account')} onClick={()=>setScreen('account')}><svg viewBox="0 0 22 22"><circle cx="11" cy="8" r="4"/><path d="M3 19c0-3.5 3.5-6 8-6s8 2.5 8 6"/></svg><span>Account</span></button>
      </div>
    </div>
  )
}
