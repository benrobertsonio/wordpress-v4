import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { getUrlPath } from "../utils/get-url-path"
import { Button, Grid, Box } from "theme-ui"

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <Box mb={10}>
      <Grid autoFlow="column">
        {wpMenu.menuItems.nodes.map((menuItem, i) => (
          <Link style={{ display: `block` }} to={getUrlPath(menuItem.url)}>
            <Button w="100%" key={i + menuItem.url} as={Button}>
              {menuItem.label}
            </Button>
          </Link>
        ))}
      </Grid>
    </Box>
  ) : null
}
