import { motion } from "framer-motion";
import { Scale, GraduationCap, Brain, Stethoscope, ArrowRight, FileText, Shield, BarChart3, Globe, Gavel, BookOpen, Mic } from "lucide-react";
import { Link } from "react-router-dom";

import { fadeUp } from "@/lib/animations";

const products = [
  {
    id: "lexra",
    name: "Lexra AI",
    tagline: "Enterprise Legal Intelligence",
    desc: "A complete legal operating system. AI-powered contract analysis, smart comparison, regulatory intelligence, and litigation management — built for modern law firms and corporate legal departments.",
    icon: Scale,
    tag: "Legal AI",
    video: "/lexra-demo.mp4",
    features: [
      { icon: FileText, title: "AI Contract Analysis", desc: "Upload contracts for instant executive summaries, risk scoring, missing clauses, and regulatory exposure." },
      { icon: Shield, title: "Smart Comparison", desc: "Compare contract versions in seconds — structural, risk, and financial differences with AI explanations." },
      { icon: BarChart3, title: "Executive Reporting", desc: "Generate board-ready risk portfolios, compliance summaries, and performance reports." },
      { icon: Globe, title: "Regulatory Intelligence", desc: "Jurisdiction-based filtering, AI impact analysis, and automatic contract matching." },
      { icon: Gavel, title: "Litigation Management", desc: "Connect contracts and disputes with case timelines, strategy notes, and AI assessment." },
      { icon: Shield, title: "Enterprise Governance", desc: "Role-based access, audit logs, template governance, and multi-tenant support." },
    ],
  },
  {
    id: "mollyjob",
    name: "Molly Job",
    tagline: "AI Career Intelligence",
    video: undefined,
    desc: "AI-powered career coaching platform. Resume optimization, mock interviews with real-time feedback, and intelligent job matching — helping candidates land their dream roles faster.",
    icon: GraduationCap,
    tag: "Education AI",
    features: [
      { icon: FileText, title: "Resume Analysis", desc: "AI-powered resume scoring and optimization suggestions." },
      { icon: Mic, title: "Mock Interviews", desc: "Practice with AI interviewers across industries and roles." },
      { icon: BarChart3, title: "Performance Tracking", desc: "Track improvement over time with detailed analytics." },
      { icon: BookOpen, title: "Career Guidance", desc: "Personalized career path recommendations." },
    ],
  },
  {
    id: "mollytalk",
    name: "Molly Talk",
    tagline: "AI Communication Coach",
    video: undefined,
    desc: "Conversational AI for language learning and communication development. Practice real conversations, get instant feedback, and build confidence in any language.",
    icon: Brain,
    tag: "Education AI",
    features: [
      { icon: Mic, title: "Conversation Practice", desc: "Natural AI conversations across topics and difficulty levels." },
      { icon: BookOpen, title: "Language Learning", desc: "Structured learning paths for multiple languages." },
      { icon: BarChart3, title: "Progress Analytics", desc: "Track fluency, vocabulary, and pronunciation improvements." },
      { icon: Globe, title: "Cultural Context", desc: "Learn cultural nuances alongside language skills." },
    ],
  },
  {
    id: "healio",
    name: "Healio",
    tagline: "AI-Powered Disease Diagnosis & Health Management",
    video: undefined,
    desc: "Healio brings clinical intelligence to patients and providers. AI-assisted disease diagnosis, personalised health management plans, chronic condition monitoring, and patient triage — built with the same explainability and governance standards we established in legal AI.",
    icon: Stethoscope,
    tag: "Coming Soon",
    features: [
      { icon: Shield, title: "Disease Diagnosis Support", desc: "AI-assisted differential diagnosis with symptom analysis, risk stratification, and explainable clinical reasoning." },
      { icon: FileText, title: "Personal Health Management", desc: "Continuous health monitoring, personalised care plans, and chronic disease management tailored to each patient profile." },
      { icon: BarChart3, title: "Patient Triage & Risk Scoring", desc: "Automated triage protocols that prioritise patients by urgency using real-time vitals and medical history." },
      { icon: Globe, title: "Medical Records Intelligence", desc: "Intelligent extraction, summarisation, and structuring of unstructured clinical notes and patient records." },
      { icon: Gavel, title: "Clinical Decision Support", desc: "Evidence-based treatment recommendations aligned with latest clinical guidelines and patient-specific context." },
      { icon: Shield, title: "HIPAA-Ready Governance", desc: "Role-based access, full audit trails, and data sovereignty controls built for regulated healthcare environments." },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Products
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              AI that ships.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Enterprise-grade AI products for legal, education, and healthcare — each built with domain expertise and production-ready from day one.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {products.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-card/30" : ""}`}
        >
          <div className="container-narrow">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4">
                <product.icon className="h-8 w-8 text-primary" />
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
                  {product.tag}
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="mt-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                {product.name}
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="mt-1 font-display text-lg text-muted-foreground">
                {product.tagline}
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
                {product.desc}
              </motion.p>
            </motion.div>

            {product.video && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={3}
                className="mt-12 overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-border">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
                    Product Demo
                  </span>
                  <span className="text-xs text-muted-foreground">Lexra AI in action</span>
                </div>
                <video
                  src={product.video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-[520px] object-cover"
                />
              </motion.div>
            )}

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Interested in our products?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Let's discuss how Aletheia's AI solutions can transform your workflow.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href="mailto:contact@aletheiatechnology.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Let's Talk <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
