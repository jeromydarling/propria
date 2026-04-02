import { useState } from 'react'

const CLIENTS = [
  {i:'KJ',n:'Keisha Johnson',e:'keisha.j@email.com',p:'(651) 555-0293',c:'Rondo CLT',stage:'Stage 4',last:'Session Apr 1',pill:'Assess flag',pc:'#FAECE7',pt:'#712B13',av:'#E6F1FB',at:'#0C447C',assess:64,assessDetail:'Missed: resale formula, right of first refusal',waitlist:4,sessions:[{d:'Apr 1',t:'Initial CLT counseling',dur:'94 min',fmt:'Video',score:64,status:'Doc pending'},{d:'Apr 4',t:'Follow-up — resale formula',dur:'30 min',fmt:'Video',score:null,status:'Upcoming'}]},
  {i:'DH',n:'David & Rosa Hernandez',e:'dhernandez@email.com',p:'(651) 555-0341',c:'Rondo CLT',stage:'Stage 6',last:'Session Mar 31',pill:'Pending doc',pc:'#FAEEDA',pt:'#633806',av:'#E1F5EE',at:'#085041',assess:91,assessDetail:'All sections passed',waitlist:1,sessions:[{d:'Mar 31',t:'First session',dur:'88 min',fmt:'Video',score:91,status:'Doc pending'}]},
  {i:'BW',n:'Byron & Sheila Washington',e:'bwash@email.com',p:'(651) 555-0187',c:'Rondo CLT',stage:'Stage 2',last:'Session Apr 3',pill:'Upcoming',pc:'#E6F1FB',pt:'#0C447C',av:'#FAECE7',at:'#712B13',assess:null,assessDetail:'',waitlist:null,sessions:[{d:'Apr 3',t:'First session',dur:'90 min',fmt:'Video',score:null,status:'Upcoming'}]},
  {i:'AO',n:'Amara & Felix Osei',e:'aosei@email.com',p:'(651) 555-0422',c:'Rondo CLT',stage:'Stage 5',last:'Session Apr 7',pill:'Upcoming',pc:'#E6F1FB',pt:'#0C447C',av:'#E1F5EE',at:'#085041',assess:null,assessDetail:'',waitlist:2,sessions:[{d:'Apr 7',t:'First session',dur:'90 min',fmt:'In-person',score:null,status:'Upcoming'}]},
  {i:'LM',n:'Leticia Morales',e:'lmorales@email.com',p:'(651) 555-0156',c:'Rondo CLT',stage:'Waitlist #1',last:'Complete',pill:'Complete',pc:'#E1F5EE',pt:'#085041',av:'#F5F0E8',at:'#6B6B58',assess:88,assessDetail:'All sections passed',waitlist:1,sessions:[{d:'Mar 22',t:'First session',dur:'75 min',fmt:'Phone',score:88,status:'Documented'}]},
  {i:'TR',n:'Tyrone Richards',e:'trichards@email.com',p:'(651) 555-0289',c:'Rondo CLT',stage:'Stage 3',last:'Complete',pill:'Complete',pc:'#E1F5EE',pt:'#085041',av:'#F5F0E8',at:'#6B6B58',assess:82,assessDetail:'All sections passed',waitlist:null,sessions:[{d:'Mar 14',t:'First session',dur:'82 min',fmt:'In-person',score:82,status:'Documented'}]},
  {i:'PM',n:'Patricia Moore',e:'pmoore@email.com',p:'(651) 555-0198',c:'Rondo CLT',stage:'Stage 3',last:'Complete',pill:'Complete',pc:'#E1F5EE',pt:'#085041',av:'#F5F0E8',at:'#6B6B58',assess:79,assessDetail:'All sections passed',waitlist:null,sessions:[{d:'Mar 8',t:'First session',dur:'90 min',fmt:'Video',score:79,status:'Documented'}]},
]

const UPCOMING = [
  {day:'3',mo:'Apr',n:'Byron & Sheila Washington',meta:'First session · Video · 90 min',time:'10:00 AM',pills:['Upcoming','Counselor scheduled']},
  {day:'4',mo:'Apr',n:'Keisha Johnson',meta:'Follow-up · Video · 30 min',time:'2:30 PM',pills:['Follow-up','Client requested']},
  {day:'7',mo:'Apr',n:'Amara & Felix Osei',meta:'First session · In-person · 90 min',time:'11:00 AM',pills:['Upcoming','Counselor scheduled']},
]

