import React from "react"

import { Link } from "gatsby"
import urlToPath from "gatsby-source-wordpress-experimental/utils/url-to-path"
import { Box, Heading } from "theme-ui"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../seo"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, excerpt } = page

  return (
    <Layout>
      <SEO title={title} desc={excerpt} />
      <Heading as="h1" size="xl" mb={4} mt={5}>
        {title}
      </Heading>

      {!!featuredImage &&
        featuredImage.remoteFile &&
        featuredImage.remoteFile.childImageSharp && (
          <Box mb={5}>
            <Img fluid={featuredImage.remoteFile.childImageSharp.fluid} />
          </Box>
        )}

      <article dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {!!nextPage && (
        <Link to={urlToPath(nextPage.link)}>Next: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={urlToPath(previousPage.link)}>
          Previous: {previousPage.title}
        </Link>
      )}
    </Layout>
  )
}

export default BlogPost
