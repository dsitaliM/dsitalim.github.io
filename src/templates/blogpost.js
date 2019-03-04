import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

import "katex/dist/katex.min.css"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html

  return (
    <Container>
      <div className="blog">
        <h1>{title}</h1>
        <em>{date}</em>
        <br />
        <br />
        <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Container>
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
