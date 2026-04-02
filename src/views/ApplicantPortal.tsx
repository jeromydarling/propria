export default function ApplicantPortal() {
  const stages = [{n:1,l:'Application',done:true},{n:2,l:'Income Verify',done:true},{n:3,l:'Documents',done:true},{n:4,l:'Education',active:true},{n:5,l:'Counseling',done:false},{n:6,l:'Waitlist',done:false},{n:7,l:'Matched',done:false},{n:8,l:'Closing',done:false}]
  return (
    <div style={{minHeight:'100vh',background:'var(--cream)',fontFamily:'var(--sans)'}}>
      <div style={{background:'var(--forest)',padding:'20px 24px'}}>
        <div style={{maxWidth:700,margin:'0 auto'}}>
          <div style={{fontSize:11,color:'rgba(245,240,232,0.4)',marginBottom:4}}>Rondo Community Land Trust</div>
          <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>Welcome back, <em style={{color:'var(--terra-light)'}}>Keisha</em></div>
        </div>
      </div>

      <div style={{maxWidth:700,margin:'0 auto',padding:'20px 16px 48px'}}>
        {/* Status card */}
        <div style={{background:'var(--forest)',borderRadius:12,padding:20,marginBottom:20}}>
          <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:12}}>Your Application Status</div>
          <div style={{display:'flex',gap:2,marginBottom:12,overflowX:'auto'}}>
            {stages.map(s => (
              <div key={s.n} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4,minWidth:44}}>
                <div style={{width:24,height:24,borderRadius:'50%',background:s.done?'var(--forest-light)':'s.active' in s && s.active?'var(--gold)':'rgba(245,240,232,0.15)',border:s.done?'none':'s.active' in s && s.active?'2px solid var(--gold)':'2px solid rgba(245,240,232,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:500,color:s.done||('active' in s && s.active)?'white':'rgba(245,240,232,0.4)'}}>{s.done?'✓':s.n}</div>
                <div style={{fontSize:8,color:'rgba(245,240,232,0.5)',textAlign:'center',lineHeight:1.2}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{fontFamily:'var(--serif-display)',fontSize:18,color:'var(--parchment)',marginBottom:4}}>Stage 4 of 8: Education</div>
          <div style={{fontSize:13,color:'rgba(245,240,232,0.6)',fontWeight:300}}>You're 60% through your homebuyer education. Complete it to unlock counseling.</div>
        </div>

        {/* What's next */}
        <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'16px 20px',marginBottom:20}}>
          <div style={{fontSize:14,fontWeight:500,color:'#633806',marginBottom:6}}>What's next?</div>
          <div style={{fontSize:13,color:'#854F0B',lineHeight:1.6,fontWeight:300}}>Complete Module 7 (Home Maintenance) to continue your education. You also need to re-submit your income verification letter — the previous one expired on March 14.</div>
        </div>

        {/* Education progress */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Homebuyer Education</div>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',marginBottom:20}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><span style={{fontSize:13}}>Progress</span><span style={{fontSize:13,fontWeight:500,color:'var(--forest)'}}>60%</span></div>
          <div style={{height:8,background:'var(--parchment-dk)',borderRadius:4,overflow:'hidden',marginBottom:8}}><div style={{width:'60%',height:'100%',background:'var(--forest-light)',borderRadius:4}}></div></div>
          <div style={{fontSize:12,color:'var(--ink-faint)'}}>6 of 10 modules complete · Module 7 in progress</div>
          <button style={{marginTop:12,width:'100%',padding:10,borderRadius:8,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Continue Module 7 →</button>
        </div>

        {/* Document checklist */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:8}}>Your Documents</div>
        <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',marginBottom:20}}>
          {[{d:'Application form',s:'✓',ok:true},{d:'Photo ID',s:'✓',ok:true},{d:'Pay stubs (2 months)',s:'✓',ok:true},{d:'Income verification letter',s:'Expired',ok:false},{d:'Bank statements (3 months)',s:'Upload',ok:false},{d:'Counseling certificate',s:'Pending',ok:false}].map((doc,i) => (
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderBottom:'0.5px solid var(--border-light)'}}>
              <div style={{width:18,height:18,borderRadius:4,border:doc.ok?'none':'1.5px solid '+(doc.s==='Expired'?'var(--terra)':'var(--border)'),background:doc.ok?'var(--forest)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,color:'white',flexShrink:0}}>{doc.ok?'✓':''}</div>
              <span style={{flex:1,fontSize:13,color:doc.s==='Expired'?'var(--terra)':'var(--ink)'}}>{doc.d}</span>
              <span style={{fontSize:11,color:doc.ok?'var(--forest-light)':doc.s==='Expired'?'var(--terra)':'var(--ink-faint)',fontWeight:500}}>{doc.s}</span>
            </div>
          ))}
        </div>

        <button style={{width:'100%',padding:12,borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>Upload a document</button>
      </div>
    </div>
  )
}
