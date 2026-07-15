import { FadeIn, HoverScale } from "@/components/ui/FadeIn";

const technologies = [
  { name: "Next.js", color: "from-black to-zinc-800", border: "border-zinc-800" },
  { name: "React", color: "from-[#087ea4] to-[#065b77]", border: "border-[#087ea4]/30" },
  { name: "Vite", color: "from-[#646cff] to-[#474ed1]", border: "border-[#646cff]/30" },
  { name: "TypeScript", color: "from-[#3178c6] to-[#235a97]", border: "border-[#3178c6]/30" },
  { name: "Tailwind CSS", color: "from-[#38bdf8] to-[#0284c7]", border: "border-[#38bdf8]/30" },
  { name: "Shadcn UI", color: "from-zinc-900 to-black", border: "border-zinc-800" },
  { name: "Supabase", color: "from-[#3ecf8e] to-[#24b47e]", border: "border-[#3ecf8e]/30" },
  { name: "PostgreSQL", color: "from-[#336791] to-[#234d6d]", border: "border-[#336791]/30" },
  { name: "Git", color: "from-[#f14e32] to-[#c53924]", border: "border-[#f14e32]/30" },
  { name: "GitHub", color: "from-[#24292e] to-black", border: "border-zinc-800" },
  { name: "Vercel", color: "from-black to-black", border: "border-zinc-800" },
  { name: "Netlify", color: "from-[#00c7b7] to-[#009b8e]", border: "border-[#00c7b7]/30" }
];

export default function Technologies() {
  return (
    <section className="py-16 px-4 relative z-10 overflow-hidden" aria-labelledby="technologies-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p id="technologies-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Propulsé par les meilleures technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <FadeIn key={index} delay={index * 0.05} duration={0.4}>
              <HoverScale hoverScale={1.05} className={`flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br ${tech.color} border ${tech.border} shadow-lg cursor-default relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                <span className="relative z-10 text-white font-medium text-sm md:text-base">
                  {tech.name}
                </span>
              </HoverScale>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
