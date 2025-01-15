import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dumbbell,
  MessageSquare,
  Calendar,
  Zap,
  ArrowRight,
  Activity,
  MonitorIcon as Running,
  Bike,
} from "lucide-react";
import { AnimatedWorkoutIcon } from "./AnimatedWorkoutIcon";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <AnimatedWorkoutIcon />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-700 dark:text-blue-300">
                  Meet WorkoutPal, Your AI Fitness Coach
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Elevate your fitness journey with personalized workout plans
                  for running, gym, and cycling, powered by AI.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Start Planning
                </Button>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-100 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700 dark:text-blue-300">
              WorkoutPal Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>Smart Workout Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get personalized workout plans for running, gym, and cycling
                    based on your goals and fitness level.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle>24/7 Fitness Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ask WorkoutPal anything about running, gym workouts, or
                    cycling techniques and nutrition tips, anytime.
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
                    Monitor your fitness journey across all workout types, set
                    goals, and receive AI-powered insights to improve.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="workout-types" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700 dark:text-blue-300">
              Workout Types
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-800 transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <Running className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Running</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Personalized running plans for all levels, from beginners to
                  marathon trainers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-800 transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <Dumbbell className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gym Workouts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored strength training and cardio routines for gym
                  enthusiasts of all levels.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-800 transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <Bike className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cycling</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customized cycling programs for road, mountain, or indoor
                  cycling enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-started"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Transform Your Fitness?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join the cult of runners, gym-goers, and cyclists who are
                  already benefiting from AI-powered workout planning and
                  guidance.
                </p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Start Your Journey Now
                <ArrowRight className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 WorkoutPal AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            href="#"
          >
            Contact Us
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
