import Orbit from "./Orbit";
import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 80, start = true, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, start]);

  return <span>{displayed}</span>;
};

export default function Hero() {
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);

  return (
    <div
      className="pb-10"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, rgba(29, 78, 216, 0.25), transparent 60%), radial-gradient(900px 500px at 10% -10%, rgba(56, 189, 248, 0.25), transparent 60%)",
      }}
    >
      <section
        id="home"
        className="
    pt-24
    md:pt-40          /* ≥768px → pt-40 */
    min-[950px]:pt-0 /* ≤950px → still pt-40 */
    lg:pt-2          /* ≥1024px → back to pt-24 */
    px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto
  "
      >
        <div className="hero-grid grid md:grid-cols-2 items-center">
          {/* left column (text) */}
          <div className="hero-text space-y-6 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <TypingText
                text="Build fast."
                speed={80}
                onComplete={() => setFirstDone(true)}
              />
              <br />
              <span className="gradient-text">
                <TypingText
                  text="Deploy anywhere."
                  speed={80}
                  start={firstDone}
                  onComplete={() => setSecondDone(true)}
                />
              </span>
            </h1>
            {secondDone && (
              <div className="opacity-0 transition-opacity  ease-in-out animate-[fadeIn_1.5s_ease-in-out_forwards] space-y-6">
                {" "}
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in">
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
            )}
          </div>

          {/* right column (3D) — will be hidden by CSS at ≤950px */}
          <div className="hero-orbit hidden md:block md:pl-6 lg:pl-10 xl:p-0 md:-ml-2">
            <div className="w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[820px] mx-auto">
              <Orbit />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
