import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../utils/colors';

gsap.registerPlugin(ScrollTrigger);

export const navigationInitialAnimation = navigation => {
    gsap.from(navigation.current.children, 
        {x: -15, opacity: 0, stagger: 0.2, duration: 0.4, delay: 1.5}
    );
}

export const navigationScrollAnimation = menuItems => {
    menuItems.forEach(item => {
        ScrollTrigger.create({
          trigger: `#${item}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(`.${item}`, {
              backgroundColor: colors.accent,
            })
          },
          onLeave: () => {
            gsap.to(`.${item}`, {
              backgroundColor: colors.darkAccent,
            })
          },
          onEnterBack: () => {
            gsap.to(`.${item}`, {
              backgroundColor: colors.accent,
            })
          },
          onLeaveBack: () => {
            gsap.to(`.${item}`, {
              backgroundColor: colors.darkAccent,
            })
          },
        });
      })
}

export const heroInitialAnimation = (greetings, title, subtitle, button, image) => {
    gsap.from(image.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.6}, 
    );

    gsap.from(greetings.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.7}, 
    );

    gsap.from(title.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.8}, 
    );

    gsap.from(subtitle.current, 
        {y: -30, opacity: 0, duration: 0.7, delay: 0.9}, 
    );

    gsap.from(button.current, 
        {opacity: 0, duration: 0.7, delay: 1.6}, 
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
}

export const aboutScrollAnimation = (title, paragraph1, paragraph2, image) => {
    gsap.from("#about img", {
        scrollTrigger: {
            trigger: image.current,
            scrub: true,
            start: "top bottom",
            end: "-50% top",
        },
        scale: 1.2,
    });

    gsap.from(title.current, {
        scrollTrigger: {
            trigger: title.current,
            scrub: 1,
            start: "top 90%",
            end: "top 70%"
        },
        color: colors.dark,
        y: 30,
    });

    gsap.from(paragraph1.current, {
        scrollTrigger: {
            trigger: paragraph1.current,
            scrub: 1,
            start: "top 90%",
            end: "top 70%"
        },
        color: colors.dark,
        y: 30,
    });

    gsap.from(paragraph2.current, {
        scrollTrigger: {
            trigger: paragraph2.current,
            scrub: 1,
            start: "top 90%",
            end: "top 70%"
        },
        color: colors.dark,
        y: 30,
    });

    gsap.to("#about", {
        scrollTrigger: {
            trigger: "#about",
            scrub: true,
            start: "80% center",
        },
        color: colors.dark,
        opacity: 0,
    });
}

export const projectsScrollAnimation = (title, projectsContainer) => {
    gsap.from(title.current, {
        scrollTrigger: {
            trigger: title.current,
            scrub: 1,
            start: "top 90%",
            end: "top 70%"
        },
        color: colors.dark,
        y: 30,
    });

    gsap.from(projectsContainer.current.children, {
        scrollTrigger: {
            trigger: projectsContainer.current,
            scrub: 2,
            start: "top 90%",
            end: "top 70%"
        },
        stagger: 0.5,
        y: 30,
        opacity: 0
    });
}