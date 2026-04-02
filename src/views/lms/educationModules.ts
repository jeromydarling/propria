import type { CourseModule } from "./types"

export const EDU_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Your Financial Picture as a CLT Buyer',
    meta: '8 lessons · 35–45 min · Quiz: 8 questions',
    screens: [
      {
        title: 'This isn\'t a standard homebuyer course',
        body: `<p>Most homebuyer education courses start with credit scores and end with closing costs. This one is different — because CLT homeownership is different.</p>
<p>You've already been income-qualified. You already know roughly what you can afford. What you need now is a clear picture of what CLT ownership <strong>actually costs</strong>, how your equity builds differently than a market-rate buyer's, and what financial decisions you'll face over the next decade that most homebuyers never think about.</p>
<p>This module is about that picture.</p>`,
        why: 'A buyer who understands the CLT financial model going in is far less likely to be surprised by it later.'
      },
      {
        title: 'Your three-part monthly cost',
        body: `<p>As a CLT homeowner, your monthly housing cost has three parts that a market-rate buyer doesn't always separate clearly:</p>
<p><strong>1. Your mortgage payment</strong> — principal and interest on the loan you took to buy the home. This stays the same if you have a fixed-rate loan.</p>
<p><strong>2. Your ground lease fee</strong> — the monthly amount you pay the CLT for use of the land. It's modest by design, but it's a real line item.</p>
<p><strong>3. Your ownership costs</strong> — property taxes, homeowner's insurance, utilities, and maintenance. These vary and often increase over time.</p>
<p>Add all three together before you call a home affordable.</p>`,
        why: 'Many buyers focus only on the mortgage payment. The ground lease fee and ownership costs can add $400–$700/month on top of principal and interest.',
        knowledge: {
          q: 'If your mortgage is $850/mo, ground lease fee $48/mo, taxes & insurance $250/mo, and maintenance budget $100/mo — what is your true monthly housing cost?',
          options: ['$850', '$898', '$1,148', '$1,248'],
          correct: 3
        }
      },
      {
        title: 'How your equity builds (and what the formula means)',
        body: `<p>In a market-rate home, equity builds two ways: your loan balance goes down, and the home's value may go up. When you sell, you keep all of it.</p>
<p>In a CLT home, the same two things happen — but the resale formula limits how much appreciation you capture. You keep your equity from paying down the loan. You keep a share of appreciation — often 25–30%. The rest stays in the program for the next buyer.</p>
<p><strong>This is not a penalty.</strong> It's the reason the home was affordable to you in the first place.</p>
<p>The practical implication: don't plan your financial future around capturing full market appreciation. Think of the equity you build here as a real, usable stepping stone — but not the same as unrestricted market gains.</p>`,
        why: 'Buyers who understand this upfront make better decisions about how long to stay, when to sell, and what to expect at closing.'
      },
      {
        title: 'What your equity looks like over time',
        body: `<p>Let's make this concrete. Suppose you buy your CLT home for $187,000 with a 30-year fixed mortgage. After 6 years:</p>
<p><strong>Principal paydown:</strong> You've paid down roughly $14,000–$18,000 depending on your rate. That's yours, fully.</p>
<p><strong>Appreciation share:</strong> The home's market value may have risen by $40,000. Under a 30% formula, you'd capture about $12,000 of that.</p>
<p><strong>Estimated total equity at resale: around $26,000–$30,000.</strong></p>
<p>That's a real down payment on a next home. You also paid $30,000–$50,000 less at purchase. The program made both possible.</p>`,
        why: 'Equity in a CLT home is real and it grows. Understanding the formula helps you plan ahead.'
      },
      {
        title: 'Debt-to-income and staying solvent',
        body: `<p>Lenders measure your debt-to-income ratio (DTI) — the share of gross monthly income going to debt — to decide if you qualify. CLT programs care about this over time, not just at purchase.</p>
<p>A common guideline: total housing costs shouldn't exceed 28–30% of gross monthly income. Total debt (housing plus all other payments) shouldn't exceed 36–43%.</p>
<p>These are guidelines, not laws. But they exist because households that push past them have less margin for job changes, medical bills, or disruptions.</p>
<p>Before you close, know your numbers. If housing costs are close to 35% of income, a modest income drop or a car repair could create real strain.</p>`,
        why: 'Qualifying for a loan and sustaining it over 10 years are two different things.'
      },
      {
        title: 'Emergency reserves: disruption vs. crisis',
        body: `<p>Every homeowner should have reserves — money set aside for costs that don't arrive on a schedule. A furnace that fails in January. A roof that starts leaking. An insurance deductible after a storm.</p>
<p>For CLT homeowners specifically, <strong>maintaining your home isn't optional.</strong> The ground lease requires it. Deferred maintenance can trigger stewardship intervention. Reserves aren't just a financial cushion — they're how you meet your obligations.</p>
<p>A reasonable target: 3–6 months of housing costs in accessible savings, plus a separate home repair fund of at least $2,000–$5,000.</p>`,
        why: 'Reserves are what separate a bad month from a missed payment.'
      },
      {
        title: 'Credit, refinancing, and CLT approval',
        body: `<p>Your credit score affects your mortgage terms at purchase. But there's something CLT-specific to know: if you ever want to refinance your mortgage, <strong>you'll need CLT approval first.</strong></p>
<p>This isn't an obstacle — it's a protection. The CLT reviews refinancing to make sure the new loan won't put you at financial risk or undermine your ground lease protections. Equity stripping, balloon payments, and predatory refinance products have hurt CLT homeowners in other programs. The review process exists to prevent that.</p>
<p>If you're ever approached by a lender about refinancing, contact your CLT coordinator before you sign anything.</p>`,
        why: 'A refinance that looks appealing on paper can quietly damage your equity and your lease standing.'
      },
      {
        title: 'Module 1 recap',
        isRecap: true,
        body: `<p><strong>Key takeaways from Module 1:</strong></p>
<ul>
<li>Your monthly cost has three parts: mortgage, ground lease fee, and ownership costs. Know all three.</li>
<li>Equity in a CLT home is real but formula-limited. Plan accordingly.</li>
<li>Stay below 30% housing cost-to-income if possible. Margin matters more over time.</li>
<li>Build reserves. The ground lease requires you to maintain your home.</li>
<li>Never refinance without CLT approval.</li>
</ul>`
      }
    ],
    quiz: {
      passing: 6,
      questions: [
        { q: 'A CLT homeowner pays which of the following that a typical market-rate buyer doesn\'t pay separately?', options: ['Property taxes','Homeowner\'s insurance','A ground lease fee','Mortgage interest'], correct: 2 },
        { q: 'Under a 25% appreciation-share formula, if a home purchased for $160,000 sells for $200,000, how much appreciation does the seller keep?', options: ['$40,000','$10,000','$25,000','$160,000'], correct: 1 },
        { q: 'What is the primary reason CLT programs require approval before a homeowner refinances?', options: ['To earn a fee from the lender','To prevent unsafe loan products from putting the homeowner or program at risk','To delay the refinance as long as possible','To ensure the CLT can buy back the home'], correct: 1 },
        { q: 'What does a debt-to-income ratio measure?', options: ['The ratio of your home\'s value to your debt','Your credit score divided by income','The percentage of gross monthly income going toward debt payments','The number of debts you have'], correct: 2 },
        { q: 'Mortgage $900, ground lease $52, taxes & insurance $220, maintenance $80. What is the true monthly housing cost?', options: ['$952','$1,120','$1,172','$1,252'], correct: 3 },
        { q: 'Why should CLT homeowners maintain emergency reserves?', options: ['It is required by federal law','The ground lease requires maintenance, and reserves help meet that obligation without missing payments','Reserves must be held in a CLT-approved account','Insurance companies require it'], correct: 1 },
        { q: 'Which type of mortgage offers payment predictability over the full loan term?', options: ['Adjustable-rate mortgage','Balloon mortgage','Fixed-rate mortgage','Interest-only mortgage'], correct: 2 },
        { q: 'At resale, what happens to the appreciation above the homeowner\'s formula-limited share?', options: ['It goes to the government','It stays in the program to keep the home affordable for the next buyer','It is forfeited entirely','It goes to the lender'], correct: 1 }
      ]
    }
  },
  {
    id: 2,
    title: 'CLT Fundamentals',
    meta: '9 lessons · 40–50 min · Quiz: 8 questions',
    screens: [
      {
        title: 'Two families, two homes, one neighborhood',
        body: `<p>Meet two neighbors on the same block in Saint Paul.</p>
<p><strong>Angela</strong> bought her home at market rate for $240,000. After 8 years, it's worth $320,000. She sells, pockets $80,000 in appreciation, and moves to a larger home in the suburbs. The next buyer needs $320,000 to purchase it. A working family earning $55,000 a year can't afford that.</p>
<p><strong>Maria</strong> bought her home through the Rondo CLT for $187,000 — $53,000 less than market because the CLT removed the land from speculation. After 8 years, her resale formula gives her about $26,000 in equity. She sells for $201,000. The next buyer — also a working family — can afford that.</p>
<p>That's the CLT model. The home stays affordable. The community stays intact.</p>`,
        why: 'Without a CLT, every subsidized home eventually leaves the affordable inventory. With one, it doesn\'t.'
      },
      {
        title: 'What you own — and what the CLT owns',
        body: `<p>This is the most important concept in the whole course. Read it twice.</p>
<p><strong>You own the home.</strong> The structure. The walls, roof, appliances, improvements. Your name is on the deed. You can paint it, renovate it, and leave it to your heirs — within program rules.</p>
<p><strong>The CLT owns the land.</strong> The ground beneath the home. You don't own it — you lease it from the CLT under a long-term agreement.</p>
<p>This split is what makes permanent affordability possible. Land is what appreciates fastest in most markets. By keeping the land off the speculative market permanently, the CLT can control what the next buyer pays.</p>
<p><strong>Scenario:</strong> Your neighbor tells you "a CLT home isn't real ownership — you're basically renting." How do you respond?</p>
<p>You're not renting. You own the home, hold a deed, build equity, and have the right to occupy as long as you comply with the ground lease. The land arrangement is different — but ownership of the home is real.</p>`,
        why: 'This distinction — home ownership, land lease — is the foundation for everything else about CLT ownership.'
      },
      {
        title: 'The ground lease: what it actually says',
        body: `<p>The ground lease is a legal document. Most run 99 years and renew automatically. Here's what it actually covers:</p>
<p><strong>Your right to be there.</strong> As long as you comply with the lease, your right to occupy is secure. The CLT cannot evict you at will. This is real security.</p>
<p><strong>Your monthly ground lease fee.</strong> A modest payment to the CLT for use of the land — typically $30–$100/month depending on the program.</p>
<p><strong>Your maintenance obligations.</strong> You're required to keep the home in good condition. The lease defines what that means.</p>
<p><strong>Resale rules.</strong> You can't sell at full market value. The price is determined by a formula. The CLT has the right to buy the home before you sell to anyone else.</p>
<p><strong>Refinancing rules.</strong> You need CLT approval before taking a new mortgage on the home.</p>
<p><strong>What happens if you die or want to transfer the home.</strong> Heirs and transfers are regulated to ensure the home stays in the program.</p>`,
        why: 'If you sign a ground lease without understanding it, you\'re agreeing to obligations you may not know you have.'
      },
      {
        title: 'The resale formula: a walkthrough',
        body: `<p>Let's walk through how a resale formula works with real numbers.</p>
<p><strong>Maria's situation:</strong></p>
<ul>
<li>Purchase price: $187,000 (October 2019)</li>
<li>Market value when she sells: $227,000 (October 2025 — 6 years later)</li>
<li>Market appreciation: $40,000</li>
<li>Her formula: she keeps 30% of appreciation</li>
<li>Her appreciation share: $12,000</li>
<li>She also gets credit for $2,800 in approved kitchen improvements</li>
<li>And her principal paydown of ~$14,000 from 6 years of payments</li>
</ul>
<p><strong>Maria's equity at resale: approximately $28,800.</strong></p>
<p><strong>The home's resale price: $187,000 + $12,000 + $2,800 = $201,800.</strong></p>
<p>The next buyer gets a home for $201,800 instead of $227,000. That gap — $25,200 — is what keeps the program going.</p>`,
        why: 'The formula isn\'t taking something from you. It\'s what made your purchase price possible in the first place.',
        knowledge: {
          q: 'A CLT home was purchased for $150,000. At resale, market value is $190,000. The formula gives the seller 25% of appreciation. What is the maximum resale price?',
          options: ['$150,000', '$160,000', '$190,000', '$157,500'],
          correct: 1
        }
      },
      {
        title: 'The right of first refusal — and why it exists',
        body: `<p>When you're ready to sell, your CLT has the right to buy the home before you sell it to anyone else. This is called the right of first refusal.</p>
<p><strong>What it means in practice:</strong> You notify the CLT you want to sell. The CLT has a set period — usually 30–90 days — to find a qualified buyer or purchase the home itself. If they don't act, you can sell to an eligible outside buyer at the formula price.</p>
<p><strong>Why this matters:</strong> Without the right of first refusal, a homeowner could theoretically sell to a buyer who doesn't qualify for the program, or structure a sale that evades the resale formula. The right of first refusal closes that gap.</p>
<p><strong>Scenario:</strong> Your employer offers you a job in another city and you need to sell quickly. Does the CLT's right of first refusal trap you?</p>
<p>Not if you plan ahead. The CLT often has a waitlist of qualified buyers. Motivated sellers frequently close within 60 days. The key is to notify your CLT immediately — not after you've already accepted another offer.</p>`,
        why: 'The right of first refusal protects the program\'s mission. Notifying your CLT early protects your timeline.'
      },
      {
        title: 'Refinancing: what requires approval and why',
        body: `<p>You need CLT approval to refinance your mortgage. This trips up some homeowners who don't plan ahead.</p>
<p><strong>Why approval is required:</strong></p>
<ul>
<li>A refinance can change how much debt is on the home. Too much debt relative to the formula resale price creates a situation where the home can't be sold at program price without the seller going underwater.</li>
<li>Some lenders offer products that quietly strip equity — cash-out refinances that give homeowners money upfront but leave them with a mortgage larger than their formula resale price.</li>
<li>The CLT's approval process ensures the new loan fits within the affordability framework.</li>
</ul>
<p><strong>What the process looks like:</strong> You contact your CLT before talking to a lender. The CLT reviews the proposed terms. Most straightforward rate-and-term refinances are approved. Predatory products are declined.</p>`,
        why: 'A refinance that looks helpful can quietly undermine both your equity and the program\'s affordability protections.'
      },
      {
        title: 'Property taxes in a CLT home',
        body: `<p>Property taxes on CLT homes can work differently depending on where you live — and it matters more than most buyers realize.</p>
<p><strong>The problem:</strong> In most states, assessors value homes based on what they would sell for on the open market. But CLT homes can't sell at full market value. Taxing them as if they could makes them less affordable.</p>
<p><strong>What some states do:</strong> About 15+ states have enacted CLT-specific tax legislation that allows assessors to value the home based on its restricted resale price rather than market value. This can meaningfully reduce annual taxes.</p>
<p><strong>What this means for you:</strong> Find out how your state and county treat CLT home taxation before you close. Your CLT coordinator can explain the local rules. Module 5 covers this in more detail.</p>`,
        why: 'A tax bill based on unrestricted market value can undermine the affordability the CLT built into your purchase price.'
      },
      {
        title: 'What happens when a CLT homeowner dies',
        body: `<p>This is a question many buyers don't ask — and should.</p>
<p><strong>Can you leave a CLT home to your heirs?</strong> Usually yes — but with conditions. Most ground leases allow the home to pass to a qualifying family member who will occupy it as their primary residence. The heir must typically meet program eligibility requirements.</p>
<p><strong>What if the heir doesn't qualify?</strong> The CLT typically has the right to purchase the home at the formula price, and the estate receives those proceeds.</p>
<p><strong>What if there's a surviving spouse?</strong> Most programs protect a surviving spouse's right to continue living in the home regardless of income qualification, as long as they comply with the ground lease.</p>
<p>Read your specific ground lease's inheritance provisions carefully. They vary by program. Your CLT coordinator can explain exactly how your lease handles this.</p>`,
        why: 'Understanding inheritance rules now protects your family later.'
      },
      {
        title: 'Module 2 recap',
        isRecap: true,
        body: `<ul>
<li>The CLT model keeps homes affordable across generations by separating home ownership from land ownership.</li>
<li>You own the home. The CLT owns the land. Both are governed by the ground lease.</li>
<li>The resale formula limits your appreciation share — but it also made your purchase price possible.</li>
<li>The right of first refusal protects the program. Notify your CLT before listing, not after.</li>
<li>Refinancing requires CLT approval. Plan ahead.</li>
<li>Tax treatment and inheritance rules vary by program — ask your coordinator.</li>
</ul>`
      }
    ],
    quiz: {
      passing: 6,
      questions: [
        {
          q: 'In a CLT, you own the home but not the land. What does this mean for your security of occupancy?',
          options: [
            'You can be asked to leave at any time since you don\'t own the land',
            'Your occupancy is secure as long as you comply with the ground lease',
            'You must renew your right to stay every year',
            'The CLT can sell the land out from under you'
          ],
          correct: 1
        },
        {
          q: 'A CLT home was purchased for $150,000. Market value at resale is $190,000. The formula gives the seller 25% of appreciation. What is the maximum resale price?',
          options: ['$150,000', '$160,000', '$190,000', '$157,500'],
          correct: 1
        },
        {
          q: 'Maria wants to sell her CLT home quickly because of a job relocation. What should she do first?',
          options: [
            'List with a real estate agent at market value immediately',
            'Notify her CLT coordinator and request a resale price calculation',
            'Find her own buyer privately to avoid the right of first refusal',
            'Wait until the CLT\'s review period expires, then sell freely'
          ],
          correct: 1
        },
        {
          q: 'Why does the CLT require approval before a homeowner refinances?',
          options: [
            'To earn a fee on every refinance transaction',
            'Because all refinances are prohibited in CLT programs',
            'To ensure the new loan doesn\'t undermine the affordability protections or put the homeowner at financial risk',
            'To guarantee the lender a minimum interest rate'
          ],
          correct: 2
        },
        {
          q: 'A homeowner dies and leaves a CLT home to their adult child. Under most CLT ground leases, what happens?',
          options: [
            'The home automatically returns to the CLT with no payment to the estate',
            'The child can inherit and occupy if they meet program eligibility; otherwise the CLT purchases at formula price',
            'The heir can sell at full market value since the restriction ends at death',
            'The home must be auctioned publicly within 90 days'
          ],
          correct: 1
        },
        {
          q: 'Why do some states have CLT-specific property tax legislation?',
          options: [
            'To exempt CLT homes from all property taxes',
            'To shift the tax burden to the CLT organization instead of the homeowner',
            'To allow assessors to value CLT homes based on restricted resale price rather than open market value',
            'To increase tax revenue from CLT transactions'
          ],
          correct: 2
        },
        {
          q: 'The right of first refusal means:',
          options: [
            'The CLT must buy your home if you want to sell',
            'You must offer the home to the CLT before selling to an outside buyer',
            'You can refuse any buyer the CLT recommends',
            'The first buyer who makes an offer must be accepted'
          ],
          correct: 1
        },
        {
          q: 'A CLT home\'s resale formula limits appreciation capture to 30%. The home appreciated by $60,000. The seller also has $5,000 in approved improvement credits and $15,000 in principal paydown. What is the seller\'s total equity at resale?',
          options: ['$18,000', '$20,000', '$38,000', '$60,000'],
          correct: 2
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Stewardship & Your Obligations',
    meta: '9 lessons · 40–50 min · Quiz: 8 questions',
    screens: [
      { title: 'Stewardship is a relationship, not surveillance', body: `<p>The word "stewardship" can sound bureaucratic. In practice, it means your CLT stays in contact with you, checks in on how things are going, and offers help when things get hard — and also holds you to the commitments you made in your ground lease.</p><p>Think of it as a long-term relationship with your CLT coordinator. Most of the time it's light: an annual check-in, an invitation to community events, a newsletter. When something goes wrong, it gets more active. That's by design.</p>`, why: 'Stewardship is how the program protects both you and the affordability mission over time.' },
      { title: 'Your maintenance obligations', body: `<p>Your ground lease requires you to maintain your home in good condition. This isn't just a suggestion — it's a legal obligation.</p><p>What that means practically:</p><ul><li>Address repairs promptly, especially anything structural, water-related, or affecting habitability</li><li>Don't let deferred maintenance accumulate</li><li>If you submit a maintenance request, follow up on it</li></ul><p><strong>What happens if you don't:</strong> The CLT may contact you, require a maintenance plan, or in serious cases, cite a lease violation. No program wants to go there — but neglect damages the long-term investment in keeping that home affordable.</p>`, why: 'Poor maintenance can harm both the household and the long-term viability of the affordable home.' },
      { title: 'Adding people to your household', body: `<p>If someone moves into your home — a partner, an adult child, a new roommate — review your ground lease first. Many CLT ground leases have rules about occupancy and subletting.</p><p>This doesn't mean you can't have family or guests. It means that if someone is living there long-term and contributing to your household, your CLT coordinator should know about it.</p><p><strong>Unauthorized subletting</strong> — renting out a room or the whole home without CLT approval — is a common lease violation and can put your tenure at risk.</p>`, why: 'Occupancy rules ensure the home continues to serve owner-occupants and doesn\'t become rental income.' },
      { title: 'What to do if you can\'t make a payment', body: `<p>If you know a payment is going to be late — or you've already missed one — <strong>contact your CLT coordinator immediately.</strong> Don't wait.</p><p>CLTs are not banks. They are mission-driven organizations that want you to stay in your home. Most programs have hardship policies, can connect you to emergency assistance, and can work with you on a payment plan before things escalate.</p><p>What they can't do is help you if they don't know you're struggling. The worst thing you can do is go silent.</p><p>A missed payment is a minor issue. A three-month gap with no communication becomes a lease violation.</p>`, why: 'The CLT\'s job is to keep you in your home. Let them do it.' },
      { title: 'Unauthorized changes to the property', body: `<p>Want to add a deck? Finish the basement? Put up a fence? Many of these are fine — but get written approval from the CLT first.</p><p>Ground leases typically require CLT approval for significant alterations or additions. This protects you too: <strong>approved improvements may count toward your equity at resale</strong> as an improvement credit. Unapproved improvements may not count — and may need to be removed.</p>`, why: 'Unapproved improvements can complicate your resale and your lease standing.' },
      { title: 'Refinancing: the full picture', body: `<p>You cannot refinance your CLT mortgage without program approval.</p><p><strong>Watch for these red flags in refinance offers:</strong></p><ul><li>Cash-out refinancing that takes equity above your formula limit</li><li>Balloon payments or terms longer than 30 years</li><li>Rates significantly above market (predatory products)</li><li>Lenders unfamiliar with CLT ground leases</li></ul><p>The review process takes time. Build that into your timeline if you're planning a refinance.</p>`, why: 'A bad refinance can strip equity, create payment risk, and in extreme cases trigger a lease violation.' },
      { title: 'Selling your home: what the process looks like', body: `<p>When you're ready to sell, the process is different from a market-rate sale:</p><ol style="padding-left:20px;margin-bottom:14px"><li style="margin-bottom:8px"><strong>Notify your CLT.</strong> Don't list with an agent first. Your CLT has a right of first refusal and may have qualified buyers already in the pipeline.</li><li style="margin-bottom:8px"><strong>Request a resale price calculation.</strong> The CLT or an appraiser will determine your formula-limited maximum.</li><li style="margin-bottom:8px"><strong>CLT markets to eligible buyers.</strong> The CLT will offer the home to income-qualified buyers before the general market.</li><li style="margin-bottom:8px"><strong>Closing proceeds normally</strong> — with CLT-specific documents and a new ground lease transfer.</li></ol><p>The timeline is usually 60–120 days from notification to close.</p>`, why: 'Knowing this process in advance prevents surprises when you\'re ready to move.' },
      { title: 'Module 3 recap', isRecap: true, body: `<ul><li>Stewardship is a long-term relationship. Most of it is low-touch.</li><li>Maintain your home. It's a legal obligation, not a suggestion.</li><li>Communicate before a problem becomes a crisis — especially with payments.</li><li>Get approval before significant improvements, household changes, or refinancing.</li><li>When you're ready to sell, notify your CLT first.</li></ul>` }
    ],
    quiz: {
      passing: 6,
      questions: [
        { q: 'Your bathroom has had a slow drain and minor under-sink leak for three months. What should you do?', options: ['Ignore it until it gets worse','Fix it yourself without telling anyone','Report it to your CLT coordinator and address it promptly','Wait until your annual check-in'], correct: 2 },
        { q: 'You want to add a bedroom in your basement. What should you do first?', options: ['Hire a contractor and start immediately','Ask your neighbors if they\'ve done similar work','Get written approval from your CLT','Nothing — improvements are always your right'], correct: 2 },
        { q: 'You\'ve missed a mortgage payment and are worried about the next one. What is the best action?', options: ['Wait and hope things improve next month','Contact your CLT coordinator immediately','Stop answering your phone until you have the money','Refinance immediately to lower your payment'], correct: 1 },
        { q: 'Your cousin wants to move in and pay you $600/month in rent. What should you do?', options: ['Accept the rent — it\'s your home','Review your ground lease and contact your CLT before agreeing','Tell your CLT only if asked','Subletting is always allowed in CLT homes'], correct: 1 },
        { q: 'Which of the following is a red flag in a refinancing offer?', options: ['A fixed rate slightly below your current rate','A cash-out offer that would give you equity above your formula limit','A 30-year repayment term','A lender familiar with CLT ground leases'], correct: 1 },
        { q: 'When you\'re ready to sell your CLT home, what should you do first?', options: ['List with a real estate agent at market value','Post on social media for interested buyers','Notify your CLT and request a resale price calculation','Contact a lender to pre-qualify buyers yourself'], correct: 2 },
        { q: 'An approved home improvement may result in what benefit at resale?', options: ['Full market credit for the improvement','An improvement credit that increases your formula-limited resale price','No benefit — improvements don\'t affect resale','A reduction in your ground lease fee'], correct: 1 },
        { q: 'What does the CLT\'s right of first refusal mean when selling?', options: ['The CLT must buy your home if you want to sell','The CLT has the right to purchase your home before it can be sold to an outside buyer','The CLT controls the listing price','You must give 30 days\' notice before any home improvements'], correct: 1 }
      ]
    }
  },
  {
    id: 4,
    title: 'Program Understanding',
    meta: '6 lessons · 20–30 min · Quiz: 5 questions',
    screens: [
      { title: 'Who the program is for', body: `<p>A CLT program usually targets households who need affordable homeownership opportunities and are likely to succeed with the right support. Buyer selection may include income limits, local preference rules where lawful, or first-time buyer status. These criteria must be clear, neutral, and tied to the mission of the program.</p>`, why: 'A fair program is mission-driven without becoming arbitrary or discriminatory.' },
      { title: 'What fair selection looks like', body: `<p>Programs may lawfully prioritize certain buyers using neutral program criteria, but they may not use race, religion, political affiliation, or other protected characteristics in ways that violate fair housing rules. Good selection systems are transparent, documented, and easy to explain to applicants.</p>`, why: 'Trust grows when applicants understand how decisions are made.' },
      { title: 'How affordability formulas work', body: `<p>An affordability formula determines how much of the home's value growth can be kept by the seller and how much is preserved for the next buyer. Some formulas are fixed-rate. Others are appraisal-based. The exact formula can vary, but the purpose stays the same: balance homeowner wealth-building with lasting affordability.</p>`, why: 'The formula is one of the most important differences between CLT ownership and market-rate resale.' },
      { title: 'Why education is required', body: `<p>Homebuyer education is often required before purchasing a CLT home because buyers need to understand both ordinary ownership and the special restrictions that come with shared equity. Standard homebuyer education covers budgeting, credit, loans, and inspections. CLT education adds ground lease rules, stewardship obligations, and resale restrictions.</p>`, why: 'A buyer who understands the program is more likely to succeed in it.' },
      { title: 'Governance and the tripartite board', body: `<p>Many CLTs are nonprofit organizations with a tripartite board structure. That means representation is typically balanced among residents, community members, and public-interest or expert representatives. This governance model reflects the CLT's dual purpose: support individual owners while serving a broader community mission.</p>`, why: 'Governance helps explain why the CLT is not just another private seller or lender.' },
      { title: 'Module 4 recap', isRecap: true, body: `<ul><li>Buyer selection should be mission-driven and fair.</li><li>Affordability formulas protect the next buyer as well as the current one.</li><li>Education is required because CLT ownership includes special rules.</li><li>Nonprofit governance supports long-term accountability.</li></ul>` }
    ],
    quiz: {
      passing: 4,
      questions: [
        {
          q: 'A CLT wants to give priority to households who have lived in the neighborhood for at least 2 years. Is this allowable?',
          options: [
            'No — any geographic preference violates fair housing law',
            'Yes — local residency preference is generally a lawful, neutral criterion when applied consistently',
            'Only if approved by HUD on a case-by-case basis',
            'Yes, but only if the CLT is a government agency'
          ],
          correct: 1
        },
        {
          q: 'A CLT uses an appraisal-based formula giving the homeowner 25% of appreciated value. Home purchased for $120,000, appraised at $180,000 at resale. What is the max resale price?',
          options: ['$120,000', '$135,000', '$150,000', '$180,000'],
          correct: 1
        },
        {
          q: 'Two CLT programs serve the same income range. Program A uses a fixed 2%/year appreciation formula. Program B uses a 25% appraisal-based formula. In a year when property values rise 15%, which seller captures more equity?',
          options: [
            'Program A — fixed formulas always benefit the seller more',
            'Program B — 25% of 15% appreciation exceeds 2% of base price when the base price is typical',
            'They are identical',
            'Neither — CLT sellers never capture equity'
          ],
          correct: 1
        },
        {
          q: 'Why do most CLT programs require homebuyer education — even for buyers who already own a home?',
          options: [
            'HUD mandates it for all federally funded programs',
            'To qualify for lower interest rates from CLT-preferred lenders',
            'Because CLT-specific obligations around resale, financing, and stewardship go beyond standard homeownership',
            'It is not actually required — it is only recommended'
          ],
          correct: 2
        },
        {
          q: 'A CLT board votes on whether to approve a homeowner\'s refinance request. The homeowner board seat votes yes; the public interest seat votes no; the community member seat is vacant. What does this illustrate about tripartite governance?',
          options: [
            'The homeowner seat always controls the outcome',
            'Vacancies don\'t matter since two of three seats voted',
            'The tripartite model balances multiple stakeholder interests — and vacancies create real governance gaps',
            'Community members are not allowed to vote on financial matters'
          ],
          correct: 2
        }
      ]
    }
  },
  {
    id: 5,
    title: 'State & Local Compliance',
    meta: '7 lessons · 25–35 min · Quiz: 6 questions',
    screens: [
      { title: 'Why local law matters', body: `<p>CLTs can operate under general nonprofit, property, and contract law, but many jurisdictions now have CLT-specific statutes or rules that affect taxation, disposition of public land, affordability restrictions, and program recognition. Because of that, this module should always be adapted to your specific location.</p>`, why: 'The CLT model is national, but implementation is local.' },
      { title: 'Federal baseline rules', body: `<p>Federal law also matters. USDA regulations for CLTs set expectations around nonprofit structure, service to low- and moderate-income households, and operating history. Under 7 CFR § 3555.206, the CLT must meet certain criteria in order to fit the federal framework used for specific financing contexts.</p>`, why: 'Federal recognition can influence financing and program design.' },
      { title: 'State legislation and property taxes', body: `<p>Some states have adopted CLT-specific rules to address valuation, affordability restrictions, or public support. Property tax treatment is especially important. If assessors value a permanently restricted CLT home as though it could sell freely at market value, taxes can become unaffordable and undermine the purpose of the program.</p>`, why: 'Permanent affordability works best when local tax systems recognize permanent restrictions.' },
      { title: 'Local regulatory agreements', body: `<p>Local governments may create special CLT regulatory agreements. Local frameworks can shape deal terms, subsidy conditions, monitoring, and public accountability. New York City's CLT framework, for example, includes rules built around 99-year ground leases.</p>`, why: 'Municipal policy can influence how a CLT operates just as much as state law.' },
      { title: 'Financing and secondary market compatibility', body: `<p>CLT buyers may still access mainstream mortgage financing when the property and lease structure meet applicable lender or secondary market rules. Fannie Mae recognizes CLT transactions within specific program guidance, which is one reason lease structure and legal documents matter so much.</p>`, why: 'Affordability preservation and mortgage compatibility must work together.' },
      { title: 'Your local rules', body: `<p>This section contains information specific to your CLT's state and local jurisdiction — property tax rules, approved lenders, required disclosures, and any special resale or ground lease requirements.</p><p><em>Your CLT coordinator can walk you through these specifics before closing.</em></p>`, why: 'Local rules affect your taxes, your financing options, and your closing documents.' },
      { title: 'Module 5 recap', isRecap: true, body: `<ul><li>Federal guidance creates a baseline, but local implementation varies.</li><li>State law can shape tax treatment and enforceability.</li><li>Local agreements may define lease structure and subsidy conditions.</li><li>Financing compatibility depends on legal structure as well as buyer readiness.</li></ul>` }
    ],
    quiz: {
      passing: 5,
      questions: [
        { q: 'Under federal regulations, how long must a CLT have been providing affordable housing to qualify under certain USDA frameworks?', options: ['1 year','2 years','5 years','No minimum'], correct: 1 },
        { q: 'Under federal rules, a CLT must demonstrate it serves which population?', options: ['Veterans only','Senior citizens exclusively','Low- and moderate-income households','Any household regardless of income'], correct: 2 },
        { q: 'Approximately how many U.S. states have enacted CLT-specific legislation?', options: ['5','10','15 or more','All 50 states'], correct: 2 },
        { q: 'In New York City\'s CLT regulatory framework, what minimum ground lease term is used?', options: ['30 years','50 years','75 years','99 years'], correct: 3 },
        { q: 'Why do some states enact CLT-specific property tax legislation?', options: ['To make CLT homes completely tax-exempt','To assess them based on restricted resale value rather than unrestricted market value','To increase tax revenue from CLTs','To shift the tax burden entirely to the CLT organization'], correct: 1 },
        { q: 'Does Fannie Mae provide mortgage financing for eligible CLT properties?', options: ['Yes, with specific CLT guidelines','No, CLT homes cannot get conventional loans','Only through FHA programs','Only in states with CLT legislation'], correct: 0 }
      ]
    }
  },
  {
    id: 6,
    title: 'Closing, Community & What Comes Next',
    meta: '7 lessons · 25–35 min · Quiz: 6 questions',
    screens: [
      { title: 'Your closing is different', body: `<p>A CLT closing looks like a regular real estate closing — but with extra documents and a few things your lender or title company may not have seen before.</p><p><strong>Key differences:</strong></p><ul><li>You'll sign both a <strong>deed</strong> and a <strong>ground lease</strong> — two separate legal documents</li><li>Your lender must be familiar with CLT transactions. Your CLT can provide preferred lenders.</li><li>The title company should receive the ground lease in advance. Last-minute surprises at the closing table are avoidable.</li></ul>`, why: 'Understanding what to expect at closing prevents delays and confusion on the day itself.' },
      { title: 'The deed and the ground lease', body: `<p><strong>The deed</strong> says you own the home — the structure, the improvements, the building. It's recorded with the county, just like any other property transfer.</p><p><strong>The ground lease</strong> says you have the right to use the land the home sits on, under specific conditions, for as long as you comply. It defines your monthly fee, your maintenance obligations, your resale restrictions, your refinancing rules, and your rights if the CLT ever needs to buy the home back.</p><p>You own the home. You lease the land. Both documents together define what CLT homeownership means in practice.</p>`, why: 'If you only understand the deed and not the ground lease, you only understand half of what you own.' },
      { title: 'What to bring and what to expect', body: `<p><strong>Before your closing date:</strong></p><ul><li>Confirm your lender has reviewed and accepted the ground lease</li><li>Confirm your title company has received the ground lease in advance</li><li>Do a final walkthrough of the home</li><li>Review the Closing Disclosure — know every line before you sit down</li></ul><p><strong>At closing you'll sign:</strong> the deed, the ground lease, your mortgage documents, state and local required disclosures, and any CLT-specific addenda.</p><p>Budget 2–3 hours. CLT closings sometimes take longer than standard closings because of the extra documents.</p>`, why: 'Preparation prevents delays. Issues discovered at the table can push a closing by days or weeks.' },
      { title: 'Community participation: your rights and your role', body: `<p>As a CLT homeowner, you're not just a resident — you're a member of the CLT community and a stakeholder in its governance.</p><p>Most CLTs have an annual homeowner assembly where residents vote on governance matters, hear financial reports, and elect board members. Some CLTs have homeowner seats on the board itself.</p><p><strong>Your rights as a homeowner typically include:</strong></p><ul><li>Voting in CLT elections</li><li>Running for the homeowner board seat</li><li>Attending all open board and community meetings</li><li>Receiving annual financial reports from the CLT</li></ul>`, why: 'CLTs are governed for the community. That only works if the community participates.' },
      { title: 'Your CLT coordinator: who they are and how to use them', body: `<p>Your CLT coordinator is your primary point of contact for everything related to your homeownership — maintenance requests, payment questions, refinancing, life changes, resale planning.</p><p>They're not a landlord. They're not an enforcement officer. Their job is to help you succeed as a homeowner and stay in your home for as long as you want to be there.</p><p><strong>Use them:</strong></p><ul><li><strong>Before</strong> making major decisions — improvements, refinancing, adding occupants</li><li><strong>During</strong> hardship, before things escalate</li><li><strong>Whenever you have questions</strong> — there are no dumb questions about your ground lease</li></ul>`, why: 'Your coordinator has helped dozens of homeowners through situations like yours. Use that resource.' },
      { title: 'What long-term CLT homeownership looks like', body: `<p>Most CLT homeowners stay in their homes for 7–12 years before selling. Some stay much longer.</p><p><strong>Years 1–3:</strong> Getting settled, building the habit of maintenance, getting to know your coordinator and community.</p><p><strong>Years 3–7:</strong> Equity building steadily. Repairs come up. Community events. Maybe a refinance or a household change.</p><p><strong>Years 7–15:</strong> You know the program well. You may join the board or volunteer at events. If you're thinking about selling, you have time to plan.</p><p><strong>Resale:</strong> You walk away with real equity — typically enough for a market-rate down payment if that's what you want next.</p>`, why: 'CLT homeownership is a long game. The people who do best are the ones who understand that from day one.' },
      { title: 'Module 6 recap', isRecap: true, body: `<ul><li>Your closing includes a deed AND a ground lease — two separate documents that together define what you own.</li><li>Prepare your lender and title company in advance. Last-minute CLT surprises cause delays.</li><li>You have governance rights in your CLT — use them.</li><li>Your coordinator is your resource. Reach out early and often.</li><li>The equity you build in a CLT home is real. Plan with it.</li></ul>` }
    ],
    quiz: {
      passing: 5,
      questions: [
        { q: 'At a CLT closing, which two documents does the homeowner sign that together define their ownership?', options: ['The appraisal and the inspection report','The deed and the ground lease','The mortgage note and the title insurance policy','The purchase agreement and the HOA rules'], correct: 1 },
        { q: 'What does the deed transfer to the CLT homeowner?', options: ['The right to use the land','Ownership of the home and improvements','Membership in the CLT organization','The right to sublease the property'], correct: 1 },
        { q: 'Why should you confirm your lender has reviewed the ground lease before closing day?', options: ['It is a federal requirement for all closings','Lenders unfamiliar with CLT transactions can cause last-minute delays or rejections','The ground lease determines your mortgage interest rate','Title companies cannot close without lender ground lease approval'], correct: 1 },
        { q: 'Which of the following is typically a right of CLT homeowners in program governance?', options: ['Veto power over the CLT\'s annual budget','The right to appoint the executive director','Voting in CLT elections and running for homeowner board seats','Approval authority over all new homeowner applications'], correct: 2 },
        { q: 'When should you contact your CLT coordinator?', options: ['Only when you receive a lease violation notice','Only at your annual check-in','Before major decisions, during hardship, and whenever you have questions','Only when you are ready to sell'], correct: 2 },
        {
        title: 'Hardship, foreclosure prevention, and the CLT safety net',
        body: `<p>Here's something you won't hear in a standard homebuyer course: <strong>CLT homeowners foreclose at dramatically lower rates than the general market.</strong> Rondo CLT has had zero foreclosures in its history.</p>
<p>That's not an accident. It's stewardship.</p>
<p><strong>What the CLT can do when you're in trouble:</strong></p>
<ul>
<li><strong>Connect you to emergency assistance.</strong> Most CLT coordinators maintain relationships with housing assistance programs, emergency funds, and financial counseling services.</li>
<li><strong>Negotiate with your lender.</strong> CLTs often have relationships with the mortgage servicers who work with their programs and can advocate on your behalf.</li>
<li><strong>Arrange a payment plan.</strong> Ground lease fees can sometimes be restructured temporarily during hardship.</li>
<li><strong>Exercise the right to cure.</strong> Many CLT ground leases include a provision giving the CLT the right to step in and cure a mortgage default — essentially catching up your missed payments — before a lender can foreclose. This buys time.</li>
</ul>
<p><strong>What you have to do:</strong> Tell your coordinator early. The right-to-cure provision only works if the CLT knows about the default in time to act.</p>`,
        why: 'The CLT\'s foreclosure prevention tools only work if you use them. Silence is the only thing that can\'t be helped.'
      },
      { q: 'What does a typical CLT homeowner walk away with at resale after 7–10 years?', options: ['The full market appreciation of the home','Nothing — all equity returns to the CLT','A formula-limited equity share that is often enough for a market-rate down payment','A fixed payment of $10,000 regardless of appreciation'], correct: 2 }
      ]
    }
  }
];
