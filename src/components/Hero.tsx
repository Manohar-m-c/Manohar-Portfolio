
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image from "../../public/images/1742556398229.jpg"
import Resume from "../../public/images/Manohar_FrontendDeveloper.pdf"

const Hero = () => {
  function handledownload(event: any): void {
       window.location.href = Resume
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
    //  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 animate-gradient-shift"></div>
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile image with glowing effect */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
            <img
              src={image}
              alt="Manohara M C Profile"
              className="relative w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/30 backdrop-blur-sm"
            />
          </div>
          
          {/* Animated text with gradient */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-text-shimmer">
            Manohar <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> M C</span>
          </h1>
          
          {/* Typewriter effect text */}
          <div className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
            <span className="typewriter">Full Stack Software Engineer</span>
          </div>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            3.6+ years of experience in scalable web application development. 
            Specializing in React.js, Next.js, ASP.NET Core with a focus on performance optimization and clean code.
          </p>
          
          {/* Contact info */}
          <div className="text-white/70 mb-8 space-y-2">
            <p>📍 Bangalore, Karnataka 560068</p>
            <p>📞 +91 9742060062</p>
            <p>✉️ manohar.mc.dev@gmail.com</p>
          </div>
          
          {/* Animated buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button size="lg" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Let's Connect
            </Button>
            <a
  href={Resume}
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl"
  >
    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
    Download Resume
  </Button>
</a>

          </div>
          
          {/* Social links with hover effects */}
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/Manohar-m-c" target="_blank" rel="noopener noreferrer" className="group text-white/70 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Github className="h-8 w-8 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            </a>
            <a href="https://linkedin.com/in/manohar-m-c-476908213" target="_blank" rel="noopener noreferrer" className="group text-white/70 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Linkedin className="h-8 w-8 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            </a>
            <a href="mailto:manohar.mc.dev@gmail.com" className="group text-white/70 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Mail className="h-8 w-8 group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
