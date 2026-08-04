import '../views/Marketing.css'

const SIGNUP_URL = 'https://propria.app/signup'

export default function Terms() {
  return (
    <div className="mkt">
      <nav>
        <a href="#/" className="nav-brand">Propria<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#/">Home</a></li>
          <li><a href="#/pricing">Pricing</a></li>
          <li><a href={SIGNUP_URL} className="nav-cta">Start free</a></li>
        </ul>
      </nav>

      <div style={{maxWidth:760,margin:'0 auto',padding:'80px 24px 64px',fontFamily:'var(--serif-body)',fontSize:16,color:'var(--ink)',lineHeight:1.8}}>
        <div style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:500,letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--terra)',marginBottom:8}}>Legal</div>
        <h1 style={{fontFamily:'var(--serif-display)',fontSize:'clamp(28px,4vw,42px)',fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:8}}>Terms of Service</h1>
        <p style={{fontSize:14,color:'var(--ink-faint)',fontFamily:'var(--sans)',marginBottom:40}}>Effective August 4, 2026 · Last updated August 4, 2026</p>

        <Section n="1" title="What you're agreeing to">
          <p>These terms govern your use of Propria ("the platform"), operated by Propria ("we", "us"). By creating an account or using any Propria service, you agree to these terms. If you're signing up on behalf of a CLT or organization, you confirm you have authority to bind that organization.</p>
        </Section>

        <Section n="2" title="The service">
          <p>Propria provides a cloud-based platform for community land trust management, including stewardship tracking, applicant pipeline management, financial tools, homebuyer education, counselor network access, and NRI intelligence features. We grant you a non-exclusive, non-transferable license to use the platform for your CLT operations.</p>
          <p><strong>What you may not do:</strong> Resell or sublicense access. Use the platform for any purpose other than CLT operations. Attempt to reverse engineer, scrape, or extract data from other CLT tenants. Interfere with platform operations or security. Use the platform to store or transmit malicious code.</p>
        </Section>

        <Section n="3" title="Accounts and access">
          <p>You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. CLT administrators control user access within their organization. Propria may suspend accounts that violate these terms or exhibit unauthorized activity.</p>
          <p><strong>Roles:</strong> The platform supports multiple roles (coordinator, director, homeowner, applicant, counselor). Each role has access scoped to the data appropriate for that role. Administrators are responsible for assigning correct roles.</p>
        </Section>

        <Section n="4" title="Billing and payments">
          <p><strong>Subscription:</strong> $49/month base for up to 25 homes, plus $3/home/month beyond 25, capped at $1,200/month. Billing is monthly via Stripe. Subscriptions auto-renew unless cancelled before the next billing date.</p>
          <p><strong>Transaction fees:</strong> 1.5% on ground lease collection and contractor payments processed through Stripe Connect. $250 flat fee per completed resale transaction. $0 on grant disbursements — we never take a cut of grant money.</p>
          <p><strong>Price changes:</strong> We will provide at least 30 days notice before any price increase. Changes take effect on the next billing cycle.</p>
          <p><strong>Refunds:</strong> We do not offer refunds for partial months. If you cancel mid-cycle, you retain access through the end of your current billing period.</p>
          <p><strong>CCHD/HUD grant eligibility:</strong> Propria subscriptions are eligible operational expenses under most CLT grant programs, including CCHD grants. We can provide invoices formatted for grant reporting.</p>
        </Section>

        <Section n="5" title="Your data">
          <p><strong>Ownership:</strong> You own your data. We do not claim any intellectual property rights over CLT data, homeowner records, stewardship notes, or any content you enter into the platform.</p>
          <p><strong>Export:</strong> You may export all your data at any time in CSV, JSON, or PDF format at no cost. We will never hold your data hostage or charge for export.</p>
          <p><strong>Deletion:</strong> When you cancel, we retain your data for 90 days in case of reactivation, then permanently delete it. You may request immediate deletion at any time.</p>
          <p><strong>Privacy:</strong> Our handling of personal information is governed by our <a href="#/privacy" style={{color:'var(--forest)'}}>Privacy Policy</a>.</p>
        </Section>

        <Section n="6" title="NRI and AI features">
          <p>NRI (Natural Relational Intelligence) generates nudges, reports, and insights from your CLT's data. NRI is deterministic for suggestions (no hallucination in nudge logic) and AI-powered for narrative generation (reports, site content).</p>
          <p><strong>What NRI does not do:</strong> NRI never takes action without your confirmation. NRI does not store conversation content beyond the session. NRI does not use your data to train models. NRI does not share your data with other CLT tenants.</p>
        </Section>

        <Section n="7" title="Homeowner and applicant portals">
          <p>The homeowner portal is provided free to all families served by a subscribing CLT. Homeowner portal access is contingent on the CLT maintaining an active subscription. If a CLT cancels, homeowner portal access is suspended after the retention period.</p>
        </Section>

        <Section n="8" title="Third-party integrations">
          <p>Propria integrates with Stripe (payments), Gmail (email), Google Meet (video sessions), and Read.ai (session summaries). Each integration is optional and activated by the CLT administrator. Third-party services are governed by their own terms. We are not responsible for third-party service availability or data handling.</p>
        </Section>

        <Section n="9" title="Disclaimers">
          <p>Propria is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service. We do not provide legal, financial, or tax advice. Resale formula calculations are estimates — official determinations are made by the CLT. HUD-9902 reports generated by NRI are drafts that must be reviewed by qualified staff before submission.</p>
        </Section>

        <Section n="10" title="Limitation of liability">
          <p>To the maximum extent permitted by law, Propria's total liability for any claim arising from these terms or use of the platform is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages.</p>
        </Section>

        <Section n="11" title="Termination">
          <p>Either party may terminate at any time. You may cancel through your account settings or by contacting support. We may terminate for violation of these terms with 30 days notice (or immediately for egregious violations). Upon termination, the data export and retention provisions in Section 5 apply.</p>
        </Section>

        <Section n="12" title="Governing law">
          <p>These terms are governed by the laws of the State of Minnesota. Any disputes will be resolved through binding arbitration under the rules of the American Arbitration Association, or in the courts of Ramsey County, Minnesota.</p>
        </Section>

        <Section n="13" title="Changes to these terms">
          <p>We may modify these terms with at least 30 days notice to CLT administrators. Material changes require explicit acceptance. Continued use after the notice period constitutes acceptance.</p>
        </Section>

        <Section n="14" title="Contact">
          <p><strong>Email:</strong> legal@propria.app<br/><strong>Mail:</strong> Propria · propria.app</p>
        </Section>

        <div style={{borderTop:'1px solid var(--border)',paddingTop:24,marginTop:40,display:'flex',gap:20,fontFamily:'var(--sans)',fontSize:13,color:'var(--ink-faint)'}}>
          <a href="#/terms" style={{color:'var(--forest)',textDecoration:'none',fontWeight:500}}>Terms of Service</a>
          <a href="#/privacy" style={{color:'var(--forest)',textDecoration:'none'}}>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{marginBottom:32}}>
      <h2 style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.01em',marginBottom:8}}>{n}. {title}</h2>
      <div style={{fontWeight:300,color:'var(--ink-mid)'}}>{children}</div>
    </div>
  )
}
