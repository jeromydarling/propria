import { useState } from 'react'

type Step = 'upload' | 'parsing' | 'preview' | 'done'

export default function MagicImport() {
  const [step, setStep] = useState<Step>('upload')
  const [fileName, setFileName] = useState('')

  function handleFile() {
    setFileName('rondo_homeowners_2024.xlsx')
    setStep('parsing')
    setTimeout(() => setStep('preview'), 2000)
  }

  const mockData = {
    homeowners: [{n:'Maria Torres',a:'14 Oak Street',s:'Active',y:'2020'},{n:'James Walker',a:'88 Iglehart Ave',s:'Active',y:'2019'},{n:'Patricia Moore',a:'56 Thomas Ave',s:'Active',y:'2021'},{n:'Roberto Diaz',a:'221 Minnehaha Ave',s:'Active',y:'2018'}],
    applicants: [{n:'Keisha Johnson',s:'Stage 4'},{n:'David Hernandez',s:'Stage 2'},{n:'Amara Osei',s:'Stage 5'}],
    properties: 47
  }

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'32px 24px 28px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:8}}>Magic Import</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300}}>Upload your spreadsheet. We'll figure it out.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:800,margin:'0 auto',padding:'32px 16px 48px'}}>
        {step === 'upload' && (
          <div onClick={handleFile} style={{border:'2px dashed var(--border)',borderRadius:16,padding:'48px 24px',textAlign:'center',cursor:'pointer',background:'white',transition:'border-color 0.2s'}}>
            <div style={{fontSize:48,marginBottom:16}}>📁</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Drop your files here</div>
            <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:16,lineHeight:1.6}}>CSV, Excel, PDF, or even photos of paper records.<br/>We accept the mess you have.</div>
            <div style={{display:'inline-block',padding:'10px 24px',borderRadius:8,background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500}}>Choose files</div>
            <div style={{fontSize:12,color:'var(--ink-faint)',marginTop:12}}>Supports: .csv, .xlsx, .xls, .pdf, .jpg, .png</div>
          </div>
        )}

        {step === 'parsing' && (
          <div style={{textAlign:'center',padding:'48px 24px'}}>
            <div style={{width:64,height:64,borderRadius:'50%',background:'var(--gold-pale)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28,animation:'pulse 1.5s ease-in-out infinite'}}>✦</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Analyzing {fileName}...</div>
            <div style={{fontSize:14,color:'var(--ink-light)'}}>NRI is parsing your data and mapping fields intelligently.</div>
          </div>
        )}

        {step === 'preview' && (
          <>
            <div style={{background:'#E1F5EE',border:'1px solid #8DCFAD',borderRadius:12,padding:'16px 20px',marginBottom:24,display:'flex',gap:12,alignItems:'center'}}>
              <div style={{fontSize:24}}>✓</div>
              <div><div style={{fontSize:14,fontWeight:500,color:'#085041'}}>Successfully parsed {fileName}</div><div style={{fontSize:13,color:'#085041',fontWeight:300}}>Found {mockData.properties} homeowners, {mockData.applicants.length} applicants, {mockData.properties} properties</div></div>
            </div>

            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Homeowners found ({mockData.homeowners.length} of {mockData.properties})</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:20}}>
              {mockData.homeowners.map((h,i) => (
                <div key={i} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'#085041'}}>{h.n.split(' ').map(w=>w[0]).join('')}</div>
                  <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{h.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{h.a} · Since {h.y}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>{h.s}</span>
                </div>
              ))}
              <div style={{padding:'8px 14px',fontSize:12,color:'var(--ink-faint)',textAlign:'center'}}>+ {mockData.properties - mockData.homeowners.length} more</div>
            </div>

            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Applicants found ({mockData.applicants.length})</div>
            <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:24}}>
              {mockData.applicants.map((a,i) => (
                <div key={i} style={{display:'flex',gap:12,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'#E6F1FB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:500,color:'#0C447C'}}>{a.n.split(' ').map(w=>w[0]).join('')}</div>
                  <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>{a.n}</div></div>
                  <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#E6F1FB',color:'#0C447C'}}>{a.s}</span>
                </div>
              ))}
            </div>

            <div style={{display:'flex',gap:12}}>
              <button onClick={() => setStep('upload')} style={{flex:1,padding:'12px',borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>Start over</button>
              <button onClick={() => setStep('done')} style={{flex:2,padding:'12px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Import {mockData.properties} records →</button>
            </div>
          </>
        )}

        {step === 'done' && (
          <div style={{textAlign:'center',padding:'48px 24px'}}>
            <div style={{width:64,height:64,borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>✓</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:24,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Import complete</div>
            <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:24}}>47 homeowners, 3 applicants, and 47 properties have been imported into Propria.</div>
            <button onClick={() => setStep('upload')} style={{padding:'12px 32px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Import another file</button>
          </div>
        )}
      </div>
    </div>
  )
}
