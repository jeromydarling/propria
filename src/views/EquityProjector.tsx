import { useState } from 'react'

export default function EquityProjector() {
  const [purchasePrice] = useState(187000)
  const [currentYears] = useState(6)
  const [projectedYears, setProjectedYears] = useState(10)
  const [appreciationRate] = useState(30)
  const annualRate = 0.03

  const points = Array.from({length: projectedYears + 1}, (_, y) => {
    const totalApp = purchasePrice * annualRate * (currentYears + y)
    const equity = totalApp * (appreciationRate / 100)
    return { year: currentYears + y, equity: Math.round(equity) }
  })
  const maxEquity = points[points.length - 1].equity
  const fmt = (n: number) => '$' + n.toLocaleString('en-US')

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'32px 24px 28px'}}>
        <div style={{maxWidth:700,margin:'0 auto'}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em',marginBottom:8}}>Equity Projector</div>
          <div style={{fontSize:14,color:'rgba(245,240,232,0.6)',fontWeight:300}}>See how your equity grows over time.</div>
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

      <div style={{maxWidth:700,margin:'0 auto',padding:'24px 16px 48px'}}>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:20,marginBottom:20}}>
          <div style={{fontSize:13,color:'var(--ink-light)',marginBottom:6}}>Project equity for the next...</div>
          <input type="range" min="1" max="25" value={projectedYears} onChange={e => setProjectedYears(Number(e.target.value))} style={{width:'100%',accentColor:'var(--forest)'}} />
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--ink-faint)'}}><span>1 year</span><span style={{fontWeight:500,color:'var(--forest)',fontSize:16}}>{projectedYears} years</span><span>25 years</span></div>
        </div>

        {/* Simple bar chart */}
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:20,marginBottom:20}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)',marginBottom:16}}>Equity growth projection</div>
          <div style={{display:'flex',gap:4,alignItems:'flex-end',height:160,marginBottom:12}}>
            {points.filter((_,i) => i % Math.max(1, Math.floor(points.length / 12)) === 0 || i === points.length - 1).map((p, i) => (
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                <div style={{fontSize:9,color:'var(--ink-faint)',whiteSpace:'nowrap'}}>{fmt(p.equity)}</div>
                <div style={{width:'100%',background:p.year <= currentYears ? 'var(--forest)' : 'var(--gold)',borderRadius:'3px 3px 0 0',height: Math.max(4, (p.equity / (maxEquity || 1)) * 120)}}></div>
                <div style={{fontSize:9,color:'var(--ink-faint)'}}>Yr {p.year}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:16,justifyContent:'center',fontSize:11,color:'var(--ink-faint)'}}>
            <span><span style={{display:'inline-block',width:10,height:10,borderRadius:2,background:'var(--forest)',marginRight:4,verticalAlign:'middle'}}></span>Owned</span>
            <span><span style={{display:'inline-block',width:10,height:10,borderRadius:2,background:'var(--gold)',marginRight:4,verticalAlign:'middle'}}></span>Projected</span>
          </div>
        </div>

        {/* Summary */}
        <div style={{background:'var(--forest)',borderRadius:12,padding:20}}>
          <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(245,240,232,0.1)'}}><span style={{fontSize:14,color:'rgba(245,240,232,0.6)'}}>Current equity (Year {currentYears})</span><span style={{fontSize:16,color:'var(--gold)',fontWeight:500}}>{fmt(points[0].equity)}</span></div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'12px 0'}}><span style={{fontFamily:'var(--serif-display)',fontSize:16,color:'var(--parchment)'}}>Projected equity (Year {currentYears + projectedYears})</span><span style={{fontFamily:'var(--serif-display)',fontSize:24,color:'var(--gold)',letterSpacing:'-0.02em'}}>{fmt(maxEquity)}</span></div>
        </div>
      </div>
    </div>
  )
}
