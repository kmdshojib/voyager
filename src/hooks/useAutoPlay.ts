import { useRef, useCallback } from 'react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';

interface AutoplayOptions {
  delay?: number;
  stopOnInteraction?: boolean;
  stopOnMouseEnter?: boolean;
  playOnInit?: boolean;
}

const useAutoplay = (delay = 2000, stopOnInteraction = true, options: Partial<AutoplayOptions> = {}) => {
  const autoplayRef = useRef<AutoplayType | null>(null);

  const createAutoplayPlugin = useCallback(() => {
    const plugin = Autoplay({
      delay,
      stopOnInteraction,
      ...options,
      rootNode: (emblaRoot) => emblaRoot.parentElement as HTMLElement
    });
    autoplayRef.current = plugin;
    return plugin;
  }, [delay, stopOnInteraction, options]);

  return {
    current: createAutoplayPlugin(),
    ref: autoplayRef,
    createAutoplayPlugin,
  };
};

export default useAutoplay;