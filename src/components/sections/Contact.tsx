import { MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative z-10" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn className="glass-panel p-12 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" aria-hidden="true" />

          <div className="relative z-10">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Prêt à lancer <br/><span className="text-gradient">votre projet ?</span></h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:jonathanrazafiarijaona@gmail.com?subject=Demande%20de%20devis%20-%20Noctis%20Digital%20Forge" className="w-full sm:w-auto" aria-label="Demander un devis par email">
                <Button size="lg" className="w-full rounded-full text-base px-8 h-14">
                  Demander un devis
                </Button>
              </a>
              
              <a href="https://wa.me/261349320184" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" aria-label="Nous contacter sur WhatsApp (s'ouvre dans un nouvel onglet)">
                <Button size="lg" variant="glass" className="w-full rounded-full text-base px-8 h-14 border-green-500/20 hover:border-green-500/50 hover:text-green-400 group">
                  <MessageSquare className="mr-2 h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  WhatsApp
                </Button>
              </a>

              <a href="mailto:jonathanrazafiarijaona@gmail.com" className="w-full sm:w-auto" aria-label="Nous envoyer un email">
                <Button size="lg" variant="glass" className="w-full rounded-full text-base px-8 h-14 hover:text-primary group">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Email
                </Button>
              </a>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground/60">
              Réponse rapide garantie en moins de 24h.
            </p>
          </div>
        </FadeIn>
      </div>
      
      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Noctis Digital Forge. Tous droits réservés.</p>
      </footer>
    </section>
  );
}
