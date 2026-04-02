export default function Gardener() {
  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Gardener Console</div>
        <div style={{fontSize:12,color:'rgba(245,240,232,0.45)',marginTop:2}}>Network overview · Grounded Solutions</div>
      </div>
      <div style={{padding:16,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12}}>
        {[{l:'Active CLTs',v:'308',s:'48 states'},{l:'Total homes',v:'44,000+',s:'Shared equity'},{l:'Avg portfolio',v:'47',s:'homes per CLT'},{l:'Platform adoption',v:'12%',s:'37 CLTs on Propria'},{l:'Monthly MRR',v:'$18.2k',s:'+22% QoQ'},{l:'NRI signals/day',v:'1,240',s:'Across all CLTs'}].map((d,i) => (
          <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px'}}>
            <div style={{fontSize:10,color:'var(--ink-faint)',marginBottom:4}}>{d.l}</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:26,fontWeight:400,color:'var(--forest)',lineHeight:1,letterSpacing:'-0.02em'}}>{d.v}</div>
            <div style={{fontSize:10,color:'var(--ink-faint)',marginTop:3}}>{d.s}</div>
          </div>
        ))}
      </div>
      <div style={{padding:'0 16px 8px',fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)'}}>CLT Network</div>
      <div style={{margin:'0 16px 16px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
        {[{n:'Rondo CLT',c:'Saint Paul, MN',h:47,s:'Active'},{n:'Champlain Housing Trust',c:'Burlington, VT',h:620,s:'Active'},{n:'Northeast Housing Initiative',c:'Springfield, IL',h:34,s:'Active'},{n:'Saint Joseph CLT',c:'Tulsa, OK',h:28,s:'Onboarding'},{n:'Dudley Neighbors Inc.',c:'Boston, MA',h:225,s:'Active'}].map((clt,i) => (
          <div key={i} style={{display:'flex',gap:12,padding:'12px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center',cursor:'pointer'}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:'rgba(27,58,45,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:500,color:'var(--forest)',flexShrink:0}}>{clt.n.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{clt.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{clt.c} · {clt.h} homes</div></div>
            <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:clt.s==='Active'?'#E1F5EE':'#FAEEDA',color:clt.s==='Active'?'#085041':'#633806'}}>{clt.s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
