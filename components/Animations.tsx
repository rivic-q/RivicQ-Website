import React, { useState, useEffect, useRef, ReactNode } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 700 
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    none: ''
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : `translate(${direction === 'left' ? '-30px' : direction === 'right' ? '30px' : '0'}, ${direction === 'up' ? '30px' : direction === 'down' ? '-30px' : '0'})`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

interface StaggeredAnimationProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 100,
  baseDelay = 0
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedItem 
          delay={baseDelay + (index * staggerDelay)}
          className={itemClassName}
        >
          {child}
        </AnimatedItem>
      ))}
    </div>
  );
};

export const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * easeOut));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, start, hasAnimated]);

  return { ref, count };
};

export const PulseAnimation: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {children}
  </div>
);

export const FadeInAnimation: React.FC<{ 
  children: ReactNode; 
  className?: string; 
  duration?: number 
}> = ({ 
  children, 
  className = '', 
  duration = 500 
}) => {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpacity(1);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ 
        opacity,
        transition: `opacity ${duration}ms ease-out`
      }}
    >
      {children}
    </div>
  );
};
