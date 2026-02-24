import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Scale, GraduationCap, Stethoscope, Zap, Globe, Users, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

import { fadeUp } from "@/lib/animations";

const products = [
  {
    name: "Lexra AI",
    desc: "Enterprise legal intelligence platform. AI-powered contract analysis, drafting, and litigation management.",
    icon: Scale,
    tag: "Legal AI",
  },
  {
    name: "Molly Job",
    desc: "AI career coaching and interview preparation. Resume analysis, mock interviews, and job matching.",
    icon: GraduationCap,
    tag: "Education AI",
  },
  {
    name: "Molly Talk",
    desc: "Conversational AI for language learning and communication skills development.",
    icon: Brain,
    tag: "Education AI",
  },
  {
    name: "Medical AI",
    desc: "Next-generation AI diagnostics and clinical decision support. Coming soon.",
    icon: Stethoscope,
    tag: "Coming Soon",
  },
];

const capabilities = [
  { icon: Brain, title: "AI Agents", desc: "Autonomous systems that reason, plan, and execute complex workflows." },
  { icon: Code, title: "AI Infrastructure", desc: "Scalable pipelines built on LLM, RAG, and multi-agent architectures." },
  { icon: Zap, title: "AI Applications", desc: "Production-ready products for legal, education, and healthcare verticals." },
];

const stats = [
  { value: "100+", label: "AI Deployments" },
  { value: "10M+", label: "Queries Processed" },
  { value: "24/7", label: "Autonomous Operation" },
  { value: "5+", label: "Industry Verticals" },
];

const whyUs = [
  { icon: Code, title: "Technology-Driven", desc: "Built on cutting-edge LLM, RAG, and multi-agent systems." },
  { icon: Globe, title: "Global Remote Team", desc: "Distributed team across multiple time zones, shipping fast." },
  { icon: Zap, title: "Rapid Iteration", desc: "From prototype to production in weeks, not months." },
  { icon: Users, title: "Domain Expertise", desc: "Deep vertical knowledge in legal, education, and healthcare." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

        <div className="relative z-10 container-narrow px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} custom={0} className="mb-6 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Aletheia Technology
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              We build AI agents<br />
              <span className="text-gradient">that work for you.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Autonomous AI systems for legal, education, and healthcare. Enterprise-grade intelligence that scales with your business.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Explore Products
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 font-display text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Join Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Intelligence at every layer.
            </motion.h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
              >
                <cap.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Products
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              AI solutions, built to ship.
            </motion.h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30"
              >
                <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
                  {product.tag}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-1 font-display text-sm font-medium text-primary transition-all group-hover:gap-2"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Why Aletheia
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Built different.
            </motion.h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <item.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-12 text-center md:p-20"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-5xl">
              We're hiring AI engineers<br />
              <span className="text-gradient">& builders.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Remote-first. High ownership. Build the future of autonomous AI systems with us.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/careers"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                View Open Positions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
