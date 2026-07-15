import { Globe, LayoutTemplate, LayoutDashboard, Users, Hotel, Utensils, MonitorSmartphone, Code, Wrench, Zap } from "lucide-react";
import { FadeIn, HoverScale } from "@/components/ui/FadeIn";

const services = [
  { icon: Globe, title: "Création de site vitrine", desc: "Présence en ligne élégante et performante." },
  { icon: LayoutTemplate, title: "Refonte de site existant", desc: "Modernisation et optimisation SEO." },
  { icon: LayoutDashboard, title: "Dashboard Administratif", desc: "Outils de gestion sur mesure." },
  { icon: Users, title: "CRM", desc: "Gestion centralisée de vos clients." },
  { icon: Hotel, title: "Gestion d'hôtel", desc: "Réservations et administration." },
  { icon: Utensils, title: "Gestion de restaurant", desc: "Menu digital et prises de commandes." },
  { icon: MonitorSmartphone, title: "Applications métier", desc: "Solutions adaptées à votre domaine." },
  { icon: Code, title: "Développement sur mesure", desc: "Besoins spécifiques et complexes." },
  { icon: Wrench, title: "Maintenance", desc: "Support technique et mises à jour." },
  { icon: Zap, title: "Optimisation des performances", desc: "Audits et améliorations techniques." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative z-10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-5xl font-bold mb-4">Nos <span className="text-gradient">Services</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions numériques complètes pour propulser votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.05} duration={0.4}>
              <HoverScale className="glass-panel p-6 rounded-2xl group cursor-default transition-all duration-300 hover:border-primary/50 h-full flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
              </HoverScale>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
