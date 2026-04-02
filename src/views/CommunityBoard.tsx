export default function CommunityBoard() {
  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'24px'}}>
        <div style={{maxWidth:700,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Rondo Community</div>
          <div style={{fontSize:12,color:'rgba(245,240,232,0.5)',marginTop:2}}>47 homeowner families · Saint Paul, MN</div>
        </div>
      </div>

      <div style={{maxWidth:700,margin:'0 auto',padding:'20px 16px 48px'}}>
        {/* Announcements */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Announcements</div>
        {[
          {t:'Spring Community Gathering',d:'Join us April 12, 3–6 PM at Rondo Rec Center. Food, music, and neighbor introductions. RSVP below!',by:'Rondo CLT',time:'2 days ago',tag:'Event',color:'#E1F5EE',tc:'#085041'},
          {t:'Board Election — Vote by April 22',d:'Samuel Lee\'s seat is up for election. Two candidates have filed. Voting opens at the Annual Assembly.',by:'Constance Rivera, Board Chair',time:'1 week ago',tag:'Governance',color:'#E6F1FB',tc:'#0C447C'},
          {t:'Ground Lease Payments — April',d:'April payments are due by the 5th. If you have questions about autopay setup, contact Sarah.',by:'Sarah Chen',time:'Mar 28',tag:'Finance',color:'#FAEEDA',tc:'#633806'}
        ].map((a,i) => (
          <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:a.color,color:a.tc}}>{a.tag}</span><span style={{fontSize:11,color:'var(--ink-faint)'}}>{a.time}</span></div>
            <div style={{fontSize:15,fontWeight:500,color:'var(--ink)',marginBottom:6}}>{a.t}</div>
            <div style={{fontSize:13,color:'var(--ink-light)',lineHeight:1.5,fontWeight:300,marginBottom:8}}>{a.d}</div>
            <div style={{fontSize:11,color:'var(--ink-faint)'}}>Posted by {a.by}</div>
          </div>
        ))}

        {/* Welcome new homeowners */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8,marginTop:24}}>Welcome new neighbors</div>
        <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:16,marginBottom:20}}>
          <div style={{fontSize:14,fontWeight:500,color:'#633806',marginBottom:4}}>🏡 Welcome the Hernandez family!</div>
          <div style={{fontSize:13,color:'#854F0B',fontWeight:300}}>David &amp; Rosa Hernandez have joined our community at 14 Oak Street. Say hello when you see them!</div>
        </div>

        {/* Events */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Upcoming events</div>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
          {[{t:'Spring Community Gathering',d:'Apr 12 · 3–6 PM · Rondo Rec Center',rsvp:'29 of 47 RSVP\'d'},{t:'Annual Homeowner Assembly',d:'Apr 22 · 6–8 PM · Rondo CLT Office',rsvp:'14 of 47 RSVP\'d'},{t:'Summer Block Party',d:'Jun 14 · 2–7 PM · TBD',rsvp:'Not yet open'}].map((e,i) => (
            <div key={i} style={{padding:'12px 14px',borderBottom:'0.5px solid var(--border-light)',cursor:'pointer'}}>
              <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:3}}>{e.t}</div>
              <div style={{fontSize:12,color:'var(--ink-light)'}}>{e.d}</div>
              <div style={{fontSize:11,color:'var(--forest-light)',marginTop:4,fontWeight:500}}>{e.rsvp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
