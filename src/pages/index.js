import React from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import document from "./openapi-owencloud.json"

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} keywords={[`gatsby`, `swagger`, `react`, `api`, `documentation`]} />
    <SwaggerUI spec={document} />
  </Layout>
)

export default injectIntl(IndexPage)
