"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  expiryDate: string; // ISO date string
  className?: string;
}

export default function CountdownTimer({ expiryDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0, expired: false });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(expiryDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0, expired: true });
        return;
      }
      const days  = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins  = Math.floor((diff % 3600000)  / 60000);
      const secs  = Math.floor((diff % 60000)    / 1000);
      setTimeLeft({ days, hours, mins, secs, expired: false });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [expiryDate]);

  if (timeLeft.expired) return null;

  return (
    <div className={`flex items-center gap-2 font-dm text-xs text-venus-ink/70 ${className}`}>
      <span className="text-[#e05252] font-medium">Ends in:</span>
      {timeLeft.days > 0 && <Seg val={timeLeft.days} label="d" />}
      <Seg val={timeLeft.hours} label="h" />
      <Seg val={timeLeft.mins}  label="m" />
      <Seg val={timeLeft.secs}  label="s" />
    </div>
  );
}

function Seg({ val, label }: { val: number; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span className="font-medium text-venus-ink tabular-nums">{String(val).padStart(2, "0")}</span>
      <span className="opacity-60">{label}</span>
    </span>
  );
}