const PAST = [
  {day:'1',mo:'Apr',n:'Keisha Johnson',meta:'First session · Video · 94 min',time:'1:00 PM',pills:['Doc pending','Read.ai ready']},
  {day:'31',mo:'Mar',n:'David & Rosa Hernandez',meta:'First session · Video · 88 min',time:'11:00 AM',pills:['Doc pending','Read.ai ready']},
  {day:'22',mo:'Mar',n:'Leticia Morales',meta:'First session · Phone · 75 min',time:'3:00 PM',pills:['Documented']},
  {day:'14',mo:'Mar',n:'Tyrone Richards',meta:'First session · In-person · 82 min',time:'10:00 AM',pills:['Documented']},
]

const MESSAGES = [
  {from:'Keisha Johnson',preview:'Thanks Sarah, I\'ll review the resale formula material before our follow-up.',time:'2h ago',unread:true},
  {from:'David Hernandez',preview:'Rosa and I have a question about the ground lease fee — is it fixed for the full term?',time:'5h ago',unread:true},
  {from:'Byron Washington',preview:'Looking forward to our session Thursday. Sheila will join too.',time:'1d ago',unread:false},
  {from:'Leticia Morales',preview:'Thank you for everything. We feel so much more prepared now.',time:'3d ago',unread:false},
]

