import Orbit from "./Orbit";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="hero-grid grid md:grid-cols-2 items-center gap-8">
        {/* left column (text) */}
        <div className="hero-text space-y-6 pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build fast. <span className="gradient-text">Deploy anywhere.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            We design, develop, and deploy full-stack web apps and cloud
            infrastructure that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all text-center shadow-lg"
            >
              Get a proposal
            </a>
            <a
              href="#work"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-lg transition-all text-center"
            >
              See our work
            </a>
          </div>
        </div>

        {/* right column (3D) — will be hidden by CSS at ≤950px */}
        <div className="hero-orbit hidden md:block md:pl-6 lg:pl-10 xl:pl-16">
          <div className="w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[820px] mx-auto">
            <Orbit />
          </div>
        </div>
      </div>
    </section>
  );
}
