import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.65,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: y, x: x });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: once,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: duration,
          delay: delay,
          ease: 'power2.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, y, x, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
