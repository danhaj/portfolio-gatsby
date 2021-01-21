import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createGlobalStyle } from 'styled-components';
import "fontsource-raleway";
import "fontsource-montserrat";
import "fontsource-montserrat/700.css";
import { colors } from '../utils/colors';

import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about";
import Navigation from "../components/navigation";
import Projects from "../components/projects";
import Footer from "../components/footer";

 
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

const IndexPage = ({ data }) => {
  const { content, image, projects } = data;

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
      <Hero content={content.hero} />
      <About content={content.about} image={image.childImageSharp.fluid} />
      <Projects projects={projects.pinnedItems.nodes} />
      <Footer content={content.contact} />
    </>
  );
}

export default IndexPage;

export const data = graphql`
  query {
    content: markdownRemark(frontmatter: {}) {
      hero: frontmatter {
        greetings,
        title,
        subtitle,
        buttonText,
      },
      about: frontmatter {
        about1,
        about2,
      },
      contact: frontmatter {
        mail1,
        mail2,
      },
    },
    image: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    projects: githubViewer {
      pinnedItems {
        nodes {
          name
          description
          url
        }
      }
    },
  }
`;
