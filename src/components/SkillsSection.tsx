import { useEffect, useState } from 'react';

const skills = {
  frontend: [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚡' },
    { name: 'React', level: 85, icon: '⚛️' },
  ],
  backend: [
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'Express', level: 80, icon: '🚀' },
  ],
  database: [
    { name: 'MongoDB', level: 78, icon: '🍃' },
  ],
  tools: [
    { name: 'Git', level: 85, icon: '📦' },
    { name: 'GitHub', level: 88, icon: '🐙' },
    { name: 'VS Code', level: 92, icon: '💻' },
  ],
};

const SkillBar = ({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar h-2">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Frontend Development
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Backend Development
            </h3>
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 100 + 400}
                />
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Database
            </h3>
            <div className="space-y-6">
              {skills.database.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 100 + 600}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 100 + 700}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
