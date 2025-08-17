const Testimonials = () => {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    CEO, EduTech Inc.
                  </p>
                </div>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                <i className="fas fa-quote-left text-accent opacity-50 mr-2" />
                Pentara delivered our learning platform ahead of schedule with
                exceptional quality. Their team's expertise in both frontend and
                cloud infrastructure was impressive.
                <i className="fas fa-quote-right text-accent opacity-50 ml-2" />
              </div>
              <div className="flex text-yellow-400">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Alice Smith</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    CTO, RetailPro
                  </p>
                </div>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                <i className="fas fa-quote-left text-accent opacity-50 mr-2" />
                The e-commerce platform Pentara built for us handles 10x more
                traffic than our old system with zero downtime. Their DevOps
                expertise made all the difference.
                <i className="fas fa-quote-right text-accent opacity-50 ml-2" />
              </div>
              <div className="flex text-yellow-400">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md card-hover transition-all fade-in-delay-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary font-bold mr-4">
                  RJ
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Director, DataSolutions
                  </p>
                </div>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                <i className="fas fa-quote-left text-accent opacity-50 mr-2" />
                We've worked with many developers, but Pentara stands out for
                their attention to detail and clear communication. Our dashboard
                project was complex but they made it look easy.
                <i className="fas fa-quote-right text-accent opacity-50 ml-2" />
              </div>
              <div className="flex text-yellow-400">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
