import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container"
import StyledBackgroundSection from "../components/styledBackground"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    // <Header text="rethlogl"></Header>
    <div>
      {/* <Header text="rethlogl" /> */}
      <StyledBackgroundSection className="headerImage" />
      <Container>
        <div>
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path}>
                  <h2>{frontmatter.title}</h2>
                </Link>
                &nbsp;
                <small>
                  <em>Published on {frontmatter.date}</em>
                </small>
                <br />
                <p>{frontmatter.excerpt}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
