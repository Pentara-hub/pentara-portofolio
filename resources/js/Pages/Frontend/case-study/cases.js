export const DEFAULT_SLUG = "eduplatform-pro";

export const CASES = {
  "eduplatform-pro": {
    title: "EduPlatform Pro",
    subtitle:
      "A scalable LMS with rich authoring, real-time analytics, and enterprise SSO.",
    overview:
      "Client needed a modern learning platform to replace a legacy monolith. We migrated content, built a frictionless enrollment flow, and delivered real-time progress analytics with fine-grained roles.",
    goals: [
      "Handle 50k monthly active learners",
      "Zero-downtime content deploys",
      "SSO with Okta & audit logging",
      "Mobile-first learner experience",
    ],
    solutionHtml: `
      <p>We designed a modular system: React (Vite) front-end, Laravel API, and an event-driven backend on AWS. Content is stored as versioned JSON modules, rendered on the client for low latency. Media is served via CloudFront with signed URLs. CI/CD (GitHub Actions) promotes from staging → prod with blue/green deploys.</p>
      <p>Security was built-in: JWT for session tokens, short-lived presigned uploads, and audit trails on sensitive actions. We introduced background workers (SQS) for long-running tasks like report generation and video transcoding.</p>
    `,
    features: [
      "Course builder with drag-and-drop",
      "Granular roles (Admin, Instructor, Learner)",
      "Quizzes & proctoring hooks",
      "Progress analytics & cohorts",
      "Multi-tenant theming",
    ],

    archNote: "Future: enable SCORM/xAPI importers as standalone workers.",
    gallery: [
      {
        type: "img",
        src: "/assets/images/projects/lms/home.png",
        alt: "Learner dashboard",
      },
      {
        type: "img",
        src: "/assets/images/projects/lms/course-details.png",
        alt: "Course authoring",
      },
      // { type: "video", src: "https://www.youtube.com/embed/xyz?rel=0", title: "Demo" },
    ],
    services: [
      "Product design",
      "Frontend development",
      "Backend APIs",
      "Infrastructure & DevOps",
      "QA & rollout",
    ],
    stack: [
      "React",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS (S3, CloudFront, RDS, SQS)",
      "GitHub Actions",
    ],
    related: ["shopswift", "datainsight", "newshub"],
  },
  shopswift: {
    title: "ShopSwift",
    subtitle:
      "High-performance commerce with AI recommendations and lightning checkout.",
    overview:
      "Migrated from WooCommerce to a headless stack. Introduced product embeddings for “similar items” and edge-cached PDPs.",
    goals: [
      "<2s LCP globally",
      "One-click checkout",
      "Inventory sync with ERP",
      "Personalized PDP sections",
    ],
    solutionHtml: `<p>Next.js app router with ISR, Node/Express BFF, and a MongoDB cluster. Stripe + Apple Pay, webhook-driven fulfillment.</p>`,
    features: [
      "AI recommendations",
      "Edge caching (ISR)",
      "Guest checkout",
      "Discount engine",
      "Admin portal",
    ],

    archNote: "Warm ISR on new product releases to avoid cold starts.",
    gallery: [
      { type: "img", src: "images/case-shop-home.jpg", alt: "Home" },
      { type: "img", src: "images/case-shop-pdp.jpg", alt: "PDP" },
    ],
    services: ["UX", "Frontend", "Backend", "Payments", "Perf"],
    stack: ["Next.js", "Node", "MongoDB", "Stripe", "Meilisearch"],
    related: ["eduplatform-pro", "newshub", "soundwave"],
  },
  datainsight: {
    title: "DataInsight",
    subtitle: "Realtime BI for ops with live widgets and alerting.",
    overview:
      "Unified fragmented data sources into a single pane. Role-based dashboards and anomaly alerts.",
    goals: [
      "Unify 6 data sources",
      "Row-level security",
      "Exportable reports",
      "Slack alerts",
    ],
    solutionHtml:
      "<p>Python FastAPI services over a Postgres warehouse, Vue SPA, and Airflow for nightly jobs. Grafana for viz where needed.</p>",
    features: ["RBAC", "Anomaly alerts", "Widget builder", "CSV/Excel export"],

    archNote: "Partitioned tables reduced query cost by ~40%.",
    gallery: [
      { type: "img", src: "images/case-bi-1.jpg", alt: "Dashboard" },
      { type: "img", src: "images/case-bi-2.jpg", alt: "Alerts" },
    ],
    services: ["Data eng", "APIs", "Frontend", "ETL"],
    stack: ["Vue", "FastAPI", "Postgres", "Airflow", "Docker"],
    related: ["shopswift", "schedulepro", "newshub"],
  },
  newshub: {
    title: "NewsHub",
    subtitle: "Personalized news aggregator with topic graphs.",
    overview:
      "Built a news feed with topic discovery and save-for-later across devices.",
    goals: ["Realtime sync", "Offline mode", "Source dedupe", "Topic graph"],
    solutionHtml:
      "<p>React app with Apollo GraphQL, Firebase Auth/RTDB, and workerized parsing pipeline.</p>",
    features: ["Topic graph", "Saved lists", "Offline cache", "Smart dedupe"],

    archNote: "Moved heavy parsing to workers.",
    gallery: [
      { type: "img", src: "images/case-news-1.jpg", alt: "Feed" },
      { type: "img", src: "images/case-news-2.jpg", alt: "Topic graph" },
    ],
    services: ["FE", "API", "Realtime"],
    stack: ["React", "Apollo", "Firebase"],
    related: ["shopswift", "soundwave", "schedulepro"],
  },
  soundwave: {
    title: "SoundWave",
    subtitle: "Music streaming with social features.",
    overview: "Rebuilt the player & feed, added social graph and playlists.",
    goals: ["Gapless playback", "Social graph", "Moderation tools"],
    solutionHtml:
      "<p>HLS with segment prefetch, Redis pub/sub for presence, and a NestJS API.</p>",
    features: ["Gapless HLS", "Playlists", "Social feed", "Moderation"],

    archNote: "Prefetch next segments for near-instant seeks.",
    gallery: [
      { type: "img", src: "images/case-sound-1.jpg", alt: "Player" },
      { type: "img", src: "images/case-sound-2.jpg", alt: "Feed" },
    ],
    services: ["FE", "BE", "Infra"],
    stack: ["Angular", "NestJS", "Postgres", "Redis", "AWS"],
    related: ["newshub", "datainsight", "eduplatform-pro"],
  },
  schedulepro: {
    title: "SchedulePro",
    subtitle: "Enterprise scheduling & resource management.",
    overview: "Optimized workforce/asset scheduling across plants.",
    goals: ["Complex constraints", "What-if sim", "SSO/SAML"],
    solutionHtml:
      "<p>Go services with constraint solver, SvelteKit frontend, and k8s autoscaling.</p>",
    features: ["Scenario sim", "Role rules", "CSV import/export", "Audit"],

    archNote: "Job queues isolated per tenant.",
    gallery: [
      { type: "img", src: "images/case-sched-1.jpg", alt: "Scheduler" },
      { type: "img", src: "images/case-sched-2.jpg", alt: "Utilization" },
    ],
    services: ["FE", "BE", "DevOps", "SRE"],
    stack: ["Svelte", "Go", "Postgres", "NATS", "Kubernetes"],
    related: ["datainsight", "shopswift", "eduplatform-pro"],
  },
};
