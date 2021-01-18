import React, { useEffect } from "react"
import { createGlobalStyle } from 'styled-components';
import "fontsource-raleway";
import "fontsource-montserrat";
import "fontsource-montserrat/700.css";
import { colors } from '../utils/colors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about";
import Navigation from "../components/navigation";
import Projects from "../components/projects";

 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.dark};
    color: ${colors.primary};
    font-family: 'Raleway';
  }
`;

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  const menuItems = [
    'hero',
    'about',
    'projects',
  ]

  useEffect(() => {
    menuItems.forEach(item => {
      ScrollTrigger.create({
        trigger: `#${item}`,
        start: 'top-=1px top+=1px',
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
  })

  return (
    <>
      <SEO title="Index" />
      <GlobalStyle />
      <Navigation items={menuItems} />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
export default IndexPage
