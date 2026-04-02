export default function HudReport() {
  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'32px 24px 28px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:8}}>HUD-9902 Report Generator</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300}}>Auto-generated from your live data. Review, validate, export.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:800,margin:'0 auto',padding:'24px 16px 48px'}}>
        {/* Status banner */}
        <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'16px 20px',marginBottom:24,display:'flex',gap:12,alignItems:'center'}}>
          <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',animation:'pulse 2s ease-in-out infinite',flexShrink:0}}></div>
          <div><div style={{fontSize:14,fontWeight:500,color:'#633806'}}>Q2 2026 report is ready for review</div><div style={{fontSize:12,color:'#854F0B',fontWeight:300}}>3 fields need your attention before export</div></div>
        </div>

        {/* Report sections */}
        {[
          {s:'Section A: Agency Information',fields:[{l:'Agency Name',v:'Rondo Community Land Trust',ok:true},{l:'HCS ID',v:'10234567',ok:true},{l:'Reporting Period',v:'Q2 2026 (Apr–Jun)',ok:true}]},
          {s:'Section B: Counseling Activity',fields:[{l:'Total clients counseled',v:'12',ok:true},{l:'Pre-purchase counseling',v:'8',ok:true},{l:'Post-purchase counseling',v:'4',ok:true},{l:'Counselor hours logged',v:'36',ok:false}]},
          {s:'Section C: Education Activity',fields:[{l:'Group education sessions',v:'2',ok:true},{l:'Individual sessions',v:'8',ok:true},{l:'Certificates issued',v:'3',ok:false}]},
          {s:'Section D: Outcomes',fields:[{l:'Homes purchased (CLT)',v:'2',ok:true},{l:'Mortgage defaults prevented',v:'1',ok:true},{l:'Financial action plans created',v:'7',ok:true},{l:'Referrals to other services',v:'4',ok:false}]}
        ].map((section, si) => (
          <div key={si} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,marginBottom:16,overflow:'hidden'}}>
            <div style={{padding:'12px 16px',borderBottom:'0.5px solid var(--border-light)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{section.s}</span>
              {section.fields.every(f=>f.ok) ? <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>Complete</span> : <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#FAEEDA',color:'#633806'}}>Review needed</span>}
            </div>
            {section.fields.map((f,fi) => (
              <div key={fi} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 16px',borderBottom:'0.5px solid var(--border-light)'}}>
                <span style={{fontSize:13,color:f.ok?'var(--ink-light)':'var(--terra)',fontWeight:f.ok?300:500}}>{f.l}{!f.ok && ' ⚠'}</span>
                <span style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{f.v}</span>
              </div>
            ))}
          </div>
        ))}

        <div style={{display:'flex',gap:12}}>
          <button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>Save draft</button>
          <button style={{flex:2,padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Export HUD-9902 PDF →</button>
        </div>
      </div>
    </div>
  )
}
