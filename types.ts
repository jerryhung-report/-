export interface Option {
  label: string;
  text: string;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

export interface QuizState {
  answers: Record<number, string>; // questionId -> optionLabel (e.g. "A")
  currentQuestionIndex: number;
  isFinished: boolean;
}

export interface AnalysisResult {
  personaTitle: string;
  personaDescription: string;
  investmentStyle: string;
  recommendedFunds: {
    fundType: string;
    reason: string;
  }[];
  visualPrompt: string; // The prompt used to generate the image
}

export type ImageSize = '1K' | '2K' | '4K';