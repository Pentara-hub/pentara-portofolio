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
    related: ["shopswift", "datainsight", "newshub"],
  },

  fairwheels: {
    title: "FairWheels",
    subtitle: "AI-Powered Car Retail Web Service",
    overview:
      "FairWheels blends machine learning with a modern web stack to make used-car trading transparent and smart. It predicts fair prices, lets buyers compare vehicles side-by-side, and enables community Q&A for better decisions.",
    goals: [
      "Accurate used-car price prediction",
      "Interactive comparisons & Q&A",
      "Transparent pricing and UX",
      "Rule-based filtering & custom search",
    ],
    features: [
      "AI price prediction (Linear Regression)",
      "Vehicle comparison tools",
      "Q&A forum for buyer–seller interaction",
      "Rule-based filters and custom queries",
      "Seller & buyer dashboards",
      "Listing with AI valuation",
    ],
    gallery: [
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/discover.png",
        alt: "FairWheels — Home",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/singleCar.png",
        alt: "Single Car View",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/AI-1.png",
        alt: "Price Prediction",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/AI-2.png",
        alt: "Price Prediction",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/blog.png",
        alt: "Blog",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/sell.png",
        alt: "Sell your car",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/ai-rec.png",
        alt: "Sell your car",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/listed.png",
        alt: "Listed Cars",
      },
      {
        type: "img",
        src: "/assets/images/projects/fairwheels/chat.png",
        alt: "Sell your car",
      },

      {
        type: "img",
        src: "/assets/images/projects/fairwheels/admin.png",
        alt: "Sell your car",
      },
    ],
    related: ["EduKids", "newshub", "soundwave"],
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
    features: ["RBAC", "Anomaly alerts", "Widget builder", "CSV/Excel export"],
    gallery: [
      { type: "img", src: "images/case-bi-1.jpg", alt: "Dashboard" },
      { type: "img", src: "images/case-bi-2.jpg", alt: "Alerts" },
    ],
    related: ["shopswift", "schedulepro", "newshub"],
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
    related: ["newshub", "datainsight", "EduKids"],
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
    related: ["datainsight", "shopswift", "EduKids"],
  },
};
