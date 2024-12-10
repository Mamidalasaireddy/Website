import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="text-4xl font-bold text-center">Sai Kumar Reddy Mamidala</h1>
      <p className="text-xl text-center mt-2">
        Full Stack Developer | Java, Spring Boot, Angular, AWS
      </p>
    </div>
  );
};

export default Hero;
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Turning Ideas Into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"> Digital Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-stack developer crafting exceptional digital experiences through clean code and innovative solutions.
          </p>
          <div className="flex gap-4 mb-12">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-full font-medium transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
}