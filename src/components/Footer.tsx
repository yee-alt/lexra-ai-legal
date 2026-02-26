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
            Autonomous AI systems for legal, education, and healthcare. Formerly Knowra AI · Molly AI.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">Lexra AI</Link>
            <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">Molly Job</Link>
            <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">Molly Talk</Link>
            <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">Healio</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">About</Link>
            <Link to="/training" className="text-sm text-muted-foreground transition-colors hover:text-primary">Training</Link>
            <Link to="/careers" className="text-sm text-muted-foreground transition-colors hover:text-primary">Careers</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
          <div className="mt-4 flex flex-col gap-3">
            <a href="mailto:contact@aletheiatechnology.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact Us</a>
            <span className="text-sm text-muted-foreground">Remote-first · Global</span>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aletheia Technology. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
