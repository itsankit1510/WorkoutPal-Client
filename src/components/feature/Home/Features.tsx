import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dumbbell, Calendar, Activity, Brain, Zap, Users, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-700 dark:text-blue-300">
                  WorkoutPal Features
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover how WorkoutPal combines the expertise of a personal
                  trainer with the convenience of AI technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700 dark:text-blue-300">
              What We Offer
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Personalized Workout Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tailored workout routines based on your goals, fitness
                    level, and available equipment for running, gym, and
                    cycling.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Activity className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Monitor your improvements, track your workouts, and
                    visualize your progress over time with detailed analytics.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Brain className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>AI-Powered Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get instant answers to your fitness questions, form checks,
                    and nutrition advice, available 24/7.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Adaptive Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your workout plans automatically adjust based on your
                    progress, ensuring you're always challenged but not
                    overwhelmed.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with like-minded individuals, share your
                    achievements, and participate in challenges to stay
                    motivated.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <BookOpen className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access a wealth of articles, videos, and tutorials on proper
                    form, nutrition, and fitness best practices.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="why-different"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700 dark:text-blue-300">
              Why We're Different
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Sparkles className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Research-Backed Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our AI is trained on the latest physiological and strength
                    training research, ensuring you get scientifically-sound
                    advice. We've meticulously studied and incorporated insights
                    from leading experts and peer-reviewed journals in exercise
                    science.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <BookOpen className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Comprehensive Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    WorkoutPal's recommendations are crafted after extensive
                    analysis of reputable fitness books, research papers, and
                    best practices in strength training. This ensures you
                    receive well-rounded, effective guidance for your fitness
                    journey.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Brain className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Unlike static programs, our AI continuously learns and
                    updates its knowledge base with the latest fitness research
                    and trends. This means you always have access to
                    cutting-edge workout strategies and health insights.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Personalized at Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    While maintaining the personal touch of a dedicated coach,
                    our AI can provide tailored advice to thousands of users
                    simultaneously. This allows for a level of personalization
                    and availability that traditional coaching can't match.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="get-started"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Experience the Difference?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join WorkoutPal today and discover how our research-backed,
                  AI-powered approach can transform your fitness journey.
                </p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 transform transition-all duration-200 hover:scale-105 hover:shadow-lg mt-8">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;

