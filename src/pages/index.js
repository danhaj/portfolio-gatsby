import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "fontsource-raleway";
import "fontsource-montserrat";
import "fontsource-montserrat/700.css";
import { navigationScrollAnimation } from "../utils/animations";
import { GlobalStyle } from "../utils/global-styles";

import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about";
import Navigation from "../components/navigation";
import Projects from "../components/projects";
import Footer from "../components/footer";

const IndexPage = ({ data }) => {
  const { content, aboutImage, projects } = data;

  const navItems = [
    'hero',
    'about',
    'projects',
  ]

  useEffect(() => {
    navigationScrollAnimation(navItems);
  });

  return (
    <>
      <SEO title="Portfolio" />
      <GlobalStyle />
      <Navigation items={navItems} />
      <Hero content={content.hero} />
      <About content={content.about} imageFluid={aboutImage.childImageSharp.fluid} />
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
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
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
