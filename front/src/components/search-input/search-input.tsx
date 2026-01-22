'use client';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-center gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search skills..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 pr-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20
                     text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
      </div>

      {/*
      <button
        type="button"
        className="px-4 py-3 bg-pink-500/80 text-white rounded-lg shadow-md hover:bg-pink-500 transition"
      >
        <FilterAltIcon />
      </button>
      */}
    </div>
  );
}
