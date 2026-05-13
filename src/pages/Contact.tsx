import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Get in touch
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For product inquiries, education and consulting engagements, or partnership questions, reach us by email. We respond to serious business and institutional requests as capacity allows.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-12 rounded-2xl border border-border bg-card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">Email</h2>
                <a href="mailto:contact@aletheiatechnology.com" className="mt-2 inline-block text-primary underline-offset-4 hover:underline">
                  contact@aletheiatechnology.com
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Careers:{" "}
                  <a href="mailto:careers@aletheiatechnology.com" className="text-primary underline-offset-4 hover:underline">
                    careers@aletheiatechnology.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 space-y-8"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Registered business (English)</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Business entity</p>
                <p className="mt-2">
                  Haikou Longhua Zhide Information Consulting Studio
                </p>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Registered address</p>
                <p className="mt-2">
                  Room 302, Building B, Jinlong City Plaza, No.45 Jinlong Road, Jinmao Street, Longhua District, Haikou City, Hainan, China
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Business information</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Based in China</li>
                <li>Educational and technology consulting services; software and AI solutions for professional clients</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
