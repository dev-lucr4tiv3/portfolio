import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Terminal: React.FC = () => {
  const [prompt, setPrompt] = useState('lucentix@x-service:~$ ');
  const [commandExecuted, setCommandExecuted] = useState(false);

  useEffect(() => {
    // Simulate typing the command
    const timer = setTimeout(() => {
      setPrompt('lucentix@x-service:~$ npx lucentix');
      setCommandExecuted(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="w-full max-w-2xl bg-black bg-opacity-80 rounded-md border border-green-500 shadow-lg shadow-green-500/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex items-center bg-gray-900 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-sm font-mono">
          lucentix.dev
        </div>
      </div>
      
      <div className="p-4 font-mono text-sm text-green-400">
        <p className="mb-2">{prompt}</p>
        
        {commandExecuted && (
          <>
            <p className="text-blue-400 mb-4">&gt;&gt; fullstack dev | discord-active | github-addict</p>
            
            <TypeAnimation
              sequence={[
                'building chaos.',
                2000,
                'crafting fullstack spells.',
                2000,
                'modding minds.',
                2000,
                'active on Discord.',
                2000,
                'dropping on GitHub.',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-purple-400"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;