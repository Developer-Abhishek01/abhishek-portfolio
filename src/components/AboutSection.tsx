import { Code2, Rocket, Users, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building complete web solutions with frontend finesse and backend reliability.',
    },
    {
      icon: CheckCircle,
      title: 'QA Testing Expert',
      description: 'Ensuring quality through manual testing and basic automation practices.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and industry best practices.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Thriving in team environments with effective communication skills.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Passionate developer dedicated to creating impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Full Stack Web Developer</span> with 
              a strong passion for creating dynamic and responsive web applications. With a solid 
              foundation in both frontend and backend technologies, I bring ideas to life through 
              clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my diploma in Information Technology, I developed practical skills by working 
              on real-world projects like the official IT Department Website for my college. This 
              hands-on experience shaped my understanding of professional web development workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="text-primary font-medium">Go Unicrew</span>, I expanded my expertise 
              into QA Testing, performing both manual testing and basic automated testing. This dual 
              skill set allows me to not only build applications but also ensure they meet the highest 
              quality standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to continue growing as a developer, embracing new challenges and contributing 
              to innovative projects in real-world development environments.
            </p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-glow transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
