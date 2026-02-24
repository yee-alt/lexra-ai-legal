import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, MapPin, Clock } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import { fadeUp } from "@/lib/animations";

const roles = [
  {
    title: "AI Engineer Intern",
    location: "Remote",
    type: "Internship · Full-time",
    responsibilities: [
      "Build and fine-tune LLM-based AI agents for production use cases",
      "Develop RAG pipelines and multi-agent orchestration systems",
      "Contribute to core AI infrastructure shared across products",
      "Collaborate with product teams to ship AI features end-to-end",
    ],
    requirements: [
      "Strong Python and/or TypeScript skills",
      "Familiarity with LLMs, embeddings, and vector databases",
      "Experience with frameworks like LangChain, LlamaIndex, or similar",
      "Self-motivated and comfortable working independently",
    ],
    niceToHave: [
      "Experience with multi-agent systems",
      "Contributions to open-source AI projects",
      "Background in NLP or ML research",
    ],
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    type: "Internship · Full-time",
    responsibilities: [
      "Build full-stack features across our product suite",
      "Design and implement scalable APIs and data models",
      "Write clean, tested, production-ready code",
      "Participate in code reviews and architecture discussions",
    ],
    requirements: [
      "Proficiency in TypeScript, React, and Node.js",
      "Understanding of databases (SQL and NoSQL)",
      "Experience with version control (Git)",
      "Strong problem-solving skills",
    ],
    niceToHave: [
      "Experience with cloud platforms (AWS, GCP, or Vercel)",
      "Familiarity with CI/CD and DevOps practices",
      "Interest in AI/ML applications",
    ],
  },
  {
    title: "AI Agent Developer",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
      "Design and build autonomous AI agent systems",
      "Implement complex reasoning chains and tool-use patterns",
      "Optimize agent performance, reliability, and cost efficiency",
      "Define evaluation frameworks for agent behavior",
    ],
    requirements: [
      "2+ years building production AI systems",
      "Deep understanding of LLMs, prompting, and fine-tuning",
      "Experience with agent frameworks and tool orchestration",
      "Strong systems design skills",
    ],
    niceToHave: [
      "Published research in AI agents or multi-agent systems",
      "Experience in legal, education, or healthcare domains",
      "Track record of shipping AI products at scale",
    ],
  },
  {
    title: "AI Marketing Intern",
    location: "Remote",
    type: "Internship · Part-time",
    responsibilities: [
      "Create compelling content about AI products and use cases",
      "Manage social media presence across platforms",
      "Develop marketing strategies for product launches",
      "Analyze marketing metrics and optimize campaigns",
    ],
    requirements: [
      "Strong writing and communication skills",
      "Understanding of AI/tech industry landscape",
      "Experience with social media and content marketing",
      "Creative thinking and attention to detail",
    ],
    niceToHave: [
      "Experience marketing B2B SaaS or AI products",
      "Video production or graphic design skills",
      "Data-driven marketing mindset",
    ],
  },
];

const RoleCard = ({ role }: { role: typeof roles[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="rounded-2xl border border-border bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left md:p-8"
      >
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">{role.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin size={14} /> {role.location}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {role.type}</span>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-8 pt-6 md:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Responsibilities</h4>
                  <ul className="mt-3 space-y-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Requirements</h4>
                  <ul className="mt-3 space-y-2">
                    {role.requirements.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-primary">Nice to Have</h4>
                  <ul className="mt-3 space-y-2">
                    {role.niceToHave.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="mailto:careers@aletheiatechnology.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Careers
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-6xl">
              Build the future of AI<br />
              <span className="text-gradient">with us.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg text-muted-foreground">
              We're a remote-first team building autonomous AI systems. High ownership, flexible hours, and the chance to work on products that matter.
            </motion.p>
          </motion.div>

          {/* Values */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Remote-First", desc: "Work from anywhere in the world." },
              { title: "High Ownership", desc: "Own your domain end-to-end." },
              { title: "Flexible Hours", desc: "Async-first, results-driven." },
              { title: "Build > Talk", desc: "Ship fast, iterate faster." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 3}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Open Positions
            </motion.h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {roles.map((role) => (
              <RoleCard key={role.title} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Don't see your role?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto mt-4 max-w-lg text-muted-foreground">
              We're always looking for exceptional people. Send us your resume and tell us how you want to contribute.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href="mailto:careers@aletheiatechnology.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Send Your Resume <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
