import { Settings, Code2, Gauge, Smartphone, Search, ShieldCheck, Wrench, HeadphonesIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  { icon: Settings, title: "Développement sur mesure", desc: "Chaque ligne de code est pensée pour vos besoins." },
  { icon: Code2, title: "Code propre", desc: "Architecture modulaire, maintenable et évolutive." },
  { icon: Gauge, title: "Performance", desc: "Score Lighthouse supérieur à 95 garanti." },
  { icon: Smartphone, title: "Responsive", desc: "Expérience parfaite sur mobile, tablette et desktop." },
  { icon: Search, title: "SEO", desc: "Optimisation pour les moteurs de recherche intégrée." },
  { icon: ShieldCheck, title: "Sécurité", desc: "Protection contre les vulnérabilités courantes." },
  { icon: Wrench, title: "Maintenance", desc: "Mises à jour et surveillance régulières." },
  { icon: HeadphonesIcon, title: "Support", desc: "Assistance technique réactive et à l'écoute." },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-4 relative z-10" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="why-us-heading" className="text-3xl md:text-5xl font-bold mb-4">Pourquoi <span className="text-gradient">nous choisir ?</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L&apos;excellence technique au service de votre croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} duration={0.4} className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary border border-secondary/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]" aria-hidden="true">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
