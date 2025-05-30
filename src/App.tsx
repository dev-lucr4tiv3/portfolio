import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Terminal from './components/Terminal';
import AnimatedBackground from './components/AnimatedBackground';
import DiscordPresence from './components/DiscordPresence';
import TechShowcase from './components/TechShowcase';
import GitHubSection from './components/GitHubSection';
import Footer from './components/Footer';
import { Code, Zap } from 'lucide-react';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "lucentix.me | Clean. Code. Chaos.";
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <header className="py-6 mb-12">
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <Code className="w-6 h-6 text-green-400 mr-2" />
              <h1 className="text-xl font-mono font-bold text-white">lucentix.me</h1>
            </div>
            <div className="text-sm font-mono text-green-400">Clean. Code. Chaos.</div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="py-12 flex flex-col items-center justify-center min-h-[60vh]">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-center glitch-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-green-400">Lucentix</span> – Fullstack Dev
          </motion.h1>
          
          <Terminal />
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {['Tailwind', 'React', 'Node.js', 'TypeScript', 'PHP', 'Lua', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Bash', 'Dockerfile', 'JSON', 'YAML'].map((tech, index) => (
              <motion.span 
                key={tech}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm font-mono text-gray-300 border border-gray-700"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#2D3748',
                  borderColor: '#4FD1C5',
                  color: '#fff' 
                }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </section>
        
        {/* Discord & GitHub Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <GitHubSection />
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;