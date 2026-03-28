export const VERSION_A = [
  {
    id: 'a01', num: '01', title: 'About You',
    fields: [
      { key: 'a_name', label: 'Your name / company name', type: 'text' },
      { key: 'a_email', label: 'Best email to reach you', type: 'text' },
      { key: 'a_industry', label: 'Your industry / what do you do?', type: 'text' },
      { key: 'a_website', label: 'Website or social (if you have one)', type: 'text', helper: 'Link, handle, or "nothing yet."' },
    ],
  },
  {
    id: 'a02', num: '02', title: 'Where You Are Now', subtitle: 'Helps me understand your starting point.',
    fields: [
      { key: 'a_findingYou', label: 'How are people finding you right now?', type: 'textarea', helper: 'Word of mouth, social, Google, nothing yet?' },
      { key: 'a_workingNot', label: "What's working for you? What's not?", type: 'textarea' },
      { key: 'a_priorDesigner', label: 'Have you worked with a designer or developer before?', type: 'chips', options: ['Yes', 'No, first time', "It's complicated"] },
    ],
  },
  {
    id: 'a03', num: '03', title: 'The Project',
    fields: [
      { key: 'a_idea', label: 'What are we making? Describe your idea.', type: 'textarea' },
      { key: 'a_problem', label: 'What problem does this solve for your users?', type: 'textarea' },
      { key: 'a_audience', label: 'Who is your target audience?', type: 'textarea' },
    ],
  },
  {
    id: 'a04', num: '04', title: 'Vision & Style',
    fields: [
      { key: 'a_threeWords', label: '3 words that describe how this should feel', type: 'text' },
      { key: 'a_brandsLoved', label: 'Any brands / apps / designs you love?', type: 'textarea' },
      { key: 'a_styles', label: 'Any colors, fonts, or styles in mind?', type: 'textarea' },
      { key: 'a_dontWant', label: "Anything you definitely don't want?", type: 'textarea' },
    ],
  },
  {
    id: 'a05', num: '05', title: 'Timeline & Investment',
    subtitle: "Not every project has a hard deadline or a price tag. That's okay.",
    fields: [
      { key: 'a_deliverables', label: 'What deliverables do you need?', type: 'textarea' },
      { key: 'a_timeline', label: 'Timeline', type: 'chips', options: ['I have a deadline', 'Flexible — no rush', 'Ongoing / open-ended', "Let's figure it out"] },
      { key: 'a_timelineDetail', label: 'Date or timeframe (if any):', type: 'text' },
      { key: 'a_budget', label: 'Project investment', type: 'chips', options: ['$0 — collaborative / goodwill', 'Under $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+', "Not sure — let's talk", 'Trade / barter'] },
      { key: 'a_budgetNotes', label: 'Any other notes?', type: 'textarea', helper: 'Payment plans, phased approach, open-ended — whatever works.' },
    ],
  },
];

