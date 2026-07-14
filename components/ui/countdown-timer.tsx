"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  endTime: string;
  className?: string;
  light?: boolean;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function calculateTimeLeft(endTime: string) {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({ endTime, className, light }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft(endTime)), 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {[
          { label: "Hrs", value: timeLeft.hours },
          { label: "Min", value: timeLeft.minutes },
          { label: "Sec", value: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold",
                light ? "bg-secondary text-white" : "bg-primary text-white"
              )}
            >
              {pad(unit.value)}
            </span>
            <span
              className={cn(
                "mt-1 text-[10px] uppercase tracking-wider",
                light ? "text-white/70" : "text-muted-foreground"
              )}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
