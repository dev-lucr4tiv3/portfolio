import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/dev-lucr4tiv3");
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error("GitHub fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div className="text-white">Loading GitHub stats...</div>;
  if (!profile) return <div className="text-red-500">Error loading profile.</div>;

  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)', y: -5 }}
    >
      <div className="flex items-center mb-4">
        <Github className="w-6 h-6 text-white mr-3" />
        <h2 className="text-xl font-mono text-white">GitHub Profile</h2>
      </div>

      <div className="bg-black bg-opacity-50 p-4 rounded-md font-mono">
        <div className="flex items-center mb-4">
          <img
            src={profile.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full border border-gray-700 mr-4"
          />
          <div>
            <h3 className="text-green-400 text-lg">{profile.login}</h3>
            <p className="text-gray-400 text-sm">{profile.bio || 'Coding in the shadows...'}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-white font-bold">{profile.public_repos}</div>
            <div className="text-gray-400 text-xs">Repos</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-white font-bold">{profile.followers}</div>
            <div className="text-gray-400 text-xs">Followers</div>
          </div>
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-white font-bold">{profile.following}</div>
            <div className="text-gray-400 text-xs">Following</div>
          </div>
        </div>

        <motion.a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 block w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GitHubSection;
