import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const plans = [
  {
    title: "Refonte de site",
    price: "150 €",
    features: ["Audit technique & SEO", "Nouveau design moderne", "Optimisation des performances", "Responsive Design"],
    popular: false,
  },
  {
    title: "Site Pro + Dashboard",
    price: "400 €",
    features: ["Design sur mesure premium", "Dashboard d'administration", "Base de données", "Système d'authentification", "Hébergement configuré"],
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative z-10 bg-black/20" aria-labelledby="pricing-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold mb-4">Des tarifs <span className="text-gradient">transparents</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des offres adaptées pour démarrer votre transition numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className={`glass-panel p-8 rounded-3xl relative flex flex-col ${plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Recommandé
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-muted-foreground text-sm">À partir de</span>
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-xl" variant={plan.popular ? "default" : "outline"} asChild>
                <Link href="#contact">
                  Demander un devis
                </Link>
              </Button>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="inline-flex items-center justify-center px-6 py-3 rounded-full glass-panel text-sm text-muted-foreground">
            <span className="text-primary mr-2" aria-hidden="true">💡</span>
            Chaque projet fait l&apos;objet d&apos;un devis personnalisé selon vos besoins.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
