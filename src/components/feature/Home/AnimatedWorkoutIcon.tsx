import React, { useState, useEffect } from 'react'
import { MonitorIcon as Running, Bike, Dumbbell } from 'lucide-react'

const icons = [
  { icon: Running, label: 'Running' },
  { icon: Bike, label: 'Cycling' },
  { icon: Dumbbell, label: 'Gym' }
]

export const AnimatedWorkoutIcon: React.FC = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, 500) // Change icon every 500 ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-16 h-16">
      {icons.map((icon, index) => {
        const Icon = icon.icon
        return (
          <div
            key={icon.label}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              index === currentIconIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIconIndex}
          >
            <Icon className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
        )
      })}
      <span className="sr-only">{icons[currentIconIndex].label}</span>
    </div>
  )
}

