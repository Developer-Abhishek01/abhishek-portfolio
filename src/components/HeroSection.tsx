import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="hero-glow-accent bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
        <div className="hero-glow top-1/2 right-1/3 opacity-50" style={{ animationDelay: '-2s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <span className="inline-block px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-8 backdrop-blur-sm">
            ✨ Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm{' '}
          <span className="gradient-text relative">
            Abhishek Pandey
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50" />
          </span>
        </h1>

        <div className="animate-slide-up-delay-1">
          <p className="text-2xl md:text-3xl text-muted-foreground mb-2 font-medium">
            Full Stack <span className="text-primary font-medium">Web Developer</span>
          </p>
          <p className="text-lg text-primary/80 font-medium mb-6">
            & QA Testing Specialist
          </p>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg animate-slide-up-delay-2 leading-relaxed">
          Passionate about crafting seamless digital experiences from frontend to backend. 
          Skilled in building responsive web applications and ensuring quality through manual & automated testing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-slide-up-delay-3">
          <Button size="lg" className="glow-box text-base px-8 py-6 font-medium group" asChild>
            <a href="#contact" className="flex items-center gap-2">
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6 border-border/50 hover:border-primary/50 hover:bg-primary/5" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 animate-slide-up-delay-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border/50 bg-secondary/30 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all hover-glow backdrop-blur-sm"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border/50 bg-secondary/30 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all hover-glow backdrop-blur-sm"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:abhishek@example.com"
            className="p-4 rounded-full border border-border/50 bg-secondary/30 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all hover-glow backdrop-blur-sm"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors p-2 block">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
