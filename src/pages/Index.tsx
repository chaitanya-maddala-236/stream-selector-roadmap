
import React, { useState } from 'react';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { QuizFlow } from '../components/QuizFlow';
import { RecommendationsPage } from '../components/RecommendationsPage';
import { RoadmapView } from '../components/RoadmapView';

export type Step = 'welcome' | 'quiz' | 'recommendations' | 'roadmap';

export interface QuizData {
  interests: string[];
  ambitions: string[];
  budget: number;
  freedom: number;
  complexity: number;
}

export interface Career {
  id: string;
  title: string;
  stream: string;
  description: string;
  avgSalary: string;
  duration: string;
  competition: 'Low' | 'Medium' | 'High';
  subjects: string[];
  pros: string[];
  cons: string[];
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const handleQuizComplete = (data: QuizData) => {
    setQuizData(data);
    setCurrentStep('recommendations');
  };

  const handleCareerSelect = (career: Career) => {
    setSelectedCareer(career);
    setCurrentStep('roadmap');
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setQuizData(null);
    setSelectedCareer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {currentStep === 'welcome' && (
        <WelcomeScreen onStartQuiz={() => setCurrentStep('quiz')} />
      )}
      
      {currentStep === 'quiz' && (
        <QuizFlow 
          onComplete={handleQuizComplete}
          onBack={() => setCurrentStep('welcome')} 
        />
      )}
      
      {currentStep === 'recommendations' && quizData && (
        <RecommendationsPage 
          quizData={quizData}
          onCareerSelect={handleCareerSelect}
          onBack={() => setCurrentStep('quiz')}
        />
      )}
      
      {currentStep === 'roadmap' && selectedCareer && (
        <RoadmapView 
          career={selectedCareer}
          onBack={() => setCurrentStep('recommendations')}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Index;
