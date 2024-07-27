import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const useAutoplay = (delay = 2000, stopOnInteraction = true) => {
    const autoplay = useRef(
        Autoplay({ delay, stopOnInteraction })
    );

    return autoplay;
};

export default useAutoplay;
