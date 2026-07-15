import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  { num: "01", title: "Analyse", desc: "Compréhension de vos besoins et définition des objectifs." },
  { num: "02", title: "Conception", desc: "Maquettes UI/UX et validation de l'architecture." },
  { num: "03", title: "Développement", desc: "Intégration et programmation avec des technologies modernes." },
  { num: "04", title: "Tests", desc: "Vérification des performances, de la sécurité et du responsive." },
  { num: "05", title: "Mise en ligne", desc: "Déploiement sur des serveurs optimisés." },
  { num: "06", title: "Maintenance", desc: "Suivi, mises à jour et évolutions continues." },
];

export default function Process() {
  return (
    <section className="py-24 px-4 relative z-10 bg-black/20" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="process-heading" className="text-3xl md:text-5xl font-bold mb-4">Notre <span className="text-gradient">Processus</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une méthodologie rigoureuse pour des résultats exceptionnels.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale de connexion */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5 -translate-x-1/2" aria-hidden="true"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <FadeIn 
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.2}
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}
                >
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </FadeIn>

                <div className="relative flex items-center justify-center w-16 h-16 rounded-full glass-panel border-primary/40 text-primary font-bold text-xl z-10 shadow-[0_0_20px_rgba(139,92,246,0.2)] shrink-0" aria-hidden="true">
                  {step.num}
                </div>

                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
