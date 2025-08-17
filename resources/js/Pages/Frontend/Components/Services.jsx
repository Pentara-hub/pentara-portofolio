const Services = () => {
  return (
    <>
      <section
        id="services"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-code text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Modern, performant web applications built with cutting-edge
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Laravel
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Inertia
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  MySQL / PostgreSQL
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  REST &amp; GraphQL APIs
                </span>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-1">
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-cloud text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud &amp; DevOps</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Scalable infrastructure and automated deployments for
                reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  AWS
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  GCP
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Digital Ocean
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Hetzner
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  CI/CD
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Terraform
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Docker
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Jenkins
                </span>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-2">
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-layer-group text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                End-to-End Delivery
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Complete solutions from concept to deployment and beyond.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  UI/UX
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  APIs
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Dashboards
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  SEO
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Testing
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Security Best Practices
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-2 py-1 rounded">
                  Project management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
