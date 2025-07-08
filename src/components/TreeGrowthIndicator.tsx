import { TreePine, Sprout } from "lucide-react";
import { useEffect, useState } from "react";

interface TreeGrowthIndicatorProps {
  stage?: 'seed' | 'sprout' | 'tree';
  size?: 'sm' | 'md' | 'lg';
  showSoil?: boolean;
}

const TreeGrowthIndicator = ({
  stage = 'tree',
  size = 'md',
  showSoil = true,
}: TreeGrowthIndicatorProps) => {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = ['seed', 'sprout', 'tree'];
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentIcon = () => {
    switch (stages[currentStage]) {
      case 'seed':
        return (
          <div
            className={`w-2 h-2 bg-green-600 rounded-full animate-ping`}
            aria-label="Seed stage"
          />
        );
      case 'sprout':
        return (
          <Sprout
            className={`${sizeClasses[size]} text-green-600`}
            aria-label="Sprout stage"
          />
        );
      case 'tree':
        return (
          <TreePine
            className={`${sizeClasses[size]} text-green-700`}
            aria-label="Tree stage"
          />
        );
      default:
        return <TreePine className={`${sizeClasses[size]} text-green-600`} />;
    }
  };

  const getLabel = () => {
    switch (stages[currentStage]) {
      case 'seed':
        return 'Planting Dreams';
      case 'sprout':
        return 'Growing Knowledge';
      case 'tree':
        return 'Flourishing Future';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative flex items-end justify-center">
        {showSoil && (
          <div className="w-20 h-3 bg-gradient-to-r from-green-200 to-green-100 rounded-full" />
        )}
        <div className="absolute bottom-1 flex items-center justify-center">
          {getCurrentIcon()}
        </div>
      </div>
      {showSoil && (
        <div className="text-xs text-green-500 font-medium">{getLabel()}</div>
      )}
    </div>
  );
};

export default TreeGrowthIndicator;
