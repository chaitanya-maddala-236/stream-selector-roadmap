
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
              <span className="bg-gradient-to-r from-pathfinder-blue via-pathfinder-purple to-pathfinder-pink bg-clip-text text-transparent">
                Choose Your Future
              </span>
              <br />
              <span className="text-slate-800">After 10th</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect career path based on your interests, ambitions, and goals. 
              Get a personalized roadmap to success.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              onClick={onStartQuiz}
              size="lg"
              className="bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple hover:from-pathfinder-purple hover:to-pathfinder-pink text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-slate-500">Takes only 3-5 minutes</p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pathfinder-blue to-pathfinder-teal rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Smart Assessment</h3>
              <p className="text-slate-600">
                Answer questions about your interests, goals, and preferences to get personalized recommendations.
              </p>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pathfinder-purple to-pathfinder-pink rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Career Guidance</h3>
              <p className="text-slate-600">
                Get detailed insights about different streams, subjects, and career opportunities that match you.
              </p>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pathfinder-teal to-pathfinder-orange rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Custom Roadmap</h3>
              <p className="text-slate-600">
                Receive a step-by-step roadmap with timelines, exams, courses, and milestones for your chosen path.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
