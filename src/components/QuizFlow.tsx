
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowDown, Circle } from 'lucide-react';
import { QuizData } from '../pages/Index';

interface QuizFlowProps {
  onComplete: (data: QuizData) => void;
  onBack: () => void;
}

export const QuizFlow: React.FC<QuizFlowProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizData>>({
    interests: [],
    ambitions: [],
    budget: 0,
    freedom: 0,
    complexity: 0
  });

  const questions = [
    {
      id: 'interests',
      title: 'What subjects interest you the most?',
      subtitle: 'Select all that apply',
      type: 'multiple',
      options: [
        'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
        'English Literature', 'History', 'Geography', 'Economics', 'Arts & Design',
        'Music', 'Sports', 'Business Studies', 'Psychology', 'Languages'
      ]
    },
    {
      id: 'ambitions',
      title: 'What drives you the most?',
      subtitle: 'Choose your top priorities',
      type: 'multiple',
      options: [
        'High Salary & Financial Security', 'Creative Freedom & Expression', 
        'Making a Social Impact', 'Research & Innovation', 'Fame & Recognition',
        'Work-Life Balance', 'Leadership & Management', 'Helping Others',
        'Entrepreneurship', 'Job Security'
      ]
    },
    {
      id: 'budget',
      title: 'What\'s your budget for further education?',
      subtitle: 'Including all expenses for the complete course',
      type: 'single',
      options: [
        { label: 'Under ₹2 Lakhs', value: 1 },
        { label: '₹2-5 Lakhs', value: 2 },
        { label: '₹5-10 Lakhs', value: 3 },
        { label: '₹10-20 Lakhs', value: 4 },
        { label: 'Above ₹20 Lakhs', value: 5 }
      ]
    },
    {
      id: 'freedom',
      title: 'What kind of work environment do you prefer?',
      subtitle: 'Think about your ideal work style',
      type: 'single',
      options: [
        { label: 'Structured with clear guidelines (9-5 jobs)', value: 1 },
        { label: 'Semi-structured with some flexibility', value: 2 },
        { label: 'Flexible with remote work options', value: 3 },
        { label: 'Project-based with variety', value: 4 },
        { label: 'Complete creative freedom (freelance/entrepreneur)', value: 5 }
      ]
    },
    {
      id: 'complexity',
      title: 'How challenging do you want your studies to be?',
      subtitle: 'Be honest about your comfort level',
      type: 'single',
      options: [
        { label: 'Easy - Moderate difficulty with good job prospects', value: 1 },
        { label: 'Moderate - Balanced challenge and opportunities', value: 2 },
        { label: 'Hard - High competition but excellent rewards', value: 3 }
      ]
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string | number) => {
    const newAnswers = { ...answers };
    
    if (currentQ.type === 'multiple') {
      const currentValues = newAnswers[currentQ.id as keyof QuizData] as string[] || [];
      if (currentValues.includes(value as string)) {
        newAnswers[currentQ.id as keyof QuizData] = currentValues.filter(v => v !== value) as any;
      } else {
        newAnswers[currentQ.id as keyof QuizData] = [...currentValues, value as string] as any;
      }
    } else {
      newAnswers[currentQ.id as keyof QuizData] = value as any;
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers as QuizData);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const isAnswered = () => {
    const current = answers[currentQ.id as keyof QuizData];
    if (currentQ.type === 'multiple') {
      return Array.isArray(current) && current.length > 0;
    }
    return current !== undefined && current !== 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple flex items-center justify-center">
            <Circle className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="text-xl font-bold font-poppins bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple bg-clip-text text-transparent">
            PathFinder
          </span>
        </div>
        <div className="text-sm text-slate-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-white/60 backdrop-blur-sm">
        <Progress value={progress} className="h-2 bg-slate-200">
          <div className="h-full bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple rounded-full transition-all duration-500" 
               style={{ width: `${progress}%` }} />
        </Progress>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto w-full">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-white/30 shadow-xl animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {currentQ.title}
              </h2>
              <p className="text-slate-600">{currentQ.subtitle}</p>
            </div>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => {
                const value = typeof option === 'string' ? option : option.value;
                const label = typeof option === 'string' ? option : option.label;
                const isSelected = currentQ.type === 'multiple' 
                  ? (answers[currentQ.id as keyof QuizData] as string[] || []).includes(value as string)
                  : answers[currentQ.id as keyof QuizData] === value;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(value)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
                      isSelected
                        ? 'border-pathfinder-blue bg-pathfinder-blue/10 text-pathfinder-blue'
                        : 'border-slate-200 bg-white hover:border-pathfinder-blue/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{label}</span>
                      <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                        isSelected 
                          ? 'border-pathfinder-blue bg-pathfinder-blue' 
                          : 'border-slate-300'
                      }`}>
                        {isSelected && <Circle className="w-3 h-3 text-white fill-current m-0.5" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="px-6"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!isAnswered()}
                className="bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple hover:from-pathfinder-purple hover:to-pathfinder-pink text-white px-6"
              >
                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
