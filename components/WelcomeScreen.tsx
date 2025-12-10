import React from 'react';
import { Sprout } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <div className="bg-emerald-100 p-6 rounded-full mb-8 shadow-lg animate-pulse">
        <Sprout size={64} className="text-emerald-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
        Money Tree Personality Test
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
        Discover what kind of "Cosmic Farmer" you are. This test analyzes your financial habits, 
        risk tolerance, and values to reveal your unique Money Tree persona and recommend 
        the best investment funds for your future.
      </p>
      
      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
      >
        Start Planting
      </button>
      
      <div className="mt-12 text-sm text-slate-500">
        Powered by Google Gemini 2.5 Flash Lite & 3 Pro Image
      </div>
    </div>
  );
};