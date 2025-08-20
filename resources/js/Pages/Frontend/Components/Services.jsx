import { useEffect } from "react";

const tagClass =
  "text-xs px-2 py-1 rounded transition-colors duration-200 " +
  "bg-blue-100 text-blue-700 " +
  "dark:bg-[#1E3A8A] dark:text-[#a1bde8]";

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200); // stagger effect
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
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

          {/* Cloud & DevOps */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <i className="fas fa-cloud text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Deploy, manage, and scale applications across cloud providers with
              best practices in DevOps.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={tagClass}>AWS</span>
              <span className={tagClass}>Terraform</span>
              <span className={tagClass}>Docker</span>
              <span className={tagClass}>Kubernetes</span>
              <span className={tagClass}>CI/CD</span>
              <span className={tagClass}>Hetzner</span>
              <span className={tagClass}>DigitalOcean</span>
            </div>
          </div>

          {/* Mobile App */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Mobile App Development
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Cross-platform mobile apps for iOS and Android with seamless UX
              and robust performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={tagClass}>React Native</span>
              <span className={tagClass}>Expo</span>
              <span className={tagClass}>iOS</span>
              <span className={tagClass}>Android</span>
              <span className={tagClass}>API Integration</span>
            </div>
          </div>

          {/* UI/UX */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <i className="fas fa-pencil-ruler text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Beautiful and functional interfaces designed with user experience
              in mind.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={tagClass}>Figma</span>
              <span className={tagClass}>Wireframes</span>
              <span className={tagClass}>Prototyping</span>
              <span className={tagClass}>User Research</span>
              <span className={tagClass}>Design Systems</span>
            </div>
          </div>

          {/* Shopify */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <i className="fas fa-shopping-cart text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Shopify Development</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Customized Shopify solutions to launch and grow your online
              business.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={tagClass}>Theme Customization</span>
              <span className={tagClass}>App Integration</span>
              <span className={tagClass}>E-commerce UX</span>
              <span className={tagClass}>Payment Gateways</span>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <i className="fas fa-check-circle text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Rigorous testing ensures reliable, bug-free applications that meet
              industry standards.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={tagClass}>Unit Testing</span>
              <span className={tagClass}>Integration Testing</span>
              <span className={tagClass}>E2E Testing</span>
              <span className={tagClass}>Load Testing</span>
              <span className={tagClass}>Security Audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
