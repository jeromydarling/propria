import { useState } from 'react'
import './Gardener.css'

const ZONES = ['conspectus','crescere','praeco','machina','silentium'] as const
const ZONE_LABELS: Record<string,{title:string,sub:string}> = {
  conspectus:{title:'Conspectus',sub:'Cross-CLT overview'},
  crescere:{title:'Crescere',sub:'CLT CRM · campaigns · outreach · growth'},
  praeco:{title:'Praeco',sub:'Content pipeline · announcements · propria.app'},
  machina:{title:'Machina',sub:'Platform configuration · feature flags'},
  silentium:{title:'Silentium',sub:'Demo mode · sandbox · testing'},
}

const CLT_TILES = [
  {n:'Rondo CLT',c:'Saint Paul, MN',h:47,health:'green'},{n:'Champlain Housing',c:'Burlington, VT',h:312,health:'green'},
  {n:'Durham CLT',c:'Durham, NC',h:89,health:'amber'},{n:'Oakland CLT',c:'Oakland, CA',h:156,health:'green'},
  {n:'Detroit CANDO',c:'Detroit, MI',h:34,health:'red'},{n:'New Orleans CLT',c:'New Orleans, LA',h:61,health:'amber'},
  {n:'Boston Dudley',c:'Boston, MA',h:225,health:'green'},{n:'Saint Joseph CLT',c:'S. Lake Tahoe, CA',h:28,health:'gray'},
  {n:'Portland CLT',c:'Portland, OR',h:78,health:'green'},{n:'Memphis Land Trust',c:'Memphis, TN',h:22,health:'red'},
  {n:'Chicago Homes',c:'Chicago, IL',h:143,health:'amber'},{n:'Denver CLT',c:'Denver, CO',h:91,health:'green'},
]

