import { useState } from 'react'

export default function ResaleCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(187000)
  const [yearsOwned, setYearsOwned] = useState(6)
  const [improvementCredit, setImprovementCredit] = useState(2800)
  const [appreciationRate, setAppreciationRate] = useState(30)
  const [formulaType, setFormulaType] = useState<'fixed'|'appraisal'|'indexed'>('fixed')

  // Fixed-rate appreciation formula
  const annualAppreciation = formulaType === 'fixed' ? 0.03 : formulaType === 'appraisal' ? 0.04 : 0.025
  const totalAppreciation = purchasePrice * annualAppreciation * yearsOwned
  const ownerShare = totalAppreciation * (appreciationRate / 100)
  const maxResalePrice = purchasePrice + ownerShare + improvementCredit
  const sellerNet = ownerShare + improvementCredit

  const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 })

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      {/* Header */}
      <div style={{background:'var(--forest)',padding:'32px 24px 28px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:8}}>Resale Calculator</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300,lineHeight:1.6}}>Estimate your maximum resale price under your CLT's shared-equity formula. This is an estimate — your CLT will provide the official determination.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:800,margin:'0 auto',padding:'24px 16px 48px'}}>
        {/* Formula type selector */}
        <div style={{marginBottom:24}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:8}}>Formula type</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {([['fixed','Fixed-Rate (3%/yr)'],['appraisal','Appraisal-Based (4%/yr)'],['indexed','CPI-Indexed (2.5%/yr)']] as const).map(([k,l]) => (
              <button key={k} onClick={() => setFormulaType(k)} style={{padding:'8px 16px',borderRadius:8,border:formulaType===k?'2px solid var(--forest)':'1px solid var(--border)',background:formulaType===k?'var(--forest)':'white',color:formulaType===k?'var(--parchment)':'var(--ink-mid)',fontSize:13,fontWeight:formulaType===k?500:400,cursor:'pointer',fontFamily:'var(--sans)'}}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
          <div>
            <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>Purchase price</label>
            <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(Number(e.target.value))} style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:15,fontFamily:'var(--sans)',color:'var(--ink)',background:'white'}} />
          </div>
          <div>
            <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>Years owned</label>
            <input type="range" min="1" max="30" value={yearsOwned} onChange={e => setYearsOwned(Number(e.target.value))} style={{width:'100%',marginTop:8,accentColor:'var(--forest)'}} />
            <div style={{fontSize:14,fontWeight:500,color:'var(--forest)',textAlign:'center'}}>{yearsOwned} years</div>
          </div>
          <div>
            <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>Your appreciation share</label>
            <input type="range" min="10" max="50" value={appreciationRate} onChange={e => setAppreciationRate(Number(e.target.value))} style={{width:'100%',marginTop:8,accentColor:'var(--forest)'}} />
            <div style={{fontSize:14,fontWeight:500,color:'var(--forest)',textAlign:'center'}}>{appreciationRate}%</div>
          </div>
          <div>
            <label style={{fontSize:12,color:'var(--ink-light)',display:'block',marginBottom:4}}>Improvement credits</label>
            <input type="number" value={improvementCredit} onChange={e => setImprovementCredit(Number(e.target.value))} style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'0.5px solid var(--border)',fontSize:15,fontFamily:'var(--sans)',color:'var(--ink)',background:'white'}} />
          </div>
        </div>

        {/* Results */}
        <div style={{background:'var(--forest)',borderRadius:12,padding:24,marginBottom:24}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:16}}>Resale Price Determination</div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:14,color:'rgba(245,240,232,0.6)'}}>Purchase price</span><span style={{fontSize:14,color:'var(--parchment)',fontWeight:500}}>{fmt(purchasePrice)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:14,color:'rgba(245,240,232,0.6)'}}>Total appreciation ({yearsOwned} yrs × {(annualAppreciation*100).toFixed(1)}%/yr)</span><span style={{fontSize:14,color:'var(--parchment)',fontWeight:500}}>{fmt(totalAppreciation)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:14,color:'rgba(245,240,232,0.6)'}}>Your share ({appreciationRate}%)</span><span style={{fontSize:14,color:'var(--gold)',fontWeight:500}}>{fmt(ownerShare)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:14,color:'rgba(245,240,232,0.6)'}}>Improvement credits</span><span style={{fontSize:14,color:'var(--parchment)',fontWeight:500}}>{fmt(improvementCredit)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'14px 0 4px',marginTop:8}}><span style={{fontFamily:'var(--serif-display)',fontSize:18,color:'var(--parchment)',fontWeight:500}}>Maximum resale price</span><span style={{fontFamily:'var(--serif-display)',fontSize:28,color:'var(--gold)',fontWeight:400,letterSpacing:'-0.02em'}}>{fmt(maxResalePrice)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}><span style={{fontSize:13,color:'rgba(245,240,232,0.5)'}}>Your estimated equity</span><span style={{fontSize:16,color:'#8DCFAD',fontWeight:500}}>{fmt(sellerNet)}</span></div>
        </div>

        <div style={{fontSize:12,color:'var(--ink-faint)',lineHeight:1.6,fontWeight:300}}>
          This calculator provides estimates only. Actual resale prices are determined by your CLT according to the ground lease terms. Improvement credits require prior CLT approval. Contact your CLT stewardship coordinator for an official resale price determination.
        </div>
      </div>
    </div>
  )
}
