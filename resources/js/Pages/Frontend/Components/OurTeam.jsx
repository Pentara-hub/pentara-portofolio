import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";

const team = [
  { name: "Abdelrahman Mohamed", role: "PM & Front-end", img: "/images/Abdelrahman.jpg", li: "https://www.linkedin.com/in/abdelrahman-mohamed-030a2423a/", em: "Justvyne@gmail.com" },
  { name: "Ahmed Medhat", role: "Back-end & QA", img: "/images/Ahmed.jpg", li: "https://www.linkedin.com/in/ahmed-medhat-a5a1562a6/", em: "ahmedmedhat632@gmail.com" },
  { name: "Omar Elsamni", role: "DevOps & Front-end", img: "/images/samni.jpg", li: "https://www.linkedin.com/in/omarelsamni/", em: "omarsamni@gmail.com" },
  { name: "Osama Medhat", role: "Back-end & QA", img: "/images/Osama.jpg", li: "https://www.linkedin.com/in/osama-medhat-b8a5bb2a5/", em: "ososmedhat1@gmail.com" },
];

export default function OurTeam() {
  return (
    <Section id="team" className="bg-surface/30">
      <SectionHeader eyebrow="The Team" title="Meet Pentara" description="Four engineers. One standard of excellence." align="center" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {team.map((m, i) => (
          <div key={m.name} className={`feature-card text-center group reveal-up${i ? `-delay-${i}` : ""}`}>
            <div className="team-photo-wrap relative mx-auto w-28 h-28 mb-5 overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute -inset-1 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity pointer-events-none" />
              <img src={m.img} alt={m.name} className="team-photo relative" />
            </div>
            <h3 className="font-bold text-fg">{m.name}</h3>
            <p className="text-sm text-accent mt-1">{m.role}</p>
            <div className="flex justify-center gap-2 mt-4">
              <a href={m.li} target="_blank" rel="noopener noreferrer" className="arrow-btn !w-9 !h-9">
                <i className="fab fa-linkedin-in text-xs" />
              </a>
              <a href={`mailto:${m.em}`} className="arrow-btn !w-9 !h-9">
                <i className="fas fa-envelope text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
