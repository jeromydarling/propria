import { useState } from 'react'
import './Marketing.css'

export default function Marketing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function scrollTo(id: string) {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="mkt">
      {/* NAV */}
      <nav>
        <a href="#" className="nav-brand">Propria<span>.</span></a>
        <button className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen
            ? <svg viewBox="0 0 22 22" width="22" height="22"><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
            : <svg viewBox="0 0 22 16"><path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
          }
        </button>
        <ul className="nav-links">
          <li><a onClick={()=>scrollTo('platform')}>Platform</a></li>
          <li><a onClick={()=>scrollTo('stewardship')}>Stewardship</a></li>
          <li><a onClick={()=>scrollTo('network')}>Counselors</a></li>
          <li><a onClick={()=>scrollTo('pricing')}>Pricing</a></li>
          <li><a onClick={()=>scrollTo('demo')} className="nav-cta">Request a demo</a></li>
        </ul>
      </nav>
      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a onClick={()=>scrollTo('platform')}>Platform</a>
          <a onClick={()=>scrollTo('stewardship')}>Stewardship</a>
          <a onClick={()=>scrollTo('network')}>Counselors</a>
          <a onClick={()=>scrollTo('pricing')}>Pricing</a>
          <a className="mobile-menu-cta" onClick={()=>scrollTo('demo')}>Request a demo</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-lines" />
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">CROS™ Platform for Community Land Trusts</div>
            <h1>Property for the <em>many,</em><br/>not the few.</h1>
            <p className="hero-sub">Propria is the operating system for community land trusts — built around the insight that your core product is a multi-decade stewardship relationship with each family you serve.</p>
            <div className="hero-actions">
              <a onClick={()=>scrollTo('demo')} className="btn-primary" style={{cursor:'pointer'}}>Request a demo</a>
              <a onClick={()=>scrollTo('platform')} className="btn-ghost" style={{cursor:'pointer'}}>
                See the platform
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-label">NRI Compass — Rondo CLT</div>
            <div className="hero-card-row">
              <div className="hero-card-icon" />
              <span className="hero-card-name">Maria Torres — 14 Oak St.</span>
              <span className="hero-card-badge">Cura</span>
            </div>
            <div className="hero-card-row">
              <div className="hero-card-icon gold" />
              <span className="hero-card-name">Annual check-in due — 7 families</span>
              <span className="hero-card-badge">Custodia</span>
            </div>
            <div className="hero-card-row">
              <div className="hero-card-icon muted" />
              <span className="hero-card-name">Ground lease collected — 94%</span>
              <span className="hero-card-badge green">On track</span>
            </div>
            <div className="hero-card-divider" />
            <div className="hero-card-stat">
              <span className="hero-card-stat-label">Families in stewardship</span>
              <span className="hero-card-stat-val">47 <small>homes</small></span>
            </div>
            <div className="hero-card-stat" style={{marginTop:'0.6rem'}}>
              <span className="hero-card-stat-label">Avg. stewardship relationship</span>
              <span className="hero-card-stat-val">8.3 <small>years</small></span>
            </div>
          </div>
        </div>
        <div className="hero-ground" />
      </section>

      {/* CREDIBILITY STRIP */}
      <div className="cred-band">
        <div className="cred-inner">
          <div className="cred-item">
            <div className="cred-num">300+</div>
            <div className="cred-text"><strong>CLTs in the United States</strong>growing rapidly since 2020 as housing costs escalate</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">$400M</div>
            <div className="cred-text"><strong>CCHD investment since 1970</strong>in community-based affordable housing and poverty solutions</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">200+</div>
            <div className="cred-text"><strong>Grounded Solutions members</strong>across 42 states — the national CLT network Propria is built to serve</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">$49</div>
            <div className="cred-text"><strong>Starting price per month</strong>for the full platform, NRI included — no tiers, no add-ons</div>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="quote-band">
        <div className="quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <blockquote>The problem with capitalism is not too much property — it is too few proprietors.</blockquote>
          <p className="quote-attribution">G.K. Chesterton &nbsp;&middot;&nbsp; The Outline of Sanity, 1926</p>
        </div>
      </div>

      {/* CCHD SECTION */}
      <div className="cchd-band">
        <div className="cchd-inner">
          <div>
            <div className="cchd-eyebrow">Institutional Roots</div>
            <h2 className="cchd-headline">Built in the tradition of<br/><em>Catholic Social Teaching.</em></h2>
            <p className="cchd-body">The Catholic Campaign for Human Development — the USCCB's primary domestic poverty-fighting apparatus — has identified community land trusts as a strategic priority and invested accordingly. Propria is built in that tradition: the conviction that widely distributed property ownership is the foundation of a free and dignified society.<br/><br/>This is not a niche. The CLT model has the backing of the oldest and largest institutional network in American civil society — and it is growing.</p>
          </div>
          <div className="cchd-quotes">
            <div className="cchd-pullquote">
              <p>&ldquo;Shared-equity housing is a uniquely self-sustaining approach. One home can help multiple successive families gain an economic foothold.&rdquo;</p>
              <cite>TONY PICKETT &middot; CEO, Grounded Solutions Network</cite>
            </div>
            <div className="cchd-pullquote">
              <p>&ldquo;Housing is not just a building on a street — it is a building block for a neighborhood and a community.&rdquo;</p>
              <cite>RALPH McCLOUD &middot; Director, Catholic Campaign for Human Development</cite>
            </div>
            <div className="cchd-pullquote">
              <p>&ldquo;We want to be a person's first call, not their last, if they have a financial setback and need help.&rdquo;</p>
              <cite>GARRICK GOOD &middot; Executive Director, Northeast Housing Initiative</cite>
            </div>
          </div>
        </div>
      </div>

      {/* PLATFORM INTRO */}
      <section id="platform" style={{background:'var(--cream)'}}>
        <div className="section-inner">
          <p className="section-eyebrow">The Platform</p>
          <h2 className="section-title">Everything a CLT needs. Nothing it doesn't.</h2>
          <p className="section-body">CLTs have been held together by Salesforce configurations nobody understands, spreadsheets that break on turnover, and property management software designed for landlords. Propria is built for what you actually do — stewarding families through decades of ownership.</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="modules-section" id="stewardship" style={{paddingTop:0}}>
        <div className="section-inner">
          <div className="modules-grid">
            <div className="module-card heart">
              <div className="module-number">II</div>
              <div className="module-name">Stewardship</div>
              <div className="module-latin">The heart of Propria</div>
              <div className="module-desc">A relational dashboard for every homeowner: contact history, life events, maintenance, financial health signals, lease compliance, and NRI-generated prompts. The software equivalent of a great stewardship coordinator who forgets nothing.</div>
            </div>
            <div className="module-card">
              <div className="module-number">I</div>
              <div className="module-name">Applicant Pipeline</div>
              <div className="module-latin">Iter — the journey</div>
              <div className="module-desc">Intake forms, income verification, education enrollment, waitlist scoring, and automated signals when documentation expires.</div>
            </div>
            <div className="module-card">
              <div className="module-number">III</div>
              <div className="module-name">Resale Engine</div>
              <div className="module-latin">Translatio — transfer</div>
              <div className="module-desc">Formula configuration per CLT, equity tracking, intent-to-sell workflow, buyer matching, closing management, and fee collection via Stripe.</div>
            </div>
            <div className="module-card">
              <div className="module-number">IV</div>
              <div className="module-name">Asset Management</div>
              <div className="module-latin">Domus — the house</div>
              <div className="module-desc">Property records, inspection schedules, repair history, capital forecasting, contractor directory, and split invoicing.</div>
            </div>
            <div className="module-card">
              <div className="module-number">V</div>
              <div className="module-name">Governance &amp; Community</div>
              <div className="module-latin">Communitas — together</div>
              <div className="module-desc">Board documents, meeting minutes, homeowner assembly, committee management, community events, and volunteer tracking.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NRI */}
      <section className="nri-section">
        <div className="section-inner">
          <div className="nri-inner">
            <div>
              <p className="section-eyebrow">NRI Intelligence</p>
              <h2 className="section-title">The stewardship coordinator who <em>sees everything.</em></h2>
              <p className="section-body" style={{marginBottom:'1.5rem'}}>Narrative Relational Intelligence runs beneath every screen in Propria, detecting signals at genuine value moments — disengagement risk, financial stress, maintenance urgency, stewardship success. It surfaces what needs your attention, when it matters, without burying you in notifications.</p>
              <p className="section-body">Content is never stored. Only category signals flow to your dashboard. NRI is included in every subscription — no tiers, no add-ons.</p>
            </div>
            <div className="nri-signals">
              <div className="nri-signal-header">
                <div className="nri-dot" />
                <span className="nri-title">NRI Compass — Today</span>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir cura">Cura</div>
                <div className="nri-card-msg">Maria Torres hasn't responded to 2 check-in attempts. Last contact was 23 days ago.</div>
                <div className="nri-card-action">→ Open stewardship record</div>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir reconciliatio">Reconciliatio</div>
                <div className="nri-card-msg">3 homeowners have ground lease payments 7+ days overdue, totaling $185.</div>
                <div className="nri-card-action">→ Send payment reminders</div>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir custodia">Custodia</div>
                <div className="nri-card-msg">7 families are due for their annual check-in this quarter. Schedule before March ends.</div>
                <div className="nri-card-action">→ View check-in queue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES THAT SET PROPRIA APART */}
      <section style={{background:'var(--parchment)',padding:'100px 2.5rem'}}>
        <div className="section-inner">
          <p className="section-eyebrow">What Sets Propria Apart</p>
          <h2 className="section-title">Features CLTs actually <em>need.</em></h2>
          <p className="section-body" style={{marginBottom:'3rem'}}>We didn't build a generic CRM and slap a CLT label on it. Every feature below was designed for the specific workflows that community land trust staff do every day — and nobody else has built.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5px',background:'var(--parchment-dk)',border:'1.5px solid var(--parchment-dk)',borderRadius:6,overflow:'hidden'}}>
            {[
              {n:'Magic Import',l:'Migratio',d:'Upload your spreadsheets, CSVs, PDFs — even photos of paper records. NRI parses, maps fields, deduplicates, and validates before a single record touches your database. Bring the mess. We\'ll sort it.'},
              {n:'HUD-9902 Generator',l:'Relatio',d:'Auto-generated quarterly HUD reports from your live data. Review, validate, and export — no more manually counting sessions or guessing at outcomes. Compliance in minutes, not days.'},
              {n:'Resale Calculator',l:'Computatio',d:'Interactive formula calculator supporting fixed-rate, appraisal-based, and CPI-indexed formulas. Shareable with homeowners and embeddable on your website.'},
              {n:'Ground Lease Generator',l:'Documentum',d:'Generate signing-ready ground lease documents from your templates and homeowner data. Auto-populated fields, multiple template support, PDF export.'},
              {n:'Site Builder',l:'Praeco',d:'NRI-powered website builder for your CLT. Update pages, post events, and publish content in the Rondo CLT voice — without hiring a web developer.'},
              {n:'Homebuyer Education',l:'Eruditio',d:'Built-in 6-module course covering CLT mechanics, ground leases, resale formulas, and financial planning. 70% passing threshold. Certificate generation included.'},
              {n:'Counselor Network',l:'Consiliarius',d:'Connect applicants with HUD-certified housing counselors matched by state, language, and CLT experience. Read.ai session summaries imported automatically.'},
              {n:'Homeowner Portal',l:'Domus',d:'Every homeowner gets their own portal — equity tracking, payment history, maintenance requests, community events, and direct contact with their CLT coordinator. Free for families.'},
            ].map((f,i) => (
              <div key={i} style={{background:'var(--parchment)',padding:'1.75rem'}}>
                <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.01em',marginBottom:4}}>{f.n}</div>
                <div style={{fontFamily:'var(--serif-body)',fontSize:13,fontStyle:'italic',color:'var(--terra)',marginBottom:8}}>{f.l}</div>
                <div style={{fontFamily:'var(--sans)',fontSize:14,color:'var(--ink-light)',lineHeight:1.6,fontWeight:300}}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE — Mini-preview slider */}
      <div className="ground-line" />
      <section style={{background:'var(--forest)',padding:'80px 0 90px',overflow:'hidden'}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'0 2.5rem'}}>
          <p className="section-eyebrow" style={{color:'var(--gold)'}}>See It In Action</p>
          <h2 style={{fontFamily:'var(--serif-display)',fontSize:'clamp(30px,4vw,46px)',fontWeight:500,lineHeight:1.15,color:'var(--parchment)',letterSpacing:'-0.02em',maxWidth:600,marginBottom:'1rem'}}>Every screen. <em style={{fontStyle:'italic',color:'var(--terra-light)'}}>Every workflow.</em></h2>
          <p style={{fontFamily:'var(--serif-body)',fontSize:17,fontWeight:300,color:'rgba(245,240,232,0.6)',lineHeight:1.65,maxWidth:520,marginBottom:'2.5rem'}}>From stewardship dashboards to resale engines, from homebuyer education to AI-powered site builders — scroll through what your team sees every day.</p>
        </div>
        <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch',scrollSnapType:'x mandatory',display:'flex',gap:20,paddingLeft:'max(2.5rem, calc((100vw - 1100px)/2 + 2.5rem))',paddingRight:40,paddingBottom:16}}>
          {[
            {title:'Dashboard',sub:'Sarah\'s morning view — who needs attention today',content:(
              <div style={{background:'var(--forest)',padding:'12px 14px 14px'}}>
                <div style={{fontFamily:'var(--serif-display)',fontSize:13,fontWeight:500,color:'var(--parchment)',marginBottom:2}}>Good morning, <em style={{color:'var(--terra-light)'}}>Sarah</em></div>
                <div style={{fontSize:8,color:'rgba(245,240,232,0.4)',marginBottom:10}}>Tuesday, April 1, 2026 · Rondo CLT</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                  {[{l:'Families',v:'47',s:'+2'},{l:'Lease',v:'94%',s:'3 due'},{l:'Applicants',v:'12',s:'7 in ed.'},{l:'Check-ins',v:'7',s:'Apr 30'}].map((s,i)=>
                    <div key={i} style={{background:'rgba(245,240,232,0.1)',borderRadius:6,padding:'8px 10px'}}>
                      <div style={{fontSize:7,color:'rgba(245,240,232,0.5)'}}>{s.l}</div>
                      <div style={{fontFamily:'var(--serif-display)',fontSize:16,color:'var(--parchment)',lineHeight:1}}>{s.v}</div>
                      <div style={{fontSize:7,color:'#8DCFAD'}}>{s.s}</div>
                    </div>
                  )}
                </div>
              </div>
            ),feed:(
              <div style={{padding:'8px 10px'}}>
                <div style={{fontSize:7,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:6}}>Needs attention</div>
                {[{i:'MT',n:'Maria Torres',d:'No response · 23d',c:'#FAECE7',t:'#712B13',p:'Cura',pc:'#FDF6E3',ptc:'#854F0B'},{i:'JW',n:'James Walker',d:'Lease 9d overdue',c:'#FAECE7',t:'#712B13',p:'Reconciliatio',pc:'#FAECE7',ptc:'#712B13'},{i:'KJ',n:'Keisha Johnson',d:'Docs expired',c:'#E6F1FB',t:'#0C447C',p:'Itiner',pc:'#E6F1FB',ptc:'#0C447C'}].map((f,i)=>
                  <div key={i} style={{display:'flex',gap:6,padding:'5px 0',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                    <div style={{width:22,height:22,borderRadius:'50%',background:f.c,display:'flex',alignItems:'center',justifyContent:'center',fontSize:7,fontWeight:500,color:f.t,flexShrink:0}}>{f.i}</div>
                    <div style={{flex:1,minWidth:0}}><div style={{fontSize:9,fontWeight:500,color:'var(--ink)'}}>{f.n}</div><div style={{fontSize:7,color:'var(--ink-light)'}}>{f.d}</div></div>
                    <span style={{fontSize:7,fontWeight:500,padding:'1px 5px',borderRadius:2,background:f.pc,color:f.ptc}}>{f.p}</span>
                  </div>
                )}
              </div>
            )},
            {title:'Stewardship',sub:'Maria Torres — contact history, lease data, life events',content:(
              <div style={{background:'var(--forest)',padding:'10px 14px',display:'flex',gap:8,alignItems:'center'}}>
                <div style={{width:28,height:28,borderRadius:'50%',background:'rgba(245,240,232,0.14)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:500,color:'var(--parchment)'}}>MT</div>
                <div><div style={{fontFamily:'var(--serif-display)',fontSize:12,fontWeight:500,color:'var(--parchment)'}}>Maria Torres</div><div style={{fontSize:7,color:'rgba(245,240,232,0.5)'}}>14 Oak St · Year 6 · Cura signal</div></div>
              </div>
            ),feed:(
              <div>
                <div style={{background:'var(--gold-pale)',padding:'6px 10px',display:'flex',gap:6,alignItems:'flex-start'}}>
                  <div style={{width:5,height:5,borderRadius:'50%',background:'var(--gold)',marginTop:3,flexShrink:0}}></div>
                  <div style={{fontSize:8,color:'#633806',lineHeight:1.4}}>Maria hasn't responded to 2 check-in attempts. Last contact 23 days ago.</div>
                </div>
                <div style={{display:'flex',background:'white',borderBottom:'0.5px solid var(--border)'}}>
                  {['Contact','Lease','Life','Note'].map((t,i)=><div key={i} style={{flex:1,padding:'6px',textAlign:'center',fontSize:8,color:i===0?'var(--forest)':'var(--ink-faint)',borderBottom:i===0?'2px solid var(--forest)':'none',fontWeight:i===0?500:400}}>{t}</div>)}
                </div>
                <div style={{padding:'6px 10px'}}>
                  {[{t:'Email sent',d:'Mar 24'},{t:'Text message',d:'Mar 12'},{t:'Phone call',d:'Jan 15'}].map((c,i)=>
                    <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'0.5px solid var(--border-light)',fontSize:8,color:'var(--ink-light)'}}><span style={{color:'var(--ink)',fontWeight:500}}>{c.t}</span><span>{c.d}</span></div>
                  )}
                </div>
              </div>
            )},
            {title:'Resale Engine',sub:'14 Oak St. — formula, buyer matching, closing',content:(
              <div style={{background:'var(--forest)',padding:'10px 14px',display:'flex',gap:8,alignItems:'center'}}>
                <div style={{width:28,height:28,borderRadius:'50%',background:'var(--parchment-dk)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg viewBox="0 0 16 16" width="14" height="14"><path d="M2 14V7.5L8 2l6 5.5V14H2z" stroke="var(--forest)" fill="none" strokeWidth="1.2"/></svg></div>
                <div><div style={{fontFamily:'var(--serif-display)',fontSize:12,fontWeight:500,color:'var(--parchment)'}}>14 Oak Street</div><div style={{fontSize:7,color:'rgba(245,240,232,0.5)'}}>Stage 5 · Buyer matching</div></div>
              </div>
            ),feed:(
              <div style={{padding:'8px 10px'}}>
                <div style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'0.5px solid var(--border-light)',fontSize:8}}><span style={{color:'var(--ink-light)'}}>Purchase price</span><span style={{fontWeight:500}}>$187,000</span></div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'0.5px solid var(--border-light)',fontSize:8}}><span style={{color:'var(--ink-light)'}}>+ 30% appreciation</span><span style={{fontWeight:500}}>$12,000</span></div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'0.5px solid var(--border-light)',fontSize:8}}><span style={{color:'var(--ink-light)'}}>+ Improvement credit</span><span style={{fontWeight:500}}>$2,800</span></div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:9,background:'var(--parchment)',margin:'4px -10px 0',padding:'6px 10px'}}><span style={{fontWeight:500,color:'var(--ink)'}}>Max resale price</span><span style={{fontFamily:'var(--serif-display)',fontSize:12,color:'var(--forest)'}}>$201,800</span></div>
              </div>
            )},
            {title:'Site Builder',sub:'NRI-powered CLT website — edit, publish, analyze',content:(
              <div style={{background:'var(--forest)',padding:'10px 14px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div><div style={{fontFamily:'var(--serif-display)',fontSize:12,fontWeight:500,color:'var(--parchment)'}}>Praeco · Website</div><div style={{fontSize:7,color:'rgba(245,240,232,0.4)'}}>rondoclt.org · Live</div></div>
                <span style={{fontSize:7,padding:'2px 6px',borderRadius:2,background:'rgba(245,240,232,0.12)',color:'rgba(245,240,232,0.6)'}}>Edit</span>
              </div>
            ),feed:(
              <div>
                <div style={{background:'var(--forest)',padding:'10px 10px 8px',borderTop:'1px solid rgba(245,240,232,0.08)'}}>
                  <div style={{fontFamily:'var(--serif-display)',fontSize:11,fontWeight:500,color:'var(--parchment)',lineHeight:1.2,marginBottom:4}}>Affordable homeownership in the <em style={{color:'var(--terra-light)'}}>Rondo neighborhood.</em></div>
                  <div style={{fontSize:7,color:'rgba(245,240,232,0.5)',marginBottom:6}}>Preserving homes for families in Saint Paul.</div>
                  <span style={{fontSize:7,padding:'3px 8px',borderRadius:2,background:'var(--terra)',color:'var(--parchment)'}}>Apply</span>
                </div>
                <div style={{padding:'6px 10px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:4}}>
                  {[{v:'47',l:'Families'},{v:'12',l:'Years'},{v:'$0',l:'Foreclosures'}].map((s,i)=><div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:4,padding:'4px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:10,color:'var(--forest)'}}>{s.v}</div><div style={{fontSize:6,color:'var(--ink-faint)'}}>{s.l}</div></div>)}
                </div>
                <div style={{padding:'6px 10px'}}>
                  <div style={{background:'var(--gold-pale)',borderRadius:4,padding:'5px 8px',display:'flex',gap:4,alignItems:'center'}}>
                    <div style={{width:4,height:4,borderRadius:'50%',background:'var(--gold)',flexShrink:0}}></div>
                    <div style={{fontSize:7,color:'#633806'}}>NRI can rewrite in the Rondo CLT voice</div>
                  </div>
                </div>
              </div>
            )},
            {title:'Magic Import',sub:'AI-powered data migration — bring your mess',content:(
              <div style={{padding:'12px 14px',textAlign:'center'}}>
                <div style={{fontSize:24,marginBottom:6}}>📁</div>
                <div style={{fontFamily:'var(--serif-display)',fontSize:12,fontWeight:500,color:'var(--forest)',marginBottom:4}}>Bring your mess</div>
                <div style={{fontSize:8,color:'var(--ink-light)',lineHeight:1.5}}>Excel, CSV, PDF, photos</div>
              </div>
            ),feed:(
              <div style={{padding:'8px 10px'}}>
                <div style={{display:'flex',gap:6,marginBottom:6,alignItems:'center'}}><span style={{fontSize:10}}>✓</span><div style={{fontSize:8,fontWeight:500,color:'#085041'}}>47 homeowners · 14 applicants</div></div>
                <div style={{fontSize:7,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:4}}>Field mapping</div>
                {[{s:'Owner Name',t:'Homeowner',c:98},{s:'Addr',t:'Address',c:95},{s:'Monthly GL',t:'Lease Fee',c:89}].map((m,i)=>
                  <div key={i} style={{display:'flex',alignItems:'center',gap:4,padding:'2px 0',fontSize:7}}>
                    <span style={{fontFamily:'monospace',background:'var(--parchment)',padding:'1px 3px',borderRadius:2,color:'var(--ink)'}}>{m.s}</span>
                    <span style={{color:'var(--ink-faint)'}}>→</span>
                    <span style={{color:'var(--forest)',fontWeight:500}}>{m.t}</span>
                    <span style={{marginLeft:'auto',fontWeight:600,color:m.c>=90?'var(--forest-light)':'var(--gold)'}}>{m.c}%</span>
                  </div>
                )}
              </div>
            )},
            {title:'Homeowner Portal',sub:'Maria\'s view — equity, payments, community',content:(
              <div style={{padding:'10px 14px'}}>
                <div style={{fontFamily:'var(--serif-display)',fontSize:13,fontWeight:500,color:'var(--forest)',marginBottom:2}}>Good morning, <em style={{color:'var(--terra)'}}>Maria</em></div>
                <div style={{fontSize:7,color:'var(--ink-faint)',marginBottom:8}}>14 Oak Street · Rondo CLT</div>
                <div style={{background:'var(--forest)',borderRadius:8,padding:'10px',color:'var(--parchment)'}}>
                  <div style={{fontFamily:'var(--serif-display)',fontSize:10,marginBottom:6}}>14 Oak Street</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}>
                    {[{l:'Years',v:'6.2'},{l:'Equity',v:'$14.2k'},{l:'Lease',v:'$48'}].map((s,i)=>
                      <div key={i}><div style={{fontSize:6,color:'rgba(245,240,232,0.5)'}}>{s.l}</div><div style={{fontFamily:'var(--serif-display)',fontSize:12,lineHeight:1}}>{s.v}</div></div>
                    )}
                  </div>
                </div>
              </div>
            ),feed:(
              <div style={{padding:'6px 10px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'4px 0',borderBottom:'0.5px solid var(--border-light)'}}>
                  <div><div style={{fontSize:8,color:'var(--ink)'}}>April ground lease</div><div style={{fontSize:6,color:'var(--ink-faint)'}}>Autopay · Visa ···4821</div></div>
                  <span style={{fontSize:7,fontWeight:500,color:'var(--forest-light)'}}>Collected ✓</span>
                </div>
              </div>
            )},
          ].map((screen,i) => (
            <div key={i} style={{minWidth:300,maxWidth:300,scrollSnapAlign:'start',flexShrink:0}}>
              {/* Browser chrome */}
              <div style={{background:'white',borderRadius:10,overflow:'hidden',boxShadow:'0 8px 40px rgba(0,0,0,0.25)',border:'1px solid rgba(245,240,232,0.1)'}}>
                <div style={{background:'#2A2A2A',padding:'6px 10px',display:'flex',alignItems:'center',gap:6}}>
                  <div style={{display:'flex',gap:4}}><div style={{width:8,height:8,borderRadius:'50%',background:'#FF5F57'}}></div><div style={{width:8,height:8,borderRadius:'50%',background:'#FEBC2E'}}></div><div style={{width:8,height:8,borderRadius:'50%',background:'#28C840'}}></div></div>
                  <div style={{flex:1,background:'#1A1A1A',borderRadius:4,padding:'3px 8px',fontSize:9,color:'#777',fontFamily:'var(--sans)'}}>propria.app</div>
                </div>
                <div style={{background:'var(--cream)',minHeight:220}}>
                  {screen.content}
                  {screen.feed}
                </div>
              </div>
              {/* Label */}
              <div style={{marginTop:14}}>
                <div style={{fontFamily:'var(--serif-display)',fontSize:17,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.01em'}}>{screen.title}</div>
                <div style={{fontFamily:'var(--sans)',fontSize:12,color:'rgba(245,240,232,0.5)',fontWeight:300,marginTop:2}}>{screen.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO GATE */}
      <div className="ground-line" />
      <section id="demo" style={{background:'var(--cream)',padding:'100px 2.5rem'}}>
        <div style={{maxWidth:680,margin:'0 auto',textAlign:'center'}}>
          <p className="section-eyebrow" style={{textAlign:'center'}}>Try Propria</p>
          <h2 className="section-title" style={{textAlign:'center',maxWidth:'none',margin:'0 auto 1rem'}}>See it for yourself.</h2>
          <p className="section-body" style={{textAlign:'center',maxWidth:'none',margin:'0 auto 2.5rem'}}>Fill in your details and we'll give you instant access to a live demo — the same Rondo CLT environment you just saw, fully interactive, with no data saved.</p>

          <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'2rem',textAlign:'left',maxWidth:480,margin:'0 auto'}}>
            <div style={{marginBottom:16}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4,fontFamily:'var(--sans)'}}>Your name</label>
              <input type="text" placeholder="e.g. Sarah Chen" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',background:'white'}} />
            </div>
            <div style={{marginBottom:16}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4,fontFamily:'var(--sans)'}}>Email</label>
              <input type="email" placeholder="sarah@rondoclt.org" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',background:'white'}} />
            </div>
            <div style={{marginBottom:16}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4,fontFamily:'var(--sans)'}}>CLT or organization name</label>
              <input type="text" placeholder="e.g. Rondo Community Land Trust" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',background:'white'}} />
            </div>
            <div style={{marginBottom:24}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4,fontFamily:'var(--sans)'}}>Your role</label>
              <select style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',background:'white',appearance:'auto' as never}}>
                <option value="">Select your role…</option>
                <option>Executive Director</option>
                <option>Stewardship Coordinator</option>
                <option>Program Manager</option>
                <option>Board Member</option>
                <option>Housing Counselor</option>
                <option>Other</option>
              </select>
            </div>
            <a href="#/app" className="btn-primary" style={{display:'block',width:'100%',textAlign:'center',padding:'14px',borderRadius:3,fontFamily:'var(--sans)',fontSize:15,fontWeight:500,textDecoration:'none',border:'none',cursor:'pointer'}}>Launch demo →</a>
            <div style={{fontSize:12,color:'var(--ink-faint)',textAlign:'center',marginTop:12,fontFamily:'var(--sans)',fontWeight:300}}>No credit card. No commitment. Instant access.</div>
          </div>
        </div>
      </section>

      {/* GROUNDED SOLUTIONS BAND */}
      <div className="grounded-band">
        <div className="grounded-inner">
          <div>
            <div className="grounded-label">The Network</div>
            <h2 className="grounded-headline">Built for the <em>Grounded Solutions</em> ecosystem.</h2>
            <p className="grounded-body">Grounded Solutions Network is the national backbone of the CLT movement — 200+ member organizations, a training institute reaching 1,000+ practitioners annually, and the deepest policy expertise in shared-equity housing. Propria is built to serve every one of their members, from a 20-home startup CLT to a 500-home anchor institution.<br/><br/>The long tail of the CLT market — small organizations with 1–3 staff and $200–400K budgets — is where growth is happening. That's exactly who Propria is priced and built for.</p>
          </div>
          <div className="grounded-stats">
            <div className="grounded-stat">
              <div className="grounded-stat-num">42</div>
              <div className="grounded-stat-label">States with Grounded Solutions member organizations</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">1K+</div>
              <div className="grounded-stat-label">Practitioners reached annually through the GSN training institute</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">$350K</div>
              <div className="grounded-stat-label">Median home price — double what it was a decade ago</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">1 in 6</div>
              <div className="grounded-stat-label">Households under $75K paying more than half their income on housing</div>
            </div>
          </div>
        </div>
      </div>

      {/* COUNSELOR NETWORK */}
      <div className="ground-line" />
      <section className="network-section" id="network">
        <div className="section-inner">
          <p className="section-eyebrow">Propria Counselor Network</p>
          <h2 className="section-title">HUD-certified counselors.<br/><em>Built in,</em> not bolted on.</h2>
          <p className="section-body" style={{marginBottom:0}}>Every buyer needs homebuyer education and a counseling session. Propria connects them with HUD-certified housing counselors from any approved agency nationwide — matched by state, language, availability, and CLT experience.</p>
          <div className="network-grid">
            <div className="network-cell">
              <div className="network-cell-num">300+</div>
              <div className="network-cell-label">CLTs in the US, growing rapidly since 2020</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">2–3×</div>
              <div className="network-cell-label">More clients per counselor hour vs. group classes</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">$95</div>
              <div className="network-cell-label">Per buyer for standalone education — included free for subscribers</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">10–12</div>
              <div className="network-cell-label">Self-paced modules covering CLT-specific ownership</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">EN + ES</div>
              <div className="network-cell-label">Multilingual from day one, expanding with local CLT demographics</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">$0</div>
              <div className="network-cell-label">Transaction fee on grant disbursements — we never take a cut of grant money</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="section-inner">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">One plan. Every feature.<br/>No tiers.</h2>
          <p className="section-body">A 30-home CLT and a 500-home CLT get the exact same product. We don't gate NRI, don't charge extra for counselors, and don't have an enterprise tier that requires a call.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-plan">Base</div>
              <div className="pricing-price"><sup>$</sup>49<sub>/mo</sub></div>
              <div className="pricing-desc">Up to 25 homes. Full platform, NRI included. No setup fees.</div>
              <ul className="pricing-features">
                <li>All five core modules</li>
                <li>NRI Compass intelligence</li>
                <li>Homeowner portal (free for families)</li>
                <li>Homebuyer education course</li>
                <li>Counselor network access</li>
                <li>Stripe Connect payments</li>
              </ul>
              <a onClick={()=>scrollTo('demo')} className="btn-pricing" style={{cursor:'pointer'}}>Start with base</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-plan">Per home</div>
              <div className="pricing-price"><sup>$</sup>3<sub>/home/mo beyond 25</sub></div>
              <div className="pricing-desc">Scales with your portfolio. Capped at $1,200/mo regardless of size.</div>
              <ul className="pricing-features">
                <li>50 homes → $124/mo</li>
                <li>100 homes → $274/mo</li>
                <li>150 homes → $424/mo</li>
                <li>300 homes → $874/mo</li>
                <li>500+ homes → $1,200/mo cap</li>
                <li>Everything in base, always</li>
              </ul>
              <a onClick={()=>scrollTo('demo')} className="btn-pricing" style={{cursor:'pointer'}}>Request a demo</a>
            </div>
          </div>
          <p className="pricing-note">+ 1.5% on ground lease collection and contractor payments · $250 flat per resale · $0 on grant disbursements</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">Propria.</div>
            <div className="footer-brand-tag">Properly yours.</div>
          </div>
          <div>
            <div className="footer-col-title">Platform</div>
            <ul className="footer-links">
              <li>Stewardship</li>
              <li>Applicant Pipeline</li>
              <li>Resale Engine</li>
              <li>Asset Management</li>
              <li>Governance</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Network</div>
            <ul className="footer-links">
              <li>Counselor signup</li>
              <li>Agency onboarding</li>
              <li>Homebuyer Education</li>
              <li>HUD compliance</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li>About CROS™</li>
              <li>Grounded Solutions</li>
              <li>Request a demo</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Propria · propria.app</span>
          <span className="footer-cros">A <span>CROS™</span> Platform</span>
        </div>
      </footer>
    </div>
  )
}
