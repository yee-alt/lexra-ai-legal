import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ChevronRight } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const seriesTitle = "100 Questions to Become an AI Agent Engineer";
const episodes = [
  {
    id: "episode-01-agent-memory",
    number: "01",
    title: "How AI Agents Remember Things",
    subtitle: "Agent Memory — Deep Dive",
    description: "A deep dive into the 4-layer memory architecture behind production AI agents — from ephemeral working memory to knowledge graphs, with real scoring formulas and consolidation mechanics.",
    tags: ["Memory & Retrieval", "Working Memory", "Episodic", "Semantic", "Qdrant", "Neo4j"],
    href: "/training/episode-01-agent-memory.html",
  },
  {
    id: "episode-02-agent-evaluation",
    number: "02",
    title: "Evaluating an AI Sales Intelligence Agent",
    subtitle: "Enterprise AI Evaluation — Case Study",
    description: "How to evaluate an enterprise AI pipeline end-to-end — from raw data ingestion and retrieval quality to source trustworthiness, traceability, and report usefulness.",
    tags: ["Evaluation", "Enterprise AI", "RAG", "Retrieval", "Grounding", "Metrics"],
    href: "/training/episode-02-agent-evaluation.html",
  },
  // Future episodes (03–100) will be added here as HTML files
];

const Training = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Aletheia Training
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              We build products.<br />
              <span className="text-gradient">We also train.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Beyond B2B and C2C products, Aletheia runs a technical training programme: <strong className="text-foreground">{seriesTitle}</strong>. One hundred episodes — from agent memory and RAG to tool use and evaluation. Same rigour we put into Lexra and Healio.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Episode list */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Episodes
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              {seriesTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-2 text-muted-foreground">
              Episode 1 live. 99 more coming.
            </motion.p>
          </motion.div>

          <div className="mt-12 space-y-6">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <a
                  href={ep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Brain className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
                          Episode {ep.number}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">
                          {ep.title}
                        </h3>
                        <p className="mt-1 font-display text-sm text-muted-foreground">
                          {ep.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {ep.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {ep.tags.slice(0, 5).map((tag) => (
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
                      <span className="font-display text-sm font-medium">Read</span>
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            New episodes added regularly. Follow us for updates.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Want to build with us?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto mt-4 max-w-lg text-muted-foreground">
              We hire AI engineers and agent developers. Training is free; building together is the next step.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/careers"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                See Open Roles <ChevronRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
