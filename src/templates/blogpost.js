import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import StyledBackgroundSection from "../components/styledBackground"
import "katex/dist/katex.min.css"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  // const excerpt = data.markdownRemark.frontmatter.excerpt
  const html = data.markdownRemark.html

  return (
    <div>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
        async
      />
      <StyledBackgroundSection />
      <Container>
        <div className="blog">
          <h1>{title}</h1>
          <em>{date}</em>
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`

export default Template
