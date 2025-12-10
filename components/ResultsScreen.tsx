import React, { useState } from 'react';
import { AnalysisResult, ImageSize } from '../types';
import { generateTreeImage } from '../services/geminiService';
import { RefreshCw, Download, Sparkles, TrendingUp, User } from 'lucide-react';

interface ResultsScreenProps {
  result: AnalysisResult;
  onRetake: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, onRetake }) => {
  const [imageSize, setImageSize] = useState<ImageSize>('1K');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);

  const handleGenerateImage = async () => {
    setIsGeneratingImg(true);
    const imgData = await generateTreeImage(result.visualPrompt, imageSize);
    setGeneratedImage(imgData);
    setIsGeneratingImg(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      
      {/* Header Result */}
      <div className="glass-panel rounded-3xl p-8 md:p-10 text-center shadow-xl border-t-4 border-emerald-500">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-700 mb-6">
          <User size={24} className="mr-2" />
          <span className="font-bold tracking-wide uppercase">Your Farmer Persona</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          {result.personaTitle}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {result.personaDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Investment Analysis */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="text-emerald-600" size={28} />
            <h3 className="text-2xl font-bold text-slate-800">Fund Recommendations</h3>
          </div>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Strategy</span>
            <div className="text-lg font-medium text-emerald-800">{result.investmentStyle}</div>
          </div>

          <div className="space-y-4">
            {result.recommendedFunds.map((fund, idx) => (
              <div key={idx} className="bg-white/50 p-4 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors">
                <div className="font-bold text-emerald-900 text-lg mb-1">{fund.fundType}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{fund.reason}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Generation */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-lg flex flex-col">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="text-amber-500" size={28} />
            <h3 className="text-2xl font-bold text-slate-800">Your Money Tree</h3>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center bg-slate-50 rounded-xl overflow-hidden min-h-[300px] border-2 border-dashed border-slate-200 relative group">
            {isGeneratingImg ? (
              <div className="flex flex-col items-center">
                <RefreshCw className="animate-spin text-emerald-500 mb-2" size={32} />
                <span className="text-sm text-slate-500">Growing your tree (Gemini 3 Pro)...</span>
              </div>
            ) : generatedImage ? (
              <>
                <img src={generatedImage} alt="Generated Money Tree" className="w-full h-full object-cover" />
                <a 
                  href={generatedImage} 
                  download="my-money-tree.png"
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-slate-700 hover:text-emerald-600"
                >
                  <Download size={20} />
                </a>
              </>
            ) : (
              <div className="text-center p-6">
                <p className="text-slate-400 mb-4 text-sm">Visualize your wealth with Gemini 3 Pro Image</p>
                <div className="flex flex-col gap-3 max-w-[200px] mx-auto">
                   <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-1 border border-slate-200">
                      {(['1K', '2K', '4K'] as ImageSize[]).map(size => (
                        <button
                          key={size}
                          onClick={() => setImageSize(size)}
                          className={`flex-1 py-1 text-xs font-bold rounded-md transition-colors ${
                            imageSize === size ? 'bg-emerald-100 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                   </div>
                   <button 
                    onClick={handleGenerateImage}
                    className="bg-slate-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-sm"
                   >
                     Generate Tree
                   </button>
                </div>
              </div>
            )}
          </div>
          
          {generatedImage && (
             <div className="mt-4 flex justify-between items-center">
               <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Size: {imageSize}</span>
               <button 
                 onClick={handleGenerateImage}
                 className="text-xs text-emerald-600 font-semibold hover:underline"
                >
                 Regenerate
               </button>
             </div>
          )}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={onRetake}
          className="px-8 py-3 bg-white border-2 border-emerald-500 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};