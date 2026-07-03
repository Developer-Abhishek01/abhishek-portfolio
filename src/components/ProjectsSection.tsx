import { ExternalLink, Github, Folder, Globe, Users, Layout, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'IT Department Website',
    subtitle: 'Kalaniketan Polytechnic College',
    description: 'Developed the official IT Department Website for Kalaniketan Polytechnic College, Jabalpur. A comprehensive web solution featuring responsive design and backend integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    features: [
      { icon: Layout, text: 'Responsive UI Design' },
      { icon: Users, text: 'Student & Faculty Details' },
      { icon: Globe, text: 'Department Information Pages' },
      { icon: Server, text: 'PHP Backend Integration' },
    ],
    github: '#',
    live: 'https://www.it2025.itbotzjbp.in/',
  },
  {
    title: 'Radhe Shyam Restaurant Website',
    subtitle: 'Restaurant Management System',
    description: 'Developed a website for Radhe Shyam Restaurant, featuring menu display, online ordering capabilities, and reservation system.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    features: [
      { icon: Layout, text: 'Responsive Design' },
      { icon: Globe, text: 'Menu Display' },
      { icon: Users, text: 'Online Ordering' },
      { icon: Server, text: 'Reservation System' },
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'E-commerce Website',
    subtitle: 'Online Shopping Platform',
    description: 'Built a full-fledged e-commerce platform with a React frontend, including product listings, shopping cart, and checkout process.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
    features: [
      { icon: Layout, text: 'Responsive Frontend' },
      { icon: Globe, text: 'Product Catalog' },
      { icon: Users, text: 'Shopping Cart' },
      { icon: Server, text: 'User Authentication' },
    ],
    github: '#',
    live: '#',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="glass-card rounded-2xl p-8 hover-glow transition-all group max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-primary">
          <Folder size={32} />
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href={project.live}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-primary/80 font-medium">{project.subtitle}</p>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <feature.icon size={16} />
            </div>
            <span className="text-muted-foreground">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world projects I've worked on
          </p>
        </div>

        <div className="mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
