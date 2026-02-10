"use client";

import { HiSearch, HiX } from "react-icons/hi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <HiSearch className="h-5 w-5 text-neutral" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-11 pr-10 py-3 bg-white border border-border rounded-full text-foreground placeholder:text-neutral focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral hover:text-foreground transition-colors"
        >
          <HiX className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
