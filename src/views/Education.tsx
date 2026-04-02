export default function Education() {
  const modules = [
    {n:1,t:'Your Financial Picture as a CLT Buyer',p:100},{n:2,t:'How a CLT Works',p:100},
    {n:3,t:'Your Ground Lease — Line by Line',p:100},{n:4,t:'Resale Formula Deep Dive',p:65},
    {n:5,t:"Your CLT's Programs",p:0},{n:6,t:'Final Assessment',p:0}
  ]
  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Homebuyer Education</div>
        <div style={{fontSize:12,color:'rgba(245,240,232,0.45)',marginTop:2}}>6 modules · 70% passing threshold</div>
      </div>
      <div style={{padding:16}}>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',marginBottom:16}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><span style={{fontSize:13,color:'var(--ink)'}}>Overall progress</span><span style={{fontSize:13,fontWeight:500,color:'var(--forest)'}}>55%</span></div>
          <div style={{height:8,background:'var(--parchment-dk)',borderRadius:4,overflow:'hidden'}}><div style={{width:'55%',height:'100%',background:'var(--forest-light)',borderRadius:4}}></div></div>
        </div>
        {modules.map(m => (
          <div key={m.n} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',marginBottom:10,cursor:'pointer'}}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:m.p===100?'var(--forest)':m.p>0?'var(--gold-pale)':'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:500,color:m.p===100?'white':m.p>0?'#633806':'var(--ink-faint)',flexShrink:0}}>{m.p===100?'✓':m.n}</div>
              <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{m.t}</div>{m.p > 0 && m.p < 100 && <div style={{height:4,background:'var(--parchment-dk)',borderRadius:2,overflow:'hidden',marginTop:6}}><div style={{width:m.p+'%',height:'100%',background:'var(--gold)',borderRadius:2}}></div></div>}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
