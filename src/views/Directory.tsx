export default function Directory() {
  const counselors = [
    {n:'Sarah Wilkins',o:'LSS Financial Counseling',l:'English, Spanish',c:true,a:true,i:'SW'},
    {n:'Marcus Chen',o:'Twin Cities Housing Alliance',l:'English, Mandarin',c:true,a:true,i:'MC'},
    {n:'Amira Hassan',o:'Bridgewater Community Services',l:'English, Somali',c:true,a:false,i:'AH'},
    {n:'David Rodriguez',o:'Catholic Charities',l:'English, Spanish',c:true,a:true,i:'DR'},
    {n:'Lisa Thornton',o:'Urban League Housing',l:'English',c:false,a:true,i:'LT'},
    {n:'James Okonkwo',o:'Neighborhood Housing Services',l:'English',c:true,a:true,i:'JO'},
  ]
  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Counselor Directory</div>
        <div style={{fontSize:12,color:'rgba(245,240,232,0.45)',marginTop:2}}>HUD-certified housing counselors</div>
      </div>
      <div style={{padding:'12px 16px',display:'flex',gap:6,overflowX:'auto',flexWrap:'wrap'}}>
        {['All','Available Now','CLT Certified','HUD Approved','Spanish'].map((f,i)=>(
          <span key={i} style={{fontSize:12,padding:'5px 12px',borderRadius:16,border:'1px solid var(--border)',background:i===0?'var(--forest)':'white',color:i===0?'var(--parchment)':'var(--ink-light)',cursor:'pointer',whiteSpace:'nowrap',fontWeight:i===0?500:400}}>{f}</span>
        ))}
      </div>
      <div style={{padding:'0 16px 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12}}>
        {counselors.map((c,i) => (
          <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,cursor:'pointer'}}>
            <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:10}}>
              <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(27,58,45,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:500,color:'var(--forest)',flexShrink:0}}>{c.i}</div>
              <div><div style={{fontSize:15,fontWeight:500,color:'var(--ink)'}}>{c.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{c.o}</div></div>
            </div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
              {c.c && <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>CLT Certified</span>}
              {c.a && <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E6F1FB',color:'#0C447C'}}>Available</span>}
              <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'var(--parchment)',color:'var(--ink-light)'}}>{c.l}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
