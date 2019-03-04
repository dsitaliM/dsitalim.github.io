import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => (
  <Container>
    <div>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Integralis" />
      <p>
        GraphQL is an open-source data query and manipulation language for APIs,
        and a runtime for fulfilling queries with existing data. GraphQL was
        developed internally.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Container>
)
