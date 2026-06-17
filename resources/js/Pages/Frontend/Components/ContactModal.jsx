import Button from "../../../components/ui/Button";

const TRACKS = [
  { id: "tech", title: "Web & Cloud", desc: "Website builds, cloud hosting, AI features, or a technical review of your product", icon: "fa-code" },
  { id: "product", title: "Product & Delivery", desc: "Mobile app, MVP, full product build, or a website redesign on a deadline", icon: "fa-rocket" },
  { id: "team", title: "Team & Partnership", desc: "Senior engineers embedded in your team, or long-term system ownership", icon: "fa-users" },
];

export default function ContactModal({ open, onClose, step, setStep }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="float-right text-white/40 hover:text-white text-xl leading-none">&times;</button>

        {step === "choose" && (
          <>
            <h2 className="text-2xl font-extrabold text-white">How would you like to connect?</h2>
            <p className="text-white/50 mt-2 text-sm">Pick the option that works best for you.</p>
            <div className="mt-6 space-y-3">
              <button type="button" onClick={() => setStep("track")} className="w-full surface-card p-5 text-left hover:-translate-y-1 transition-transform">
                <p className="font-bold text-white">Book a Free Consultation</p>
                <p className="text-sm text-white/50 mt-1">30 minutes with a certified engineer. Tell us what you're building — we'll tell you honestly if we're the right fit.</p>
              </button>
              <Button href="#contact" className="w-full" onClick={onClose}>Go to Contact Form</Button>
            </div>
            <p className="text-xs text-white/30 mt-4 text-center">No commitment · Completely free</p>
          </>
        )}

        {step === "track" && (
          <>
            <button type="button" onClick={() => setStep("choose")} className="text-sm text-white/40 hover:text-white mb-4">← Back</button>
            <h2 className="text-2xl font-extrabold text-white">What brings you here?</h2>
            <p className="text-white/50 mt-2 text-sm">Pick your track — 30 minutes, free.</p>
            <div className="mt-6 space-y-3">
              {TRACKS.map((t) => (
                <a key={t.id} href="#contact" onClick={onClose}
                  className="flex gap-4 surface-card p-5 hover:-translate-y-1 hover:border-white/25 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i className={`fas ${t.icon} text-white`} />
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.title}</p>
                    <p className="text-sm text-white/50">{t.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-white/30 mt-4 text-center">30 minutes · Free · No commitment</p>
          </>
        )}
      </div>
    </div>
  );
}
