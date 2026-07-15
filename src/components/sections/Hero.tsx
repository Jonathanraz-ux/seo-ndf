import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <FadeIn delay={0}>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 glass-panel">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" aria-hidden="true"></span>
            Agence Web Premium
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Noctis <span className="text-gradient">Digital Forge</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Nous concevons des solutions web rapides, modernes et sur mesure.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 rounded-full" asChild>
            <Link href="#contact">
              Demander un devis <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="glass" className="w-full sm:w-auto text-lg px-8 rounded-full" asChild>
            <Link href="#portfolio">
              Voir nos réalisations
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
