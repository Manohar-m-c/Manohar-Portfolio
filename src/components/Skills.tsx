
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React.js", level: 95, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
        { name: "JavaScript (ES6+)", level: 85, color: "bg-gradient-to-r from-indigo-400 to-purple-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-gradient-to-r from-purple-400 to-pink-500" }
      ]
    },
    {
      title: "Backend",
      gradient: "from-emerald-500 to-teal-600",
      skills: [
        { name: "ASP.NET Core", level: 95, color: "bg-gradient-to-r from-emerald-400 to-teal-500" },
        { name: "C#", level: 90, color: "bg-gradient-to-r from-teal-400 to-cyan-500" },
        { name: "RESTful APIs", level: 90, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Microservices", level: 80, color: "bg-gradient-to-r from-blue-400 to-indigo-500" }
      ]
    },
    {
      title: "Database & DevOps",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "SQL Server", level: 90, color: "bg-gradient-to-r from-orange-400 to-red-500" },
        { name: "PostgreSQL", level: 85, color: "bg-gradient-to-r from-red-400 to-pink-500" },
        { name: "GitLab CI/CD", level: 80, color: "bg-gradient-to-r from-pink-400 to-purple-500" },
        { name: "Git", level: 95, color: "bg-gradient-to-r from-purple-400 to-indigo-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring scalable solutions to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group relative">
              {/* Glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 transform group-hover:scale-105">
                <div className="text-center mb-6">
                  <div className={`inline-block bg-gradient-to-r ${category.gradient} px-4 py-2 rounded-xl shadow-lg mb-3`}>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold text-sm">{skill.name}</span>
                        <span className="text-white/80 font-medium text-sm">{skill.level}%</span>
                      </div>
                      <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div
                          className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out transform origin-left shadow-lg skill-bar`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
