
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Circle, Download, ArrowDown } from 'lucide-react';
import { Career } from '../pages/Index';

interface RoadmapViewProps {
  career: Career;
  onBack: () => void;
  onRestart: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ career, onBack, onRestart }) => {
  const getRoadmapSteps = (careerType: string) => {
    const commonSteps = [
      {
        phase: 'After 10th Grade',
        title: `Choose ${career.stream}`,
        duration: '2-3 months',
        description: 'Select the right stream and subjects for 11th-12th grade',
        tasks: [
          'Research colleges and boards (CBSE/State)',
          'Choose optional subjects wisely',
          'Plan your study schedule',
          'Join coaching if needed'
        ]
      },
      {
        phase: '11th-12th Grade',
        title: 'Build Strong Foundation',
        duration: '2 years',
        description: 'Focus on core subjects and develop relevant skills',
        tasks: [
          'Maintain good grades (75%+)',
          'Participate in olympiads/competitions',
          'Start building portfolio/projects',
          'Develop soft skills and communication'
        ]
      }
    ];

    if (careerType === 'engineering') {
      return [
        ...commonSteps,
        {
          phase: '12th Grade (Final Year)',
          title: 'Entrance Exam Preparation',
          duration: '6-12 months',
          description: 'Prepare for JEE Main, JEE Advanced, and other engineering entrances',
          tasks: [
            'Join JEE coaching or online courses',
            'Take regular mock tests',
            'Apply for various engineering entrances',
            'Research different engineering branches'
          ]
        },
        {
          phase: 'Undergraduate Degree',
          title: 'B.Tech/B.E. Program',
          duration: '4 years',
          description: 'Complete your engineering degree with practical experience',
          tasks: [
            'Maintain good CGPA (8.0+)',
            'Complete internships each summer',
            'Work on real projects and build portfolio',
            'Prepare for placements from 3rd year'
          ]
        },
        {
          phase: 'Career Launch',
          title: 'First Job & Growth',
          duration: 'Ongoing',
          description: 'Start your engineering career and plan for growth',
          tasks: [
            'Get placed in reputed company',
            'Gain 2-3 years experience',
            'Consider higher studies (M.Tech/MBA)',
            'Explore entrepreneurship opportunities'
          ]
        }
      ];
    }

    if (careerType === 'medical') {
      return [
        ...commonSteps,
        {
          phase: '12th Grade (Final Year)',
          title: 'NEET Preparation',
          duration: '12-18 months',
          description: 'Intensive preparation for NEET and medical entrance exams',
          tasks: [
            'Join NEET coaching program',
            'Take daily practice tests',
            'Focus on NCERT textbooks',
            'Apply for NEET and state medical entrances'
          ]
        },
        {
          phase: 'Medical College',
          title: 'MBBS Degree',
          duration: '5.5 years',
          description: 'Complete medical education including internship',
          tasks: [
            'Excel in all medical subjects',
            'Complete clinical rotations',
            'Prepare for NEET PG during final years',
            'Complete 1-year mandatory internship'
          ]
        },
        {
          phase: 'Specialization',
          title: 'MD/MS or Practice',
          duration: '3+ years',
          description: 'Choose between specialization or general practice',
          tasks: [
            'Clear NEET PG for specialization',
            'Complete residency program',
            'Start independent practice',
            'Consider fellowship opportunities'
          ]
        }
      ];
    }

    // Default roadmap for other careers
    return [
      ...commonSteps,
      {
        phase: 'Entrance/Admission',
        title: 'College Admission',
        duration: '3-6 months',
        description: 'Apply and secure admission in top colleges',
        tasks: [
          'Research top colleges and courses',
          'Prepare for entrance exams if required',
          'Apply to multiple institutions',
          'Attend counseling sessions'
        ]
      },
      {
        phase: 'Undergraduate Studies',
        title: 'Degree Completion',
        duration: '3-4 years',
        description: 'Complete your chosen degree program',
        tasks: [
          'Maintain excellent academic record',
          'Participate in extracurricular activities',
          'Complete internships and projects',
          'Build network and industry connections'
        ]
      },
      {
        phase: 'Career Development',
        title: 'Professional Growth',
        duration: 'Ongoing',
        description: 'Launch and grow your career',
        tasks: [
          'Secure first job or start venture',
          'Develop specialized skills',
          'Consider advanced certifications',
          'Plan long-term career trajectory'
        ]
      }
    ];
  };

  const roadmapSteps = getRoadmapSteps(career.id);

  const handleDownloadPDF = () => {
    // This would typically generate and download a PDF
    console.log('Downloading PDF roadmap for:', career.title);
    alert('PDF download feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
        <Button 
          onClick={handleDownloadPDF}
          variant="outline"
          size="sm"
          className="hidden md:flex"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-pathfinder-blue/10 text-pathfinder-blue">
            Personalized Roadmap
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Your Path to {career.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Follow this step-by-step roadmap to achieve your career goals
          </p>
        </div>

        {/* Career Overview */}
        <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm border-white/30 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Career Overview</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Stream:</span>
                  <span className="font-semibold">{career.stream}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-semibold">{career.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Avg. Salary:</span>
                  <span className="font-semibold text-pathfinder-blue">{career.avgSalary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Competition:</span>
                  <Badge 
                    variant={career.competition === 'High' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {career.competition}
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {career.subjects.map((subject, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Roadmap Timeline */}
        <div className="space-y-6">
          {roadmapSteps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {step.phase}
                    </Badge>
                    <span className="text-sm text-slate-500">{step.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Key Tasks:</h4>
                    <ul className="space-y-1">
                      {step.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="flex items-start space-x-2 text-sm text-slate-600">
                          <Circle className="w-2 h-2 mt-2 flex-shrink-0 fill-pathfinder-blue text-pathfinder-blue" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button 
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-pathfinder-blue to-pathfinder-purple hover:from-pathfinder-purple hover:to-pathfinder-pink text-white px-8"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Roadmap PDF
          </Button>
          <Button 
            variant="outline" 
            onClick={onBack}
            className="px-8"
          >
            View Other Careers
          </Button>
          <Button 
            variant="outline" 
            onClick={onRestart}
            className="px-8"
          >
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
};
