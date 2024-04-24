import { useState, useEffect } from "react";

export const useAnimatedCounter = (
  target: string,
  duration = 3000,
  isBillion = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = parseInt(target.replace(/\D/g, ""), 10);
    if (isBillion) end = 1;

    if (start === end || isNaN(end)) return;

    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, isBillion]);

  return count;
};
