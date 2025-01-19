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

const NavBar = (React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white dark:bg-gray-800">
      <Link to="/" className="flex items-center justify-center">
        <Dumbbell className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">
          WorkoutPal
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </Link>
        <a
          className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          href="/features"
        >
          Features
        </a>
        <a
          className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          href="/login"
        >
          Let's Roll
        </a>
      </nav>
    </header>
  );
});

export default NavBar;
