import '../views/Marketing.css'

const SIGNUP_URL = 'https://propria.app/signup'

export default function Privacy() {
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
        <h1 style={{fontFamily:'var(--serif-display)',fontSize:'clamp(28px,4vw,42px)',fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:8}}>Privacy Policy</h1>
        <p style={{fontSize:14,color:'var(--ink-faint)',fontFamily:'var(--sans)',marginBottom:40}}>Effective August 4, 2026 · Last updated August 4, 2026</p>

        <div style={{background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'16px 20px',marginBottom:40}}>
          <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--forest)',marginBottom:6}}>Our promise</div>
          <p style={{fontSize:15,color:'#633806',fontWeight:300,margin:0}}>Propria exists to serve community land trusts and the families they steward. We will never sell your personal information. We collect only what we need to run the platform. We are transparent about what we collect and why. Your data belongs to you — export it anytime, in full, at no cost.</p>
        </div>

        <Section n="1" title="Who this policy covers">
          <p>This policy applies to everyone who interacts with Propria:</p>
          <ul>
            <li><strong>CLT staff</strong> — coordinators, directors, and administrators who use the platform to manage stewardship relationships</li>
            <li><strong>Homeowners</strong> — families who access the homeowner portal to view equity, payments, and community information</li>
            <li><strong>Applicants</strong> — individuals in the CLT pipeline tracking their application progress</li>
            <li><strong>Counselors</strong> — HUD-certified housing counselors using the counselor dashboard</li>
            <li><strong>Website visitors</strong> — anyone who visits propria.app or a CLT website built with Propria</li>
          </ul>
        </Section>

        <Section n="2" title="What we collect">
          <p><strong>Account information:</strong> Name, email address, phone number, role, and CLT affiliation. Collected at signup and editable anytime.</p>
          <p><strong>Housing data:</strong> Property addresses, purchase prices, ground lease fees, equity calculations, payment history, maintenance records, and stewardship notes. This data is entered by CLT staff or imported via Magic Import. It is scoped to each CLT tenant and never shared across organizations.</p>
          <p><strong>Usage data:</strong> We log anonymized events (page views, feature usage, signal emissions) to improve the product. We never store the content of NRI conversations, pastoral notes, or personal communications in our analytics — only category-level signals.</p>
          <p><strong>Payment data:</strong> Processed by Stripe. We never see or store full credit card numbers. Stripe handles PCI compliance.</p>
          <p><strong>Cookies:</strong> We use essential cookies for authentication and session management. We use one analytics cookie (privacy-respecting, no cross-site tracking). No advertising cookies. No third-party tracking pixels.</p>
        </Section>

        <Section n="3" title="How we use your information">
          <ul>
            <li>To provide and operate the Propria platform</li>
            <li>To generate NRI intelligence (nudges, reports, signals) from your CLT's own data</li>
            <li>To process payments via Stripe Connect</li>
            <li>To send transactional emails (payment receipts, session reminders, check-in notifications)</li>
            <li>To improve the product based on anonymized usage patterns</li>
            <li>To comply with legal obligations (HUD reporting, tax requirements)</li>
          </ul>
          <p>We do <strong>not</strong> use your data to train AI models. NRI processes your data in real time to generate reports and nudges, but does not retain conversation content or learn from individual CLT data.</p>
        </Section>

        <Section n="4" title="How we share your information">
          <p>We share data only with the service providers necessary to operate Propria:</p>
          <ul>
            <li><strong>Supabase</strong> — database hosting and authentication</li>
            <li><strong>Stripe</strong> — payment processing</li>
            <li><strong>Anthropic (Claude)</strong> — AI processing for NRI intelligence features</li>
            <li><strong>Google</strong> — Gmail API for CLT staff email (only when staff connects their own Gmail)</li>
          </ul>
          <p>We never sell personal information. We never share data between CLT tenants. We never provide homeowner data to third parties for marketing purposes.</p>
        </Section>

        <Section n="5" title="Data isolation and multi-tenancy">
          <p>Each CLT is a separate tenant. Data is isolated at the database level using row-level security policies. A coordinator at Rondo CLT cannot see data from any other CLT. A homeowner can only see their own record. This isolation is enforced at the query level, not just the UI level.</p>
        </Section>

        <Section n="6" title="Your rights">
          <p>Regardless of where you live, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal data at any time through the platform</li>
            <li><strong>Export</strong> all your data as CSV, JSON, or PDF — at no cost</li>
            <li><strong>Correct</strong> inaccurate information through your account settings</li>
            <li><strong>Delete</strong> your account and all associated data by contacting your CLT administrator or us directly</li>
            <li><strong>Opt out</strong> of non-essential communications at any time</li>
          </ul>
          <p><strong>California residents (CCPA):</strong> You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information. We do not sell personal information.</p>
          <p><strong>EU/UK residents (GDPR):</strong> We process data under legitimate interest (service provision) and contract performance. You may request access, rectification, erasure, restriction, portability, or object to processing. Contact privacy@propria.app.</p>
        </Section>

        <Section n="7" title="Data retention">
          <p>We retain data for as long as your CLT subscription is active. When a CLT cancels, we retain data for 90 days (in case of reactivation), then permanently delete it. Homeowners may request deletion of their personal data independently of their CLT's subscription status.</p>
          <p>Anonymized, aggregated analytics data (e.g., "X% of CLTs use the resale engine") may be retained indefinitely and cannot be traced to individuals.</p>
        </Section>

        <Section n="8" title="Security">
          <p>All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Authentication uses Supabase Auth with bcrypt password hashing. Row-level security policies enforce data isolation at the database level. Pastoral notes and confidential stewardship content receive the same encryption as all other data.</p>
        </Section>

        <Section n="9" title="Children's privacy">
          <p>Propria is not directed at children under 13. We do not knowingly collect personal information from children. If we learn we have collected data from a child under 13, we will delete it promptly.</p>
        </Section>

        <Section n="10" title="Changes to this policy">
          <p>We will notify CLT administrators by email at least 30 days before any material changes to this policy. Non-material changes (clarifications, formatting) may be made without notice. The "last updated" date at the top of this page always reflects the most recent version.</p>
        </Section>

        <Section n="11" title="Contact">
          <p>For privacy questions, data requests, or concerns:</p>
          <p><strong>Email:</strong> privacy@propria.app<br/><strong>Mail:</strong> Propria · propria.app</p>
        </Section>

        <div style={{borderTop:'1px solid var(--border)',paddingTop:24,marginTop:40,display:'flex',gap:20,fontFamily:'var(--sans)',fontSize:13,color:'var(--ink-faint)'}}>
          <a href="#/terms" style={{color:'var(--forest)',textDecoration:'none'}}>Terms of Service</a>
          <a href="#/privacy" style={{color:'var(--forest)',textDecoration:'none',fontWeight:500}}>Privacy Policy</a>
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
