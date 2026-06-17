import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-brand py-16">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Pentara" className="w-10 h-10" />
              <span className="font-bold text-white text-lg">Pentara</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A web and mobile engineering studio — you bring the idea, we design, build, and launch. Fast, reliable, and worry-free. Based in Cairo, delivering worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/pentara_5/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:-translate-y-0.5 transition-all"><i className="fab fa-instagram" /></a>
              <a href="mailto:pentarahub@gmail.com" className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:-translate-y-0.5 transition-all"><i className="fas fa-envelope" /></a>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/50">
                {["Web Development", "Cloud & DevOps", "Mobile", "UI/UX", "QA"].map((s) => (
                  <li key={s}><a href="#what-we-build" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/50">
                {[{ l: "How We Build", h: "how-we-build" }, { l: "Work", h: "work" }, { l: "Team", h: "team" }, { l: "Contact", h: "contact" }].map((i) => (
                  <li key={i.h}><a href={`#${i.h}`} className="hover:text-white transition-colors">{i.l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><a href="mailto:pentarahub@gmail.com" className="hover:text-white">pentarahub@gmail.com</a></li>
                <li>Cairo, Egypt</li>
                <li>Remote worldwide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pentara. All rights reserved.</p>
          <p>Built fast. Built right. Built to last.</p>
        </div>
      </div>
    </footer>
  );
}
