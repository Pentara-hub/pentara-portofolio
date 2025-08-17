import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Chip from "./Chip";
import FeatureCard from "./FeatureCard";
import Gallery from "./Gallery";
import RelatedCard from "./RelatedCard";
import { Check, Send } from "lucide-react";
import { CASES, DEFAULT_SLUG } from "./cases";

export default function CaseStudyPage() {
  const { id } = useParams();
  const slug = (id || DEFAULT_SLUG).toLowerCase();
  const cs = CASES[slug] || CASES[DEFAULT_SLUG];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-800 dark:text-slate-200 font-sans min-h-screen">
      {/* HERO */}
      <header
        className="pt-28 pb-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(29, 78, 216, 0.25), transparent 60%), radial-gradient(900px 500px at 10% -10%, rgba(56, 189, 248, 0.25), transparent 60%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb title={cs.title} />

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {cs.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                {cs.subtitle}
              </p>
            </div>
          </div>

          <section className="mt-8">
            <Gallery items={cs.gallery || []} autoplay={false} />
          </section>
        </div>
      </header>

      {/* BODY */}
      <main className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8 space-y-12">
              <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold mb-3">Overview</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  {cs.overview}
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {(cs.goals || []).map((g, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-sky-400 mt-1" size={16} />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-bold mb-3">Solution</h2>
                <div
                  className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: cs.solutionHtml || "" }}
                />
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 mt-12 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Features</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(cs.features || []).length ? (
                    cs.features.map((f) => <FeatureCard key={f} text={f} />)
                  ) : (
                    <div className="text-sm opacity-70">
                      No features listed yet.
                    </div>
                  )}
                </div>
              </section>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <ul className="space-y-2">
                  {(cs.services || []).map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-sky-400 mt-1" size={16} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
                <h3 className="text-lg font-semibold mb-3">Tech stack</h3>
                <div className="flex flex-wrap gap-2">
                  {(cs.stack || []).map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-r from-[#0B1021] to-primary text-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold">
                  Have a similar project?
                </h3>
                <p className="opacity-90 mt-2">
                  Get a tailored plan and fixed timeline from our senior team.
                </p>
                <a
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-opacity-90"
                >
                  <Send size={16} /> Get a proposal
                </a>
              </section>
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Related projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {(cs.related || []).map((sl) => (
                <RelatedCard key={sl} slug={sl} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
