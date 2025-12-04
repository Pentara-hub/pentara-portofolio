import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Previous Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aklemy */}
          <Link
            to="/case-study/Aklemy"
            aria-label="Open case study: Aklemy"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-blue-500 to-accent grid place-items-center">
              <i
                className="fas fa-graduation-cap text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Aklemy
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                A comprehensive learning management system for professional
                training.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Laravel
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  AWS
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Inertia
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* ShopSwift */}
          <Link
            to="/case-study/fairwheels"
            aria-label="Open case study: Fairwheels"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in-delay-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 grid place-items-center">
              <i
                className="fas fa-car text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                FairWheels{" "}
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100">
                  In Progress
                </span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                High-performance e-commerce platform with AI recommendations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Inertia
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Laravel
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  MySql
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* misteral */}
          <Link
            to="/case-study/misteral"
            aria-label="Open case study: misteral"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in-delay-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-green-500 to-teal-400 grid place-items-center">
              <i
                className="fas fa-notes-medical text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Misteral
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Business intelligence dashboard with real-time analytics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Vue.js
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Python
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Docker
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Node.js
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* Habit Tracker */}
          <Link
            to="/case-study/habittracker"
            aria-label="Open case study:habit-tracker"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-orange-500 to-yellow-400 grid place-items-center">
              <i
                className="fas fa-calendar-check text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Habit Tracker{" "}
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100">
                  In Progress
                </span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Daily habit manager with progress heatmaps and offline support.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Flutter
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Hive
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Firebase
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* MyMap */}
          <Link
            to="/case-study/mymap"
            aria-label="Open case study: MyMap"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in-delay-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-red-500 to-pink-500 grid place-items-center">
              <i
                className="fas fa-map-marker-alt text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                MyMap{" "}
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100">
                  In Progress
                </span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Workout tracker with maps. Log workouts and view them on an
                interactive map.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  JavaScript
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Leaflet.js
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  LocalStorage
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* Cleora */}
          <div
            aria-label="Case study disabled"
            className="group block rounded-2xl overflow-hidden
             ring-1 ring-slate-200 dark:ring-slate-800
             bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
             hover:-translate-y-1 transition-all duration-300
             shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
             hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
             fade-in-delay-2 focus:outline-none"
          >
            <div className="h-40 bg-gradient-to-r from-indigo-500 to-blue-400 grid place-items-center">
              <i
                className="fas fa-store text-white text-5xl"
                aria-hidden="true"
              />
            </div>

            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Celora{" "}
                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100">
                  In Progress
                </span>
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                E-commerce platform for selling premium threads.{" "}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Inretia
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Go
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Kubernetes
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  PHP
                </span>
              </div>

              <button
                onClick={() => toast.error("Case study is not available yet!")}
                className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400 cursor-not-allowed opacity-50"
              >
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
