export const DEFAULT_SLUG = "EduKids";

export const CASES = {
  edukids: {
    title: "EduKids",
    subtitle: "A powerful LMS with smart quizzes learning",
    overview:
      "EduKids is a kid-friendly Learning Management System that blends engaging lessons with a robust quiz engine. Designed for schools, tutors, and edtech startups, EduKids supports multimedia courses, adaptive assessments, and real-time progress tracking—wrapped in a clean, accessible interface that works beautifully on web and mobile. Under the hood, it’s ready for scale and multilingual classrooms, making it easy to launch, manage, and continuously improve learning experiences.",
    goals: [
      "Measure understanding via smart quizzes and analytics",
      "Reduce teacher workload with authoring, auto-grading, and feedback",
      "Support diverse, multilingual classrooms with parental visibility",
    ],
    features: [
      "Role-based dashboards (Student, Instructor, Admin, Owner)",
      "Wishlist",
      "Course & Quiz reviews",
      "Notifications",
      "Categories & subcategories",
      "Coupons & discounts",
      "Course pages: unenrolled & enrolled modes",
      "AI Chatbot support",
      "Quiz engine (types, timer, retakes, results)",
    ],
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
      {
        type: "img",
        src: "/assets/images/projects/lms/quiz.png",
        alt: "Course authoring",
      },
      {
        type: "img",
        src: "/assets/images/projects/lms/quiz-ans.png",
        alt: "Course authoring",
      },
      // { type: "video", src: "https://www.youtube.com/embed/xyz?rel=0", title: "Demo" },
    ],
    related: ["shopswift", "mesteral", "newshub"],
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
    features: [
      "AI recommendations",
      "Edge caching (ISR)",
      "Guest checkout",
      "Discount engine",
      "Admin portal",
    ],
    gallery: [
      { type: "img", src: "images/case-shop-home.jpg", alt: "Home" },
      { type: "img", src: "images/case-shop-pdp.jpg", alt: "PDP" },
    ],
    related: ["EduKids", "newshub", "soundwave"],
  },

  mesteral: {
    title: "MESTERAL",
    subtitle: "Pharma website & product catalog (MENA/CIS)",
    overview:
      "A clean, fast portfolio build showcasing Mesteral’s services, product lines, regional footprint, and lead-gen paths.",
    goals: [
      "Build brand trust with clear story & stats",
      "Drive partner inquiries with focused CTAs",
      "Make products easy to find and download",
      "Keep updates simple via News & FAQs",
    ],
    features: [
      "Services hub for market entry, distributors, and regulation",
      "Product catalog with categories, search, filters, and PDFs",
      "News & Events feed with simple date ordering",
      "FAQ to reduce repetitive questions",
      "About with vision, milestones, and KPIs",
      "Contact hub with form, phone, and email",
    ],
    gallery: [
      {
        type: "img",
        src: "/assets/images/projects/mesteral/home.png",
        alt: "home page",
      },
      {
        type: "img",
        src: "/assets/images/projects/mesteral/news.png",
        alt: "news page",
      },
      {
        type: "img",
        src: "/assets/images/projects/mesteral/products.png",
        alt: "news page",
      },
    ],
    related: ["edukids", "shopswift", "mesteral"],
  },

  newshub: {
    title: "NewsHub",
    subtitle: "Personalized news aggregator with topic graphs.",
    overview:
      "Built a news feed with topic discovery and save-for-later across devices.",
    goals: ["Realtime sync", "Offline mode", "Source dedupe", "Topic graph"],
    features: ["Topic graph", "Saved lists", "Offline cache", "Smart dedupe"],
    gallery: [
      { type: "img", src: "images/case-news-1.jpg", alt: "Feed" },
      { type: "img", src: "images/case-news-2.jpg", alt: "Topic graph" },
    ],
    related: ["shopswift", "soundwave", "schedulepro"],
  },

  soundwave: {
    title: "SoundWave",
    subtitle: "Music streaming with social features.",
    overview: "Rebuilt the player & feed, added social graph and playlists.",
    goals: ["Gapless playback", "Social graph", "Moderation tools"],
    features: ["Gapless HLS", "Playlists", "Social feed", "Moderation"],
    gallery: [
      { type: "img", src: "images/case-sound-1.jpg", alt: "Player" },
      { type: "img", src: "images/case-sound-2.jpg", alt: "Feed" },
    ],
    related: ["newshub", "mesteral", "EduKids"],
  },

  schedulepro: {
    title: "SchedulePro",
    subtitle: "Enterprise scheduling & resource management.",
    overview: "Optimized workforce/asset scheduling across plants.",
    goals: ["Complex constraints", "What-if sim", "SSO/SAML"],
    features: ["Scenario sim", "Role rules", "CSV import/export", "Audit"],
    gallery: [
      { type: "img", src: "images/case-sched-1.jpg", alt: "Scheduler" },
      { type: "img", src: "images/case-sched-2.jpg", alt: "Utilization" },
    ],
    related: ["mesteral", "shopswift", "EduKids"],
  },
};
