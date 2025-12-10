import React, { useState } from 'react';
import { QUESTIONS } from './constants';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { analyzePersonality } from './services/geminiService';
import { AnalysisResult } from './types';

type AppStep = 'welcome' | 'quiz' | 'loading' | 'results';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const currentQuestionId = QUESTIONS[currentQuestionIndex].id;

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: number, optionLabel: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionLabel
    }));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('loading');
      
      // Prepare data for API
      const answersForApi = QUESTIONS.map(q => {
        const selectedLabel = answers[q.id];
        const selectedOption = q.options.find(opt => opt.label === selectedLabel);
        return {
          question: q.text,
          answer: selectedOption ? selectedOption.text : "No answer"
        };
      });

      const analysis = await analyzePersonality(answersForApi);
      setResult(analysis);
      setStep('results');
    }
  };

  const handleRetake = () => {
    setStep('welcome');
    setAnswers({});
    setResult(null);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {step === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}

        {step === 'quiz' && (
          <QuizScreen 
            currentQuestionId={currentQuestionId}
            onAnswer={handleAnswer}
            selectedOptionLabel={answers[currentQuestionId]}
            onNext={handleNext}
          />
        )}

        {step === 'loading' && (
          <LoadingScreen />
        )}

        {step === 'results' && result && (
          <ResultsScreen 
            result={result}
            onRetake={handleRetake}
          />
        )}
      </div>
    </div>
  );
};

export default App;