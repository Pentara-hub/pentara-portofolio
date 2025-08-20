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
          {/* EduKids */}
          <Link
            to="/case-study/edukids"
            aria-label="Open case study: EduKids"
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
                EduKids
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
                className="fas fa-shopping-bag text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                FairWheels
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

          {/* DataInsight */}
          <Link
            to="/case-study/datainsight"
            aria-label="Open case study: DataInsight"
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
                className="fas fa-chart-pie text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                DataInsight
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
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* NewsHub */}
          <Link
            to="/case-study/newshub"
            aria-label="Open case study: NewsHub"
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
                className="fas fa-newspaper text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                NewsHub
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Modern news aggregator with personalized content delivery.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  GraphQL
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

          {/* SoundWave */}
          <Link
            to="/case-study/soundwave"
            aria-label="Open case study: SoundWave"
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
                className="fas fa-music text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                SoundWave
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Music streaming platform with social features.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Angular
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  NestJS
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  PostgreSQL
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>

          {/* SchedulePro */}
          <Link
            to="/case-study/schedulepro"
            aria-label="Open case study: SchedulePro"
            className="group block rounded-2xl overflow-hidden
                       ring-1 ring-slate-200 dark:ring-slate-800
                       bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                       hover:-translate-y-1 transition-all duration-300
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                       fade-in-delay-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="h-40 bg-gradient-to-r from-indigo-500 to-blue-400 grid place-items-center">
              <i
                className="fas fa-calendar-alt text-white text-5xl"
                aria-hidden="true"
              />
            </div>
            <div className="p-6 bg-white dark:bg-transparent">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                SchedulePro
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Enterprise scheduling and resource management system.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Svelte
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Go
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40">
                  Kubernetes
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
                <span>View case study</span>
                <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
