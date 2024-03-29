import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BGSection from "../components/backgroundImage"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      imageSharp(fluid: { originalName: { eq: "snow.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return <BGSection fluid={data.imageSharp.fluid}>{children}</BGSection>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
