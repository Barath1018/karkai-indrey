import { useState, useEffect } from "react";
import { Users, BookOpen, Target, Sparkles } from "lucide-react";

interface CounterProps {
  icon: React.ElementType;
  targetValue: number;
  label: string;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({
  icon: Icon,
  targetValue,
  label,
  duration = 2000,
  suffix = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = targetValue / (duration / 50);
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        if (nextCount >= targetValue) {
          clearInterval(timer);
          return targetValue;
        }
        return nextCount;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, targetValue, duration]);

  return (
    <div
      id={`counter-${label}`}
      className="p-6 rounded-2xl bg-white border border-gray-200 shadow hover:shadow-md transition duration-300"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="p-3 bg-green-100 rounded-full">
          <Icon className="h-8 w-8 text-green-600" />
        </div>
        <div className="text-3xl font-bold text-green-700">
          {Math.floor(count)}
          {suffix}
        </div>
        <div className="text-sm text-gray-600 font-medium text-center">
          {label}
        </div>
      </div>
    </div>
  );
};

const InteractiveCounter = () => {
  const counters = [
    { icon: Users, targetValue: 150, label: "Students Reached", suffix: "+" },
    { icon: BookOpen, targetValue: 25, label: "Workshops Conducted", suffix: "+" },
    { icon: Target, targetValue: 10, label: "Cities Covered", suffix: "+" },
    { icon: Sparkles, targetValue: 100, label: "Dreams Ignited", suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {counters.map((counter, index) => (
        <AnimatedCounter
          key={index}
          icon={counter.icon}
          targetValue={counter.targetValue}
          label={counter.label}
          suffix={counter.suffix}
          duration={2000 + index * 200}
        />
      ))}
    </div>
  );
};

export default InteractiveCounter;
