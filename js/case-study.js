/* =====================
         Util helpers
====================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const params = new URLSearchParams(location.search);
const slug = (params.get("id") || "").toLowerCase();

function el(tag, classes = "", html = "") {
  const e = document.createElement(tag);
  if (classes) e.className = classes;
  if (html) e.innerHTML = html;
  return e;
}
function chip(text) {
  const s = el("span", "chip");
  s.textContent = text;
  return s;
}

/* =====================
         Case study data
====================== */
const CASES = {
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
        src: "images/projects/lms/home.png",
        alt: "Learner dashboard",
      },
      {
        type: "img",
        src: "images/projects/lms/course-details.png",
        alt: "Course authoring",
      },
      // you can also mix a video item like:
      // {
      //   type: "video",
      //   src: "https://www.youtube.com/embed/xyz?rel=0",
      //   title: "Demo",
      // },
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

const DEFAULT_SLUG = "eduplatform-pro";
const cs = CASES[slug] || CASES[DEFAULT_SLUG];

/* =====================
    Inject text content
====================== */
$("#title").textContent = cs.title;
$("#crumbTitle").textContent = cs.title;
$("#subtitle").textContent = cs.subtitle;

$("#overview").textContent = cs.overview;
cs.goals.forEach((g) => {
  const li = el("li", "flex items-start gap-2");
  li.innerHTML = `<i class="fa-solid fa-check text-accent mt-1"></i><span>${g}</span>`;
  $("#goals").appendChild(li);
});

$("#solution").innerHTML = cs.solutionHtml;

/* -------- Features -------- */
function featureIcon(text) {
  const t = text.toLowerCase();
  if (t.includes("course")) return "fa-graduation-cap";
  if (t.includes("role") || t.includes("rbac")) return "fa-user-shield";
  if (t.includes("quiz") || t.includes("proctor")) return "fa-square-check";
  if (t.includes("analytics") || t.includes("progress")) return "fa-chart-line";
  if (t.includes("multi-tenant") || t.includes("theming"))
    return "fa-layer-group";
  if (t.includes("recommendation") || t.includes("ai"))
    return "fa-wand-magic-sparkles";
  if (t.includes("checkout") || t.includes("payment")) return "fa-credit-card";
  if (t.includes("offline")) return "fa-cloud-arrow-down";
  if (t.includes("search")) return "fa-magnifying-glass";
  if (t.includes("export") || t.includes("csv") || t.includes("excel"))
    return "fa-file-csv";
  if (t.includes("alert")) return "fa-triangle-exclamation";
  return "fa-circle-check"; // default
}

function featureCard(text, idx) {
  const wrap = el(
    "div",
    "feature-card group p-4 rounded-xl border bg-white/70 dark:bg-slate-900/40 " +
      "dark:border-slate-700 card-hover"
  );

  const icon = featureIcon(text);
  wrap.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="shrink-0 w-10 h-10 grid place-items-center rounded-lg
                  bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
        <i class="fa-solid ${icon}"></i>
      </div>
      <div class="min-w-0">
        <div class="font-semibold text-slate-800 dark:text-slate-100">${text}</div>
        <div class="mt-1 flex items-center gap-2 text-xs opacity-70">
        </div>
      </div>
    </div>
  `;
  return wrap;
}

function renderFeaturesStandalone() {
  const grid = $("#featuresGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const list = Array.isArray(cs.features) ? cs.features : [];
  if (!list.length) {
    grid.innerHTML = `<div class="text-sm opacity-70">No features listed yet.</div>`;
    return;
  }
  list.forEach((f, i) => grid.appendChild(featureCard(f, i)));
}

// call after other content renders
renderFeaturesStandalone();

/* =====================
    Top Showcase Gallery
====================== */
const items = Array.isArray(cs.gallery) && cs.gallery.length ? cs.gallery : [];
let current = 0;

const heroGallery = $("#heroGallery");
const heroThumbs = $("#heroThumbs");
const prevBtn = $("#gPrev");
const nextBtn = $("#gNext");

function renderMain(i) {
  current = (i + items.length) % items.length;
  heroGallery.innerHTML = "";

  if (!items.length) {
    heroGallery.append(el("div", "text-sm opacity-70", "No media yet."));
    prevBtn.style.display = nextBtn.style.display = "none";
    return;
  }

  const item = items[current];
  if (item.type === "video") {
    const frame = el("iframe", "w-full h-full");
    frame.src = item.src;
    frame.title = item.title || "Video";
    frame.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.loading = "lazy";
    heroGallery.appendChild(frame);
  } else {
    const img = new Image();
    img.src = item.src;
    img.alt = item.alt || "";
    img.className = "w-full h-full object-cover";
    heroGallery.appendChild(img);
  }

  highlightThumb(current);
}

function thumbNode(it, idx) {
  const btn = el(
    "button",
    "relative shrink-0 rounded-lg overflow-hidden border border-slate-200/70 dark:border-slate-700 w-28 h-16"
  );
  const badge =
    it.type === "video"
      ? `<span class="absolute inset-0 grid place-items-center">
         <span class="inline-grid place-items-center w-8 h-8 rounded-full bg-black/60 text-white">
           <i class="fa-solid fa-play text-xs"></i>
         </span>
       </span>`
      : "";

  if (it.type === "video") {
    // fallback thumbnail frame
    btn.innerHTML = `<div class="w-full h-full bg-slate-200 dark:bg-slate-700"></div>${badge}`;
  } else {
    btn.innerHTML = `<img src="${it.src}" alt="${
      it.alt || ""
    }" class="w-full h-full object-cover" />`;
  }
  btn.addEventListener("click", () => renderMain(idx));
  return btn;
}

