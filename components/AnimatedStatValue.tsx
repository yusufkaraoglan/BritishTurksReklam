"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  durationMs?: number;
};

function formatValue(value: number, decimals: number, suffix: string) {
  return `${value.toLocaleString("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}${suffix}`;
}

export function AnimatedStatValue({
  value,
  suffix = "",
  decimals = 0,
  className = "",
  durationMs = 1300
}: AnimatedStatValueProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const animate = () => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(value * easedProgress);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [decimals, durationMs, value]);

  return (
    <span ref={elementRef} className={className}>
      {formatValue(displayValue, decimals, suffix)}
    </span>
  );
}