export default function CounselorDash() {
  const [screen, setScreen] = useState('dashboard')
  const [showNewSession, setShowNewSession] = useState(false)
  const [sessionType, setSessionType] = useState('first')
  const [sessionFormat, setSessionFormat] = useState('video')
  const [selectedClient, setSelectedClient] = useState<number|null>(null)
  const [msgInput, setMsgInput] = useState('')
  const [selectedMsg, setSelectedMsg] = useState<number|null>(null)
  const [settingsToggles, setSettingsToggles] = useState<Record<string,boolean>>({readai:true,calendar:true,email:true,sms:false})

  const go = (s: string) => { setScreen(s); setSelectedClient(null); setSelectedMsg(null) }
  const client = selectedClient !== null ? CLIENTS[selectedClient] : null

  const topTitle = screen === 'client-detail' ? (client?.n || 'Client') : screen.charAt(0).toUpperCase() + screen.slice(1)

  return (
    <div style={{height:'100%',display:'flex',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'hidden'}}>

      {/* SIDEBAR */}
      <div style={{width:240,minWidth:240,background:'var(--forest)',display:'flex',flexDirection:'column',overflow:'auto',flexShrink:0}}>
        <div style={{padding:'16px 18px',borderBottom:'1px solid rgba(245,240,232,0.1)'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:700,color:'var(--parchment)'}}>Propria<span style={{color:'var(--terra-light)'}}>.</span></div>
          <div style={{fontSize:11,color:'rgba(245,240,232,0.4)',marginTop:1}}>Counselor Dashboard</div>
        </div>
        <div style={{padding:'12px 14px',display:'flex',gap:10,alignItems:'center',borderBottom:'1px solid rgba(245,240,232,0.08)'}}>
          <div style={{width:34,height:34,borderRadius:'50%',background:'rgba(245,240,232,0.14)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'var(--parchment)'}}>SW</div>
          <div><div style={{fontSize:13,color:'var(--parchment)'}}>Sarah Wilkins</div><div style={{fontSize:10,color:'rgba(245,240,232,0.4)'}}>HUD · CLT Certified</div></div>
          <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',marginLeft:'auto'}}></div>
        </div>
        {[{k:'dashboard',l:'Dashboard',b:'3'},{k:'clients',l:'Clients',b:'7'},{k:'schedule',l:'Schedule',b:'2'},{k:'messages',l:'Messages',b:'2'}].map(nav=>
          <div key={nav.k} onClick={()=>go(nav.k)} style={{padding:'10px 18px',cursor:'pointer',fontSize:13,display:'flex',justifyContent:'space-between',alignItems:'center',borderRadius:7,margin:'1px 8px',fontWeight:(screen===nav.k||(nav.k==='clients'&&screen==='client-detail'))?500:400,color:(screen===nav.k||(nav.k==='clients'&&screen==='client-detail'))?'var(--parchment)':'rgba(245,240,232,0.55)',background:(screen===nav.k||(nav.k==='clients'&&screen==='client-detail'))?'rgba(245,240,232,0.12)':'transparent',transition:'all 0.15s'}}>
            {nav.l}
            {nav.b && <span style={{fontSize:9,fontWeight:500,padding:'1px 6px',borderRadius:8,background:nav.k==='messages'?'var(--gold)':'var(--terra)',color:'white'}}>{nav.b}</span>}
          </div>
        )}
        <div style={{flex:1}}></div>
        <div onClick={()=>go('certification')} style={{padding:'10px 18px',fontSize:12,color:screen==='certification'?'var(--parchment)':'rgba(245,240,232,0.35)',cursor:'pointer',borderTop:'1px solid rgba(245,240,232,0.08)',fontWeight:screen==='certification'?500:400}}>Certification</div>
        <div onClick={()=>go('settings')} style={{padding:'10px 18px',fontSize:12,color:screen==='settings'?'var(--parchment)':'rgba(245,240,232,0.35)',cursor:'pointer',fontWeight:screen==='settings'?500:400}}>Settings</div>
      </div>

      {/* MAIN */}
      <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden',minWidth:0}}>
        <div style={{height:48,background:'white',borderBottom:'0.5px solid var(--border)',display:'flex',alignItems:'center',padding:'0 20px',gap:12,flexShrink:0}}>
          {screen==='client-detail' && <button onClick={()=>go('clients')} style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:4,fontSize:12,color:'var(--ink-light)',fontFamily:'var(--sans)'}}><svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2L4 7l5 5"/></svg>All clients</button>}
          <div style={{fontFamily:'var(--serif-display)',fontSize:15,fontWeight:500,color:'var(--forest)',flex:1}}>{topTitle}</div>
          <button onClick={()=>setShowNewSession(true)} style={{padding:'6px 14px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:12,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)',display:'flex',alignItems:'center',gap:6}}>+ New session</button>
        </div>

        <div style={{flex:1,overflow:'auto',padding:0}}>

          {/* DASHBOARD */}
          {screen==='dashboard' && <div>
            <div style={{background:'var(--forest)',padding:'16px 20px'}}>
              <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--parchment)'}}>Good morning, <em style={{color:'var(--terra-light)'}}>Sarah.</em></div>
              <div style={{display:'flex',gap:12,marginTop:14}}>
                {[{v:'7',l:'Active clients'},{v:'2',l:'Pending docs',c:'var(--terra)'},{v:'1',l:'Flag to review',c:'var(--gold)'}].map((s,i)=>
                  <div key={i} style={{background:'rgba(245,240,232,0.1)',borderRadius:10,padding:'10px 14px',flex:1}}>
                    <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:400,color:s.c||'var(--parchment)',lineHeight:1}}>{s.v}</div>
                    <div style={{fontSize:10,color:'rgba(245,240,232,0.5)',marginTop:3}}>{s.l}</div>
                  </div>
                )}
              </div>
            </div>
            <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>
            <div style={{margin:'14px 16px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'12px 14px',display:'flex',gap:10,alignItems:'center',cursor:'pointer'}} onClick={()=>go('certification')}>
              <svg viewBox="0 0 16 16" width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="1.2"><circle cx="8" cy="7" r="4"/><path d="M5 11l-2 4h10l-2-4"/><path d="M5.5 7l2 2 3-3"/></svg>
              <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--forest)'}}>CLT Counselor Certified</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Renews Jan 2027 · 4.0 CEU hours · 5 sessions this year</div></div>
              <span style={{fontSize:12,color:'var(--forest)',fontWeight:500}}>View →</span>
            </div>
            <div style={{margin:'0 16px 14px',background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'10px 14px',display:'flex',gap:8,alignItems:'flex-start'}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',marginTop:4,flexShrink:0}}></div>
              <div style={{fontSize:13,color:'#633806',lineHeight:1.5}}><strong>Assessment flag:</strong> Keisha Johnson scored 64% — below 70% threshold. Resale formula and right-of-first-refusal questions missed. <span style={{color:'var(--forest)',cursor:'pointer',fontWeight:500}} onClick={()=>{setSelectedClient(0);setScreen('client-detail')}}>View client →</span></div>
            </div>
            <div style={{padding:'0 16px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Pending documentation</div>
            <div style={{margin:'0 16px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {[{n:'Keisha Johnson',d:'Session Tue Apr 1 · Rondo CLT · 47 hrs overdue',ci:0},{n:'David & Rosa Hernandez',d:'Session Mon Mar 31 · Rondo CLT · 23 hrs',ci:1}].map((p,i)=>
                <div key={i} onClick={()=>{setSelectedClient(p.ci);setScreen('client-detail')}} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'var(--terra)',flexShrink:0}}></div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{p.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{p.d}</div></div>
                  <span style={{fontSize:12,color:'var(--forest)',fontWeight:500}}>Document →</span>
                </div>
              )}
            </div>
            <div style={{padding:'0 16px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Upcoming sessions</div>
            <div style={{margin:'0 16px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {UPCOMING.map((s,i)=>
                <div key={i} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                  <div style={{width:40,minWidth:40,textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:400,color:'var(--forest)',lineHeight:1}}>{s.day}</div><div style={{fontSize:9,color:'var(--ink-faint)',textTransform:'uppercase'}}>{s.mo}</div></div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{s.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{s.meta}</div></div>
                  <div style={{fontSize:11,color:'var(--ink-faint)',flexShrink:0}}>{s.time}</div>
                </div>
              )}
            </div>
            <div style={{padding:'0 16px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Recent assessments</div>
            <div style={{margin:'0 16px 16px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {[{n:'Keisha Johnson',s:'64%',d:'Missed: resale formula, right of first refusal · Apr 1',sc:'var(--terra)',ci:0},{n:'David & Rosa Hernandez',s:'91%',d:'All sections passed · Mar 31',sc:'var(--forest-light)',ci:1},{n:'Leticia Morales',s:'88%',d:'All sections passed · Mar 22',sc:'var(--forest-light)',ci:4}].map((r,i)=>
                <div key={i} onClick={()=>{setSelectedClient(r.ci);setScreen('client-detail')}} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
                  <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:400,color:r.sc,width:40,textAlign:'center'}}>{r.s}</div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{r.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{r.d}</div></div>
                </div>
              )}
            </div>
          </div>}

          {/* CLIENTS LIST */}
          {screen==='clients' && <div>
            <div style={{background:'white',borderBottom:'0.5px solid var(--border)',padding:'12px 16px'}}>
              <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Active clients</div>
              <div style={{display:'flex',gap:6}}>{['All 7','Flagged 1','Pending docs 2'].map((f,i)=><span key={i} style={{fontSize:11,padding:'4px 10px',borderRadius:12,background:i===0?'var(--ink)':'white',color:i===0?'var(--parchment)':'var(--ink-light)',border:i===0?'none':'0.5px solid var(--border)',fontWeight:i===0?500:400,cursor:'pointer'}}>{f}</span>)}</div>
            </div>
            <div style={{padding:14}}><div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {CLIENTS.map((c,i)=>
                <div key={i} onClick={()=>{setSelectedClient(i);setScreen('client-detail')}} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer',transition:'background 0.12s'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:c.av,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:c.at,flexShrink:0}}>{c.i}</div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{c.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{c.c} · {c.stage} · {c.last}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:c.pc,color:c.pt}}>{c.pill}</span>
                  <svg viewBox="0 0 10 16" width="8" height="14" fill="none" stroke="var(--ink-faint)" strokeWidth="1.5"><path d="M2 2l6 6-6 6"/></svg>
                </div>
              )}
            </div></div>
          </div>}

          {/* CLIENT DETAIL */}
          {screen==='client-detail' && client && <div>
            <div style={{background:'var(--forest)',padding:'16px 20px',display:'flex',gap:14,alignItems:'center'}}>
              <div style={{width:48,height:48,borderRadius:'50%',background:client.av,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:500,color:client.at}}>{client.i}</div>
              <div><div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--parchment)'}}>{client.n}</div><div style={{fontSize:11,color:'rgba(245,240,232,0.5)'}}>{client.e} · {client.p}</div>
                <div style={{display:'flex',gap:4,marginTop:6}}><span style={{fontSize:9,fontWeight:500,padding:'2px 7px',borderRadius:8,background:client.pc,color:client.pt}}>{client.pill}</span><span style={{fontSize:9,fontWeight:500,padding:'2px 7px',borderRadius:8,background:'#E6F1FB',color:'#0C447C'}}>{client.c} · {client.stage}</span></div>
              </div>
            </div>
            {client.assess !== null && <div style={{display:'flex',gap:12,padding:'12px 16px',background:'white',borderBottom:'0.5px solid var(--border)'}}>
              <div style={{textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:22,color:client.assess<70?'var(--terra)':'var(--forest-light)'}}>{client.assess}%</div><div style={{fontSize:9,color:'var(--ink-faint)'}}>Assessment</div></div>
              <div style={{textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:22,color:'var(--ink)'}}>{client.sessions[0]?.d}</div><div style={{fontSize:9,color:'var(--ink-faint)'}}>Last session</div></div>
              {client.waitlist && <div style={{textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:22,color:'var(--ink)'}}>#{client.waitlist}</div><div style={{fontSize:9,color:'var(--ink-faint)'}}>Waitlist</div></div>}
            </div>}

            {client.assess !== null && client.assess < 70 && <div style={{margin:'14px 16px 0',background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'10px 14px'}}>
              <div style={{fontSize:13,color:'#633806',lineHeight:1.5}}><strong>Assessment: {client.assess}%</strong> — {client.assessDetail}</div>
              <div style={{height:6,background:'#E8D9A8',borderRadius:3,overflow:'hidden',marginTop:8}}><div style={{width:client.assess+'%',height:'100%',background:'var(--terra)',borderRadius:3}}></div></div>
            </div>}

            <div style={{padding:'14px 16px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Session history</div>
            <div style={{margin:'0 16px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {client.sessions.map((s,i)=>
                <div key={i} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                  <div style={{width:36,minWidth:36,textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:16,color:'var(--ink)',lineHeight:1}}>{s.d.split(' ')[1]||s.d}</div><div style={{fontSize:9,color:'var(--ink-faint)'}}>{s.d.split(' ')[0]}</div></div>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{s.t}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{s.dur} · {s.fmt}{s.score!==null?' · Score: '+s.score+'%':''}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:s.status==='Documented'?'#E1F5EE':s.status==='Upcoming'?'#E6F1FB':'#FAEEDA',color:s.status==='Documented'?'#085041':s.status==='Upcoming'?'#0C447C':'#633806'}}>{s.status}</span>
                </div>
              )}
            </div>

            <div style={{padding:'0 16px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:16}}>
              <button onClick={()=>setShowNewSession(true)} style={{padding:12,borderRadius:10,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Schedule session</button>
              <button onClick={()=>{setSelectedMsg(MESSAGES.findIndex(m=>m.from===client.n));go('messages')}} style={{padding:12,borderRadius:10,background:'var(--parchment)',color:'var(--ink)',border:'none',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Message</button>
            </div>

            <div style={{padding:'0 16px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>CLT context</div>
            <div style={{margin:'0 16px 16px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {[['CLT',client.c],['Pipeline stage',client.stage],['Education','60% complete (if applicable)'],['Counselor','Sarah Wilkins (you)'],['Assigned',client.sessions[0]?.d||'—']].map(([l,v],i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'9px 14px',borderBottom:'0.5px solid var(--border-light)',fontSize:13}}><span style={{color:'var(--ink-light)'}}>{l}</span><span style={{fontWeight:500,color:'var(--ink)'}}>{v}</span></div>
              )}
            </div>
          </div>}

          {/* SCHEDULE */}
          {screen==='schedule' && <div>
            <div style={{display:'flex',background:'white',borderBottom:'0.5px solid var(--border)',padding:'8px 14px',gap:4,overflowX:'auto'}}>
              {[{d:'MON',n:'31'},{d:'TUE',n:'1',today:true},{d:'WED',n:'2'},{d:'THU',n:'3',has:true},{d:'FRI',n:'4',has:true},{d:'SAT',n:'5'},{d:'SUN',n:'6'},{d:'MON',n:'7',has:true}].map((day,i)=>
                <div key={i} style={{width:42,minWidth:42,textAlign:'center',padding:'6px 0',borderRadius:8,background:day.today?'var(--forest)':'transparent',cursor:'pointer'}}>
                  <div style={{fontSize:9,fontWeight:500,color:day.today?'rgba(245,240,232,0.6)':'var(--ink-faint)',textTransform:'uppercase'}}>{day.d}</div>
                  <div style={{fontSize:16,fontWeight:500,color:day.today?'var(--parchment)':'var(--ink)',position:'relative'}}>{day.n}{day.has&&<div style={{width:4,height:4,borderRadius:'50%',background:day.today?'var(--gold)':'var(--forest)',position:'absolute',bottom:-4,left:'50%',transform:'translateX(-50%)'}}></div>}</div>
                </div>
              )}
            </div>
            <div style={{padding:'12px 14px'}}><button onClick={()=>setShowNewSession(true)} style={{width:'100%',padding:11,borderRadius:10,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>+ Schedule a session</button></div>
            <div style={{padding:'0 14px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Upcoming</div>
            <div style={{margin:'0 14px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {UPCOMING.map((s,i)=><div key={i} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'flex-start'}}><div style={{width:40,minWidth:40,textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:400,color:'var(--forest)',lineHeight:1}}>{s.day}</div><div style={{fontSize:9,color:'var(--ink-faint)',textTransform:'uppercase'}}>{s.mo}</div></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{s.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{s.meta}</div><div style={{display:'flex',gap:4,marginTop:5,flexWrap:'wrap'}}>{s.pills.map((p,j)=><span key={j} style={{fontSize:9,fontWeight:500,padding:'2px 7px',borderRadius:8,background:p==='Follow-up'?'#FAEEDA':'#E6F1FB',color:p==='Follow-up'?'#633806':'#0C447C'}}>{p}</span>)}</div></div><div style={{fontSize:11,color:'var(--ink-faint)',flexShrink:0}}>{s.time}</div></div>)}
            </div>
            <div style={{padding:'0 14px 8px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Past sessions</div>
            <div style={{margin:'0 14px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {PAST.map((s,i)=><div key={i} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'flex-start'}}><div style={{width:40,minWidth:40,textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:400,color:'var(--ink-light)',lineHeight:1}}>{s.day}</div><div style={{fontSize:9,color:'var(--ink-faint)',textTransform:'uppercase'}}>{s.mo}</div></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{s.n}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{s.meta}</div><div style={{display:'flex',gap:4,marginTop:5,flexWrap:'wrap'}}>{s.pills.map((p,j)=><span key={j} style={{fontSize:9,fontWeight:500,padding:'2px 7px',borderRadius:8,background:p==='Doc pending'?'#FAEEDA':p==='Read.ai ready'?'#EEF3FF':p==='Documented'?'#E1F5EE':'#F5F0E8',color:p==='Doc pending'?'#633806':p==='Read.ai ready'?'#2D4BB4':p==='Documented'?'#085041':'#6B6B58'}}>{p}</span>)}</div></div><div style={{fontSize:11,color:'var(--ink-faint)',flexShrink:0}}>{s.time}</div></div>)}
            </div>
          </div>}

          {/* MESSAGES */}
          {screen==='messages' && <div style={{display:'flex',height:'100%'}}>
            {/* Message list */}
            <div style={{width:selectedMsg!==null?280:undefined,flex:selectedMsg!==null?undefined:1,borderRight:selectedMsg!==null?'0.5px solid var(--border)':'none',overflow:'auto'}}>
              <div style={{padding:'12px 14px',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Conversations</div>
              {MESSAGES.map((m,i)=>
                <div key={i} onClick={()=>setSelectedMsg(i)} style={{display:'flex',gap:10,padding:'12px 14px',borderBottom:'0.5px solid var(--border-light)',cursor:'pointer',background:selectedMsg===i?'var(--parchment)':'white',transition:'background 0.12s'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'#E6F1FB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'#0C447C',flexShrink:0}}>{m.from.split(' ').map(w=>w[0]).join('')}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:13,fontWeight:m.unread?600:500,color:'var(--ink)'}}>{m.from}</span><span style={{fontSize:10,color:'var(--ink-faint)'}}>{m.time}</span></div>
                    <div style={{fontSize:12,color:'var(--ink-light)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',marginTop:2}}>{m.preview}</div>
                  </div>
                  {m.unread && <div style={{width:8,height:8,borderRadius:'50%',background:'var(--forest)',flexShrink:0,marginTop:6}}></div>}
                </div>
              )}
            </div>
            {/* Message detail */}
            {selectedMsg!==null && <div style={{flex:1,display:'flex',flexDirection:'column',minWidth:0}}>
              <div style={{padding:'14px 16px',borderBottom:'0.5px solid var(--border)',display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:'#E6F1FB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:500,color:'#0C447C'}}>{MESSAGES[selectedMsg].from.split(' ').map(w=>w[0]).join('')}</div>
                <div><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{MESSAGES[selectedMsg].from}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{MESSAGES[selectedMsg].time}</div></div>
              </div>
              <div style={{flex:1,padding:16,overflow:'auto'}}>
                <div style={{maxWidth:400}}>
                  <div style={{background:'var(--parchment)',borderRadius:'12px 12px 12px 4px',padding:'10px 14px',fontSize:14,color:'var(--ink)',lineHeight:1.5,marginBottom:12}}>{MESSAGES[selectedMsg].preview}</div>
                </div>
                <div style={{maxWidth:400,marginLeft:'auto'}}>
                  <div style={{background:'var(--forest)',borderRadius:'12px 12px 4px 12px',padding:'10px 14px',fontSize:14,color:'var(--parchment)',lineHeight:1.5}}>Sounds good! See you then. Feel free to reach out if any questions come up before the session.</div>
                </div>
              </div>
              <div style={{padding:'10px 14px',borderTop:'0.5px solid var(--border)',display:'flex',gap:8}}>
                <input value={msgInput} onChange={e=>setMsgInput(e.target.value)} placeholder="Type a message…" style={{flex:1,padding:'10px 14px',borderRadius:20,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',outline:'none'}} />
                <button style={{width:38,height:38,borderRadius:'50%',background:'var(--forest)',border:'none',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0}}><svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="white" strokeWidth="1.5"><path d="M14 8H2M8 2l6 6-6 6"/></svg></button>
              </div>
            </div>}
          </div>}

          {/* CERTIFICATION */}
          {screen==='certification' && <div style={{padding:16}}>
            <div style={{background:'white',border:'2px solid var(--gold)',borderRadius:16,padding:'32px 24px',textAlign:'center',marginBottom:20,position:'relative'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:4,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)',borderRadius:'14px 14px 0 0'}}></div>
              <svg viewBox="0 0 16 16" width="40" height="40" fill="none" stroke="var(--gold)" strokeWidth="1"><circle cx="8" cy="7" r="4"/><path d="M5 11l-2 4h10l-2-4"/><path d="M6 7l1.5 1.5L10 6"/></svg>
              <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--forest)',marginTop:12}}>CLT Counselor Certified</div>
              <div style={{fontSize:12,color:'var(--ink-faint)',marginTop:4}}>Issued to</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--ink)',fontStyle:'italic',margin:'4px 0 16px'}}>Sarah Wilkins</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
                {[{v:'4.0',l:'CEU Hours'},{v:'Jan 2027',l:'Renewal'},{v:'142',l:'Sessions'}].map((s,i)=>
                  <div key={i} style={{background:'var(--parchment)',borderRadius:8,padding:'10px 8px'}}><div style={{fontFamily:'var(--serif-display)',fontSize:18,color:'var(--forest)'}}>{s.v}</div><div style={{fontSize:9,color:'var(--ink-faint)',marginTop:2}}>{s.l}</div></div>
                )}
              </div>
            </div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
              {[['Certification issued','March 15, 2025'],['Modules completed','4 of 4'],['Practical assessment','92% (85% required)'],['Issuing organization','Propria CLT Network'],['CEU provider','LSS Financial Counseling']].map(([l,v],i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',fontSize:13}}><span style={{color:'var(--ink-light)'}}>{l}</span><span style={{fontWeight:500,color:'var(--ink)'}}>{v}</span></div>
              )}
            </div>
            <div style={{display:'flex',gap:10,marginTop:16}}>
              <button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:13,cursor:'pointer',fontFamily:'var(--sans)'}}>Download PDF</button>
              <button style={{flex:1,padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Share certificate</button>
            </div>
          </div>}

          {/* SETTINGS */}
          {screen==='settings' && <div style={{padding:16}}>
            <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',marginBottom:2}}>Settings</div>
            <div style={{fontSize:12,color:'var(--ink-faint)',marginBottom:16}}>Sarah Wilkins · LSS Financial Counseling</div>

            <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:6}}>Profile</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {[['Name','Sarah Wilkins'],['Email','swilkins@lssfinancial.org'],['Phone','(651) 555-0177'],['Organization','LSS Financial Counseling'],['HUD ID','HCS-2019-04821']].map(([l,v],i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',fontSize:13,cursor:'pointer'}}><span style={{color:'var(--ink-light)'}}>{l}</span><span style={{fontWeight:500,color:'var(--ink)'}}>{v}</span></div>
              )}
            </div>

            <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:6}}>Integrations</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {[{n:'Google Calendar',s:'Connected',on:true},{n:'Google Meet',s:'Auto-generate links',on:true},{n:'Read.ai',s:'Session recording + summary',on:true}].map((int,i)=>
                <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)'}}>
                  <div><div style={{fontSize:13,color:'var(--ink)'}}>{int.n}</div><div style={{fontSize:11,color:int.on?'var(--forest-light)':'var(--ink-faint)'}}>{int.s}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:int.on?'#E1F5EE':'var(--parchment)',color:int.on?'#085041':'var(--ink-light)'}}>{int.on?'Active':'Setup'}</span>
                </div>
              )}
            </div>

            <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:6}}>Notifications</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:16}}>
              {[{k:'readai',l:'Read.ai summaries'},{k:'calendar',l:'Calendar reminders'},{k:'email',l:'Email notifications'},{k:'sms',l:'SMS alerts'}].map(t=>
                <div key={t.k} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)'}}>
                  <span style={{fontSize:13,color:'var(--ink)'}}>{t.l}</span>
                  <div onClick={()=>setSettingsToggles(p=>({...p,[t.k]:!p[t.k]}))} style={{width:40,height:24,borderRadius:12,background:settingsToggles[t.k]?'var(--forest)':'var(--parchment-dk)',position:'relative',cursor:'pointer',transition:'background 0.2s'}}>
                    <div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:2,left:settingsToggles[t.k]?18:2,transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}></div>
                  </div>
                </div>
              )}
            </div>

            <button style={{width:'100%',padding:12,borderRadius:8,background:'var(--terra)',color:'var(--parchment)',border:'none',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Sign out</button>
          </div>}

        </div>
      </div>

      {/* NEW SESSION MODAL */}
      {showNewSession && <div style={{position:'fixed',inset:0,background:'rgba(26,26,20,0.5)',zIndex:400,display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(2px)'}} onClick={(e)=>{if((e.target as HTMLElement)===e.currentTarget)setShowNewSession(false)}}>
        <div style={{background:'white',borderRadius:16,width:'100%',maxWidth:480,maxHeight:'85vh',overflow:'auto',padding:'20px 18px',animation:'slideUp 0.28s cubic-bezier(0.22,1,0.36,1)'}} onClick={e=>e.stopPropagation()}>
          <div style={{width:36,height:4,borderRadius:2,background:'var(--parchment-dk)',margin:'0 auto 16px'}}></div>
          <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--forest)',marginBottom:2}}>New session</div>
          <div style={{fontSize:12,color:'var(--ink-faint)',marginBottom:16}}>Client will receive a calendar invite</div>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Client</div>
          <select style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',marginBottom:4}}>
            <option>Select client…</option>
            {CLIENTS.map(c=><option key={c.i}>{c.n} — {c.c}</option>)}
          </select>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Session type</div>
          <div style={{display:'flex',gap:6,marginBottom:8}}>
            {[['first','First session'],['followup','Follow-up'],['checkin','Check-in']].map(([k,l])=>
              <button key={k} onClick={()=>setSessionType(k)} style={{flex:1,padding:'8px',borderRadius:8,border:sessionType===k?'2px solid var(--forest)':'1px solid var(--border)',background:sessionType===k?'var(--forest)':'white',color:sessionType===k?'var(--parchment)':'var(--ink-mid)',fontSize:12,fontWeight:sessionType===k?500:400,cursor:'pointer',fontFamily:'var(--sans)'}}>{l}</button>
            )}
          </div>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Format</div>
          <div style={{display:'flex',gap:6,marginBottom:8}}>
            {[['video','Video'],['phone','Phone'],['inperson','In-person']].map(([k,l])=>
              <button key={k} onClick={()=>setSessionFormat(k)} style={{flex:1,padding:'8px',borderRadius:8,border:sessionFormat===k?'2px solid var(--forest)':'1px solid var(--border)',background:sessionFormat===k?'var(--forest)':'white',color:sessionFormat===k?'var(--parchment)':'var(--ink-mid)',fontSize:12,fontWeight:sessionFormat===k?500:400,cursor:'pointer',fontFamily:'var(--sans)'}}>{l}</button>
            )}
          </div>

          {sessionFormat==='video' && <div style={{background:'#E8F5E9',border:'1px solid #A5D6A7',borderRadius:8,padding:'10px 14px',marginBottom:8,display:'flex',gap:8,alignItems:'center'}}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#2E7D32" strokeWidth="1.3"><rect x="2" y="4" width="8" height="8" rx="1"/><path d="M10 7l4-2v6l-4-2"/></svg>
            <div style={{fontSize:12,color:'#2E7D32'}}><strong>Google Meet</strong> link will be auto-generated</div>
          </div>}

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Date &amp; time</div>
          <input type="datetime-local" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',marginBottom:4}}/>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Duration</div>
          <div style={{display:'flex',gap:6,marginBottom:8}}>
            {['30 min','60 min','90 min'].map((d,i)=>
              <button key={d} style={{flex:1,padding:'8px',borderRadius:8,border:i===2?'2px solid var(--forest)':'1px solid var(--border)',background:i===2?'var(--forest)':'white',color:i===2?'var(--parchment)':'var(--ink-mid)',fontSize:12,fontWeight:i===2?500:400,cursor:'pointer',fontFamily:'var(--sans)'}}>{d}</button>
            )}
          </div>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Read.ai</div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',marginBottom:8}}>
            <div><div style={{fontSize:13,color:'var(--ink)'}}>Enable Read.ai for this session</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>Auto-generates summary + action items</div></div>
            <div style={{width:40,height:24,borderRadius:12,background:'var(--forest)',position:'relative',cursor:'pointer'}}><div style={{width:20,height:20,borderRadius:'50%',background:'white',position:'absolute',top:2,left:18,boxShadow:'0 1px 3px rgba(0,0,0,0.15)'}}></div></div>
          </div>

          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:5,marginTop:12}}>Prep notes</div>
          <textarea rows={3} placeholder="Anything to prepare for this session…" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',resize:'vertical',marginBottom:8}}/>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
            <button onClick={()=>setShowNewSession(false)} style={{padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>Cancel</button>
            <button onClick={()=>setShowNewSession(false)} style={{padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Schedule session</button>
          </div>
        </div>
      </div>}
    </div>
  )
}
