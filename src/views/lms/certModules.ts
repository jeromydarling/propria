import type { CourseModule } from "./types"

export const CERT_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'CLT Mechanics for Counselors',
    meta: '7 lessons · 50–60 min · Quiz: 10 questions',
    passing: 8,
    screens: [
      {
        title: 'What\'s different about counseling a CLT buyer',
        body: `<p>As a HUD counselor, you already know homebuyer fundamentals. Your CLT clients need something more specific: a counselor who can explain shared equity mechanics, read a ground lease with them, work through a resale formula, and flag financing issues before they become closing problems.</p>
<p>This certification is about that gap — not re-teaching you homebuyer ed, but giving you the CLT-specific competencies your clients need and most counselors don\'t have.</p>
<p><strong>The core tension you\'ll manage:</strong> CLT homeownership is genuinely good for clients — affordable entry, real equity, stable community. But it comes with restrictions that feel unfamiliar. Your job is to help clients understand those restrictions clearly enough to make an informed decision, not to oversell or undersell the model.</p>`,
        callout: { label: 'Professional framing', text: 'Your role is informed consent and honest assessment — not transaction facilitation and not program promotion.' }
      },
      {
        title: 'Formula types: fixed-rate, appraisal-based, and indexed',
        body: `<p>There are three common resale formula types. You need to be fluent in all three because your clients will have different CLTs using different approaches.</p>`,
        formulas: [
          { label: 'Fixed-rate appreciation', eq: 'Purchase price + (Purchase × Rate × Years) + Improvements', example: '$180,000 purchase · 1.5%/yr · 8 years · $4,000 improvements → $205,600 max resale\n\nClient implication: predictable, easy to explain, doesn\'t track market — may capture very little of gains in fast-appreciating markets.' },
          { label: 'Appraisal-based', eq: 'Purchase price + (X% × Market appreciation at resale)', example: '$160,000 purchase · $220,000 appraised at resale · 25% share → $175,000 max resale\n\nClient implication: more upside in hot markets, more variable for planning.' },
          { label: 'Indexed (AMI, CPI, or wage index)', eq: 'Purchase price adjusted by external index change', example: 'Less common but most mission-aligned — ensures next buyer can afford regardless of market conditions.' }
        ],
        callout: { label: 'Counseling implication', text: 'Always confirm which formula type your client\'s specific CLT uses before the session. The formula shapes everything about how you help them plan.' }
      },
      {
        title: 'Reading a ground lease with a client',
        body: `<p>The ground lease is the document most CLT buyers find most intimidating. Your job is to walk through the key provisions — not to provide legal advice, but to ensure the client understands what they\'re signing.</p>
<h4>8 provisions to cover in every CLT session</h4>
<ol>
<li><strong>Term and renewal</strong> — Is it 99 years? Does it auto-renew?</li>
<li><strong>Monthly ground lease fee</strong> — Amount, escalation clause, consequences of non-payment</li>
<li><strong>Occupancy requirements</strong> — Primary residence, subletting rules</li>
<li><strong>Resale restrictions</strong> — Formula, right of first refusal, timeline</li>
<li><strong>Refinancing provisions</strong> — What requires CLT approval</li>
<li><strong>Improvement credits</strong> — What qualifies, how to document</li>
<li><strong>Inheritance and transfer</strong> — Who can inherit, eligibility requirements</li>
<li><strong>Default and cure</strong> — What constitutes a lease violation, CLT cure rights</li>
</ol>`,
        callout: { label: 'Documentation note', text: 'Your session notes should confirm which provisions you covered and that the client demonstrated understanding. The CLT\'s stewardship record will reference your session.' }
      },
      {
        title: 'Equity planning: setting realistic expectations',
        body: `<p>This is where counselors add the most value and where the most misunderstandings occur.</p>
<h4>What to cover</h4>
<p><strong>Principal paydown:</strong> Works exactly the same as any mortgage. After 8 years on a $170,000 mortgage at 6.5%, the client will have paid down roughly $18,000–$22,000. That\'s theirs at resale, no formula applied.</p>
<p><strong>Appreciation share:</strong> Apply the formula. Walk through the math with real numbers from their specific CLT and anticipated purchase price. Show what equity looks like at year 5, year 8, year 12.</p>
<p><strong>Improvement credits:</strong> Approved improvements with documentation and CLT sign-off can increase the resale price. Unapproved improvements typically don\'t count.</p>
<p><strong>Total at resale:</strong> For most CLT sellers after 7–10 years, this is $20,000–$45,000 — often enough for a conventional down payment.</p>`,
        callout: { label: 'Critical framing', text: 'The comparison that matters is CLT equity vs. renting — not CLT equity vs. market-rate ownership. Don\'t let clients make the wrong comparison.' }
      },
      {
        title: 'Financing constraints: what counselors must know',
        body: `<p><strong>Fannie Mae CLT guidelines:</strong> Fannie Mae will purchase loans on CLT properties when the ground lease meets specific requirements — primarily a lease addendum that subordinates the CLT\'s interest to the mortgage in certain default scenarios. Not all CLTs use Fannie Mae-compatible leases. Confirm before the client shops lenders.</p>
<p><strong>FHA:</strong> FHA will insure loans on CLT properties under conditions established in HUD Mortgagee Letter 2014-12. The ground lease must meet minimum requirements for term, transferability, and lender protections.</p>
<p><strong>Lender familiarity:</strong> Many loan officers have never seen a CLT ground lease. An unfamiliar lender can cause a closing to fail at the last minute when underwriting sees the ground lease for the first time. CLT-familiar lenders are strongly preferred.</p>
<p><strong>Refinancing:</strong> Clients need CLT approval before refinancing. A refinance without CLT review can trigger a lease violation, strip equity beyond formula limits, or create unsupported mortgage terms.</p>`,
        callout: { label: 'Pre-session checklist item', text: 'Confirm lender compatibility before the client applies. An incompatible lender is the most common cause of last-minute CLT closing failures.' }
      },
      {
        title: 'The post-session assessment',
        body: `<p>After every CLT counseling session, the buyer completes a short comprehension assessment in Propria. This is a documentation tool and quality check — not a substitute for your session.</p>
<p>The assessment covers: their specific CLT\'s resale formula (with actual numbers), key ground lease provisions, financing obligations, the refinancing approval requirement, and the resale notification process.</p>
<h4>Your role</h4>
<p>After the session, mark it complete in Propria. The system triggers the buyer\'s post-session assessment. You\'ll see their results in your dashboard.</p>
<p><strong>Score below 70%:</strong> Propria flags it and you should schedule a follow-up. You\'ll see which specific questions they missed — use that to target the gaps.</p>
<p>Your session must be documented in Propria before the buyer can advance in the CLT\'s pipeline. Your documentation feeds both your HUD 9902 reporting and the CLT\'s stewardship record.</p>`,
        callout: { label: 'Documentation note', text: 'Your Propria session record and your HUD 9902 report reference each other. Document within 48 hours.' }
      },
      {
        title: 'Module 1 recap',
        isRecap: true,
        body: `<ul>
<li>Know the three formula types. Work through the math before every session.</li>
<li>Read the ground lease before the session. Cover all 8 key provisions in every session.</li>
<li>Equity planning means principal paydown + appreciation share + improvement credits.</li>
<li>Confirm lender compatibility early. Unfamiliar lenders kill CLT closings.</li>
<li>Document in Propria within 48 hours. The buyer\'s post-session assessment depends on it.</li>
</ul>`
      }
    ],
    quiz: [
      { q: 'A CLT uses a fixed-rate formula of 2%/year. Home purchased for $175,000 sells after 6 years with $3,500 in approved improvements. What is the maximum resale price?', opts: ['$175,000','$189,500','$199,500','$178,500'], correct: 2 },
      { q: 'A client\'s CLT uses an appraisal-based formula giving sellers 30% of appreciation. Purchased for $155,000, appraised at $210,000 at resale. What is their appreciation share?', opts: ['$16,500','$63,000','$46,500','$55,000'], correct: 0 },
      { q: 'Which ground lease provision has the most direct impact on a client\'s ability to get conventional financing?', opts: ['The monthly ground lease fee amount','Whether the lease meets Fannie Mae\'s addendum requirements','The occupancy requirements for subletting','The improvement credit documentation process'], correct: 1 },
      { q: 'A client wants to compare CLT equity to what they\'d make selling a market-rate home. What is the most accurate counseling response?', opts: ['Agree — the comparison shows CLT is always inferior','Redirect to CLT equity vs. renting, not vs. unrestricted ownership','Tell them CLT equity always exceeds market-rate equity','Decline to discuss equity at all'], correct: 1 },
      { q: 'A buyer refinances without CLT approval six months after closing. What is the most serious potential consequence?', opts: ['A minor fee from the CLT','Their interest rate increases','A lease violation that could put their occupancy at risk, plus potential equity stripping','No consequence — the CLT only controls resale'], correct: 2 },
      { q: 'Which of the following is NOT a standard provision to cover in a CLT counseling session?', opts: ['Term and renewal of the ground lease','The client\'s preferred interior design choices','Default and cure provisions','Refinancing approval requirements'], correct: 1 },
      { q: 'A client\'s home: $140,000 purchase, 7 years, $16,000 principal paydown, $11,000 appreciation share, $3,500 approved improvements. Total equity at resale?', opts: ['$11,000','$27,000','$30,500','$16,000'], correct: 2 },
      { q: 'Why should CLT buyers use CLT-familiar lenders when possible?', opts: ['CLT-familiar lenders always offer lower rates','Unfamiliar lenders may reject the ground lease at underwriting, causing last-minute closing failures','It is a federal requirement for CLT transactions','CLT-familiar lenders waive PMI automatically'], correct: 1 },
      { q: 'A post-session buyer assessment score below what threshold should trigger a counselor follow-up?', opts: ['90%','80%','70%','60%'], correct: 2 },
      { q: 'An indexed formula ties the resale price to which of the following?', opts: ['The counselor\'s assessment of fair value','An external benchmark such as AMI, CPI, or local wage index','The lender\'s current appraisal','The CLT board\'s annual vote'], correct: 1 }
    ]
  },
  {
    id: 2,
    title: 'Conducting the CLT Session',
    meta: '7 lessons · 40–50 min · Quiz: 8 questions',
    passing: 6,
    screens: [
      {
        title: 'Session structure: what a CLT session covers',
        body: `<p>A standard pre-purchase counseling session covers budget, credit, loan shopping, and closing costs. A CLT session covers all of that plus:</p>
<ul>
<li>Ground lease review (30–45 minutes alone)</li>
<li>Resale formula walkthrough with client-specific numbers</li>
<li>Equity planning over 5, 10, and 15-year horizons</li>
<li>Financing constraints and lender compatibility</li>
<li>Stewardship relationship — what the CLT expects after closing</li>
<li>Post-closing obligations — maintenance, occupancy, approval requirements</li>
</ul>
<p>Plan for <strong>90 minutes minimum</strong> for a first-time CLT buyer. Budget review alone can be 20–30 minutes. Ground lease review another 30–45. The formula walkthrough 15–20.</p>`,
        callout: { label: 'Time planning', text: '90 minutes is a minimum, not a target. Clients who rush through the ground lease review make decisions without understanding what they\'ve agreed to.' }
      },
      {
        title: 'Pre-session preparation',
        body: `<p>Before you sit down with the client:</p>
<ol>
<li><strong>Pull their CLT\'s ground lease.</strong> If you don\'t have it, request it from the CLT. Don\'t improvise.</li>
<li><strong>Identify the formula type and parameters.</strong> Know the rate, the base, whether improvements qualify, and the right-of-first-refusal timeline.</li>
<li><strong>Calculate their preliminary equity projection.</strong> Run the formula at years 5, 8, and 12 with an estimated purchase price.</li>
<li><strong>Check lender compatibility.</strong> Does the CLT have a preferred lender list? Is the client\'s lender CLT-familiar?</li>
<li><strong>Review their financial picture.</strong> Budget, income stability, existing debt, credit profile.</li>
<li><strong>Know the CLT\'s stewardship model.</strong> Light-touch or intensive? Who is the coordinator?</li>
</ol>`,
        callout: { label: 'Non-negotiable', text: 'Never conduct a CLT session without having read the specific CLT\'s ground lease first. Generic knowledge is not sufficient.' }
      },
      {
        title: 'Explaining the ground lease to a client',
        body: `<p><strong>Start with the concept, not the document.</strong> "Before we look at the actual language, let me explain what this agreement does." The CLT owns the land. You own the home. The lease defines how that relationship works.</p>
<p><strong>Use the analogy carefully.</strong> Some counselors use a land lease analogy to mobile home parks. Be careful — those comparisons can make CLT ownership sound more precarious than it is. The 99-year term and strong occupancy rights make this fundamentally different from a rental relationship.</p>
<p><strong>Walk the provisions in order.</strong> Use a checklist. Confirm they understand each one before moving on. Note any provisions they find confusing.</p>
<p><strong>End with the question:</strong> "What questions do you have about anything in this document?" Don\'t rush past this. Uninformed buyers make bad decisions.</p>`,
        callout: { label: 'Session quality indicator', text: 'If a client has no questions after the ground lease walkthrough, they either understood everything perfectly or they didn\'t engage. Know which it is.' }
      },
      {
        title: 'Documenting the session in Propria',
        body: `<p>After the session, complete your documentation in Propria <strong>within 48 hours.</strong> The record includes:</p>
<ul>
<li>Session date, duration, and format (in-person, phone, video)</li>
<li>Client name and CLT program</li>
<li>Topics covered — ground lease provisions, formula walkthrough, financing, equity planning, post-closing obligations</li>
<li>Client comprehension notes — provisions they found unclear, questions asked, follow-up items</li>
<li>Recommendation: Ready to proceed / Needs follow-up / Not yet ready</li>
<li>Your certification number</li>
</ul>
<p>This documentation feeds both your <strong>HUD 9902 reporting</strong> and the <strong>CLT\'s stewardship record.</strong> The CLT coordinator can see your topic checklist and recommendation (not your confidential notes) and will use them in their ongoing stewardship relationship with the homeowner.</p>`
      },
      {
        title: 'When to recommend not proceeding',
        body: `<p>Not every client who wants a CLT home is ready for one right now. Your professional obligation is honest assessment — even when the client is eager and the CLT wants to fill homes.</p>
<h4>Situations that warrant "not yet ready"</h4>
<ul>
<li>DTI above 43% with no near-term paydown plan</li>
<li>Income instability making the full monthly cost unsustainable</li>
<li>Credit profile that will only qualify for predatory loan terms</li>
<li>Client demonstrates fundamental misunderstanding of resale restrictions that can\'t be resolved in session</li>
<li>Client expects CLT ownership to function like market-rate investment property</li>
</ul>`,
        callout: { label: 'Documentation', text: '"Not yet ready" in Propria triggers a 90-day flag and optional action plan. The CLT sees the flag. Your notes should document specific concerns and what would need to change.' }
      },
      {
        title: 'Follow-up and the post-session assessment',
        body: `<p>After you mark the session complete in Propria, the buyer receives their post-session assessment — 10 questions calibrated to their specific CLT\'s formula and ground lease terms.</p>
<h4>Score thresholds</h4>
<p><strong>70%+:</strong> Session complete. Buyer advances in the CLT\'s pipeline.</p>
<p><strong>Below 70%:</strong> Propria flags you. Schedule a 30-minute follow-up. You\'ll see which questions they missed — use that to target the gaps.</p>
<p><strong>After follow-up:</strong> The buyer retakes the assessment. Subsequent results are also visible in your dashboard and attached to their CLT pipeline record.</p>`,
        callout: { label: 'CLT visibility', text: 'If a buyer scored 55% on resale formula questions, the CLT coordinator sees that and will reinforce it in their stewardship check-ins. Your session quality has downstream effects.' }
      },
      {
        title: 'Module 2 recap',
        isRecap: true,
        body: `<ul>
<li>90 minutes minimum for a first-time CLT buyer session.</li>
<li>Prepare before the session — pull the ground lease, run the formula, check lender compatibility.</li>
<li>Explain concept first, review document language second.</li>
<li>Document in Propria within 48 hours — topics, comprehension notes, recommendation.</li>
<li>"Not yet ready" is a professional obligation, not a failure.</li>
<li>Monitor post-session assessment results. Follow up on scores below 70%.</li>
</ul>`
      }
    ],
    quiz: [
      { q: 'What is the minimum recommended session length for a first-time CLT buyer?', opts: ['45 minutes','60 minutes','90 minutes','2 hours'], correct: 2 },
      { q: 'A counselor is preparing for a CLT session but doesn\'t have the client\'s ground lease. What should they do?', opts: ['Proceed without it — ground leases are standardized','Request it from the CLT before the session','Ask the client to bring their own copy','Use a sample ground lease from a different CLT'], correct: 1 },
      { q: 'A client\'s DTI is 46% including the CLT home\'s full cost. They are enthusiastic. What is the correct approach?', opts: ['Proceed — enthusiasm indicates readiness','Recommend strongly since CLT homes are affordable','Assess sustainability honestly and potentially recommend "not yet ready"','Refer to the CLT to make the decision'], correct: 2 },
      { q: 'What is the documentation deadline for a CLT session in Propria?', opts: ['24 hours','48 hours','7 days','Before the buyer\'s next appointment'], correct: 1 },
      { q: 'A buyer scores 62% on the post-session assessment. What happens?', opts: ['The buyer passes — 62% is above failing','The counselor is notified and should schedule a follow-up','The CLT automatically reschedules a full counseling session','The buyer restarts homebuyer education'], correct: 1 },
      { q: 'When explaining the ground lease, what should a counselor do first?', opts: ['Hand the client the document to read silently','Explain the concept before reviewing the document language','Focus only on the resale formula section','Have the client sign an acknowledgment first'], correct: 1 },
      { q: 'Which is NOT included in the Propria session documentation record?', opts: ['Topics covered checklist','Client\'s 7-year credit score history','Counselor recommendation — ready / needs follow-up / not yet ready','Session date and format'], correct: 1 },
      { q: 'After a session, a client demonstrates persistent misunderstanding of resale restrictions. What should be documented?', opts: ['Ready to proceed — they attended the session','Not yet ready — with specific documentation of the unresolved gap','Needs follow-up — with a second session addressing only resale','Either "not yet ready" or "needs follow-up" depending on counselor judgment'], correct: 3 }
    ]
  },
  {
    id: 3,
    title: 'Financing, Fair Housing & Ethics',
    meta: '6 lessons · 35–45 min · Quiz: 8 questions',
    passing: 6,
    screens: [
      {
        title: 'Fannie Mae CLT guidelines in practice',
        body: `<p>Fannie Mae\'s Selling Guide addresses CLT properties under specific provisions. Key requirements:</p>
<ul>
<li>The ground lease must include a Fannie Mae-approved lease addendum (or equivalent language)</li>
<li>The lease must have an initial term of at least 35 years from the mortgage date</li>
<li>The lease must allow the lender to foreclose or take title in the event of default</li>
<li>The lease must give the lender the right to cure a homeowner default before the CLT can terminate the lease</li>
<li>The lease must allow the homeowner to sell or transfer the property, subject to CLT restrictions</li>
</ul>`,
        callout: { label: 'Counseling implication', text: 'Confirm the client\'s CLT uses a Fannie Mae-compatible lease addendum before the client applies. An incompatible lease will be rejected at underwriting.' }
      },
      {
        title: 'FHA and other financing options',
        body: `<p><strong>FHA:</strong> FHA will insure mortgages on CLT properties when the ground lease meets HUD requirements established in Mortgagee Letter 2014-12. The ground lease must exceed the mortgage term and include lender protection provisions similar to Fannie Mae\'s requirements.</p>
<p><strong>State and local programs:</strong> Many states and municipalities have programs specifically designed for CLT buyers — down payment assistance, subsidized second mortgages, or CLT-specific loan products. Know what\'s available in your market.</p>
<p><strong>USDA:</strong> In rural markets, USDA Section 502 loans can be compatible with CLT ownership when the program and lease structure meet USDA\'s requirements.</p>
<p><strong>PMI considerations:</strong> Some lenders calculate LTV based on restricted resale value rather than appraised value, which can affect PMI requirements. Flag this in your pre-session checklist.</p>`
      },
      {
        title: 'Fair housing obligations in CLT counseling',
        body: `<p><strong>Income targeting:</strong> CLT programs may target specific income bands. You can counsel clients on whether they meet program criteria without this constituting discriminatory advice — income is not a protected class.</p>
<p><strong>Residency preferences:</strong> Some CLTs give priority to residents of a specific neighborhood. Where lawful, these are neutral program criteria. Be aware of HUD guidance on residency preferences.</p>
<p><strong>Don\'t steer:</strong> Don\'t advise clients toward or away from CLT homeownership based on race, national origin, family status, or any other protected characteristic.</p>
<p><strong>AFFH:</strong> CLT programs receiving federal funding have Affirmatively Furthering Fair Housing obligations. Be aware of whether the CLT\'s marketing reaches protected class members proportionally.</p>`
      },
      {
        title: 'Conflicts of interest and professional ethics',
        body: `<p><strong>CLT referral relationships:</strong> If a CLT refers clients to your agency, you have a relationship that could create pressure to recommend clients as "ready" when they\'re not. Your professional obligation is to the client, not to the referral relationship.</p>
<p><strong>Propria network membership:</strong> Being listed in Propria\'s counselor network means CLTs can direct clients to you. This is a professional listing, not an endorsement relationship. Your assessments remain independent.</p>
<p><strong>Client pressure:</strong> Clients who are eager to buy may push back on a "not yet ready" recommendation. Document your professional reasoning clearly. Your job is informed consent and honest assessment.</p>`,
        callout: { label: 'Professional standard', text: 'No CLT relationship, no referral arrangement, and no client pressure changes your obligation to give an honest professional assessment.' }
      },
      {
        title: 'CEU credits and maintaining CLT certification',
        body: `<p>Your CLT Counselor Certification through Propria requires:</p>
<ul>
<li>Annual recertification (short refresher module + attestation)</li>
<li>Notification of any changes to your HUD counselor certification status</li>
<li>Compliance with Propria\'s 48-hour session documentation standards</li>
<li>Minimum of <strong>2 documented CLT sessions per year</strong> to remain active in the network</li>
</ul>
<p><strong>CEU credit:</strong> This certification course provides 4.0 CEU hours. Documentation of completion is available in your Propria dashboard for submission to your certifying body.</p>
<h4>What changes your certification status</h4>
<ul>
<li>HUD counselor certification lapse → automatic suspension from Propria network</li>
<li>Failure to complete annual recertification → inactive status</li>
<li>Documented professional ethics violation → review and possible removal</li>
</ul>`
      },
      {
        title: 'Module 3 recap',
        isRecap: true,
        body: `<ul>
<li>Fannie Mae and FHA have specific CLT ground lease requirements. Confirm compatibility before clients shop lenders.</li>
<li>Fair housing obligations apply fully — no steering, AFFH awareness, lawful income-targeting guidance.</li>
<li>Your professional obligation is to the client, not the CLT referral relationship.</li>
<li>Maintain annual recertification and 2+ documented CLT sessions per year to remain active in the network.</li>
</ul>`
      }
    ],
    quiz: [
      { q: 'Fannie Mae requires that a CLT ground lease allow the lender to do which of the following?', opts: ['Set the resale formula independently','Foreclose or take title in the event of homeowner default','Charge the CLT a fee for secondary market participation','Override the CLT\'s right of first refusal permanently'], correct: 1 },
      { q: 'A CLT\'s ground lease lacks the Fannie Mae lease addendum. A client applies with a Fannie Mae lender. Most likely outcome?', opts: ['Approved with conditions','Rejected at underwriting','Fannie Mae requests the CLT to modify the lease before closing','Client qualifies for a higher loan amount instead'], correct: 1 },
      { q: 'A CLT refers clients to your agency. A client has DTI 47% and income instability. You assess "not yet ready." The CLT coordinator asks you to reconsider. Your obligation?', opts: ['Defer to the CLT','Change if coordinator provides additional financial information','Maintain independent professional assessment — obligation is to the client','Issue conditional "ready" with CLT responsible for monitoring'], correct: 2 },
      { q: 'A CLT targets buyers at 60–80% AMI. A client at 85% AMI asks if they qualify. Is advising them they don\'t meet income criteria a fair housing violation?', opts: ['Yes — income-based guidance is always discriminatory','No — income is not a protected class and program criteria are lawful','Only if the client is a member of a protected class','Yes — counselors cannot advise on income eligibility'], correct: 1 },
      { q: 'What does Propria require to maintain active CLT Counselor Certified status?', opts: ['10 CLT sessions per year and quarterly recertification','Annual recertification and minimum 2 documented CLT sessions per year','Monthly check-ins with the network coordinator','No ongoing requirements after initial certification'], correct: 1 },
      { q: 'HUD Mortgagee Letter 2014-12 established which of the following?', opts: ['Maximum FHA loan limit for CLT properties','The framework for FHA insurance on CLT properties','The requirement for HUD counselor certification before CLT sessions','The Fannie Mae CLT lease addendum requirements'], correct: 1 },
      { q: 'Which is a fair housing concern specific to CLT programs?', opts: ['The resale formula limits seller equity','CLT marketing and outreach must reach protected class members proportionally under AFFH','CLTs may not use income limits in buyer selection','Counselors must recommend CLT programs to all low-income clients'], correct: 1 },
      { q: 'A client pushes back strongly on your "not yet ready" recommendation. Correct response?', opts: ['Change the recommendation to avoid conflict','Refer to a different counselor','Document professional reasoning clearly and maintain the assessment','Escalate to the CLT to make the final determination'], correct: 2 }
    ]
  },
  {
    id: 4,
    title: 'Working in Propria',
    meta: '5 lessons · 20–25 min · Quiz: 5 questions',
    passing: 4,
    screens: [
      {
        title: 'Your dashboard at a glance',
        body: `<p>Your Propria counselor dashboard shows:</p>
<ul>
<li><strong>Active clients</strong> — assigned buyers in CLT pipelines, their stage, and any flags</li>
<li><strong>Upcoming sessions</strong> — scheduled appointments with calendar integration</li>
<li><strong>Pending documentation</strong> — sessions completed but not yet documented</li>
<li><strong>Post-assessment results</strong> — buyer scores triggered by your completed sessions</li>
<li><strong>Certification status</strong> — your CLT Counselor Certified badge, CEU hours, renewal date</li>
</ul>`
      },
      {
        title: 'How clients find you and how assignments work',
        body: `<p>Clients choose their own counselor from the Propria network. Your profile shows: name, agency, languages, geographic service area, availability, CLT Counselor Certified badge, and session rating (aggregated, anonymous).</p>
<p>When a client selects you, you receive a notification with their basic profile — name, CLT program, pipeline stage — and a request to accept or decline. If you\'re at capacity, you can set your status to "not accepting new clients" without leaving the network.</p>`,
        callout: { label: 'Independence note', text: 'Clients choose you — CLTs don\'t assign you. This maintains your independence as a professional and the client\'s ability to select a counselor they\'re comfortable with.' }
      },
      {
        title: 'Session lifecycle in Propria',
        body: `<ol>
<li><strong>Client requests assignment</strong> → you accept or decline</li>
<li><strong>Scheduling</strong> — client or you proposes times; calendar sync handles confirmations</li>
<li><strong>Pre-session</strong> — Propria surfaces the client\'s CLT, ground lease summary, and pipeline stage</li>
<li><strong>Session</strong> — conducted outside Propria (phone, video, in-person)</li>
<li><strong>Documentation</strong> — complete in Propria within 48 hours</li>
<li><strong>Assessment trigger</strong> — buyer receives post-session assessment</li>
<li><strong>Results</strong> — you see score; flag triggers if below 70%</li>
<li><strong>Close or follow-up</strong> — mark complete or schedule follow-up session</li>
</ol>`
      },
      {
        title: 'Secure messaging and CLT coordination',
        body: `<p><strong>With clients:</strong> Clients can message you through Propria after their session with follow-up questions. Messages are logged and part of the session record.</p>
<p><strong>With CLT coordinators:</strong> The CLT coordinator can see your session completion status, your recommendation, and your topic checklist — not your confidential notes unless you choose to share them. You can message the coordinator directly through Propria with questions about a specific client\'s CLT program or ground lease terms.</p>`,
        callout: { label: 'Confidentiality', text: 'Your session notes are yours. Only the checklist, recommendation, and completion status are visible to the CLT by default. You control what else you share.' }
      },
      {
        title: 'Module 4 recap',
        isRecap: true,
        body: `<ul>
<li>Your dashboard: active clients, upcoming sessions, pending documentation, assessment results, and certification status.</li>
<li>Clients choose you from the network. You accept or decline.</li>
<li>Complete documentation within 48 hours — the post-assessment trigger depends on it.</li>
<li>CLT coordinators see your checklist and recommendation — not your confidential session notes.</li>
</ul>`
      }
    ],
    quiz: [
      { q: 'A counselor completes a session Tuesday but documents it the following Monday. What standard was violated?', opts: ['No violation — 7 days is acceptable','The 48-hour documentation standard was not met','Violation only if the buyer complains','Violation only if the CLT requires faster documentation'], correct: 1 },
      { q: 'A buyer selects you from the Propria network but you\'re at capacity. Correct action?', opts: ['Accept and delay the session','Decline and set status to "not accepting new clients"','Accept but refer them to a colleague for the session','Ignore the request until capacity clears'], correct: 1 },
      { q: 'Which can a CLT coordinator see in Propria regarding your session?', opts: ['All session notes including confidential disclosures','Session completion status, recommendation, and topic checklist — not confidential notes','The buyer\'s full credit profile','Nothing — counselor records are fully private'], correct: 1 },
      { q: 'A buyer scores 68% on the post-session assessment. What does Propria do?', opts: ['Automatically passes them — 68% is close enough','Flags the result and notifies the counselor to schedule follow-up','Cancels the buyer\'s CLT application','Requires the buyer to retake the full homebuyer education course'], correct: 1 },
      { q: 'What does a counselor\'s Propria network profile display to prospective clients?', opts: ['Income and fee structure only','Name, agency, languages, service area, availability, certification badge, and session rating','Full session history with all past clients','Personal financial history and credit score'], correct: 1 }
    ]
  }
];
