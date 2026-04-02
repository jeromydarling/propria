import { useState } from 'react'

const COUNSELORS = [
  {n:'Sarah Wilkins',o:'LSS Financial Counseling',l:['English','Spanish'],c:true,a:true,i:'SW',bio:'HUD-certified with 8 years of housing counseling experience. Specializes in CLT homebuyer education and financial literacy.',sessions:142,rating:4.9,certs:['HUD-Approved','CLT-Certified','NFCC Member']},
  {n:'Marcus Chen',o:'Twin Cities Housing Alliance',l:['English','Mandarin'],c:true,a:true,i:'MC',bio:'Bilingual counselor serving the Asian-American community in the Twin Cities. Former mortgage officer with deep knowledge of CLT financing.',sessions:89,rating:4.8,certs:['HUD-Approved','CLT-Certified']},
  {n:'Amira Hassan',o:'Bridgewater Community Services',l:['English','Somali'],c:true,a:false,i:'AH',bio:'Community advocate specializing in immigrant homebuyer education. Partners with 4 CLTs in Minnesota.',sessions:67,rating:4.7,certs:['HUD-Approved','CLT-Certified']},
  {n:'David Rodriguez',o:'Catholic Charities',l:['English','Spanish'],c:true,a:true,i:'DR',bio:'15 years with Catholic Charities housing programs. Expert in resale formula education and ground lease counseling.',sessions:203,rating:4.9,certs:['HUD-Approved','CLT-Certified','CCHD Partner']},
  {n:'Lisa Thornton',o:'Urban League Housing',l:['English'],c:false,a:true,i:'LT',bio:'Focuses on first-generation homebuyers and credit recovery. Working toward CLT certification.',sessions:54,rating:4.6,certs:['HUD-Approved']},
  {n:'James Okonkwo',o:'Neighborhood Housing Services',l:['English'],c:true,a:true,i:'JO',bio:'Former CLT board member turned counselor. Deep understanding of governance and stewardship from the homeowner perspective.',sessions:112,rating:4.8,certs:['HUD-Approved','CLT-Certified']},
]

export default function Directory() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<number|null>(null)

  const filtered = COUNSELORS.filter(c => {
    if (filter === 'available') return c.a
    if (filter === 'certified') return c.c
    if (filter === 'spanish') return c.l.includes('Spanish')
    return true
  })

  const detail = selected !== null ? COUNSELORS[selected] : null

  return (
    <div style={{height:'100%',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'auto'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Counselor Directory</div>
        <div style={{fontSize:12,color:'rgba(245,240,232,0.5)',marginTop:2}}>HUD-certified housing counselors</div>
      </div>
      <div style={{padding:'12px 16px',display:'flex',gap:6,overflowX:'auto',flexWrap:'wrap'}}>
        {[{k:'all',l:'All'},{k:'available',l:'Available Now'},{k:'certified',l:'CLT Certified'},{k:'spanish',l:'Spanish'}].map((f)=>
          <span key={f.k} onClick={()=>setFilter(f.k)} style={{fontSize:12,padding:'5px 12px',borderRadius:16,border:filter===f.k?'none':'1px solid var(--border)',background:filter===f.k?'var(--forest)':'white',color:filter===f.k?'var(--parchment)':'var(--ink-light)',cursor:'pointer',whiteSpace:'nowrap',fontWeight:filter===f.k?500:400}}>{f.l}</span>
        )}
      </div>
      <div style={{padding:'0 16px 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12}}>
        {filtered.map((c,i) => {
          const realIdx = COUNSELORS.indexOf(c)
          return (
            <div key={i} onClick={()=>setSelected(realIdx)} style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:16,cursor:'pointer',transition:'box-shadow 0.15s'}}>
              <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:10}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(27,58,45,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:500,color:'var(--forest)',flexShrink:0}}>{c.i}</div>
                <div><div style={{fontSize:15,fontWeight:500,color:'var(--ink)'}}>{c.n}</div><div style={{fontSize:12,color:'var(--ink-light)'}}>{c.o}</div></div>
              </div>
              <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
                {c.c && <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>CLT Certified</span>}
                {c.a && <span style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'#E6F1FB',color:'#0C447C'}}>Available</span>}
                {c.l.map(lang => <span key={lang} style={{fontSize:10,fontWeight:500,padding:'2px 7px',borderRadius:3,background:'var(--parchment)',color:'var(--ink-light)'}}>{lang}</span>)}
              </div>
            </div>
          )
        })}
      </div>

      {/* DETAIL SHEET */}
      {detail && (
        <div onClick={(e) => { if ((e.target as HTMLElement).style.background?.includes('rgba')) setSelected(null) }} style={{position:'fixed',inset:0,background:'rgba(26,26,20,0.5)',zIndex:400,display:'flex',alignItems:'flex-end',justifyContent:'center',backdropFilter:'blur(2px)'}}>
          <div style={{background:'white',borderRadius:'16px 16px 0 0',width:'100%',maxWidth:480,padding:'20px 18px 32px',maxHeight:'85vh',overflowY:'auto',animation:'slideUp 0.28s cubic-bezier(0.22,1,0.36,1)'}}>
            <div style={{width:36,height:4,borderRadius:2,background:'var(--parchment-dk)',margin:'0 auto 16px'}}></div>

            <div style={{display:'flex',gap:14,alignItems:'center',marginBottom:16}}>
              <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(27,58,45,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:500,color:'var(--forest)',flexShrink:0}}>{detail.i}</div>
              <div>
                <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em'}}>{detail.n}</div>
                <div style={{fontSize:12,color:'var(--ink-light)'}}>{detail.o}</div>
              </div>
            </div>

            <div style={{fontSize:13,color:'var(--ink)',lineHeight:1.6,fontWeight:300,marginBottom:16}}>{detail.bio}</div>

            <div style={{display:'flex',gap:4,flexWrap:'wrap',marginBottom:16}}>
              {detail.certs.map(cert => <span key={cert} style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'#E1F5EE',color:'#085041'}}>{cert}</span>)}
              {detail.l.map(lang => <span key={lang} style={{fontSize:10,fontWeight:500,padding:'3px 8px',borderRadius:3,background:'var(--parchment)',color:'var(--ink-light)'}}>{lang}</span>)}
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:20}}>
              <div style={{background:'var(--parchment)',borderRadius:8,padding:'10px 12px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:20,color:'var(--forest)'}}>{detail.sessions}</div><div style={{fontSize:10,color:'var(--ink-faint)',marginTop:2}}>Sessions</div></div>
              <div style={{background:'var(--parchment)',borderRadius:8,padding:'10px 12px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:20,color:'var(--forest)'}}>{detail.rating}</div><div style={{fontSize:10,color:'var(--ink-faint)',marginTop:2}}>Rating</div></div>
              <div style={{background:'var(--parchment)',borderRadius:8,padding:'10px 12px',textAlign:'center'}}><div style={{fontFamily:'var(--serif-display)',fontSize:20,color:detail.a?'var(--forest-light)':'var(--terra)'}}>{detail.a?'Yes':'No'}</div><div style={{fontSize:10,color:'var(--ink-faint)',marginTop:2}}>Available</div></div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              <button onClick={()=>setSelected(null)} style={{padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>Close</button>
              <button style={{padding:12,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Request session</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
