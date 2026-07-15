import { Handshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const expertise = [
  "Front-end React",
  "Next.js",
  "Vite",
  "TypeScript",
  "Supabase",
  "Dashboard Admin",
  "Maintenance",
  "Intégration Figma",
  "Développement Full Stack"
];

const guarantees = [
  "Travail en marque blanche.",
  "Respect des délais.",
  "Communication claire.",
  "Code propre et maintenable."
];

export default function Outsourcing() {
  return (
    <section id="outsourcing" className="py-24 px-4 relative z-10" aria-labelledby="outsourcing-heading">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" aria-hidden="true" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <FadeIn direction="right">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-6" aria-hidden="true">
                <Handshake className="w-6 h-6" />
              </div>
              <h2 id="outsourcing-heading" className="text-3xl md:text-4xl font-bold mb-4">Besoin d&apos;un partenaire technique fiable ?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nous proposons également nos services en sous-traitance pour les agences web. 
                Concentrez-vous sur vos clients, nous gérons la technique.
              </p>

              <div className="space-y-3 mb-8">
                {guarantees.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full" asChild>
                <Link href="#contact">
                  Discuter d&apos;un partenariat
                </Link>
              </Button>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {expertise.map((tech, index) => (
                <div key={index} className="glass-panel px-4 py-3 rounded-xl text-center text-sm font-medium hover:bg-white/5 transition-colors">
                  {tech}
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
