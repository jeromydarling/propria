import '../views/Marketing.css'

const SIGNUP_URL = 'https://propria.app/signup'

export default function Pricing() {
  return (
    <div className="mkt">
      {/* NAV */}
      <nav>
        <a href="#/" className="nav-brand">Propria<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#/">Home</a></li>
          <li><a href="#/pricing" style={{color:'var(--forest)',fontWeight:500}}>Pricing</a></li>
          <li><a href={SIGNUP_URL} className="nav-cta">Start free</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{background:'var(--forest)',padding:'100px 2.5rem 80px',position:'relative'}}>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:4,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>
        <div style={{maxWidth:800,margin:'0 auto',textAlign:'center'}}>
          <p style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:500,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'1.5rem'}}>Pricing</p>
          <h1 style={{fontFamily:'var(--serif-display)',fontSize:'clamp(36px,5vw,56px)',fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.025em',lineHeight:1.1,marginBottom:'1.5rem'}}>One plan. <em style={{fontStyle:'italic',color:'var(--terra-light)'}}>Every feature.</em></h1>
          <p style={{fontFamily:'var(--serif-body)',fontSize:19,fontWeight:300,color:'rgba(245,240,232,0.7)',lineHeight:1.65,maxWidth:600,margin:'0 auto'}}>A 30-home CLT and a 500-home CLT get the exact same product. NRI Report Builder, Magic Import, stewardship intelligence — everything. No tiers. No add-ons.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{background:'var(--cream)',padding:'80px 2.5rem'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',marginBottom:'2rem'}}>
            {/* Base */}
            <div style={{border:'1px solid var(--parchment-dk)',borderRadius:6,padding:'2rem',background:'var(--cream)'}}>
              <div style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--ink-light)',marginBottom:'1rem'}}>Base</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:48,fontWeight:400,color:'var(--forest)',lineHeight:1,letterSpacing:'-0.03em'}}><sup style={{fontSize:22}}>$</sup>49<sub style={{fontSize:16,fontWeight:300,fontFamily:'var(--sans)',color:'var(--ink-light)'}}>/mo</sub></div>
              <div style={{fontFamily:'var(--sans)',fontSize:14,color:'var(--ink-light)',margin:'0.75rem 0 1.25rem',lineHeight:1.5,fontWeight:300}}>Up to 25 homes. Full platform, NRI included. No setup fees.</div>
              <ul style={{listStyle:'none',marginBottom:'1.75rem'}}>
                {['All core modules + NRI intelligence','NRI Report Builder — one-click reports','Magic Import — bring your mess','Homeowner portal (free for families)','Homebuyer education course','Counselor network access','Stripe Connect payments','HUD-9902 generator','Site Builder with NRI assistant','Land acquisition pipeline'].map((f,i) =>
                  <li key={i} style={{fontFamily:'var(--sans)',fontSize:13,color:'var(--ink-mid)',padding:'0.45rem 0',display:'flex',alignItems:'baseline',gap:8,borderBottom:'1px solid var(--parchment-dk)'}}><span style={{fontSize:8,color:'var(--terra)',flexShrink:0}}>✦</span>{f}</li>
                )}
              </ul>
              <a href={SIGNUP_URL} style={{display:'block',width:'100%',textAlign:'center',padding:12,borderRadius:3,fontFamily:'var(--sans)',fontSize:14,fontWeight:500,textDecoration:'none',cursor:'pointer',border:'1.5px solid var(--forest)',color:'var(--forest)',background:'transparent'}}>Start free →</a>
            </div>

            {/* Per home */}
            <div style={{borderColor:'var(--forest)',borderWidth:2,borderStyle:'solid',borderRadius:6,padding:'2rem',background:'var(--forest)'}}>
              <div style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'1rem'}}>Per home</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:48,fontWeight:400,color:'var(--parchment)',lineHeight:1,letterSpacing:'-0.03em'}}><sup style={{fontSize:22}}>$</sup>3<sub style={{fontSize:16,fontWeight:300,fontFamily:'var(--sans)',color:'rgba(245,240,232,0.55)'}}>/home/mo beyond 25</sub></div>
              <div style={{fontFamily:'var(--sans)',fontSize:14,color:'rgba(245,240,232,0.6)',margin:'0.75rem 0 1.25rem',lineHeight:1.5,fontWeight:300}}>Scales with your portfolio. Capped at $1,200/mo regardless of size.</div>
              <ul style={{listStyle:'none',marginBottom:'1.75rem'}}>
                {['50 homes → $124/mo','100 homes → $274/mo','150 homes → $424/mo','200 homes → $574/mo','300 homes → $874/mo','500+ homes → $1,200/mo cap','Everything in base, always'].map((f,i) =>
                  <li key={i} style={{fontFamily:'var(--sans)',fontSize:13,color:'rgba(245,240,232,0.75)',padding:'0.45rem 0',display:'flex',alignItems:'baseline',gap:8,borderBottom:'1px solid rgba(245,240,232,0.12)'}}><span style={{fontSize:8,color:'var(--gold)',flexShrink:0}}>✦</span>{f}</li>
                )}
              </ul>
              <a href={SIGNUP_URL} style={{display:'block',width:'100%',textAlign:'center',padding:12,borderRadius:3,fontFamily:'var(--sans)',fontSize:14,fontWeight:500,textDecoration:'none',cursor:'pointer',background:'var(--terra)',borderColor:'var(--terra)',border:'1.5px solid var(--terra)',color:'var(--parchment)'}}>Start free →</a>
            </div>
          </div>

          <p style={{fontFamily:'var(--sans)',fontSize:13,color:'var(--ink-light)',fontWeight:300,textAlign:'center',marginBottom:'3rem'}}>+ 1.5% on ground lease collection and contractor payments · $250 flat per resale · $0 on grant disbursements</p>

          {/* Transaction fee breakdown */}
          <div style={{background:'white',border:'0.5px solid var(--border)',borderRadius:12,overflow:'hidden',maxWidth:700,margin:'0 auto 3rem'}}>
            <div style={{padding:'16px 20px',borderBottom:'0.5px solid var(--border)',fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--forest)'}}>Transaction fees</div>
            {[
              {what:'Ground lease collection',fee:'1.5%',note:'Collected automatically via Stripe Connect'},
              {what:'Contractor payments',fee:'1.5%',note:'When routed through Propria'},
              {what:'Resale closing',fee:'$250 flat',note:'Per completed resale transaction'},
              {what:'Grant disbursements',fee:'$0',note:'We never take a cut of grant money'},
              {what:'Homeowner portal',fee:'$0',note:'Free for all families — always'},
              {what:'Homebuyer education',fee:'$0',note:'Included — no per-student fees'},
            ].map((row,i) => (
              <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 20px',borderBottom:'0.5px solid var(--border-light)'}}>
                <div><div style={{fontFamily:'var(--sans)',fontSize:14,color:'var(--ink)',fontWeight:500}}>{row.what}</div><div style={{fontFamily:'var(--sans)',fontSize:12,color:'var(--ink-faint)',fontWeight:300}}>{row.note}</div></div>
                <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:400,color:row.fee==='$0'?'var(--forest-light)':'var(--ink)',letterSpacing:'-0.02em',flexShrink:0}}>{row.fee}</div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{maxWidth:700,margin:'0 auto'}}>
            <div style={{fontFamily:'var(--serif-display)',fontSize:24,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:'1.5rem',textAlign:'center'}}>Frequently asked</div>
            {[
              {q:'Is there a free trial?',a:'Yes. See the full demo instantly — no credit card required. When you\'re ready to bring your own data, start your subscription via Stripe.'},
              {q:'Can we use CCHD grant money to pay for Propria?',a:'Yes. Propria is a legitimate program expense. Many CLTs fund software through their CCHD operational grants.'},
              {q:'What happens to our data if we cancel?',a:'Your data belongs to you. Export everything — homeowners, financials, contacts, documents — as CSV, JSON, or PDF anytime. We never hold your data hostage.'},
              {q:'Do homeowners pay anything?',a:'No. The homeowner portal is free for every family. Always has been, always will be.'},
              {q:'Is the NRI AI included or extra?',a:'Included. NRI Report Builder, NRI Compass, NRI Site Assistant — all of it. No AI add-ons, no per-query fees.'},
              {q:'How long does onboarding take?',a:'Magic Import handles your existing data in minutes. Most CLTs are fully operational within a week. We offer white-glove onboarding for CLTs with complex data.'},
            ].map((faq,i) => (
              <div key={i} style={{marginBottom:'1.25rem'}}>
                <div style={{fontFamily:'var(--sans)',fontSize:15,fontWeight:500,color:'var(--ink)',marginBottom:4}}>{faq.q}</div>
                <div style={{fontFamily:'var(--serif-body)',fontSize:15,color:'var(--ink-light)',lineHeight:1.65,fontWeight:300}}>{faq.a}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div style={{textAlign:'center',marginTop:'3rem',padding:'40px 0'}}>
            <div style={{fontFamily:'var(--serif-display)',fontSize:'clamp(22px,3vw,32px)',fontWeight:500,color:'var(--forest)',marginBottom:16}}>Ready to steward smarter?</div>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <a href={SIGNUP_URL} style={{display:'inline-block',padding:'14px 32px',borderRadius:3,background:'var(--terra)',color:'var(--parchment)',fontFamily:'var(--sans)',fontSize:15,fontWeight:500,textDecoration:'none'}}>Start free →</a>
              <a href="#/app" style={{display:'inline-block',padding:'14px 32px',borderRadius:3,border:'1.5px solid var(--forest)',color:'var(--forest)',fontFamily:'var(--sans)',fontSize:15,fontWeight:400,textDecoration:'none'}}>See the demo</a>
            </div>
            <div style={{fontFamily:'var(--sans)',fontSize:13,color:'var(--ink-faint)',marginTop:12,fontWeight:300}}>No credit card required for the demo · Stripe checkout for signup</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div><div className="footer-brand-name">Propria.</div><div className="footer-brand-tag">Properly yours.</div></div>
          <div><div className="footer-col-title">Platform</div><ul className="footer-links"><li>Stewardship</li><li>Applicant Pipeline</li><li>Resale Engine</li><li>Asset Management</li><li>Reports</li></ul></div>
          <div><div className="footer-col-title">Network</div><ul className="footer-links"><li>Counselor signup</li><li>Homebuyer Education</li><li>HUD compliance</li></ul></div>
          <div><div className="footer-col-title">Company</div><ul className="footer-links"><li>About CROS™</li><li><a href="#/" style={{color:'inherit',textDecoration:'none'}}>Home</a></li><li><a href="#/pricing" style={{color:'inherit',textDecoration:'none'}}>Pricing</a></li></ul></div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Propria · propria.app</span>
          <span className="footer-cros">A <span>CROS™</span> Platform</span>
        </div>
      </footer>
    </div>
  )
}
