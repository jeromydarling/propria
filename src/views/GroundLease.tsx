import { useState } from 'react'

export default function GroundLease() {
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  function generate() {
    setGenerating(true)
    setTimeout(() => { setGenerating(false); setGenerated(true) }, 1500)
  }

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'32px 24px 28px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:8}}>Ground Lease Generator</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300}}>Generate signing-ready ground lease documents from your templates and homeowner data.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:800,margin:'0 auto',padding:'24px 16px 48px'}}>
        {/* Template selection */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Select template</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12,marginBottom:24}}>
          {[{t:'Standard 99-Year',d:'Most common CLT ground lease',sel:true},{t:'Affordable Housing',d:'HUD-compliant provisions',sel:false},{t:'Custom Template',d:'Upload your own template',sel:false}].map((tmpl,i) => (
            <div key={i} style={{background:tmpl.sel?'var(--forest)':'white',border:tmpl.sel?'2px solid var(--forest)':'1px solid var(--border)',borderRadius:12,padding:16,cursor:'pointer'}}>
              <div style={{fontSize:14,fontWeight:500,color:tmpl.sel?'var(--parchment)':'var(--ink)',marginBottom:4}}>{tmpl.t}</div>
              <div style={{fontSize:12,color:tmpl.sel?'rgba(245,240,232,0.6)':'var(--ink-light)',fontWeight:300}}>{tmpl.d}</div>
            </div>
          ))}
        </div>

        {/* Auto-populated fields */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Document fields (auto-populated)</div>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:24}}>
          {[{l:'Homeowner name',v:'David & Rosa Hernandez'},{l:'Property address',v:'14 Oak Street, Saint Paul, MN 55104'},{l:'Purchase price',v:'$201,800'},{l:'Ground lease fee',v:'$48/month'},{l:'Lease term',v:'99 years from closing date'},{l:'Appreciation share',v:'30% (Fixed-rate formula)'},{l:'CLT organization',v:'Rondo Community Land Trust'}].map((f,i) => (
            <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)'}}>
              <span style={{fontSize:13,color:'var(--ink-light)',fontWeight:300}}>{f.l}</span>
              <span style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{f.v}</span>
            </div>
          ))}
        </div>

        {!generated ? (
          <button onClick={generate} disabled={generating} style={{width:'100%',padding:14,borderRadius:8,background:generating?'var(--ink-faint)':'var(--forest)',color:'var(--parchment)',border:'none',fontSize:15,fontWeight:500,cursor:generating?'wait':'pointer',fontFamily:'var(--sans)'}}>
            {generating ? 'Generating document...' : 'Generate Ground Lease PDF →'}
          </button>
        ) : (
          <div style={{background:'#E1F5EE',border:'1px solid #8DCFAD',borderRadius:12,padding:'20px',textAlign:'center'}}>
            <div style={{fontSize:24,marginBottom:8}}>📄</div>
            <div style={{fontSize:16,fontWeight:500,color:'#085041',marginBottom:4}}>Ground lease document ready</div>
            <div style={{fontSize:13,color:'#085041',fontWeight:300,marginBottom:16}}>Hernandez_GroundLease_14OakSt_2026.pdf · 24 pages</div>
            <div style={{display:'flex',gap:12,justifyContent:'center'}}>
              <button style={{padding:'10px 20px',borderRadius:8,border:'1px solid #8DCFAD',background:'white',color:'#085041',fontSize:13,cursor:'pointer',fontFamily:'var(--sans)'}}>Preview</button>
              <button style={{padding:'10px 20px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Download PDF</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
