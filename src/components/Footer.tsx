import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageSquare, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="w-full border-t border-gray-800 py-6 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-mono">Built with caffeine & chaos.</p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/dev-lucr4tiv3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-600 font-mono">
          <a 
            href="https://github.com/dev-lucr4tiv3/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            Source Code 🔗
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;