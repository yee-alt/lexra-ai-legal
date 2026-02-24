import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Truth through technology.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Aletheia — from the Greek word for "truth" — is a technology company building autonomous AI systems that bring clarity, structure, and intelligence to complex industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">Vision</h2>
              <p className="mt-4 font-display text-2xl font-semibold leading-relaxed text-foreground">
                A world where AI agents handle complexity — so humans can focus on what matters.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h2 className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">Mission</h2>
              <p className="mt-4 font-display text-2xl font-semibold leading-relaxed text-foreground">
                To build enterprise-grade AI systems that are reliable, explainable, and truly useful — across legal, education, and healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Story
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Originally known as Molly AI, we started with a simple belief: AI should work for people, not the other way around. Our first products — Molly Job and Molly Talk — proved that AI could transform education and career development.
              </p>
              <p>
                As we expanded into legal AI with Lexra, and began exploring medical AI, we realized we weren't just building products. We were building a new kind of technology company — one where autonomous AI agents solve real problems in regulated, high-stakes industries.
              </p>
              <p>
                We became Aletheia Technology to reflect this evolution. Our name means "truth" — because we believe the best AI doesn't obscure reality. It reveals it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              How We Work
            </motion.h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Remote-First", desc: "Distributed globally. Async by default." },
              { title: "High Ownership", desc: "You own your domain. Ship with conviction." },
              { title: "AI-First", desc: "We use our own tools. Build > Talk." },
              { title: "Move Fast", desc: "Prototype in days. Ship in weeks." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
