export const ENGAGEMENT_MODES = [
  {
    id: "m1", code: "M1", label: "Fast Track", subtitle: "MVP / POC", timeline: "4–8 weeks",
    title: "Your Idea Deserves Real Users — Not a Slide Deck.",
    desc: "You have a vision, not a product yet. We turn it into a live website or mobile app your first users can actually use — scoped tight, built fast, and ready to test before you commit big budget.",
    tags: ["Web & Mobile MVP", "Rapid Prototyping", "User Testing"],
    proof: "FairWheels went from concept to live MVP with early buyers onboard. Habit Tracker shipped a full dashboard in weeks, not quarters.",
  },
  {
    id: "m2", code: "M2", label: "Engineering Grade", subtitle: "Production", timeline: "3–6 months",
    title: "Built to Launch — and Still Standing a Year Later.",
    desc: "This is the mode for products that need to earn trust. We design, develop, and ship your full web or mobile platform — with QA baked in, AI where it genuinely helps, and cloud setup handled so you don't have to think about it.",
    tags: ["Full Product Build", "Web & Mobile", "Production QA"],
    proof: "Aklemy — a full enterprise LMS with smart quizzes, analytics, and an AI study assistant — delivered on schedule. Misteral's healthcare platform rebuilt for real traffic.",
  },
  {
    id: "m3", code: "M3", label: "System Contributor", subtitle: "Existing systems", timeline: "Ongoing",
    title: "Your Product Is Live. Now Make It Faster to Change.",
    desc: "Every new feature on a brittle codebase costs triple. We embed in your stack, improve what hurts, and keep your website or app shipping calmly — without a full rewrite.",
    tags: ["Legacy Modernisation", "Ongoing Delivery", "Team Augmentation"],
    proof: "Ongoing development, frontend refactors, and release support for production systems that can't afford downtime.",
  },
  {
    id: "y", code: "Y", label: "Discovery", subtitle: "Just an idea", timeline: "2–4 weeks",
    title: "A Napkin Sketch Is a Perfect Starting Point.",
    desc: "Bring the idea as rough as it is. We shape it into user flows, screens, and a clear build plan — so when development starts, every decision already has a reason behind it.",
    tags: ["Product Discovery", "UI/UX Planning", "Roadmapping"],
    proof: "MyMap and Habit Tracker both started as loose concepts. We shaped the product story first, then built with confidence.",
  },
  {
    id: "p", code: "P", label: "Advisory", subtitle: "All experts", timeline: "1–3 intensive days",
    title: "Big Decision Coming? Get the Full Picture First.",
    desc: "Choosing a tech stack, planning a mobile launch, or reviewing an existing product — we give you a clear, honest read in days so you don't commit to the wrong build.",
    tags: ["Architecture Review", "Feasibility", "Technical Due Diligence"],
    proof: "Pre-launch reviews and stack assessments before clients committed to six-figure builds.",
  },
];

export const SERVICE_CLUSTERS = [
  { id: "build", label: "Core delivery", count: 4, title: "Build", tagline: "Websites and apps your users open every day.", services: [
    { id: "1.1", name: "Product Delivery", desc: "End-to-end — you share the idea, we deliver the finished website or app" },
    { id: "1.2", name: "Web Engineering", desc: "React, Laravel, and Next.js sites built fast, responsive, and ready for real users" },
    { id: "1.3", name: "Rapid Prototyping", desc: "A working prototype in weeks so you can validate before the big investment" },
    { id: "1.4", name: "Mobile", desc: "Flutter apps for iOS and Android — one build, native feel on both platforms" },
  ]},
  { id: "intelligence", label: "AI & data", count: 3, title: "Intelligence", tagline: "What makes your product smarter.", services: [
    { id: "2.1", name: "AI Integration", desc: "Chatbots, smart features, and automation — built into your product, not pasted on" },
    { id: "2.2", name: "Data Dashboards", desc: "Live analytics your team actually checks instead of a spreadsheet they'll ignore" },
    { id: "2.3", name: "Product Discovery", desc: "Turn a rough idea into screens, flows, and a spec ready to build from" },
  ]},
  { id: "systems", label: "Architecture & infra", count: 3, title: "Systems", tagline: "Hosting and cloud — handled so you don't have to.", services: [
    { id: "3.1", name: "Cloud Architecture", desc: "Reliable hosting and infrastructure set up for you — scales when your users grow" },
    { id: "3.2", name: "DevOps & CI/CD", desc: "Smooth deployments behind the scenes — updates go live without drama" },
    { id: "3.3", name: "Security Engineering", desc: "Secure by default — your users' data protected from the first commit" },
  ]},
  { id: "craft", label: "Design & quality", count: 2, title: "Craft", tagline: "What makes people come back.", services: [
    { id: "4.1", name: "UI/UX Design", desc: "Interfaces that look sharp and feel obvious — designed before a single line of code" },
    { id: "4.2", name: "Quality Engineering", desc: "Tested on every device and browser — nothing ships until it's right" },
  ]},
  { id: "partnership", label: "People & long-term", count: 4, title: "Partnership", tagline: "Who answers when you call after launch.", services: [
    { id: "5.1", name: "Team Augmentation", desc: "Senior engineers who slot into your workflow when you need extra hands" },
    { id: "5.2", name: "Technical Advisory", desc: "Honest guidance on stack, timeline, and feasibility — before you sign anything" },
    { id: "5.3", name: "Venture Build", desc: "Your vision and market knowledge, our engineering — from idea to first paying customer" },
    { id: "5.4", name: "System Ownership", desc: "Updates, fixes, and support long after launch — we're still here when you need us" },
  ]},
];

