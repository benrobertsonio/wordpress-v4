import React from "react"
import { Box, Container, Text } from "theme-ui"
import Header from "./header"
import Menu from "./menu"
import { Link } from 'gatsby'

import "../assets/style.css"

const Layout = ({ children }) => (

  <Container>
    <Box mb={10} mt={20}>
      <Header />
    </Box>
    <Menu />

    <Box mb={100}>{children}</Box>
    <footer>
      <Text mb={40}>
        © {new Date().getFullYear()}, Built with
          {` `}
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>

      </Text>
    </footer>
  </Container>


)

export default Layout