function renderThumbs() {
  heroThumbs.innerHTML = "";
  items.forEach((it, idx) => heroThumbs.appendChild(thumbNode(it, idx)));
  highlightThumb(current);
}

function highlightThumb(idx) {
  $$(".thumbs button", document).forEach((b, i) => {
    b.classList.toggle("ring-2", i === idx);
    b.classList.toggle("ring-primary", i === idx);
    b.classList.toggle("opacity-100", i === idx);
    b.classList.toggle("opacity-70", i !== idx);
  });
}

prevBtn?.addEventListener("click", () => renderMain(current - 1));
nextBtn?.addEventListener("click", () => renderMain(current + 1));
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") renderMain(current - 1);
  if (e.key === "ArrowRight") renderMain(current + 1);
});
// swipe support (simple)
let startX = null;
heroGallery.addEventListener(
  "touchstart",
  (e) => (startX = e.changedTouches[0].screenX),
  { passive: true }
);
heroGallery.addEventListener(
  "touchend",
  (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].screenX - startX;
    if (Math.abs(dx) > 40)
      dx > 0 ? renderMain(current - 1) : renderMain(current + 1);
    startX = null;
  },
  { passive: true }
);

// init
renderMain(0);
renderThumbs();

/* =====================
   Related + Sidebar
====================== */
if (cs.quote) {
  $("#quoteText").textContent = cs.quote[0];
  $("#quoteBy").textContent = cs.quote[1];
  $("#quote")?.classList.remove("hidden");
}

cs.services.forEach((s) => {
  const li = el("li", "flex items-start gap-2");
  li.innerHTML = `<i class="fa-solid fa-check text-accent mt-1"></i><span>${s}</span>`;
  $("#services").appendChild(li);
});
cs.stack.forEach((s) => $("#stack").appendChild(chip(s)));

function relatedCard(sl) {
  const it = CASES[sl] || CASES[DEFAULT_SLUG];
  const wrap = el(
    "a",
    "block rounded-xl overflow-hidden border bg-white dark:bg-slate-900/40 dark:border-slate-700 card-hover",
    ""
  );
  wrap.href = `case-study.html?id=${encodeURIComponent(sl)}`;
  wrap.innerHTML = `
    <div class="h-36 bg-gradient-to-r from-primary to-accent grid place-items-center text-white">
      <i class="fa-solid fa-layer-group text-4xl"></i>
    </div>
    <div class="p-4">
      <div class="font-semibold">${it.title}</div>
      <div class="text-sm opacity-80">${it.subtitle}</div>
    </div>`;
  return wrap;
}
(cs.related || []).forEach((sl) => $("#related").appendChild(relatedCard(sl)));

/* =====================
  Theme, motion, share
====================== */
const html = document.documentElement;
const themeToggle = $("#themeToggle");
const reduceMotionBtn = $("#reduceMotionBtn");

function applyThemeFromStorage() {
  const pref = localStorage.getItem("theme");
  if (pref === "light") html.classList.remove("dark");
  else html.classList.add("dark");
}
applyThemeFromStorage();

themeToggle?.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
});

reduceMotionBtn?.addEventListener("click", () => {
  document.body.classList.toggle("reduce-motion");
  localStorage.setItem(
    "reducedMotion",
    document.body.classList.contains("reduce-motion") ? "true" : "false"
  );
  reduceMotionBtn.innerHTML = document.body.classList.contains("reduce-motion")
    ? '<i class="fas fa-walking"></i>'
    : '<i class="fas fa-running"></i>';
});
if (localStorage.getItem("reducedMotion") === "true") {
  document.body.classList.add("reduce-motion");
  reduceMotionBtn.innerHTML = '<i class="fas fa-walking"></i>';
}

$("#shareBtn")?.addEventListener("click", async () => {
  try {
    const shareData = {
      title: `${cs.title} — Pentara Case Study`,
      text: cs.subtitle,
      url: location.href,
    };
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      alert("Link copied to clipboard");
    }
  } catch (e) {
    console.warn(e);
  }
});