export const VERSION_B = [
  {
    id: 'b01', num: '01', title: "Let's Start With You",
    fields: [
      { key: 'b_name', label: 'Your name', type: 'text' },
      { key: 'b_contact', label: 'Best way to reach you', type: 'text' },
      { key: 'b_whatYouDo', label: 'What do you do?', type: 'textarea', helper: 'In your own words. No need to be formal.' },
      { key: 'b_howFound', label: 'How are people finding you right now?', type: 'chips', options: ['Word of mouth', 'Social media', "They're not — that's why I'm here"] },
      { key: 'b_priorDesigner', label: 'Worked with a designer before?', type: 'chips', options: ['Yes', 'No', 'Kind of?'] },
    ],
  },
  {
    id: 'b02', num: '02', title: 'Tell Me About Your Idea',
    subtitle: "Even if it's fuzzy — that's okay.",
    callout: "Don't worry about getting this 'right.' Just tell me what's in your head.",
    fields: [
      { key: 'b_create', label: 'What do you want to create?', type: 'textarea', helper: 'A website, an app, a logo, something else?' },
      { key: 'b_feel', label: 'What do you want people to feel when they see it?', type: 'textarea' },
      { key: 'b_whoFor', label: 'Who is this for?', type: 'textarea', helper: "Could be 'people like me' — totally fine!" },
    ],
  },
  {
    id: 'b03', num: '03', title: 'What Speaks to You?',
    subtitle: 'Think of anything you love the look or feel of.',
    fields: [
      { key: 'b_loveLook', label: 'Things I love the look/feel of', type: 'textarea', helper: 'Links, names, or just describe it.' },
      { key: 'b_turnOff', label: 'Things that feel wrong or turn me off', type: 'textarea' },
    ],
  },
  {
    id: 'b04', num: '04', title: 'Practical Stuff',
    subtitle: "No stress. Not every project has a deadline or a price tag.",
    fields: [
      { key: 'b_timeline', label: 'Is there a deadline?', type: 'chips', options: ["No deadline — we'll go at our own pace", 'Flexible — next few months', 'I have a specific date'] },
      { key: 'b_timelineDetail', label: 'If you have a date:', type: 'text' },
      { key: 'b_budget', label: 'Budget?', type: 'chips', options: ["$0 — we're collaborating", 'I have a range in mind', "Not sure — let's talk"] },
      { key: 'b_budgetDetail', label: 'If you have a range:', type: 'text' },
      { key: 'b_anythingElse', label: 'Anything else?', type: 'textarea', helper: 'Worries, questions, random thoughts — all welcome.' },
    ],
  },
];

