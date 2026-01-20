'use client';

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialLink() {
  return (
    <div className="fixed top-4 right-4 z-999">
      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition flex gap-4">
        
        <a
          href="https://github.com/invader237"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="GitHub"
        >
          <GitHubIcon className="text-white text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/diego-trivino-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="text-white text-2xl" />
        </a>

      </div>
    </div>
  );
}
