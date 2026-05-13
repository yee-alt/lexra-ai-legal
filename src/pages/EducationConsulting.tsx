import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Mic, BookOpen, Users, Presentation, Lightbulb, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import { fadeUp } from "@/lib/animations";

const services = [
  { icon: Mic, title: "Online teaching", desc: "Live and async instruction across AI literacy, tools, and applied workflows." },
  { icon: Users, title: "Career coaching", desc: "Interview preparation, resume strategy, and role positioning for tech and AI careers." },
  { icon: Lightbulb, title: "AI education consulting", desc: "Curriculum design, platform integration, and learning outcomes for teams and institutions." },
  { icon: Presentation, title: "Workshops", desc: "Focused sessions on agents, RAG, evaluation, and responsible deployment." },
  { icon: BookOpen, title: "Mentorship", desc: "Structured guidance for practitioners building real-world AI systems." },
  { icon: Briefcase, title: "Independent contractor services", desc: "Project-based delivery for global education platforms and enterprise clients." },
];

const engagements = [
  {
    title: "AI-Powered Contract Review System",
    industry: "Legal Services",
    problem: "A mid-size law firm was spending 40+ hours per week on manual contract review, leading to delays and inconsistent risk assessment.",
    solution: "Deployed Lexra AI's contract analysis engine with custom risk models trained on the firm's historical data and clause libraries.",
    result: "85% reduction in review time. Consistent risk scoring across 3,000+ contracts. Zero missed regulatory deadlines in 12 months.",
  },
  {
    title: "Career Coaching Platform for University",
    industry: "Higher Education",
    problem: "A major university's career center was overwhelmed with 10,000+ students needing personalized interview preparation and resume feedback.",
    solution: "Integrated Molly Job as the university's AI career coach, providing 24/7 mock interviews and resume optimization for all students.",
    result: "3x increase in student engagement with career services. 40% improvement in interview performance scores. 92% student satisfaction rate.",
  },
  {
    title: "Multi-Language Communication Training",
    industry: "Corporate Training",
    problem: "A multinational corporation needed to rapidly upskill 500+ employees in business English and Mandarin communication.",
    solution: "Deployed Molly Talk with customized conversation scenarios tailored to the company's industry terminology and business contexts.",
    result: "Average fluency improvement of 2 CEFR levels in 6 months. 85% completion rate across all participants.",
  },
  {
    title: "Regulatory Compliance Automation",
    industry: "Financial Services",
    problem: "A financial institution struggled to keep pace with evolving regulations across multiple jurisdictions, risking non-compliance.",
    solution: "Implemented Lexra AI's regulatory intelligence module with jurisdiction-based filtering and automatic contract impact analysis.",
    result: "Real-time compliance monitoring across 12 jurisdictions. 95% reduction in manual regulatory tracking effort.",
  },
];

const technicalRefs = [
  { title: "AI Agent Memory — Deep Dive", href: "/training/episode-01-agent-memory.html", note: "Technical reference for coaching on agent memory and RAG." },
  { title: "Evaluating an AI Sales Intelligence Agent", href: "/training/episode-02-agent-evaluation.html", note: "Reference material on evaluation and production AI systems." },
];

const EducationConsulting = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Education & Consulting
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Advisory, learning,
              <br />
              <span className="text-gradient">and technical partnership.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Aletheia concentrates on three interlocking lines of business:{" "}
              <span className="text-foreground/90">AI and information technology consulting</span>
              {" "}— architecture, adoption roadmaps, and the engineering judgment required to ship responsibly at enterprise scale;{" "}
              <span className="text-foreground/90">training and workshops</span>
              {" "}in career development and substantive AI education, from leadership briefings to hands-on cohorts; and{" "}
              <span className="text-foreground/90">educational consulting with online AI teaching</span>
              {" "}for global learning platforms and institutions that treat capability-building as a strategic investment. Engagements are framed as advisory mandates, intensive programmes, and teaching contracts — always explicit in scope and outcome.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Our product suite carries the same intellectual standard where software can scale methodology. Explore the portfolio on{" "}
              <Link to="/products" className="text-primary underline-offset-4 hover:underline">
                Products
              </Link>
              {" "}— then invite us where judgement, facilitation, and depth in the room still matter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What we deliver</h2>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="mt-4 max-w-2xl text-muted-foreground">
              Representative capabilities — available as standalone mandates or as part of a broader transformation programme.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl font-bold text-foreground md:text-3xl">
              AI coaching — technical references
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-muted-foreground leading-relaxed">
              For learners and teams we coach, we publish in-depth technical write-ups on agent design, memory, and evaluation. These articles illustrate the same standards we apply in consulting and teaching.
            </motion.p>
            <ul className="mt-8 space-y-4">
              {technicalRefs.map((ref) => (
                <li key={ref.href}>
                  <a
                    href={ref.href}
                    className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <span className="font-display font-semibold text-foreground group-hover:text-primary">{ref.title}</span>
                    <p className="mt-2 text-sm text-muted-foreground">{ref.note}</p>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Representative engagements
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 max-w-2xl text-muted-foreground">
              Examples of how organizations use our products and services together — from legal automation to education and corporate training.
            </motion.p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {engagements.map((project) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={0}
                className="rounded-2xl border border-border bg-background p-8 md:p-12"
              >
                <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
                  {project.industry}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{project.title}</h3>
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <div>
                    <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Challenge</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Solution</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Result</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Discuss a teaching or consulting engagement
            </motion.h2>
            <motion.div variants={fadeUp} custom={1}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Contact <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EducationConsulting;
