import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Education Item - B.Tech */}
            <div className="relative pb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-box -translate-x-1/2">
                <GraduationCap size={16} className="text-primary-foreground" />
              </div>

              <div className="glass-card p-8 rounded-xl ml-6 hover-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech)</h3>
                  <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                    <Award size={16} />
                    <span className="text-sm font-medium">Second Year</span>
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">
                  Global Engineering College, Jabalpur
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">Currently Pursuing</span>
                </div>

                <p className="text-muted-foreground">
                  Currently in my second year of Bachelor of Technology at Global Engineering College, Jabalpur. Focusing on core engineering principles and advanced technological concepts.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Engineering
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Technology
                  </span>
                </div>
              </div>
            </div>

            {/* Education Item - 12th Grade */}
            <div className="relative pb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-box -translate-x-1/2">
                <GraduationCap size={16} className="text-primary-foreground" />
              </div>

              <div className="glass-card p-8 rounded-xl ml-6 hover-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Higher Secondary Certificate (12th Grade)</h3>
                  <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                    <Award size={16} />
                    <span className="text-sm font-medium">78%</span>
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">
                  M.P. Board
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">2021</span>
                </div>

                <p className="text-muted-foreground">
                  Completed 12th grade from M.P. Board in 2021 with a focus on science subjects.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Science
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    M.P. Board
                  </span>
                </div>
              </div>
            </div>

            {/* Education Item - 10th Grade */}
            <div className="relative pb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-box -translate-x-1/2">
                <GraduationCap size={16} className="text-primary-foreground" />
              </div>

              <div className="glass-card p-8 rounded-xl ml-6 hover-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Secondary School Certificate (10th Grade)</h3>
                  <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                    <Award size={16} />
                    <span className="text-sm font-medium">80%</span>
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">
                  M.P. Board
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">2019</span>
                </div>

                <p className="text-muted-foreground">
                  Completed 10th grade from M.P. Board in 2019.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    M.P. Board
                  </span>
                </div>
              </div>
            </div>

            {/* Education Item - Diploma (Original) */}
            <div className="relative pb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-box -translate-x-1/2">
                <GraduationCap size={16} className="text-primary-foreground" />
              </div>

              <div className="glass-card p-8 rounded-xl ml-6 hover-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Diploma in Information Technology</h3>
                  <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                    <Award size={16} />
                    <span className="text-sm font-medium">CGPA: 7.3</span>
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">
                  Kalaniketan Polytechnic College, Jabalpur
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">Completed Successfully</span>
                </div>

                <p className="text-muted-foreground">
                  Completed a comprehensive diploma program focusing on Information Technology 
                  fundamentals including programming, web development, database management, 
                  and software engineering principles. Gained practical experience through 
                  hands-on projects and developed strong problem-solving skills.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Information Technology
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Web Development
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    Database Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
