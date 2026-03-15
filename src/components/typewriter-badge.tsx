"use client";

import { useEffect, useState } from "react";

export default function TypewriterBadge({ text }: { text: string }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= text.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 60);
    return () => clearTimeout(timer);
  }, [visibleCount, text.length]);

  return (
    <span className="inline-flex items-center rounded-full border border-[#FFFFFF]/30 px-[20px] py-[8px] text-[14px] tracking-[0.06em] text-[#FFFFFF] sm:text-[15px]">
      <span aria-label={text}>{text.slice(0, visibleCount)}</span>
    </span>
  );
}
