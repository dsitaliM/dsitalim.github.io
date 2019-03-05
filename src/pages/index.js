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
                  <p>{frontmatter.excerpt.split("#")[0]}</p>
                  <Context>
                    <Node inline>{frontmatter.excerpt.split("#")[1]}</Node>
                  </Context>
                  <p>{frontmatter.excerpt.split("#")[2]}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
  // console.log(edges)
  // edges.forEach(edge => {
  //   if (edge.node.frontmatter.excerpt.indexOf("#") > 0) {
  //     return (
  //       <div>
  //         <StyledBackgroundSection className="headerImage" />
  //         <Container>
  //           <div>
  //             {edges.map(edge => {
  //               const { frontmatter } = edge.node
  //               return (
  //                 <div key={frontmatter.path}>
  //                   <Link to={frontmatter.path}>
  //                     <h2>{frontmatter.title}</h2>
  //                   </Link>
  //                   &nbsp;
  //                   <small>
  //                     <em>Published on {frontmatter.date}</em>
  //                   </small>
  //                   <br />
  //                   <div style={divStyle}>
  //                     <p>{frontmatter.excerpt.split("#")[0]}</p>
  //                     <Context>
  //                       <Node inline>{frontmatter.excerpt.split("#")[1]}</Node>
  //                     </Context>
  //                     <p>{frontmatter.excerpt.split("#")[2]}</p>
  //                   </div>
  //                 </div>
  //               )
  //             })}
  //           </div>
  //         </Container>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <StyledBackgroundSection className="headerImage" />
  //         <Container>
  //           <div>
  //             {edges.map(edge => {
  //               const { frontmatter } = edge.node
  //               return (
  //                 <div key={frontmatter.path}>
  //                   <Link to={frontmatter.path}>
  //                     <h2>{frontmatter.title}</h2>
  //                   </Link>
  //                   &nbsp;
  //                   <small>
  //                     <em>Published on {frontmatter.date}</em>
  //                   </small>
  //                   <br />
  //                   {/* <div style={divStyle}>
  //                     <p>{frontmatter.excerpt.split("#")[0]}</p>
  //                     <Context>
  //                       <Node inline>{frontmatter.excerpt.split("#")[1]}</Node>
  //                     </Context>
  //                     <p>{frontmatter.excerpt.split("#")[2]}</p>
  //                   </div> */}
  //                 </div>
  //               )
  //             })}
  //           </div>
  //         </Container>
  //       </div>
  //     )
  //   }
  // })
  // return (
  //   <div>
  //     <StyledBackgroundSection className="headerImage" />
  //     <Container>
  //       <div>
  //         {edges.map(edge => {
  //           const { frontmatter } = edge.node
  //           return (
  //             <div key={frontmatter.path}>
  //               <Link to={frontmatter.path}>
  //                 <h2>{frontmatter.title}</h2>
  //               </Link>
  //               &nbsp;
  //               <small>
  //                 <em>Published on {frontmatter.date}</em>
  //               </small>
  //               <br />
  //               <div style={divStyle}>
  //                 <p>{frontmatter.excerpt.split("#")[0]}</p>
  //                 <Context>
  //                   <Node inline>{frontmatter.excerpt.split("#")[1]}</Node>
  //                 </Context>
  //                 <p>{frontmatter.excerpt.split("#")[2]}</p>
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     </Container>
  //   </div>
  // )
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

// var parStyle = {
//   paddingTop: "7px",
// }

export default IndexPage
