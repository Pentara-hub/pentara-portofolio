// Services.jsx
const tagClass =
  "text-xs px-2 py-1 rounded transition-colors duration-200 " +
  "bg-blue-100 text-blue-700 " + // light mode
  "dark:bg-[#1E3A8A] dark:text-[#a1bde8]"; // dark mode custom

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
            {/* Service 1 - Web Development */}
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
                <span className={tagClass}>React</span>
                <span className={tagClass}>Laravel</span>
                <span className={tagClass}>Inertia</span>
                <span className={tagClass}>Tailwind</span>
                <span className={tagClass}>Next.js</span>
                <span className={tagClass}>MySQL / PostgreSQL</span>
                <span className={tagClass}>REST &amp; GraphQL APIs</span>
              </div>
            </div>

            {/* Service 2 - Cloud & DevOps */}
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
                <span className={tagClass}>AWS</span>
                <span className={tagClass}>GCP</span>
                <span className={tagClass}>Digital Ocean</span>
                <span className={tagClass}>Hetzner</span>
                <span className={tagClass}>CI/CD</span>
                <span className={tagClass}>Terraform</span>
                <span className={tagClass}>Docker</span>
                <span className={tagClass}>Jenkins</span>
              </div>
            </div>

            {/* Service 3 - Mobile App Development */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-2">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 rounded-lg">
                <i className="fas fa-mobile-alt text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Mobile App Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Intuitive, cross-platform mobile apps for iOS & Android.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={tagClass}>Flutter</span>
                <span className={tagClass}>React Native</span>
              </div>
            </div>

            {/* Service 4 - UI/UX Design */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-3">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 rounded-lg">
                <i className="fas fa-pencil-ruler text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Engaging, user-focused designs that drive conversions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={tagClass}>Figma</span>
                <span className={tagClass}>Accessibility</span>
                <span className={tagClass}>Prototyping</span>
                <span className={tagClass}>Wireframes</span>
                <span className={tagClass}>Interactive Designs</span>
              </div>
            </div>

            {/* Service 5 - Shopify Development */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-4">
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <i className="fab fa-shopify text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Shopify Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Custom Shopify stores optimized for conversions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={tagClass}>SEO Optimization</span>
                <span className={tagClass}>Custom Themes</span>
                <span className={tagClass}>Liquid</span>
                <span className={tagClass}>Apps</span>
                <span className={tagClass}>Payment Gateways</span>
              </div>
            </div>

            {/* Service 6 - Quality Assurance */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-5">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 rounded-lg">
                <i className="fas fa-vials text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Thorough testing and validation for bug-free products.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={tagClass}>Unit Testing</span>
                <span className={tagClass}>E2E Testing</span>
                <span className={tagClass}>Integration Testing</span>
                <span className={tagClass}>Performance Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
