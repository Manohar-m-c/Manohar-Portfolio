
import { Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ticket Management System",
      description: "Led development of internal ticket management system that boosted workflow efficiency by 40%. Built with modern full-stack technologies and optimized for high performance.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["C#", "JavaScript", "React", "ASP.NET Core", "SQL Server"],
      featured: true,
      gradient: "from-emerald-500 to-teal-600",
      impact: "40% workflow efficiency improvement"
    },
    {
      title: "Prodigy - Retail Jewellery E-commerce",
      description: "Developed a comprehensive e-commerce platform for retail jewellery with seamless product listing and checkout experience. Maintained 99.9% uptime for high-traffic operations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["C#", "JavaScript", "React", "ASP.NET Core", "SQL Server", "Postman"],
      featured: true,
      gradient: "from-purple-500 to-pink-600",
      impact: "99.9% uptime with seamless user experience"
    },
    {
      title: "Savings Scheme Web App",
      description: "Built a scalable savings scheme application with automated CI/CD pipeline for faster and more reliable releases. Implemented modern deployment practices and performance optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["C#", "JavaScript", "Next.js", "ASP.NET Core", "PostgreSQL", "GitLab CI/CD"],
      featured: false,
      gradient: "from-blue-500 to-indigo-600",
      impact: "Automated deployments with faster releases"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/30 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Key projects that showcase my expertise in full-stack development and performance optimization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Project card with hover effects */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-105`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/50 hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`bg-gradient-to-r ${project.gradient} px-2 py-1 rounded-full flex items-center shadow-md`}>
                      <Star className="h-3 w-3 text-white mr-1" />
                      <span className="text-white text-xs font-semibold">Featured</span>
                    </div>
                  </div>
                )}
                
                {/* Project image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-purple-700 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Impact badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs px-2 py-1 rounded-full border border-green-200">
                      📈 {project.impact}
                    </span>
                  </div>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 text-xs rounded-full border border-slate-200 hover:shadow-sm transition-shadow duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
