'use client';

import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog'; 

const WipPopup = () => {
  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Overlay className="fixed inset-0" />

      <AlertDialog.Content
        className="
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          rounded-2xl p-6 shadow-2xl w-11/12 max-w-md
          bg-white/20 backdrop-blur-lg border border-white/30
          text-white
          animate-fadeIn
          z-999
        "
      >
        <AlertDialog.Title className="text-2xl font-bold mb-4">
          Work in Progress 
        </AlertDialog.Title>

        <AlertDialog.Description className="mb-6 text-sm">
            This portfolio is currently under development. Some information may be inaccurate or incomplete, 
            and certain features may not yet be available.
        </AlertDialog.Description>

        <AlertDialog.Action asChild>
          <button
            className="
              px-4 py-2 bg-pink-500/80 hover:bg-pink-500/100
              text-white rounded-lg transition-all duration-200
            "
          >
            Close
          </button>
        </AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default WipPopup;
