import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional experience and internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 rounded-2xl hover-glow transition-all">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Company Logo Placeholder */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Briefcase size={28} className="text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Full Stack Developer & QA Intern</h3>
                    <p className="text-primary font-medium text-lg mt-1">Go Unicrew</p>
                  </div>
                  <div className="flex flex-col gap-1 mt-3 md:mt-0 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>July 2025 – January 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>Full Stack Development & QA Testing</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Worked as a Full Stack Developer and QA Tester on real-world web applications. 
                  Contributed to both frontend and backend development while also ensuring software 
                  quality through comprehensive manual testing and basic automation testing practices.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Development Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Frontend development with React',
                        'Backend API development',
                        'Database integration',
                        'Feature implementation',
                        'Bug fixing & debugging',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                      <CheckCircle size={16} />
                      QA Testing Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Manual testing of features',
                        'Basic automation testing',
                        'Test case writing',
                        'Bug reporting & tracking',
                        'Cross-browser testing',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'PHP', 'MySQL', 'Manual Testing', 'Automation Testing', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full border border-border/50 bg-secondary/50 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
