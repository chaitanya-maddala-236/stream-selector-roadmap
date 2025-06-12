import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass, ArrowDown } from 'lucide-react';
import { QuizData, Career } from '../pages/Index';

interface RecommendationsPageProps {
  quizData: QuizData;
  onCareerSelect: (career: Career) => void;
  onBack: () => void;
}

export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ 
  quizData, 
  onCareerSelect, 
  onBack 
}) => {
  // Simple recommendation logic based on quiz data
  const getRecommendations = (): Career[] => {
    const recommendations: Career[] = [];
    
    // Science/Engineering path
    if (quizData.interests.some(i => ['Mathematics', 'Physics', 'Computer Science'].includes(i))) {
      recommendations.push({
        id: 'engineering',
        title: 'Engineering & Technology',
        stream: 'Science (PCM/PCB)',
        description: 'Build innovative solutions and shape the future through technology, engineering, and scientific research.',
        avgSalary: '₹6-25 LPA',
        duration: '4-6 years',
        competition: 'High',
        subjects: ['Mathematics', 'Physics', 'Chemistry/Biology', 'English'],
        pros: ['High salary potential', 'Job security', 'Innovation opportunities', 'Global career options'],
        cons: ['High competition', 'Extensive study required', 'Stressful entrance exams']
      });
    }

    // Medical path
    if (quizData.interests.includes('Biology') || quizData.ambitions.includes('Helping Others')) {
      recommendations.push({
        id: 'medical',
        title: 'Medical & Healthcare',
        stream: 'Science (PCB)',
        description: 'Serve humanity by providing healthcare services and advancing medical knowledge.',
        avgSalary: '₹8-30 LPA',
        duration: '5.5-11 years',
        competition: 'High',
        subjects: ['Physics', 'Chemistry', 'Biology', 'English'],
        pros: ['High respect in society', 'Excellent salary', 'Job satisfaction', 'Stable career'],
        cons: ['Very long duration', 'Extremely competitive', 'High stress', 'Expensive education']
      });
    }

    // Business/Commerce path
    if (quizData.interests.some(i => ['Business Studies', 'Economics'].includes(i)) || 
        quizData.ambitions.includes('Entrepreneurship')) {
      recommendations.push({
        id: 'business',
        title: 'Business & Management',
        stream: 'Commerce',
        description: 'Lead organizations, manage teams, and build successful businesses in various industries.',
        avgSalary: '₹4-20 LPA',
        duration: '3-5 years',
        competition: 'Medium',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
        pros: ['Diverse career options', 'Leadership opportunities', 'Good work-life balance', 'Entrepreneurship scope'],
        cons: ['Initial lower salaries', 'Market dependent', 'Requires networking skills']
      });
    }

    // Arts/Creative path
    if (quizData.interests.some(i => ['Arts & Design', 'English Literature', 'Music'].includes(i)) ||
        quizData.ambitions.includes('Creative Freedom & Expression')) {
      recommendations.push({
        id: 'arts',
        title: 'Arts & Creative Fields',
        stream: 'Arts/Humanities',
        description: 'Express creativity through various mediums while building a career in creative industries.',
        avgSalary: '₹3-15 LPA',
        duration: '3-4 years',
        competition: 'Medium',
        subjects: ['English', 'History', 'Political Science', 'Psychology', 'Fine Arts'],
        pros: ['Creative satisfaction', 'Flexible work options', 'Personal expression', 'Diverse opportunities'],
        cons: ['Irregular income initially', 'Market uncertainty', 'Requires strong portfolio']
      });
    }

    return recommendations.slice(0, 3); // Return top 3 recommendations
  };

  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple flex items-center justify-center">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold font-poppins bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple bg-clip-text text-transparent">
            PathFinder
          </span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Your Personalized Career Recommendations
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Based on your interests and goals, here are the best career paths for you
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recommendations.map((career, index) => (
            <Card 
              key={career.id} 
              className="p-6 bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-pathfinder-blue/10 text-pathfinder-blue">
                      {career.stream}
                    </Badge>
                    <Badge 
                      variant={career.competition === 'High' ? 'destructive' : career.competition === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {career.competition} Competition
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{career.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{career.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Avg. Salary:</span>
                    <span className="font-semibold text-pathfinder-blue">{career.avgSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold">{career.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {career.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => onCareerSelect(career)}
                  className="w-full bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple hover:from-pathfinder-purple hover:to-pathfinder-pink text-white"
                >
                  Generate Roadmap
                  <ArrowDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="px-8"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
