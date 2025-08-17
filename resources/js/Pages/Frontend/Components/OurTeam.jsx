const OurTeam = () => {
  return (
    <>
      <section
        id="team"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Meet the talented individuals behind Pentara's success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-center card-hover transition-all fade-in">
              <div className="w-32 h-400 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                <img
                  src="assets/images/Abdelrahman.jpg"
                  alt="Abdelrahman Mohamed"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Abdelrahman Mohamed
              </h3>
              <p className="text-primary dark:text-accent font-medium mb-4">
                Project Manager and Front-end Developer
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Front-end Specialist using React, Node.js, and TailwindCSS
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/abdelrahman-mohamed-030a2423a/"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="mailto:Justvyne@gmail.com"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-center card-hover transition-all fade-in-delay-1">
              <div className="w-32 h-400 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                <img
                  src="assets/images/Ahmed.jpg"
                  alt="Ahmed Medhat"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ahmed Medhat</h3>
              <p className="text-primary dark:text-accent font-medium mb-4">
                Back-end Developer and Software Tester
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Back-end Specialist using Laravel and Inertia | Database
                Management | Software Tester
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/ahmed-medhat-a5a1562a6/"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="mailto:ahmedmedhat632@gmail.com"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-center card-hover transition-all fade-in-delay-2">
              <div className="w-32 h-400 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                <img
                  src="assets/images/Samni.jpg"
                  alt="Omar Elsamni"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Omar Elsamni</h3>
              <p className="text-primary dark:text-accent font-medium mb-4">
                DevOps Engineer and Front-End Developer
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Cloud Solutions(AWS, GCP, Azure) | DevOps &amp; CI/CD |
                Front-end Developer using React and Tailwind
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/omarelsamni/"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="mailto:omarsamni@gmail.com"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-center card-hover transition-all fade-in-delay-3">
              <div className="w-32 h-400 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                <img
                  src="assets/images/Osama.jpg"
                  alt="Osama Medhat"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Osama Medhat</h3>
              <p className="text-primary dark:text-accent font-medium mb-4">
                Back-end Developer and Software Tester
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Back-end Specialist using Laravel and Inertia | Database
                Management | Software Tester
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/osama-medhat-b8a5bb2a5/"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="mailto:ososmedhat1@gmail.com"
                  className="text-slate-400 hover:text-primary dark:hover:text-accent transition-all"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurTeam;
