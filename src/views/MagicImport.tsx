import { useState, useEffect } from 'react'

type Step = 'upload' | 'scanning' | 'mapping' | 'dedup' | 'validation' | 'review' | 'importing' | 'done'

interface DetectedFile {
  name: string
  type: string
  records: number
  icon: string
}

interface FieldMapping {
  source: string
  target: string
  confidence: number
  matched: boolean
}

interface DuplicateGroup {
  name: string
  sources: string[]
  action: 'merge' | 'skip' | 'keep_both'
}

interface ValidationIssue {
  field: string
  record: string
  issue: string
  severity: 'warning' | 'error'
}

export default function MagicImport() {
  const [step, setStep] = useState<Step>('upload')
  const [progress, setProgress] = useState(0)
  const [scanPhase, setScanPhase] = useState('')

  const files: DetectedFile[] = [
    { name: 'rondo_homeowners_2024.xlsx', type: 'Excel', records: 47, icon: '📊' },
    { name: 'applicant_tracking.csv', type: 'CSV', records: 14, icon: '📋' },
    { name: 'ground_lease_payments_q1.xlsx', type: 'Excel', records: 141, icon: '💰' },
    { name: 'HUD-9902-2025-Q4.pdf', type: 'PDF', records: 1, icon: '📄' },
    { name: 'property_photos/', type: 'Folder', records: 23, icon: '📁' },
  ]

  const mappings: FieldMapping[] = [
    { source: 'Owner Name', target: 'Homeowner Name', confidence: 98, matched: true },
    { source: 'Addr', target: 'Property Address', confidence: 95, matched: true },
    { source: 'Purch Date', target: 'Purchase Date', confidence: 92, matched: true },
    { source: 'Monthly GL', target: 'Ground Lease Fee', confidence: 89, matched: true },
    { source: 'Phone #', target: 'Phone Number', confidence: 96, matched: true },
    { source: 'Email Addr', target: 'Email', confidence: 99, matched: true },
    { source: 'Appr %', target: 'Appreciation Share', confidence: 85, matched: true },
    { source: 'Improvement $', target: 'Improvement Credits', confidence: 82, matched: true },
    { source: 'Last Contact', target: 'Last Contact Date', confidence: 91, matched: true },
    { source: 'Notes/Comments', target: 'Pastoral Notes', confidence: 72, matched: false },
    { source: 'Emrgncy Cntct', target: 'Emergency Contact', confidence: 78, matched: false },
  ]

  const duplicates: DuplicateGroup[] = [
    { name: 'Maria Torres', sources: ['rondo_homeowners_2024.xlsx', 'ground_lease_payments_q1.xlsx', 'applicant_tracking.csv'], action: 'merge' },
    { name: 'James Walker', sources: ['rondo_homeowners_2024.xlsx', 'ground_lease_payments_q1.xlsx'], action: 'merge' },
    { name: 'Keisha Johnson', sources: ['applicant_tracking.csv', 'ground_lease_payments_q1.xlsx'], action: 'merge' },
  ]

  const issues: ValidationIssue[] = [
    { field: 'Phone', record: 'Samuel Okafor', issue: 'Phone format invalid: "651-555-01"', severity: 'error' },
    { field: 'Income', record: 'Keisha Johnson', issue: 'Income field empty — required for applicants', severity: 'error' },
    { field: 'Address', record: '33 Charles Ave', issue: 'Could not geocode — verify city/state', severity: 'warning' },
    { field: 'Email', record: 'Patricia Moore', issue: 'Possible typo: "gmail.co" → "gmail.com"?', severity: 'warning' },
    { field: 'Purchase Date', record: 'Roberto Diaz', issue: 'Date format ambiguous: "03/04/18" — Mar 4 or Apr 3?', severity: 'warning' },
  ]

  useEffect(() => {
    if (step === 'scanning') {
      const phases = [
        { t: 100, p: 8, m: 'Reading file headers...' },
        { t: 600, p: 20, m: 'Detecting column structures...' },
        { t: 1200, p: 35, m: 'Identifying data types...' },
        { t: 1800, p: 50, m: 'Parsing 47 homeowner records...' },
        { t: 2400, p: 65, m: 'Parsing 14 applicant records...' },
        { t: 3000, p: 78, m: 'Cross-referencing payment history...' },
        { t: 3500, p: 88, m: 'Extracting HUD-9902 fields...' },
        { t: 4000, p: 95, m: 'Matching property photos to addresses...' },
        { t: 4500, p: 100, m: 'Analysis complete' },
      ]
      phases.forEach(({ t, p, m }) => {
        setTimeout(() => { setProgress(p); setScanPhase(m) }, t)
      })
      setTimeout(() => setStep('mapping'), 5000)
    }
    if (step === 'importing') {
      const steps = [
        { t: 300, p: 10, m: 'Creating homeowner records...' },
        { t: 800, p: 30, m: 'Importing contact history...' },
        { t: 1400, p: 50, m: 'Linking properties...' },
        { t: 2000, p: 70, m: 'Processing payment records...' },
        { t: 2600, p: 85, m: 'Attaching photos...' },
        { t: 3200, p: 100, m: 'Finalizing...' },
      ]
      steps.forEach(({ t, p, m }) => {
        setTimeout(() => { setProgress(p); setScanPhase(m) }, t)
      })
      setTimeout(() => setStep('done'), 3600)
    }
  }, [step])

  function startScan() {
    setProgress(0)
    setScanPhase('Initializing NRI import engine...')
    setStep('scanning')
  }

  const fmt = (n: number) => n >= 90 ? 'var(--forest-light)' : n >= 80 ? 'var(--gold)' : 'var(--terra)'

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'28px 24px 24px'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{fontFamily:"var(--serif-display)",fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:6}}>Magic Import</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300,lineHeight:1.6}}>Upload your spreadsheets, CSVs, PDFs — even photos of paper records. NRI will parse, map, deduplicate, and validate everything before a single record touches your database.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      {/* Step indicator */}
      <div style={{maxWidth:900,margin:'0 auto',padding:'20px 16px 0'}}>
        <div style={{display:'flex',gap:2,marginBottom:24}}>
          {[{k:'upload',l:'Upload'},{k:'scanning',l:'Scan'},{k:'mapping',l:'Map Fields'},{k:'dedup',l:'Deduplicate'},{k:'validation',l:'Validate'},{k:'review',l:'Review'},{k:'importing',l:'Import'},{k:'done',l:'Done'}].map((s,i,arr) => {
            const stepIdx = arr.findIndex(x => x.k === step)
            const isActive = i === stepIdx
            const isDone = i < stepIdx
            return <div key={s.k} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
              <div style={{width:'100%',height:3,borderRadius:2,background:isDone?'var(--forest)':isActive?'var(--gold)':'var(--parchment-dk)'}}></div>
              <div style={{fontSize:9,color:isDone?'var(--forest)':isActive?'var(--gold)':'var(--ink-faint)',fontWeight:isActive?600:400,textTransform:'uppercase',letterSpacing:'0.06em'}}>{s.l}</div>
            </div>
          })}
        </div>
      </div>

      <div style={{maxWidth:900,margin:'0 auto',padding:'0 16px 48px'}}>

        {/* STEP 1: UPLOAD */}
        {step === 'upload' && <>
          <div onClick={startScan} style={{border:'2px dashed var(--border)',borderRadius:16,padding:'48px 24px',textAlign:'center',cursor:'pointer',background:'white',marginBottom:20,transition:'border-color 0.2s'}}>
            <div style={{fontSize:48,marginBottom:16}}>📁</div>
            <div style={{fontFamily:"var(--serif-display)",fontSize:22,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Bring your mess</div>
            <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:20,lineHeight:1.7,maxWidth:420,margin:'0 auto 20px'}}>Drop everything you have — Excel files, CSV exports, Salesforce dumps, HUD reports, Google Sheets, even photos of paper records. We handle it all.</div>
            <div style={{display:'inline-block',padding:'12px 28px',borderRadius:8,background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500}}>Choose files to import</div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10}}>
            {['.xlsx','.csv','.pdf','.jpg/.png','.json','Salesforce'].map(f => <div key={f} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:8,padding:'10px 12px',textAlign:'center',fontSize:12,color:'var(--ink-light)'}}>{f}</div>)}
          </div>
        </>}

        {/* STEP 2: SCANNING */}
        {step === 'scanning' && <div style={{textAlign:'center',padding:'32px 0'}}>
          <div style={{width:80,height:80,borderRadius:'50%',background:'var(--gold-pale)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',fontSize:36}}>
            <div style={{animation:'pulse 1.2s ease-in-out infinite'}}>✦</div>
          </div>
          <div style={{fontFamily:"var(--serif-display)",fontSize:22,fontWeight:500,color:'var(--forest)',marginBottom:8}}>NRI is analyzing your data</div>
          <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:24}}>{scanPhase}</div>
          <div style={{maxWidth:400,margin:'0 auto'}}>
            <div style={{height:8,background:'var(--parchment-dk)',borderRadius:4,overflow:'hidden',marginBottom:8}}>
              <div style={{width:progress+'%',height:'100%',background:'var(--forest)',borderRadius:4,transition:'width 0.4s ease'}}></div>
            </div>
            <div style={{fontSize:12,color:'var(--ink-faint)'}}>{progress}%</div>
          </div>
          <div style={{marginTop:32,display:'flex',flexDirection:'column',gap:8,maxWidth:350,margin:'32px auto 0',textAlign:'left'}}>
            {files.map((f,i) => <div key={i} style={{display:'flex',gap:10,alignItems:'center',opacity:progress > (i+1)*18 ? 1 : 0.3,transition:'opacity 0.3s'}}>
              <span style={{fontSize:18}}>{f.icon}</span>
              <div style={{flex:1}}><div style={{fontSize:13,color:'var(--ink)'}}>{f.name}</div><div style={{fontSize:11,color:'var(--ink-faint)'}}>{f.type} · {f.records} {f.records===1?'report':'records'}</div></div>
              {progress > (i+1)*18 && <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>Parsed</span>}
            </div>)}
          </div>
        </div>}

        {/* STEP 3: FIELD MAPPING */}
        {step === 'mapping' && <>
          <div style={{background:'#E1F5EE',border:'1px solid #8DCFAD',borderRadius:12,padding:'14px 18px',marginBottom:20,display:'flex',gap:10,alignItems:'center'}}>
            <span style={{fontSize:20}}>✓</span>
            <div><div style={{fontSize:14,fontWeight:500,color:'#085041'}}>5 files parsed — 226 total records detected</div><div style={{fontSize:12,color:'#085041',fontWeight:300}}>47 homeowners · 14 applicants · 141 payments · 1 HUD report · 23 photos</div></div>
          </div>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Field mapping — NRI auto-detected</div>
          <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:20}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 24px 1fr 60px',gap:0,padding:'8px 14px',background:'var(--parchment)',fontSize:10,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>
              <span>Your column</span><span></span><span>Propria field</span><span style={{textAlign:'right'}}>Match</span>
            </div>
            {mappings.map((m,i) => <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 24px 1fr 60px',gap:0,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)',alignItems:'center'}}>
              <span style={{fontSize:13,color:'var(--ink)',fontFamily:'monospace',background:'var(--parchment)',padding:'2px 6px',borderRadius:3}}>{m.source}</span>
              <span style={{textAlign:'center',color:'var(--ink-faint)'}}>→</span>
              <span style={{fontSize:13,color:'var(--forest)',fontWeight:500}}>{m.target}</span>
              <span style={{textAlign:'right',fontSize:12,fontWeight:600,color:fmt(m.confidence)}}>{m.confidence}%</span>
            </div>)}
          </div>
          <div style={{display:'flex',gap:10}}><button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('upload')}>Start over</button><button style={{flex:2,padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('dedup')}>Accept mapping →</button></div>
        </>}

        {/* STEP 4: DEDUPLICATION */}
        {step === 'dedup' && <>
          <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'14px 18px',marginBottom:20,display:'flex',gap:10,alignItems:'center'}}>
            <div style={{width:8,height:8,borderRadius:'50%',background:'var(--gold)',animation:'pulse 2s ease-in-out infinite',flexShrink:0}}></div>
            <div><div style={{fontSize:14,fontWeight:500,color:'#633806'}}>3 potential duplicates found</div><div style={{fontSize:12,color:'#854F0B',fontWeight:300}}>NRI detected records that appear in multiple files. Review the merge suggestions below.</div></div>
          </div>
          {duplicates.map((d,i) => <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
              <div style={{fontSize:15,fontWeight:500,color:'var(--ink)'}}>{d.name}</div>
              <span style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>Auto-merge</span>
            </div>
            <div style={{fontSize:12,color:'var(--ink-light)',marginBottom:10}}>Found in {d.sources.length} files:</div>
            {d.sources.map((s,j) => <div key={j} style={{fontSize:12,color:'var(--ink-faint)',padding:'3px 0',display:'flex',gap:6,alignItems:'center'}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--forest-light)',flexShrink:0}}></span>{s}</div>)}
            <div style={{display:'flex',gap:6,marginTop:10}}>
              {['Merge','Keep separate','Skip'].map((a,j) => <button key={j} style={{padding:'6px 12px',borderRadius:6,border:j===0?'none':'1px solid var(--border)',background:j===0?'var(--forest)':'white',color:j===0?'var(--parchment)':'var(--ink-light)',fontSize:11,fontWeight:j===0?500:400,cursor:'pointer',fontFamily:'var(--sans)'}}>{a}</button>)}
            </div>
          </div>)}
          <div style={{display:'flex',gap:10}}><button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('mapping')}>← Back</button><button style={{flex:2,padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('validation')}>Accept merges →</button></div>
        </>}

        {/* STEP 5: VALIDATION */}
        {step === 'validation' && <>
          <div style={{display:'flex',gap:12,marginBottom:20}}>
            <div style={{flex:1,background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',textAlign:'center'}}>
              <div style={{fontFamily:"var(--serif-display)",fontSize:28,fontWeight:400,color:'var(--forest)',letterSpacing:'-0.02em'}}>47</div>
              <div style={{fontSize:11,color:'var(--ink-faint)'}}>Homeowners ready</div>
            </div>
            <div style={{flex:1,background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',textAlign:'center'}}>
              <div style={{fontFamily:"var(--serif-display)",fontSize:28,fontWeight:400,color:'var(--forest)',letterSpacing:'-0.02em'}}>14</div>
              <div style={{fontSize:11,color:'var(--ink-faint)'}}>Applicants ready</div>
            </div>
            <div style={{flex:1,background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',textAlign:'center'}}>
              <div style={{fontFamily:"var(--serif-display)",fontSize:28,fontWeight:400,color:'var(--terra)'}}>5</div>
              <div style={{fontSize:11,color:'var(--ink-faint)'}}>Issues to review</div>
            </div>
          </div>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Issues found</div>
          {issues.map((iss,i) => <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'12px 16px',marginBottom:8,display:'flex',gap:10,alignItems:'flex-start'}}>
            <div style={{width:8,height:8,borderRadius:'50%',background:iss.severity==='error'?'var(--terra)':'var(--gold)',flexShrink:0,marginTop:5}}></div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{iss.record} — {iss.field}</div>
              <div style={{fontSize:12,color:iss.severity==='error'?'var(--terra)':'var(--ink-light)',fontWeight:300}}>{iss.issue}</div>
            </div>
            <button style={{padding:'4px 10px',borderRadius:6,border:'1px solid var(--border)',background:'white',color:'var(--ink-light)',fontSize:11,cursor:'pointer',fontFamily:'var(--sans)',flexShrink:0}}>Fix</button>
          </div>)}
          <div style={{display:'flex',gap:10,marginTop:16}}><button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('dedup')}>← Back</button><button style={{flex:2,padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('review')}>Continue with 5 warnings →</button></div>
        </>}

        {/* STEP 6: REVIEW */}
        {step === 'review' && <>
          <div style={{background:'var(--forest)',borderRadius:12,padding:24,marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:16}}>Import Summary</div>
            {[['Homeowners','47','From rondo_homeowners_2024.xlsx'],['Applicants','14','From applicant_tracking.csv'],['Payment records','141','From ground_lease_payments_q1.xlsx'],['Properties','47','Auto-linked from homeowner addresses'],['Photos matched','23','Linked to 23 of 47 properties'],['HUD fields','18','Extracted from HUD-9902-2025-Q4.pdf'],['Duplicates merged','3','Maria Torres, James Walker, Keisha Johnson'],['Issues (warnings)','5','Imported with flags for manual review']].map(([l,v,d],i) =>
              <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid rgba(245,240,232,0.08)'}}>
                <div><div style={{fontSize:13,color:'rgba(245,240,232,0.7)'}}>{l}</div><div style={{fontSize:11,color:'rgba(245,240,232,0.4)',fontWeight:300}}>{d}</div></div>
                <span style={{fontFamily:"var(--serif-display)",fontSize:18,color:'var(--gold)'}}>{v}</span>
              </div>
            )}
          </div>
          <div style={{display:'flex',gap:10}}><button style={{flex:1,padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('validation')}>← Back</button><button style={{flex:2,padding:14,borderRadius:8,border:'none',background:'var(--terra)',color:'var(--parchment)',fontSize:15,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>{setProgress(0);setScanPhase('Preparing import...');setStep('importing')}}>Import 226 records into Propria →</button></div>
        </>}

        {/* STEP 7: IMPORTING */}
        {step === 'importing' && <div style={{textAlign:'center',padding:'48px 0'}}>
          <div style={{width:80,height:80,borderRadius:'50%',background:'var(--forest)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px'}}>
            <div style={{fontSize:32,color:'var(--gold)',animation:'pulse 1s ease-in-out infinite'}}>✦</div>
          </div>
          <div style={{fontFamily:"var(--serif-display)",fontSize:24,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Importing into Propria</div>
          <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:24}}>{scanPhase}</div>
          <div style={{maxWidth:400,margin:'0 auto'}}>
            <div style={{height:10,background:'var(--parchment-dk)',borderRadius:5,overflow:'hidden',marginBottom:8}}>
              <div style={{width:progress+'%',height:'100%',background:'linear-gradient(90deg,var(--forest) 0%,var(--forest-light) 100%)',borderRadius:5,transition:'width 0.4s ease'}}></div>
            </div>
            <div style={{fontSize:13,color:'var(--forest)',fontWeight:500}}>{progress}%</div>
          </div>
        </div>}

        {/* STEP 8: DONE */}
        {step === 'done' && <div style={{textAlign:'center',padding:'40px 0'}}>
          <div style={{width:80,height:80,borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',fontSize:36}}>✓</div>
          <div style={{fontFamily:"var(--serif-display)",fontSize:28,fontWeight:500,color:'var(--forest)',marginBottom:8}}>Import complete</div>
          <div style={{fontSize:16,color:'var(--ink-light)',marginBottom:8,lineHeight:1.6}}>226 records imported into Propria</div>
          <div style={{fontSize:14,color:'var(--ink-faint)',marginBottom:32,lineHeight:1.6}}>47 homeowners · 14 applicants · 47 properties · 141 payments · 23 photos linked</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,maxWidth:500,margin:'0 auto 32px'}}>
            {[['47','Families imported','var(--forest)'],['3','Duplicates merged','var(--gold)'],['0','Records lost','#8DCFAD']].map(([v,l,c],i) =>
              <div key={i} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'16px 12px'}}>
                <div style={{fontFamily:"var(--serif-display)",fontSize:32,fontWeight:400,color:c,letterSpacing:'-0.02em'}}>{v}</div>
                <div style={{fontSize:11,color:'var(--ink-faint)',marginTop:4}}>{l}</div>
              </div>
            )}
          </div>
          <div style={{display:'flex',gap:10,justifyContent:'center'}}>
            <button style={{padding:'12px 24px',borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}} onClick={()=>setStep('upload')}>Import more</button>
            <button style={{padding:'12px 24px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Go to Dashboard →</button>
          </div>
        </div>}

      </div>
    </div>
  )
}