export const PROJECTS = [
  { slug: "Aklemy", title: "Aklemy", category: "Education", mode: "M2 · Engineering Grade", desc: "A full enterprise learning platform — smart quizzes, real-time analytics, and an AI study assistant. Scoped, built, and shipped without missing a milestone.", image: "/images/projects/lms/home.png", icon: "fa-graduation-cap" },
  { slug: "fairwheels", title: "FairWheels", category: "Automotive", mode: "M1 · Fast Track", desc: "AI-powered price prediction and vehicle comparison — from rough concept to a live MVP with early users testing the core flow.", image: null, icon: "fa-car" },
  { slug: "misteral", title: "Misteral", category: "Healthcare", mode: "M2 · Engineering Grade", desc: "A pharmaceutical brand website with product catalog and publishing workflows — designed, built, and launched for real-world traffic.", image: "/images/projects/misteral/home.png", icon: "fa-notes-medical" },
  { slug: "habittracker", title: "Habit Tracker", category: "Wellness", mode: "M1 · Fast Track", desc: "A wellness app with behavioral analytics, heatmaps, and streak tracking — shipped fast so the founder could validate retention before scaling.", image: "/images/projects/habitTracker/Dashboard.png", icon: "fa-calendar-check" },
  { slug: "mymap", title: "MyMap", category: "Fitness", mode: "Y · Discovery", desc: "A fitness app with map-based route tracking — shaped from a sketch into a build-ready product with clear user flows.", image: "/images/projects/MyMap/image.png", icon: "fa-map-marker-alt" },
];

export const TESTIMONIALS = [
  { quote: "We gave them a tight deadline on our LMS. They hit it — with analytics, AI features, and a platform our teachers actually wanted to use.", role: "CEO", company: "EdTech Client" },
  { quote: "Every standup felt like talking to engineers who'd already read our architecture docs. No hand-holding, no surprises at deploy time.", role: "CTO", company: "SaaS Startup" },
  { quote: "Monitoring, automated tests, runbooks — they didn't just hand us code. They handed us a system we could run without them.", role: "VP Engineering", company: "International Client" },
  { quote: "They move fast, but nothing feels rushed. You can tell they review their own work before it reaches you.", role: "Director", company: "Digital Agency" },
];

export const TECH_STACK = ["React", "Next.js", "Laravel", "TypeScript", "Flutter", "OpenAI", "Tailwind CSS", "PostgreSQL", "Docker", "Python", "Vue.js", "Redis", "GitHub Actions", "Figma", "Node.js"];

export const TEAM = [
  { name: "Abdelrahman Mohamed", role: "PM & Front-end", img: "/images/Abdelrahman.jpg" },
  { name: "Ahmed Medhat", role: "Back-end & QA", img: "/images/Ahmed.jpg" },
  { name: "Omar Elsamni", role: "DevOps & Cloud", img: "/images/samni.jpg" },
  { name: "Osama Medhat", role: "Back-end & QA", img: "/images/Osama.jpg" },
];
