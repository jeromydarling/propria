import { useState } from 'react'

export default function MaintenanceRequest() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'24px'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Submit Maintenance Request</div>
          <div style={{fontSize:12,color:'rgba(245,240,232,0.5)',marginTop:2}}>14 Oak Street · Rondo CLT</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:600,margin:'0 auto',padding:'24px 16px 48px'}}>
        {!submitted ? (
          <>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>What needs attention?</label>
              <select style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',background:'white',appearance:'auto' as never}}>
                <option>Plumbing</option><option>Electrical</option><option>HVAC / Heating</option><option>Roof / Exterior</option><option>Appliance</option><option>Other</option>
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>Describe the issue</label>
              <textarea rows={4} placeholder="What's happening? When did you first notice it?" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:14,fontFamily:'var(--sans)',color:'var(--ink)',resize:'vertical'}} />
            </div>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>How urgent is this?</label>
              <div style={{display:'flex',gap:8}}>
                {['Not urgent','Needs attention','Emergency'].map((u,i) => (
                  <button key={i} style={{flex:1,padding:'10px',borderRadius:8,border:'1px solid '+(i===1?'var(--forest)':'var(--border)'),background:i===1?'var(--forest)':'white',color:i===1?'var(--parchment)':'var(--ink-mid)',fontSize:12,cursor:'pointer',fontFamily:'var(--sans)',fontWeight:i===1?500:400}}>{u}</button>
                ))}
              </div>
            </div>
            <div style={{marginBottom:24,border:'2px dashed var(--border)',borderRadius:12,padding:'24px',textAlign:'center',cursor:'pointer',background:'white'}}>
              <div style={{fontSize:24,marginBottom:8}}>📷</div>
              <div style={{fontSize:13,color:'var(--ink-light)'}}>Add photos (optional)</div>
              <div style={{fontSize:11,color:'var(--ink-faint)',marginTop:4}}>Take a photo or choose from your gallery</div>
            </div>
            <button onClick={() => setSubmitted(true)} style={{width:'100%',padding:14,borderRadius:8,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:15,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Submit request</button>
          </>
        ) : (
          <div style={{textAlign:'center',padding:'48px 24px'}}>
            <div style={{width:64,height:64,borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>✓</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Request submitted</div>
            <div style={{fontSize:14,color:'var(--ink-light)',lineHeight:1.6,marginBottom:24}}>Your CLT stewardship coordinator has been notified. You'll receive updates as your request is processed.</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,textAlign:'left'}}>
              <div style={{fontSize:11,color:'var(--ink-faint)',marginBottom:6}}>Request #MR-2026-048</div>
              <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:4}}>Plumbing — Needs attention</div>
              <div style={{fontSize:12,color:'var(--ink-light)'}}>Submitted just now · Sarah Chen will follow up</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
