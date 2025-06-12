
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, Compass, Sparkles, Target, Map } from 'lucide-react';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pathfinder-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pathfinder-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pathfinder-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple flex items-center justify-center shadow-lg">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple bg-clip-text text-transparent">
            PathFinder
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600">
          <Sparkles className="w-4 h-4 text-pathfinder-blue" />
          <span>AI-Powered Career Guidance</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-pathfinder-blue mr-2" />
              <span className="text-sm font-medium text-slate-700">Trusted by 10,000+ students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
              <span className="bg-gradient-to-r from-pathfinder-blue via-pathfinder-purple to-pathfinder-pink bg-clip-text text-transparent">
                Choose Your Future
              </span>
              <br />
              <span className="text-slate-800">After 10th Grade</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover the perfect career path based on your interests, ambitions, and goals. 
              Get a personalized roadmap with AI-powered recommendations.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button 
              onClick={onStartQuiz}
              size="lg"
              className="bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple hover:from-pathfinder-purple hover:to-pathfinder-pink text-white font-semibold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ArrowDown className="ml-3 w-6 h-6 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pathfinder-purple to-pathfinder-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Takes only 3-5 minutes
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                100% Free
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Instant Results
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="p-8 bg-white/70 backdrop-blur-md border-white/40 hover:bg-white/85 transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pathfinder-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pathfinder-blue to-pathfinder-teal rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Smart Assessment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advanced AI analyzes your interests, goals, and preferences to provide highly accurate career recommendations.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white/70 backdrop-blur-md border-white/40 hover:bg-white/85 transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pathfinder-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pathfinder-purple to-pathfinder-pink rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Expert Guidance</h3>
                <p className="text-slate-600 leading-relaxing">
                  Get detailed insights about streams, subjects, and career opportunities from education experts and industry professionals.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white/70 backdrop-blur-md border-white/40 hover:bg-white/85 transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pathfinder-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pathfinder-teal to-pathfinder-orange rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Roadmap</h3>
                <p className="text-slate-600 leading-relaxed">
                  Receive a personalized step-by-step roadmap with timelines, exams, courses, and career milestones.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
