import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-wide px-6 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="font-display text-lg font-bold text-foreground">
            Aletheia<span className="text-gradient"> Technology</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            IT and AI solutions, educational consulting, and independent contractor teaching services for global clients.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/products#lexra" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Lexra AI
            </Link>
            <Link to="/products#mollyjob" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Molly Job
            </Link>
            <Link to="/products#mollytalk" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Molly Talk
            </Link>
            <Link to="/products#healio" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Healio
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/education-consulting" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Education & Consulting
            </Link>
            <Link to="/careers" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Careers
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Blog & resources
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Contact page
            </Link>
            <a href="mailto:contact@aletheiatechnology.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Email
            </a>
            <span className="text-sm text-muted-foreground">Remote-first · Global</span>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <div className="mx-auto max-w-3xl text-sm text-muted-foreground">
          <h4 className="font-display text-center text-xs font-semibold uppercase tracking-wider text-foreground">Business information</h4>
          <ul className="mt-4 list-none space-y-2 text-center leading-relaxed">
            <li>Based in China</li>
            <li>Educational & technology consulting services</li>
          </ul>
          <div className="mt-8 space-y-4 text-left leading-relaxed">
            <p>
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Business entity</span>
              <br />
              Haikou Longhua Zhide Information Consulting Studio
            </p>
            <p>
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">Registered address</span>
              <br />
              Room 302, Building B, Jinlong City Plaza, No.45 Jinlong Road, Jinmao Street, Longhua District, Haikou City, Hainan, China
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aletheia Technology. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
