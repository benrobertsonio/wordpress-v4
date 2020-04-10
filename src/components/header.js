import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"

export default () => (
  <Heading as="h1">
    <Link to="/">
      <span
        style={{
          transform: `translateY(5px)`,
          display: `inline-block`,
        }}
      >
        Ruth A. Robertson
        </span>
    </Link>
  </Heading>
)