export const VERSION_C = [
  {
    id: 'c01', num: '01', title: 'The Basics', subtitle: "Just the essentials.",
    fields: [
      { key: 'c_bizName', label: 'Business name', type: 'text' },
      { key: 'c_contact', label: 'Contact name', type: 'text' },
      { key: 'c_role', label: 'Your role', type: 'text', helper: 'Owner, manager, partner...' },
      { key: 'c_reachYou', label: 'Best way to reach you', type: 'text' },
      { key: 'c_bizDesc', label: 'What does your business do?', type: 'textarea', helper: "1–2 sentences. We'll refine together." },
    ],
  },
  {
    id: 'c02', num: '02', title: 'Your Goals', subtitle: "Why now? What's the dream?",
    fields: [
      { key: 'c_whyNow', label: 'What made you decide to get a website or app now?', type: 'textarea' },
      { key: 'c_objectives', label: 'What do you want it to help you do?', type: 'chips', options: ['Get more customers', 'Sell products online', 'Show off your work', 'Book appointments', 'Build credibility', 'Stay in touch with customers'] },
      { key: 'c_success', label: 'What would success look like in 3–6 months?', type: 'textarea', helper: 'More calls? More sales? A professional look?' },
    ],
  },
  {
    id: 'c03', num: '03', title: 'Your Customers', subtitle: 'Who are we designing this for?',
    fields: [
      { key: 'c_typicalCustomer', label: 'Describe your typical customer', type: 'textarea', helper: 'Who walks through your door or calls you?' },
      { key: 'c_ageRange', label: 'Age range (rough guess)', type: 'text' },
      { key: 'c_reach', label: 'Where are your customers?', type: 'chips', options: ['Local', 'Online', 'Both'] },
      { key: 'c_problemsSolved', label: 'What problems do you solve for them?', type: 'textarea' },
    ],
  },
  {
    id: 'c03b', num: '03b', title: 'Where You Are Now', subtitle: 'Your starting point.',
    fields: [
      { key: 'c_howFound', label: 'How are people finding you?', type: 'chips', options: ['Word of mouth', 'Social media', 'Google / search', "They're not — that's why I'm here"] },
      { key: 'c_currentPresence', label: 'Do you currently have any of these?', type: 'chips', options: ['A website (even old)', 'Social media profiles', 'Google Business listing', 'Business cards / flyers', 'Nothing yet'] },
      { key: 'c_priorDesigner', label: 'Worked with a designer before?', type: 'chips', options: ['Yes — went well', "Yes — didn't go great", 'No, first time'] },
      { key: 'c_techComfort', label: 'Comfort level with technology?', type: 'chips', options: ['Very comfortable', 'I can figure things out', 'Need hand-holding (no shame!)'] },
    ],
  },
  {
    id: 'c04', num: '04', title: 'Your Brand', subtitle: "Even if you don't have one yet.",
    fields: [
      { key: 'c_hasLogo', label: 'Do you have a logo?', type: 'chips', options: ['Yes', 'No', 'Sort of'] },
      { key: 'c_hasColors', label: 'Brand colors?', type: 'chips', options: ['Yes', 'No', 'Not sure'] },
      { key: 'c_brandFeel', label: 'How should your business feel?', type: 'chips', options: ['Friendly', 'Professional', 'Bold', 'Calm', 'Luxury', 'Fun', 'Trustworthy', 'Modern', 'Down-to-earth'] },
      { key: 'c_brandInspo', label: 'Brands you like the look of?', type: 'textarea', helper: "Doesn't have to be your industry." },
    ],
  },
  {
    id: 'c05', num: '05', title: 'Your Content', subtitle: 'Most people need help here.',
    callout: "It's okay if you don't have content yet — that's what we're here for.",
    fields: [
      { key: 'c_hasPhotos', label: 'Photos of your work, products, or team?', type: 'chips', options: ['Yes, ready', 'Some, need more', 'No, need help'] },
      { key: 'c_hasWritten', label: 'Written content ready?', type: 'chips', options: ['Yes', 'Some', "No — I'll need help"] },
      { key: 'c_contentHelp', label: 'Want help creating content?', type: 'chips', options: ['Yes please', 'Maybe', "No, I've got it"] },
    ],
  },
  {
    id: 'c06', num: '06', title: 'Features', subtitle: 'What should people be able to do?',
    fields: [
      { key: 'c_features', label: 'Core features needed', type: 'chips', options: ['Contact form', 'Book appointments', 'Buy products', 'View services', 'Blog / updates', 'Portfolio / gallery', 'Map / directions', 'Leave reviews', 'Email sign-up'] },
      { key: 'c_specificFeatures', label: 'Anything specific in mind?', type: 'textarea', helper: 'Calculator, members area, menu?' },
    ],
  },
  {
    id: 'c07', num: '07', title: 'Inspiration', subtitle: 'What you like — and who you compete with.',
    fields: [
      { key: 'c_likedSites', label: 'Websites or apps you love', type: 'textarea', helper: 'Names or URLs.' },
      { key: 'c_competitors', label: 'Main competitors', type: 'textarea', helper: "We'll make sure you stand out." },
    ],
  },
  {
    id: 'c08', num: '08', title: 'Timeline & Investment',
    subtitle: "Not every project has a deadline or a price tag.",
    fields: [
      { key: 'c_timeline', label: 'Timeline', type: 'chips', options: ["No deadline — our own pace", 'Flexible — next few months', 'Soft target date', 'Hard deadline'] },
      { key: 'c_timelineDetail', label: 'Date (if any):', type: 'text' },
      { key: 'c_budget', label: 'Project investment', type: 'chips', options: ['$0 — collaborative / goodwill', 'Under $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+', "Not sure — let's talk", 'Trade / barter'] },
      { key: 'c_budgetNotes', label: 'Budget notes?', type: 'textarea', helper: 'Payment plans, phased approach, whatever works.' },
    ],
  },
  {
    id: 'c09', num: '09', title: 'Ongoing Support', subtitle: 'What happens after launch?',
    fields: [
      { key: 'c_ongoingHelp', label: 'Need help updating later?', type: 'chips', options: ['Yes, ongoing', 'Maybe occasionally', "No, I'll manage"] },
      { key: 'c_training', label: 'Want training?', type: 'chips', options: ['Yes, full walkthrough', 'Quick overview', 'No thanks'] },
      { key: 'c_anythingElse', label: 'Anything else we should know?', type: 'textarea', helper: 'Questions, concerns, wild ideas — all welcome.' },
    ],
  },
];

