import React from 'react';
import { QUESTIONS } from '../constants';
import { Option } from '../types';
import { ChevronRight, Check } from 'lucide-react';

interface QuizScreenProps {
  currentQuestionId: number;
  onAnswer: (questionId: number, optionLabel: string) => void;
  selectedOptionLabel?: string;
  onNext: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  currentQuestionId, 
  onAnswer, 
  selectedOptionLabel, 
  onNext 
}) => {
  const questionIndex = QUESTIONS.findIndex(q => q.id === currentQuestionId);
  const question = QUESTIONS[questionIndex];
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  if (!question) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-emerald-800 font-semibold mb-2">
          <span>QUESTION {questionIndex + 1} OF {QUESTIONS.length}</span>
          <span>{question.category}</span>
        </div>
        <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-panel rounded-2xl p-8 md:p-12 shadow-xl border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="space-y-4">
          {question.options.map((option: Option) => (
            <button
              key={option.label}
              onClick={() => onAnswer(question.id, option.label)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                selectedOptionLabel === option.label
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md'
                  : 'border-transparent bg-white/60 hover:bg-white hover:border-emerald-200 text-slate-700'
              }`}
            >
              <div className="flex items-center">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 transition-colors ${
                  selectedOptionLabel === option.label ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                }`}>
                  {option.label}
                </span>
                <span className="text-lg">{option.text}</span>
              </div>
              {selectedOptionLabel === option.label && (
                <Check className="text-emerald-500" size={24} />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={onNext}
            disabled={!selectedOptionLabel}
            className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold transition-all ${
              selectedOptionLabel
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};