import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html

  return (
    <Container>
      <div>
        <h1>{title}</h1>
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
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
