export default function CounselorDash() {
  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px',display:'flex',alignItems:'center',gap:14}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(245,240,232,0.14)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,fontWeight:500,color:'var(--parchment)'}}>SW</div>
        <div><div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Sarah Wilkins</div><div style={{fontSize:12,color:'rgba(245,240,232,0.45)'}}>HUD-Certified CLT Counselor · LSS Financial</div></div>
      </div>
      <div style={{padding:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        {[{l:'Active clients',v:'5',s:'Across 3 CLTs'},{l:'Sessions this week',v:'3',s:'2 upcoming'},{l:'Completion rate',v:'94%',s:'Last 12 months'},{l:'CEU hours',v:'4.0',s:'Certified through 2027'}].map((d,i)=>(
          <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px'}}>
            <div style={{fontSize:10,color:'var(--ink-faint)',marginBottom:4}}>{d.l}</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:24,fontWeight:400,color:'var(--forest)',lineHeight:1}}>{d.v}</div>
            <div style={{fontSize:10,color:'var(--ink-faint)',marginTop:3}}>{d.s}</div>
          </div>
        ))}
      </div>
      <div style={{padding:'0 16px 8px',fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)'}}>Upcoming sessions</div>
      <div style={{margin:'0 16px 16px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
        {[{n:'Keisha Johnson',c:'Rondo CLT',t:'First CLT session',d:'Apr 3 · 2:00 PM',f:'Video'},{n:'David Hernandez',c:'Rondo CLT',t:'Pre-purchase review',d:'Apr 5 · 10:00 AM',f:'In-person'},{n:'Tanya Webb',c:'Rondo CLT',t:'Follow-up',d:'Apr 8 · 3:30 PM',f:'Phone'}].map((s,i)=>(
          <div key={i} style={{display:'flex',gap:12,padding:'12px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:'#E6F1FB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'#0C447C',flexShrink:0}}>{s.n.split(' ').map(w=>w[0]).join('')}</div>
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{s.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{s.c} · {s.t}</div><div style={{fontSize:11,color:'var(--ink-faint)',marginTop:2}}>{s.d} · {s.f}</div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
