import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, Cpu, BookMarked, Languages } from "lucide-react";

import { fadeUp } from "@/lib/animations";
import { languageResources } from "@/data/languageResources";

const legalAndEngineering = [
  {
    title: "Authority-aware legal RAG",
    subtitle: "Lexra · Technical essay",
    description:
      "How we structure retrieval for legal work: source authority, jurisdiction, and reranking — so models cite what matters, not whatever is semantically close.",
    href: "/lexra-legal-rag-blog.html",
    icon: Scale,
  },
  {
    title: "AI agent memory management",
    subtitle: "Deep dive · Agent engineering",
    description: "Memory, context windows, and RAG in production agents: patterns we use when teaching and consulting on agent systems.",
    href: "/training/episode-01-agent-memory.html",
    icon: Cpu,
  },
  {
    title: "Evaluating production AI agents",
    subtitle: "Case study · Evaluation",
    description: "A worked example of evaluating an AI sales intelligence agent: metrics, failure modes, and what “good enough” means before rollout.",
    href: "/training/episode-02-agent-evaluation.html",
    icon: BookMarked,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Blog & resources
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Publications and reference library
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Long-form technical writing on legal AI and agent engineering, plus structured language-learning materials we maintain for education products.{" "}
              <Link to="/about" className="text-primary underline-offset-4 hover:underline">
                Company overview
              </Link>{" "}
              is available separately.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Legal AI & agent engineering
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Technical essays & case studies
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Static HTML articles — suitable for printing, archiving, and compliance review. Open in a new tab if your browser blocks mixed navigation.
            </motion.p>
          </motion.div>

          <div className="mt-12 space-y-5">
            {legalAndEngineering.map((item, i) => (
              <motion.div
                key={item.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25 hover:bg-card/80 md:flex-row md:items-start md:justify-between md:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.subtitle}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-foreground group-hover:text-primary md:text-xl">{item.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 font-display text-sm font-medium text-primary md:pt-1">
                    Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Language learning
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Reference curricula & flashcard sets
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Hosted study paths and vocabulary systems used alongside{" "}
              <Link to="/products#mollytalk" className="text-primary underline-offset-4 hover:underline">
                Molly Talk
              </Link>
              . Each link opens a dedicated static guide.
            </motion.p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {languageResources.map((lang, i) => (
              <motion.div
                key={lang.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i}
              >
                <a
                  href={lang.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/25 hover:bg-card/80"
                >
                  <div className="flex items-start gap-3">
                    <Languages className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary">{lang.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{lang.subtitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lang.description}</p>
                    </div>
                  </div>
                  <span className="mt-4 flex items-center gap-1.5 font-display text-xs font-medium text-primary">
                    Open resource <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-10 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-5 text-center text-sm text-muted-foreground"
          >
            Browse the full language hub with larger cards and tags:{" "}
            <Link to="/language" className="font-medium text-primary underline-offset-4 hover:underline">
              /language
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
