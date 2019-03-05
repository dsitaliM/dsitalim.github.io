import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container"
import StyledBackgroundSection from "../components/styledBackground"
import { Node, Context } from "react-mathjax2"

import "katex/dist/katex.min.css"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  //const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
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
                <div style={divStyle}>
                  <p style={parStyleL}>{frontmatter.excerpt.split("#")[0]}</p>{" "}
                  <Context>
                    <Node inline>{frontmatter.excerpt.split("#")[1]}</Node>
                  </Context>
                  <br />
                  <p style={parStyleR}>{frontmatter.excerpt.split("#")[2]}</p>
                </div>
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
var divStyle = {
  display: "flex",
}

var parStyleL = {
  marginRight: "5px",
}
var parStyleR = {
  marginRight: "5px",
  marginLeft: "5px",
}

export default IndexPage
