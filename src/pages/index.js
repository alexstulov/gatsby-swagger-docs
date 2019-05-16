import React from "react"
import { Link } from "gatsby"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import document from "./openapi-owencloud.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `swagger`, `react`, `api`, `documentation`]} />
    <SwaggerUI spec={document} />
  </Layout>
)

export default IndexPage
