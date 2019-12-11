import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TextContainer = Styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  margin: 150px auto 0;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
  
  .center{
    text-align: center;
  }
  .subhead{
    color: #fff;
    line-height: 1.4;
  }
  .gold{
    background: -webkit-linear-gradient(#BF9356, #FADEA4, #BF9356);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #444;
  }
  a{
    color: #fff;
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover{
      color: #ed2227;
    }
  }
`

const Ornament = Styled(Image)`
  position: absolute !important;
  width: 100px;
  top: 0;
  left: calc(50% - 50px);
`

const ChristmasLogo = Styled(Image)`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: 20px auto 30px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Christmas Eve" />
    <Ornament fluid={data.ornament.fluid} />
    <TextContainer className="mainContent">
      <h1 className="center gold">Dec 24th | Services at 4 and 5:30pm</h1>
      <h2 className="center subhead">
        A casual and meaningful community celebration of Christmas.
      </h2>
      <a
        href="https://westwoodscc.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChristmasLogo fluid={data.christmasLogo.fluid} />

        <h2>Westwoods Community Church</h2>
        <h3>7700 W Woodard Drive | Lakewood, CO</h3>
      </a>
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
    ornament: imageSharp(fluid: { originalName: { eq: "ornament.png" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    christmasLogo: imageSharp(
      fluid: { originalName: { eq: "christmasLogo.png" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default IndexPage
