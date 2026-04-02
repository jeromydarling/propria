export default function CounselorCert() {
  const modules = [
    {n:1,t:'CLT Mechanics for Counselors',d:'3 formula types, ground lease walkthroughs, equity planning',p:100},
    {n:2,t:'Conducting the CLT Session',d:'Structure, what to cover, handling confusion',p:100},
    {n:3,t:'Financing, Fair Housing & Ethics',d:'Lender compatibility, ECOA, CLT-familiar lenders',p:40},
    {n:4,t:'Working in Propria',d:'Counselor dashboard, documentation, Read.ai',p:0}
  ]
  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>CLT Counselor Certification</div>
        <div style={{fontSize:12,color:'rgba(245,240,232,0.45)',marginTop:2}}>4 modules + practical assessment · 4.0 CEU hours</div>
      </div>
      <div style={{padding:16}}>
        {modules.map(m => (
          <div key={m.n} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'16px',marginBottom:12}}>
            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <div style={{width:36,height:36,borderRadius:'50%',background:m.p===100?'var(--forest)':m.p>0?'var(--gold-pale)':'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:500,color:m.p===100?'white':m.p>0?'#633806':'var(--ink-faint)',flexShrink:0}}>{m.p===100?'✓':m.n}</div>
              <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:3}}>{m.t}</div><div style={{fontSize:12,color:'var(--ink-light)',lineHeight:1.4}}>{m.d}</div>{m.p > 0 && m.p < 100 && <div style={{height:4,background:'var(--parchment-dk)',borderRadius:2,overflow:'hidden',marginTop:8}}><div style={{width:m.p+'%',height:'100%',background:'var(--gold)',borderRadius:2}}></div></div>}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
