const Process = () => {
  return (
    <>
      <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A structured approach to ensure quality and efficiency.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent -ml-0.5" />
            {/* Process steps */}
            <div className="space-y-16 md:space-y-0">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:even:flex-row-reverse fade-in">
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Discover</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We start by understanding your business goals, target
                      audience, and technical requirements through in-depth
                      discussions and research.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-medium text-primary dark:text-accent mb-2">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Project brief</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Technical requirements</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Timeline &amp; milestones</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 z-10" />
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:even:flex-row-reverse fade-in-delay-1">
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Design</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Our designers create wireframes and prototypes to
                      visualize the user experience, followed by high-fidelity
                      UI designs.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-medium text-primary dark:text-accent mb-2">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Wireframes</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>UI/UX designs</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Style guide</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 z-10" />
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:even:flex-row-reverse fade-in-delay-2">
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Build</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Our developers implement the solution using modern
                      technologies, following agile methodologies with regular
                      updates.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-medium text-primary dark:text-accent mb-2">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Development sprints</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Weekly progress reports</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Staging environment</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 z-10" />
              </div>
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:even:flex-row-reverse fade-in-delay-3">
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Deploy</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We thoroughly test the application, deploy it to
                      production, and provide ongoing support and maintenance.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-medium text-primary dark:text-accent mb-2">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Testing &amp; QA</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Production deployment</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2" />
                        <span>Maintenance plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
