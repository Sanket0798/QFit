import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for common GSAP animations
 * Reduces code duplication across components
 */

// Note: This hook is for advanced use cases. For most components, use the simpler hooks below.
export const useScrollAnimation = (trigger, animations) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    if (!trigger || !animations) return;

    const ctx = gsap.context(() => {
      animations.forEach(({ targets, ...animationProps }) => {
        const elements = Array.isArray(targets) ? targets : [targets];
        const validElements = elements.filter(el => el !== null && el !== undefined);
        
        if (validElements.length > 0) {
          gsap.from(validElements, animationProps);
        }
      });
    }, trigger);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return elementsRef;
};

export const useFadeInUp = (ref, options = {}) => {
  const {
    delay = 0,
    duration = 0.8,
    y = 30,
    scrollTrigger = true,
    start = 'top 85%'
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const animation = {
      opacity: 0,
      y,
      duration,
      delay,
      ease: 'power3.out',
    };

    if (scrollTrigger) {
      animation.scrollTrigger = {
        trigger: ref.current,
        start,
      };
    }

    gsap.from(ref.current, animation);
  }, [ref, delay, duration, y, scrollTrigger, start]);
};

export const useStaggerAnimation = (refs, options = {}) => {
  const {
    delay = 0,
    duration = 0.7,
    stagger = 0.15,
    y = 30,
    scrollTrigger = true,
    start = 'top 80%'
  } = options;

  useEffect(() => {
    const validRefs = refs.current.filter(ref => ref !== null);
    if (validRefs.length === 0) return;

    const animation = {
      opacity: 0,
      y,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    };

    if (scrollTrigger) {
      animation.scrollTrigger = {
        trigger: validRefs[0],
        start,
      };
    }

    gsap.from(validRefs, animation);
  }, [refs, delay, duration, stagger, y, scrollTrigger, start]);
};

export const useScaleAnimation = (ref, options = {}) => {
  const {
    delay = 0,
    duration = 0.6,
    scale = 0.9,
    scrollTrigger = true,
    start = 'top 85%'
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const animation = {
      opacity: 0,
      scale,
      duration,
      delay,
      ease: 'back.out(1.5)',
    };

    if (scrollTrigger) {
      animation.scrollTrigger = {
        trigger: ref.current,
        start,
      };
    }

    gsap.from(ref.current, animation);
  }, [ref, delay, duration, scale, scrollTrigger, start]);
};
