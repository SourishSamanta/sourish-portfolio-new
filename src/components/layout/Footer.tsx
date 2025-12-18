const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="font-display text-xl font-bold">
          JD<span className="text-primary">.</span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Designed & Built with passion.
        </p>

        {/* Back to top */}
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
