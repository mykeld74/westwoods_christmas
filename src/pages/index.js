import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TextContainer = Styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 980px;
  margin: 0 auto 0;
  background: rgba(255, 255, 255, .6);
  padding: 20px;
  border-radius: 20px;
  .center{
    text-align: center;
  }
  a{
    color: inherit;
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover{
      color: #ed2227;
    }
  }
  .tagline{
    font-family: 'Caveat', cursive;
    text-align: center;
    font-size: calc(16px + 5vw);
    text-shadow: 3px 3px 6px #676767;
    
  }
  @media (max-width: 468px){
    text-align: center;
    border-radius: 0;
  }
`

const StyledImage = Styled(Image)`
  width: calc(100% - 40px);
  max-width: 300px;
  margin: 0 auto 30px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Christmas Eve" />
    <TextContainer className="mainContent">
      <a
        href="https://westwoodscc.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="center">Westwoods Community Church</h1>
        <StyledImage fluid={data.logo.fluid} />
      </a>
      <h1>Join us for our Christmas Eve Services</h1>
      <h2>
        Tuesday, December 24<sup>th</sup> @ 4 and 5:30pm
      </h2>
      <h2>
        <a
          href="https://westwoodscc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about Westoods Here &raquo;
        </a>
      </h2>
      <h3 className="tagline">You Belong Here!</h3>
    </TextContainer>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    logo: imageSharp(fluid: { originalName: { eq: "ww-logo.png" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
export default IndexPage
