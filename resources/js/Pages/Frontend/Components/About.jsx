const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Pentara
              </h2>
              <p className="text-md text-slate-600 dark:text-slate-300 mb-8">
                Pentara is a senior full-stack team delivering scalable,
                cloud-native solutions with top-tier performance, security, and
                seamless deployments.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <i className="fas fa-users text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Experienced Team</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      4+ years of combined experience in web development and
                      cloud infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <i className="fas fa-rocket text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Fast Delivery</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Agile development process ensures we deliver working
                      software quickly and efficiently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <i className="fas fa-shield-alt text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Security Focus</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Built-in security practices from day one to protect your
                      data and users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 fade-in-delay-1">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                {/* Section Title */}
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Partner With Us
                </h3>
                {/* Value Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Point 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-rocket text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Rapid Delivery</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Get your project launched in weeks, not months.
                      </p>
                    </div>
                  </div>
                  {/* Point 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-shield-alt text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Enterprise Security
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Built with best-in-class security and compliance in
                        mind.
                      </p>
                    </div>
                  </div>
                  {/* Point 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-server text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Cloud Excellence
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Scalable, reliable, and uptime-ready infrastructure.
                      </p>
                    </div>
                  </div>
                  {/* Point 4 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-tasks text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Clear Process</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Transparent timelines, milestones, and progress updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
