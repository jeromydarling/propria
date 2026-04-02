import './Marketing.css'

export default function Marketing() {
  return (
    <div className="mkt">
      {/* NAV */}
      <nav>
        <a href="#" className="nav-brand">Propria<span>.</span></a>
        <button className="nav-hamburger" aria-label="Menu">
          <svg viewBox="0 0 22 16"><path d="M1 1h20M1 8h20M1 15h20" strokeLinecap="round" /></svg>
        </button>
        <ul className="nav-links">
          <li><a href="#platform">Platform</a></li>
          <li><a href="#stewardship">Stewardship</a></li>
          <li><a href="#network">Counselors</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#demo" className="nav-cta">Request a demo</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-lines" />
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">CROS™ Platform for Community Land Trusts</div>
            <h1>Property for the <em>many,</em><br />not the few.</h1>
            <p className="hero-sub">
              Propria is the operating system for community land trusts — built around the insight
              that your core product is a multi-decade stewardship relationship with each family you serve.
            </p>
            <div className="hero-actions">
              <a href="#demo" className="btn-primary">Request a demo</a>
              <a href="#platform" className="btn-ghost">
                See the platform
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-label">NRI Compass — Rondo CLT</div>
            <div className="hero-card-row">
              <div className="hero-card-icon" />
              <span className="hero-card-name">Maria Torres — 14 Oak St.</span>
              <span className="hero-card-badge">Cura</span>
            </div>
            <div className="hero-card-row">
              <div className="hero-card-icon gold" />
              <span className="hero-card-name">Annual check-in due — 7 families</span>
              <span className="hero-card-badge">Custodia</span>
            </div>
            <div className="hero-card-row">
              <div className="hero-card-icon muted" />
              <span className="hero-card-name">Ground lease collected — 94%</span>
              <span className="hero-card-badge green">On track</span>
            </div>
            <div className="hero-card-divider" />
            <div className="hero-card-stat">
              <span className="hero-card-stat-label">Families in stewardship</span>
              <span className="hero-card-stat-val">47 <small>homes</small></span>
            </div>
            <div className="hero-card-stat" style={{ marginTop: '0.6rem' }}>
              <span className="hero-card-stat-label">Avg. stewardship relationship</span>
              <span className="hero-card-stat-val">8.3 <small>years</small></span>
            </div>
          </div>
        </div>
        <div className="hero-ground" />
      </section>

      {/* CREDIBILITY STRIP */}
      <div className="cred-band">
        <div className="cred-inner">
          <div className="cred-item">
            <div className="cred-num">300+</div>
            <div className="cred-text"><strong>CLTs in the United States</strong>growing rapidly since 2020 as housing costs escalate</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">$400M</div>
            <div className="cred-text"><strong>CCHD investment since 1970</strong>in community-based affordable housing and poverty solutions</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">200+</div>
            <div className="cred-text"><strong>Grounded Solutions members</strong>across 42 states — the national CLT network Propria is built to serve</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <div className="cred-num">$49</div>
            <div className="cred-text"><strong>Starting price per month</strong>for the full platform, NRI included — no tiers, no add-ons</div>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="quote-band">
        <div className="quote-inner">
          <span className="quote-mark">"</span>
          <blockquote>The problem with capitalism is not too much property — it is too few proprietors.</blockquote>
          <p className="quote-attribution">G.K. Chesterton &nbsp;·&nbsp; The Outline of Sanity, 1926</p>
        </div>
      </div>

      {/* CCHD SECTION */}
      <div className="cchd-band">
        <div className="cchd-inner">
          <div>
            <div className="cchd-eyebrow">Institutional Roots</div>
            <h2 className="cchd-headline">Built in the tradition of<br /><em>Catholic Social Teaching.</em></h2>
            <p className="cchd-body">
              The Catholic Campaign for Human Development — the USCCB's primary domestic poverty-fighting
              apparatus — has identified community land trusts as a strategic priority and invested accordingly.
              Propria is built in that tradition: the conviction that widely distributed property ownership is
              the foundation of a free and dignified society.
              <br /><br />
              This is not a niche. The CLT model has the backing of the oldest and largest institutional
              network in American civil society — and it is growing.
            </p>
          </div>
          <div className="cchd-quotes">
            <div className="cchd-pullquote">
              <p>"Shared-equity housing is a uniquely self-sustaining approach. One home can help multiple successive families gain an economic foothold."</p>
              <cite>TONY PICKETT · CEO, Grounded Solutions Network</cite>
            </div>
            <div className="cchd-pullquote">
              <p>"Housing is not just a building on a street — it is a building block for a neighborhood and a community."</p>
              <cite>RALPH McCLOUD · Director, Catholic Campaign for Human Development</cite>
            </div>
            <div className="cchd-pullquote">
              <p>"We want to be a person's first call, not their last, if they have a financial setback and need help."</p>
              <cite>GARRICK GOOD · Executive Director, Northeast Housing Initiative</cite>
            </div>
          </div>
        </div>
      </div>

      {/* PLATFORM INTRO */}
      <section id="platform" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <p className="section-eyebrow">The Platform</p>
          <h2 className="section-title">Everything a CLT needs. Nothing it doesn't.</h2>
          <p className="section-body">
            CLTs have been held together by Salesforce configurations nobody understands, spreadsheets
            that break on turnover, and property management software designed for landlords. Propria is
            built for what you actually do — stewarding families through decades of ownership.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="modules-section" id="stewardship" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="modules-grid">
            <div className="module-card heart">
              <div className="module-number">II</div>
              <div className="module-name">Stewardship</div>
              <div className="module-latin">The heart of Propria</div>
              <div className="module-desc">
                A relational dashboard for every homeowner: contact history, life events, maintenance,
                financial health signals, lease compliance, and NRI-generated prompts. The software
                equivalent of a great stewardship coordinator who forgets nothing.
              </div>
            </div>
            <div className="module-card">
              <div className="module-number">I</div>
              <div className="module-name">Applicant Pipeline</div>
              <div className="module-latin">Iter — the journey</div>
              <div className="module-desc">
                Intake forms, income verification, education enrollment, waitlist scoring, and automated
                signals when documentation expires.
              </div>
            </div>
            <div className="module-card">
              <div className="module-number">III</div>
              <div className="module-name">Resale Engine</div>
              <div className="module-latin">Translatio — transfer</div>
              <div className="module-desc">
                Formula configuration per CLT, equity tracking, intent-to-sell workflow, buyer matching,
                closing management, and fee collection via Stripe.
              </div>
            </div>
            <div className="module-card">
              <div className="module-number">IV</div>
              <div className="module-name">Asset Management</div>
              <div className="module-latin">Domus — the house</div>
              <div className="module-desc">
                Property records, inspection schedules, repair history, capital forecasting, contractor
                directory, and split invoicing.
              </div>
            </div>
            <div className="module-card">
              <div className="module-number">V</div>
              <div className="module-name">Governance & Community</div>
              <div className="module-latin">Communitas — together</div>
              <div className="module-desc">
                Board documents, meeting minutes, homeowner assembly, committee management, community
                events, and volunteer tracking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NRI */}
      <section className="nri-section">
        <div className="section-inner">
          <div className="nri-inner">
            <div>
              <p className="section-eyebrow">NRI Intelligence</p>
              <h2 className="section-title">The stewardship coordinator who <em>sees everything.</em></h2>
              <p className="section-body" style={{ marginBottom: '1.5rem' }}>
                Narrative Relational Intelligence runs beneath every screen in Propria, detecting signals
                at genuine value moments — disengagement risk, financial stress, maintenance urgency,
                stewardship success. It surfaces what needs your attention, when it matters, without burying
                you in notifications.
              </p>
              <p className="section-body">
                Content is never stored. Only category signals flow to your dashboard. NRI is included in
                every subscription — no tiers, no add-ons.
              </p>
            </div>
            <div className="nri-signals">
              <div className="nri-signal-header">
                <div className="nri-dot" />
                <span className="nri-title">NRI Compass — Today</span>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir cura">Cura</div>
                <div className="nri-card-msg">Maria Torres hasn't responded to 2 check-in attempts. Last contact was 23 days ago.</div>
                <div className="nri-card-action">→ Open stewardship record</div>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir reconciliatio">Reconciliatio</div>
                <div className="nri-card-msg">3 homeowners have ground lease payments 7+ days overdue, totaling $185.</div>
                <div className="nri-card-action">→ Send payment reminders</div>
              </div>
              <div className="nri-card">
                <div className="nri-card-dir custodia">Custodia</div>
                <div className="nri-card-msg">7 families are due for their annual check-in this quarter. Schedule before March ends.</div>
                <div className="nri-card-action">→ View check-in queue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUNDED SOLUTIONS BAND */}
      <div className="grounded-band">
        <div className="grounded-inner">
          <div>
            <div className="grounded-label">The Network</div>
            <h2 className="grounded-headline">Built for the <em>Grounded Solutions</em> ecosystem.</h2>
            <p className="grounded-body">
              Grounded Solutions Network is the national backbone of the CLT movement — 200+ member
              organizations, a training institute reaching 1,000+ practitioners annually, and the deepest
              policy expertise in shared-equity housing. Propria is built to serve every one of their
              members, from a 20-home startup CLT to a 500-home anchor institution.
              <br /><br />
              The long tail of the CLT market — small organizations with 1–3 staff and $200–400K budgets —
              is where growth is happening. That's exactly who Propria is priced and built for.
            </p>
          </div>
          <div className="grounded-stats">
            <div className="grounded-stat">
              <div className="grounded-stat-num">42</div>
              <div className="grounded-stat-label">States with Grounded Solutions member organizations</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">1K+</div>
              <div className="grounded-stat-label">Practitioners reached annually through the GSN training institute</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">$350K</div>
              <div className="grounded-stat-label">Median home price — double what it was a decade ago</div>
            </div>
            <div className="grounded-stat">
              <div className="grounded-stat-num">1 in 6</div>
              <div className="grounded-stat-label">Households under $75K paying more than half their income on housing</div>
            </div>
          </div>
        </div>
      </div>

      {/* COUNSELOR NETWORK */}
      <div className="ground-line" />
      <section className="network-section" id="network">
        <div className="section-inner">
          <p className="section-eyebrow">Propria Counselor Network</p>
          <h2 className="section-title">HUD-certified counselors.<br /><em>Built in,</em> not bolted on.</h2>
          <p className="section-body" style={{ marginBottom: 0 }}>
            Every buyer needs homebuyer education and a counseling session. Propria connects them with
            HUD-certified housing counselors from any approved agency nationwide — matched by state,
            language, availability, and CLT experience.
          </p>
          <div className="network-grid">
            <div className="network-cell">
              <div className="network-cell-num">300+</div>
              <div className="network-cell-label">CLTs in the US, growing rapidly since 2020</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">2–3×</div>
              <div className="network-cell-label">More clients per counselor hour vs. group classes</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">$95</div>
              <div className="network-cell-label">Per buyer for standalone education — included free for subscribers</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">10–12</div>
              <div className="network-cell-label">Self-paced modules covering CLT-specific ownership</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">EN + ES</div>
              <div className="network-cell-label">Multilingual from day one, expanding with local CLT demographics</div>
            </div>
            <div className="network-cell">
              <div className="network-cell-num">$0</div>
              <div className="network-cell-label">Transaction fee on grant disbursements — we never take a cut of grant money</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="section-inner">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">One plan. Every feature.<br />No tiers.</h2>
          <p className="section-body">
            A 30-home CLT and a 500-home CLT get the exact same product. We don't gate NRI, don't charge
            extra for counselors, and don't have an enterprise tier that requires a call.
          </p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-plan">Base</div>
              <div className="pricing-price"><sup>$</sup>49<sub>/mo</sub></div>
              <div className="pricing-desc">Up to 25 homes. Full platform, NRI included. No setup fees.</div>
              <ul className="pricing-features">
                <li>All five core modules</li>
                <li>NRI Compass intelligence</li>
                <li>Homeowner portal (free for families)</li>
                <li>Homebuyer education course</li>
                <li>Counselor network access</li>
                <li>Stripe Connect payments</li>
              </ul>
              <a href="#demo" className="btn-pricing">Start with base</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-plan">Per home</div>
              <div className="pricing-price"><sup>$</sup>3<sub>/home/mo beyond 25</sub></div>
              <div className="pricing-desc">Scales with your portfolio. Capped at $1,200/mo regardless of size.</div>
              <ul className="pricing-features">
                <li>50 homes → $124/mo</li>
                <li>100 homes → $274/mo</li>
                <li>150 homes → $424/mo</li>
                <li>300 homes → $874/mo</li>
                <li>500+ homes → $1,200/mo cap</li>
                <li>Everything in base, always</li>
              </ul>
              <a href="#demo" className="btn-pricing">Request a demo</a>
            </div>
          </div>
          <p className="pricing-note">+ 1.5% on ground lease collection and contractor payments &nbsp;·&nbsp; $250 flat per resale &nbsp;·&nbsp; $0 on grant disbursements</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">Propria.</div>
            <div className="footer-brand-tag">Properly yours.</div>
          </div>
          <div>
            <div className="footer-col-title">Platform</div>
            <ul className="footer-links">
              <li>Stewardship</li>
              <li>Applicant Pipeline</li>
              <li>Resale Engine</li>
              <li>Asset Management</li>
              <li>Governance</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Network</div>
            <ul className="footer-links">
              <li>Counselor signup</li>
              <li>Agency onboarding</li>
              <li>Homebuyer Education</li>
              <li>HUD compliance</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li>About CROS™</li>
              <li>Grounded Solutions</li>
              <li>Request a demo</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Propria · propria.app</span>
          <span className="footer-cros">A <span>CROS™</span> Platform</span>
        </div>
      </footer>
    </div>
  )
}
