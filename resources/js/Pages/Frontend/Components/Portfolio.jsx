import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <section
        id="work"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses
              grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-accent flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">EduPlatform Pro</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  A comprehensive learning management system for professional
                  training.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Laravel
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    AWS
                  </span>
                </div>
                <Link
                  to="/case-study/eduplatform-pro"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in-delay-1">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <i className="fas fa-shopping-bag text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ShopSwift</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  High-performance e-commerce platform with AI recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <Link
                  to="/case-study/shopswift"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </Link>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in-delay-2">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
                <i className="fas fa-chart-pie text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">DataInsight</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Business intelligence dashboard with real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Vue.js
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Docker
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
                <i className="fas fa-newspaper text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">NewsHub</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Modern news aggregator with personalized content delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    GraphQL
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Firebase
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </a>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in-delay-1">
              <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <i className="fas fa-music text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SoundWave</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Music streaming platform with social features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Angular
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    NestJS
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </a>
              </div>
            </div>
            {/* Project 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all fade-in-delay-2">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-400 flex items-center justify-center">
                <i className="fas fa-calendar-alt text-white text-5xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SchedulePro</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Enterprise scheduling and resource management system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Svelte
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Go
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                    Kubernetes
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View case study <i className="fas fa-arrow-right ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
