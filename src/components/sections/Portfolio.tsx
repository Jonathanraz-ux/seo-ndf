import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 relative z-10 overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" aria-hidden="true" />

      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 glass-panel">
            <ImageIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            Portfolio
          </div>
          <h2 id="portfolio-heading" className="text-4xl md:text-6xl font-bold mb-6">Découvrez nos <span className="text-gradient">réalisations</span></h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12">
            Chaque projet est conçu selon les besoins spécifiques de nos clients, avec une attention particulière aux détails, aux performances et au design.
          </p>

          <a 
            href="https://noctis-digital-forge.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            aria-label="Voir notre Portfolio (s'ouvre dans un nouvel onglet)"
          >
            <span className="mr-2 text-lg">Voir notre Portfolio</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" aria-hidden="true" />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
