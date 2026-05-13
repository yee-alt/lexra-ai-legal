import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Languages } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { languageResources } from "@/data/languageResources";

const LanguageHub = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Aletheia Languages
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Master new languages.
              <br />
              <span className="text-gradient">Structured and smart.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              These guides support{" "}
              <Link to="/products#mollytalk" className="text-primary underline-offset-4 hover:underline">
                Molly Talk
              </Link>
              . We bring the same rigour from our enterprise AI solutions to structured language practice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Resources
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Language Hub
            </motion.h2>
          </motion.div>

          <div className="mt-12 space-y-6">
            {languageResources.map((lang, i) => (
              <motion.div
                key={lang.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <a
                  href={lang.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Languages className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{lang.title}</h3>
                        <p className="mt-1 font-display text-sm text-muted-foreground">{lang.subtitle}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lang.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {lang.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary sm:shrink-0">
                      <span className="font-display text-sm font-medium">Access</span>
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageHub;