export default function Gardener() {
  const [zone, setZone] = useState<typeof ZONES[number]>('conspectus')
  const z = ZONE_LABELS[zone]

  return (
    <div className="grd">
      {/* ICON RAIL */}
      <div className="rail">
        <div className="rail-brand">P<span>.</span></div>
        {[
          {id:'conspectus',icon:<><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="10" y="2" width="6" height="6" rx="1"/><rect x="2" y="10" width="6" height="6" rx="1"/><rect x="10" y="10" width="6" height="6" rx="1"/></>,dot:true},
          {id:'crescere',icon:<><path d="M2 14l4-5 4 3 4-6"/><path d="M14 6h2v2"/></>},
          {id:'praeco',icon:<><path d="M2 4h14v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/><path d="M2 4l7 6 7-6"/></>},
          {id:'machina',icon:<><circle cx="9" cy="9" r="3"/><path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M4.2 13.8l1.4-1.4M12.4 5.6l1.4-1.4"/></>},
          {id:'silentium',icon:<><circle cx="9" cy="9" r="7"/><path d="M9 6v4M9 12v1"/></>},
        ].map(r => (
          <div key={r.id} className={'rail-item'+(zone===r.id?' active':'')} onClick={()=>setZone(r.id as typeof ZONES[number])}>
            <svg viewBox="0 0 18 18">{r.icon}</svg>
            {r.dot && <div className="rail-dot"></div>}
          </div>
        ))}
        <div className="rail-spacer"></div>
        <div className="rail-avatar">JD</div>
      </div>

      {/* MAIN */}
      <div className="grd-main">
        <div className="grd-topbar">
          <div className="grd-topbar-title">{z.title} <span>{z.sub}</span></div>
        </div>

        <div className="grd-content">

          {/* ZONE I: CONSPECTUS */}
          <div className={'zone'+(zone==='conspectus'?' active':'')}>
            <div className="zone-header"><div className="zone-label">Gardener · Zone I</div><div className="zone-title">Conspectus</div><div className="zone-sub">47 active CLTs · 12 states · platform-wide health</div></div>

            <div className="grid-4" style={{marginBottom:16}}>
              {[{l:'Active CLTs',v:'47',s:'+3 this quarter',c:'up'},{l:'Total homes stewarded',v:'2,841',s:'Across all CLTs',c:'muted'},{l:'NRI signal health',v:'78%',s:'9 CLTs need attention',c:'warn'},{l:'MRR',v:'$14.2k',s:'+$840 this month',c:'up'}].map((s,i)=>
                <div key={i} className="stat-block"><div className="stat-block-label">{s.l}</div><div className="stat-block-val">{s.v}</div><div className={'stat-block-sub '+s.c}>{s.s}</div></div>
              )}
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-header"><span className="card-title">CLT portfolio health</span><span className="card-meta">Color = NRI signal health</span></div>
                <div className="health-map">
                  {CLT_TILES.map((t,i) => <div key={i} className={'clt-tile health-'+t.health}><div className="clt-name">{t.n}</div><div className="clt-city">{t.c}</div><div className="clt-stats"><div className={'clt-dot dot-'+t.health}></div><span className="clt-stat">{t.h} homes</span></div></div>)}
                </div>
                <div style={{padding:'8px 16px',borderTop:'0.5px solid var(--border-light)',display:'flex',gap:14}}>
                  {[['green','Healthy (31)'],['amber','Signals (9)'],['red','Attention (5)'],['gray','New (2)']].map(([c,l])=><div key={c} style={{display:'flex',alignItems:'center',gap:5,fontSize:11,color:'var(--ink-faint)'}}><div className={'clt-dot dot-'+c} style={{flexShrink:0}}></div>{l}</div>)}
                </div>
              </div>

              <div>
                <div className="card">
                  <div className="card-header"><span className="card-title">Platform-wide signals</span><span className="card-meta">Last 24 hours</span></div>
                  {[{d:'reconciliatio',m:'Detroit CANDO has 31% ground lease collection rate — critical. No staff logins in 8 days.',c:'Detroit CANDO · 34 homes',t:'2h ago'},
                    {d:'cura',m:'Memphis Land Trust coordinator hasn\'t logged in for 14 days. NRI engagement has dropped to zero.',c:'Memphis Land Trust · 22 homes',t:'6h ago'},
                    {d:'itiner',m:'Durham CLT completed 3 resales this month — strongest resale quarter since launch.',c:'Durham CLT · 89 homes',t:'1d ago'},
                    {d:'custodia',m:'Chicago Homes has 47 annual check-ins overdue — stewardship coordinator appears overwhelmed.',c:'Chicago Homes · 143 homes',t:'1d ago'}
                  ].map((s,i)=><div key={i} className="signal-row"><div style={{flex:1,minWidth:0}}><div className={'signal-dir '+s.d}>{s.d.charAt(0).toUpperCase()+s.d.slice(1)}</div><div className="signal-msg">{s.m}</div><div className="signal-clt">{s.c}</div></div><div><span className="signal-time">{s.t}</span></div></div>)}
                </div>

                <div className="card">
                  <div className="card-header"><span className="card-title">Activation pipeline</span><span className="card-meta">New CLTs — first 90 days</span></div>
                  <div style={{padding:'0 16px 12px'}}>
                    {[{n:'Saint Joseph CLT',d:'Day 12 of 90',p:13},{n:'Albuquerque CLT',d:'Day 34 of 90',p:38},{n:'Houston Land Trust',d:'Day 67 of 90',p:74}].map((a,i)=>
                      <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'11px 0',borderBottom:i<2?'0.5px solid var(--border-light)':'none'}}>
                        <div><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{a.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Onboarding · {a.d}</div></div>
                        <div style={{display:'flex',alignItems:'center',gap:8}}><div style={{width:80,height:5,background:'var(--parchment-dk)',borderRadius:2,overflow:'hidden'}}><div style={{width:a.p+'%',height:'100%',background:a.p>50?'var(--forest-light)':'var(--gold)',borderRadius:2}}></div></div><span style={{fontSize:11,color:'var(--ink-faint)'}}>{a.p}%</span></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card">
                  <div className="card-header"><span className="card-title">Memoria — Q1 2026 digest</span><span className="card-action">View full →</span></div>
                  <div style={{padding:'14px 16px',fontFamily:'var(--serif-body)',fontSize:13,color:'var(--ink-mid)',lineHeight:1.65,fontWeight:300,fontStyle:'italic'}}>
                    "This quarter, the Propria network deepened its stewardship of 2,841 families across 47 community land trusts. Twelve resales were completed nationally — returning homes to trust for the next generation. Ground lease collection across the platform remained above 91%..."
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header"><span className="card-title">Billing health</span><span className="card-meta">April 2026</span></div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))',gap:'1px',background:'var(--border-light)'}}>
                {[{v:'41',l:'Current',c:'var(--forest)'},{v:'3',l:'Past due',c:'var(--gold)'},{v:'2',l:'At risk',c:'var(--terra)'},{v:'1',l:'Trial',c:'var(--ink)'},{v:'$14.2k',l:'MRR',c:'var(--forest-light)'}].map((b,i)=>
                  <div key={i} style={{background:'white',padding:'14px 16px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:24,color:b.c,letterSpacing:'-0.02em'}}>{b.v}</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:3}}>{b.l}</div></div>
                )}
              </div>
            </div>
          </div>

          {/* ZONE II: CRESCERE */}
          <div className={'zone'+(zone==='crescere'?' active':'')}>
            <div className="zone-header"><div className="zone-label">Gardener · Zone II</div><div className="zone-title">Crescere</div><div className="zone-sub">CLT CRM · campaigns · outreach · growth</div></div>

            <div className="card">
              <div className="card-header"><span className="card-title">CLT pipeline</span><span className="card-action">+ Add</span></div>
              <div style={{padding:'14px 16px',overflowX:'auto'}}>
                <div className="pipeline-cols">
                  {[
                    {h:'Researching (8)',cls:'stage-research',cards:[{n:'Nashville CLT',c:'Nashville, TN',t:'45 homes'},{n:'Tucson Housing',c:'Tucson, AZ',t:'12 homes'}]},
                    {h:'Contacted (6)',cls:'stage-contacted',cards:[{n:'DC CLT',c:'Washington, DC',t:'Tony Pickett ref.'},{n:'Philadelphia CLT',c:'Philadelphia, PA',t:'67 homes'}]},
                    {h:'Demo (4)',cls:'stage-demo',cards:[{n:'Austin CLT',c:'Austin, TX',t:'Demo Apr 8'},{n:'Seattle Land Trust',c:'Seattle, WA',t:'Demo Apr 12'}]},
                    {h:'Trial (3)',cls:'stage-trial',cards:[{n:'Albuquerque CLT',c:'Albuquerque, NM',t:'Day 34'}]},
                    {h:'Active (47)',cls:'stage-active',cards:[{n:'Rondo CLT',c:'Saint Paul, MN',t:'47 homes'}]},
                  ].map((col,ci)=><div key={ci} className="pipe-col"><div className={'pipe-col-header '+col.cls}>{col.h}</div>{col.cards.map((card,cdi)=><div key={cdi} className="pipe-card"><div className="pipe-card-name">{card.n}</div><div className="pipe-card-city">{card.c}</div><div><span className="tag tag-gray">{card.t}</span></div></div>)}</div>)}
                </div>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="card-header"><span className="card-title">Key contacts</span><span className="card-action">+ Add</span></div>
                {[{i:'TP',n:'Tony Pickett',r:'CEO · Grounded Solutions Network',l:'Not yet reached',av:'av-forest',t:'Priority',tc:'tag-amber'},
                  {i:'RM',n:'Ralph McCloud',r:'Director · CCHD, USCCB',l:'Not yet reached',av:'av-gold',t:'Priority',tc:'tag-amber'},
                  {i:'GG',n:'Garrick Good',r:'ED · Northeast Housing Initiative',l:'Feb 14 · email',av:'av-blue',t:'Active',tc:'tag-green'},
                  {i:'JD',n:'Jean Diaz',r:'ED · Saint Joseph CLT',l:'Mar 22 · demo',av:'av-terra',t:'Trial',tc:'tag-blue'}
                ].map((c,i)=><div key={i} className="contact-row"><div className={'contact-av '+c.av}>{c.i}</div><div style={{flex:1}}><div className="contact-name">{c.n}</div><div className="contact-role">{c.r}</div><div className="contact-last">Last contact: {c.l}</div></div><span className={'tag '+c.tc}>{c.t}</span></div>)}
              </div>

              <div className="card">
                <div className="card-header"><span className="card-title">Email campaigns</span><span className="card-action">+ New</span></div>
                {[{n:'Q1 product update — all CLTs',d:'47 CLTs · Sent Mar 28',o:'68%',cl:'23%',t:'Sent',tc:'tag-green'},
                  {n:'Resale Engine launch',d:'Active + pipeline (75)',o:'71%',cl:'31%',t:'Sent',tc:'tag-green'},
                  {n:'GSN member outreach',d:'200+ members · Draft',o:'—',cl:'—',t:'Draft',tc:'tag-gray'},
                  {n:'Catholic housing network intro',d:'CCHD contacts · Apr 15',o:'—',cl:'—',t:'Scheduled',tc:'tag-blue'}
                ].map((c,i)=><div key={i} className="campaign-row"><div style={{flex:1}}><div className="campaign-name">{c.n}</div><div className="campaign-detail">{c.d}</div></div><div className="campaign-stats"><div><div className="campaign-stat-val">{c.o}</div><div className="campaign-stat-label">Open</div></div><div><div className="campaign-stat-val">{c.cl}</div><div className="campaign-stat-label">Click</div></div></div><span className={'tag '+c.tc} style={{flexShrink:0}}>{c.t}</span></div>)}
              </div>
            </div>
          </div>

          {/* ZONE III: PRAECO */}
          <div className={'zone'+(zone==='praeco'?' active':'')}>
            <div className="zone-header"><div className="zone-label">Gardener · Zone III</div><div className="zone-title">Praeco</div><div className="zone-sub">Content pipeline · announcements · propria.app</div></div>

            <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'12px 16px',marginBottom:16,display:'flex',gap:10,alignItems:'center'}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',animation:'pulse 2s ease-in-out infinite',flexShrink:0}}></div>
              <div style={{flex:1}}><strong style={{fontSize:13,color:'#633806'}}>Perplexity connected</strong><span style={{fontSize:12,color:'#854F0B',marginLeft:6}}>— 14 new content seeds across 3 categories</span></div>
            </div>

            <div style={{marginBottom:20}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <div><div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--terra)',marginBottom:2}}>Catholic Land Movement</div><div style={{fontSize:12,color:'var(--ink-faint)'}}>7 seeds · Distributism, CLTs, Catholic social teaching</div></div>
                <button style={{padding:'6px 14px',borderRadius:6,border:'none',background:'var(--gold)',color:'white',fontSize:11,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>✦ Synthesize essay</button>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12}}>
                {[{s:'Catholic Herald',d:'Apr 1, 2026',h:'The Distributist Revival: Why Chesterton\'s Economics Are Back',u:false},
                  {s:'America Magazine',d:'Mar 28, 2026',h:'Community Land Trusts as Catholic Social Teaching in Action',u:false},
                  {s:'CCHD',d:'Mar 15, 2026',h:'USCCB Expands CLT Grant Program in 12 Dioceses',u:false},
                  {s:'First Things',d:'Feb 3, 2026',h:'Property, Subsidiarity, and the Housing Crisis',u:true}
                ].map((seed,i)=><div key={i} style={{background:seed.u?'var(--parchment)':'white',border:'0.5px solid var(--border)',borderRadius:10,padding:14}}>
                  <div style={{fontSize:11,color:'var(--ink-faint)',marginBottom:4}}>{seed.s} · {seed.d}</div>
                  <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',lineHeight:1.4,marginBottom:8}}>{seed.h}</div>
                  <span className={seed.u?'tag tag-gray':'tag tag-gold'}>{seed.u?'Used':'Unused'}</span>
                </div>)}
              </div>
            </div>
          </div>

          {/* ZONE IV: MACHINA */}
          <div className={'zone'+(zone==='machina'?' active':'')}>
            <div className="zone-header"><div className="zone-label">Gardener · Zone IV</div><div className="zone-title">Machina</div><div className="zone-sub">Platform configuration · feature flags · system health</div></div>
            <div className="grid-2">
              <div className="card">
                <div className="card-header"><span className="card-title">Feature flags</span></div>
                {[{n:'NRI Compass',s:true},{n:'Resale Engine',s:true},{n:'Magic Import',s:true},{n:'Site Builder (Praeco)',s:true},{n:'HUD-9902 Generator',s:true},{n:'Counselor Network',s:false},{n:'Applicant Self-Service',s:false}].map((f,i)=>
                  <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 16px',borderBottom:'0.5px solid var(--border-light)'}}>
                    <span style={{fontSize:13,color:'var(--ink)'}}>{f.n}</span>
                    <div style={{width:40,height:24,borderRadius:12,background:f.s?'var(--forest)':'var(--parchment-dk)',position:'relative',cursor:'pointer'}}>
                      <div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:2,left:f.s?18:2,transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="card">
                <div className="card-header"><span className="card-title">System health</span></div>
                {[{n:'API response time',v:'142ms',s:'green'},{n:'Database size',v:'2.4 GB',s:'green'},{n:'NRI signals (24h)',v:'1,240',s:'green'},{n:'Error rate',v:'0.02%',s:'green'},{n:'Uptime (30d)',v:'99.97%',s:'green'}].map((h,i)=>
                  <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 16px',borderBottom:'0.5px solid var(--border-light)'}}>
                    <span style={{fontSize:13,color:'var(--ink)'}}>{h.n}</span>
                    <span style={{fontSize:13,fontWeight:500,color:'var(--forest-light)'}}>{h.v}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ZONE V: SILENTIUM */}
          <div className={'zone'+(zone==='silentium'?' active':'')}>
            <div className="zone-header"><div className="zone-label">Gardener · Zone V</div><div className="zone-title">Silentium</div><div className="zone-sub">Demo mode · sandbox · testing</div></div>
            <div className="card">
              <div className="card-header"><span className="card-title">Demo environments</span></div>
              {[{n:'Rondo CLT (production demo)',u:'https://demo.propria.app/rondo',s:'Active'},{n:'Sandbox — empty CLT',u:'https://demo.propria.app/sandbox',s:'Active'},{n:'Grounded Solutions demo',u:'https://demo.propria.app/gsn',s:'Staging'}].map((d,i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'0.5px solid var(--border-light)'}}>
                  <div><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{d.n}</div><div style={{fontSize:11,color:'var(--ink-faint)',fontFamily:'monospace'}}>{d.u}</div></div>
                  <span className={'tag '+(d.s==='Active'?'tag-green':'tag-amber')}>{d.s}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
