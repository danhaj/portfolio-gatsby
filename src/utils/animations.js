import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../utils/colors';

gsap.registerPlugin(ScrollTrigger);

export const heroInitialAnimation = (greetings, title, subtitle, button, image) => {
    gsap.from(image.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.5}, 
    );
    gsap.from(greetings.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.6}, 
    );
    gsap.from(title.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.7}, 
    );
    gsap.from(subtitle.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.8}, 
    );
    gsap.from(button.current, 
        {opacity: 0, duration: 0.7, delay: 1.5}, 
    );
}

export const heroScrollAnimation = (image) => {
    gsap.to("#hero", {
        scrollTrigger: {
            trigger: "#hero",
            scrub: true,
            start: "60% center",
        },
        color: colors.dark,
        opacity: 0,
    });
    gsap.to(image.current, {
        scrollTrigger: {
            trigger: image.current,
            scrub: true,
            start: "120% center",
        },
        scale: 0.95,
    });
}