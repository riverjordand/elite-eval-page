const LandingFooter = () => {
  return (
    <footer className="py-6 md:py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground font-oswald">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Legendary Prep Academy. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