export const PRIVATE_META = [
  {
    id: 'p01', num: '01', title: 'Project Identity',
    fields: [
      { key: 'p_projectName', label: 'Project name / codename', type: 'text' },
      { key: 'p_client', label: 'Client / who is this for', type: 'text' },
      { key: 'p_yourRole', label: 'Your role', type: 'text' },
      { key: 'p_status', label: 'Project status', type: 'chips', options: ['Concept', 'In progress', 'Prototype', 'Complete', 'Abandoned', 'Never again'] },
      { key: 'p_startDate', label: 'Start date', type: 'text' },
      { key: 'p_endDate', label: 'End date / deadline', type: 'text' },
      { key: 'p_timeSpent', label: 'Total time spent (be real)', type: 'text' },
      { key: 'p_tools', label: 'Tools used', type: 'text' },
      { key: 'p_projectType', label: 'Project type', type: 'chips', options: ['Paid', '$0 / Goodwill', 'Portfolio piece', 'Trade / barter'] },
      { key: 'p_whyZero', label: 'If $0 — why am I doing this?', type: 'textarea', helper: 'Keep yourself honest.' },
    ],
  },
  {
    id: 'p02', num: '02', title: 'The Real Brief',
    fields: [
      { key: 'p_realProblem', label: 'What problem does this actually solve?', type: 'textarea' },
      { key: 'p_realUser', label: 'Who is the target user? (get specific)', type: 'textarea' },
      { key: 'p_mood', label: 'Mood / vibe / aesthetic direction', type: 'textarea' },
      { key: 'p_inspo', label: 'Inspiration (links, refs, vibes)', type: 'textarea' },
    ],
  },
  {
    id: 'p03', num: '03', title: 'Color & Type',
    fields: [
      { key: 'p_colors', label: 'Color palette (hex codes, descriptions)', type: 'textarea' },
      { key: 'p_primaryFont', label: 'Primary font', type: 'text' },
      { key: 'p_secondaryFont', label: 'Secondary font', type: 'text' },
    ],
  },
  {
    id: 'p04', num: '04', title: 'Process Log',
    fields: [
      { key: 'p_planning', label: 'Planning & discovery', type: 'textarea', helper: 'Methods used, workshops, artifacts' },
      { key: 'p_research', label: 'Research', type: 'textarea', helper: 'Who you talked to, what you found' },
      { key: 'p_design', label: 'Design', type: 'textarea', helper: 'Sketches > lo-fi > hi-fi > iterations' },
      { key: 'p_testing', label: 'Testing & validation', type: 'textarea', helper: 'Who tested it, what they said' },
    ],
  },
  {
    id: 'p05', num: '05', title: 'Client Notes // The Real Tea',
    fields: [
      { key: 'p_totalRevisions', label: 'Total revisions', type: 'text' },
      { key: 'p_paidRevisions', label: 'Paid revisions', type: 'text' },
      { key: 'p_freeRevisions', label: 'Free / goodwill revisions', type: 'text' },
      { key: 'p_scopeCreep', label: 'Scope creep?', type: 'chips', options: ['Yes', 'No'] },
      { key: 'p_askedVsRecommended', label: 'What they asked for vs what I recommended', type: 'textarea' },
      { key: 'p_howFeel', label: 'How did this client make me feel? (no filter)', type: 'textarea' },
    ],
  },
  {
    id: 'p06', num: '06', title: 'Personal Reflection',
    subtitle: 'For your eyes only.',
    fields: [
      { key: 'p_proudOf', label: "What I'm proud of", type: 'textarea' },
      { key: 'p_differently', label: "What I'd do differently", type: 'textarea' },
      { key: 'p_skillsLearned', label: 'Skills developed / what I learned', type: 'textarea' },
      { key: 'p_workAgain', label: 'Would I work with this client again?', type: 'chips', options: ['Absolutely', 'Maybe', 'Nope'] },
      { key: 'p_zeroWorthIt', label: 'If $0 — was it worth it?', type: 'chips', options: ['Yes — great for portfolio/skills/relationship', "Mixed — learned but wouldn't repeat", 'No — better boundaries next time'] },
      { key: 'p_finalNotes', label: 'Final honest notes', type: 'textarea' },
    ],
  },
];
