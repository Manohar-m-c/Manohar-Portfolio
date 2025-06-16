
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with 40% performance improvements",
      gradient: "from-emerald-400 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Full Stack Development",
      description: "Expert in React.js, Next.js, ASP.NET Core, and database technologies",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency with proven results",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile team player with strong debugging and problem-solving skills",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/20 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Full Stack Software Engineer with 3.6+ years of experience building scalable web applications. 
            I specialize in performance optimization, clean code practices, and working in retail and e-commerce domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
              alt="Working"
              className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Turning Ideas Into Scalable Solutions
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              I believe in the power of technology to transform businesses and improve lives. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that exceed expectations and achieve measurable results.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              With expertise in React.js, Next.js, ASP.NET Core, and modern databases, I've successfully 
              led projects that improved workflow efficiency by 40% and maintained 99.9% uptime for 
              high-traffic e-commerce applications.
            </p>
            <div className="pt-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 w-24 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card background with gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className={`bg-gradient-to-r ${item.gradient} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{item.title}</h4>
                <p className="text-slate-600 text-center text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
