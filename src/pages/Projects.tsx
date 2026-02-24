import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const projects = [
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
  {
    title: "AI Health Management Pilot — Healio",
    industry: "Healthcare · Pilot Programme",
    problem: "A regional healthcare network needed to reduce diagnostic delays and improve chronic disease management for 20,000+ patients, while freeing clinical staff from repetitive documentation tasks.",
    solution: "Piloted Healio's disease diagnosis support and personalised health management modules. AI-assisted triage prioritised patients by risk score; automated care plans were generated from structured patient profiles.",
    result: "Pilot programme launching 2025. Early indicators show 60% reduction in triage processing time and 40% improvement in care plan personalisation scores versus manual baseline.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Projects & Case Studies
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Real impact. Real results.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg text-muted-foreground">
              How organizations are using Aletheia's AI to transform their operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="rounded-2xl border border-border bg-card p-8 md:p-12"
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
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to build your case study?
            </motion.h2>
            <motion.div variants={fadeUp} custom={1}>
              <a
                href="mailto:contact@aletheiatechnology.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
