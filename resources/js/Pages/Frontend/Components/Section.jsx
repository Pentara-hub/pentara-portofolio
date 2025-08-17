const Section = () => {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Solutions tailored for your industry and business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Use Case 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Learning Management
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Custom LMS platforms with engaging content delivery and
                analytics.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Interactive course content</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">
                    Scalable for thousands of users
                  </span>
                </li>
              </ul>
            </div>
            {/* Use Case 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-1">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-shopping-cart text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                High-performance online stores with seamless checkout
                experiences.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Fast-loading product pages</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Inventory management</span>
                </li>
              </ul>
            </div>
            {/* Use Case 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-2">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-building text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Corporate Portfolios
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Professional websites that showcase your brand and capabilities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Modern, responsive design</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">SEO optimized</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Easy content management</span>
                </li>
              </ul>
            </div>
            {/* Use Case 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Internal Dashboards
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Custom business intelligence tools for data-driven decisions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Real-time data visualization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2 text-sm" />
                  <span className="text-sm">Automated reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
