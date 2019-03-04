import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import StyledBackgroundSection from "../components/styledBackground"
import "katex/dist/katex.min.css"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html

  return (
    <div>
      <StyledBackgroundSection />
      <Container>
        <div className="blog">
          <h1>{title}</h1>
          <em>{date}</em>
          <br />
          <br />
          <div
            className="blogpost"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </div>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
