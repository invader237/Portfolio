'use client';

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialLink() {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-md backdrop-blur-md transition hover:bg-white/20">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/invader237"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center transition hover:scale-110"
          aria-label="GitHub"
        >
          <GitHubIcon className="text-2xl text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/diego-trivino-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center transition hover:scale-110"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
}
