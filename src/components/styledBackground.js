import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import styledCustom from "./styledCustom.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={styledCustom.image}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Link to="/">
            <h1>Daniel's Blog</h1>{" "}
          </Link>

          <em>"Thinking about things..."</em>
          <div className="icons">
            <a href="https://github.com/dsitaliM" target="_blank">
              <FaGithub size={32} className={styledCustom.icon} />
            </a>
            <a href="https://twitter.com/craneglogy" target="_blank">
              <FaTwitter size={32} className={styledCustom.icon} />
            </a>
          </div>
          <br />
          <br />
          <br />
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
`

export default StyledBackgroundSection
