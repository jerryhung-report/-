import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-300 rounded-full opacity-20 animate-ping"></div>
        <div className="bg-white p-4 rounded-full shadow-lg relative z-10">
          <Loader2 className="animate-spin text-emerald-600" size={48} />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Analyzing your Cosmic Farm...</h2>
      <p className="text-slate-500">Consulting the Gemini 2.5 Flash Lite Oracle</p>
    </div>
  );
};