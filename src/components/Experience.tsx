
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Sharaan Infosystems",
      location: "Bangalore, Karnataka",
      period: "Dec 2021 - Present",
      type: "Full-time",
      description: [
        "Developed full-stack applications with React.js, Next.js, ASP.NET Core, SQL Server/PostgreSQL",
        "Led development of internal Ticket Management System (boosted efficiency by 40%)",
        "Built scalable Savings Scheme Web App with CI/CD pipeline implementation",
        "Developed e-commerce modules (product listing, checkout) with 99.9% uptime",
        "Performance optimization for high-traffic systems and legacy code modernization",
        "CI/CD pipeline setup, Git version control, and Agile development practices",
        "Security and data protection implementation with documentation improvements (30% faster onboarding)",
        "Third-party API integrations and microservices architecture"
      ],
      technologies: ["React.js", "Next.js", "ASP.NET Core", "C#", "SQL Server", "PostgreSQL", "GitLab CI/CD"]
    },
    {
      title: "Full Stack Developer Trainee",
      company: "J-Spiders",
      location: "Bangalore, Karnataka", 
      period: "Apr 2021 - Nov 2021",
      type: "Training",
      description: [
        "Comprehensive training in frontend, backend, and database technologies",
        "Built projects using React.js, ASP.NET Core, and SQL Server",
        "Hands-on experience with REST APIs, Git, and debugging techniques",
        "Agile-based mock project experience with sprint planning",
        "Code reviews and best practices implementation",
        "Database design and optimization techniques"
      ],
      technologies: ["React.js", "ASP.NET Core", "SQL Server", "REST APIs", "Git", "Agile"]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kuvempu University",
      location: "Shivamogga, Karnataka",
      year: "2020"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)", 
      institution: "Veerashaiva College",
      location: "Bellary, Karnataka",
      year: "2018"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and educational background in software development
          </p>
        </div>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200">
                      {experience.type}
                    </span>
                  </div>
                  <div className="text-blue-600 font-semibold text-lg mb-3">{experience.company}</div>
                  
                  <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <ul className="text-gray-600 space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <div className="text-blue-600 font-semibold mb-2">{edu.institution}</div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{edu.location}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
