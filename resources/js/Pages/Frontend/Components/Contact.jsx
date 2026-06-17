import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import BookingButton from "./BookingButton";
import Button from "../../../components/ui/Button";
import useTilt from "../../../hooks/useTilt";

const selectStyles = {
  control: (base, s) => ({
    ...base, backgroundColor: "rgba(255,255,255,0.06)",
    border: `1px solid ${s.isFocused ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
    borderRadius: "0.75rem", padding: "2px", minHeight: "48px", boxShadow: "none",
  }),
  menu: (base) => ({ ...base, backgroundColor: "#163253", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem" }),
  option: (base, s) => ({ ...base, backgroundColor: s.isFocused ? "rgba(255,255,255,0.1)" : "transparent", color: "#fff" }),
  singleValue: (base) => ({ ...base, color: "#fff" }),
  placeholder: (base) => ({ ...base, color: "rgba(255,255,255,0.35)" }),
  indicatorSeparator: () => ({ display: "none" }),
};

export default function Contact() {
  const [projectType, setProjectType] = useState("");
  const [loading, setLoading] = useState(false);
  const { ref, onMove, onLeave, onEnter } = useTilt(16, false);

  const projectTypes = [
    { value: "Website", label: "Business Website" },
    { value: "Mobile-App", label: "Mobile Application" },
    { value: "Web-App", label: "Web Application" },
    { value: "Ecommerce", label: "E-commerce Store" },
    { value: "LMS", label: "Learning Management System" },
    { value: "Dashboards", label: "Business Dashboard" },
    { value: "Other", label: "Other" },
  ];
  const submit = async (e) => {
    e.preventDefault();
    if (!projectType) return toast.error("Please select a project type.");
    const formData = {
      name: e.target.name.value.trim(), email: e.target.email.value.trim(),
      company: e.target.company.value.trim(), projectType,
      otherProjectType: e.target.otherProjectType?.value || "",
      message: e.target.message.value.trim(),
    };
    try {
      setLoading(true);
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) throw new Error(data?.message || "Failed to send.");
      toast.success("Message sent — we'll be in touch.");
      e.target.reset(); setProjectType("");
    } catch (err) { toast.error(err.message || "Something went wrong."); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] overflow-x-clip">
      <div className="container-main min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-w-0">
          <div className="reveal-up">
            <p className="section-eyebrow">Contact Us</p>
            <h2 className="section-title">Let's Talk About<br /><em>What You're Building.</em></h2>
            <p className="mt-4 text-white/60 max-w-md">Got an idea for a website or app? Tell us about it — you'll hear back from an engineer, not a sales rep.</p>
            <div className="mt-8 space-y-4">
              <a href="mailto:pentarahub@gmail.com" className="block surface-card p-5 hover:-translate-y-1 transition-transform">
                <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                <p className="text-white font-semibold mt-1">pentarahub@gmail.com</p>
              </a>
              <div className="surface-card p-5">
                <p className="text-xs text-white/40 uppercase tracking-widest">Location</p>
                <p className="text-white font-semibold mt-1">Cairo, Egypt</p>
                <p className="text-white/50 text-sm">Remote worldwide</p>
              </div>
            </div>
          </div>

          <div className="reveal-up-delay-1">
            <form
              ref={ref}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              onMouseEnter={onEnter}
              onSubmit={submit}
              className="contact-form-panel p-5 sm:p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2 relative z-[1]">Send a message</h3>
              <div className="grid sm:grid-cols-2 gap-4 relative z-[1]">
                <input name="name" className="input" placeholder="Name" required />
                <input name="email" type="email" className="input" placeholder="Email" required />
              </div>
              <input name="company" className="input relative z-[1]" placeholder="Company (optional)" />
              <div className="relative z-[1]">
                <Select options={projectTypes} value={projectTypes.find((p) => p.value === projectType) || null} onChange={(o) => setProjectType(o?.value ?? "")} placeholder="Project type" isSearchable={false} styles={selectStyles} />
              </div>
              {projectType === "Other" && <input name="otherProjectType" className="input relative z-[1]" placeholder="Specify" />}
              <textarea name="message" rows={4} className="input resize-none relative z-[1]" placeholder="What's the product? Where are you in the journey? What does success look like in 90 days?" />
              <div className="relative z-[1]">
                <Button type="submit" size="lg" disabled={loading} className="w-full">{loading ? "Sending..." : "Send Message"}</Button>
                <BookingButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
