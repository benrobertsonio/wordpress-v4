import React from 'react'
import Layout from '../components/layout'
import { Box, Heading } from 'theme-ui'
import { graphql, Link } from "gatsby"
import urlToPath from "gatsby-source-wordpress-experimental/utils/url-to-path"

export default function Home({ data }) {
  return (
    <Layout>
      <Box mt="5">

        {data.allWpPost.nodes.map(({ title, excerpt, link }) => (
          <Box mb="4">
            <Heading><Link to={urlToPath(link)}>{title}</Link></Heading>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost(sort: {fields: date, order: DESC}) {
      nodes {
        title
        excerpt
        link
      }
    }
  }
`

