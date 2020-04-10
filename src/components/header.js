import React from "react"
/** @jsx jsx */
import { Heading, Box, Container, jsx } from "theme-ui"
import { Link } from "gatsby"

export default () => (
  <>
    <div sx={{
      position: "absolute",
      left: 0,
      right: 0,
    }}>
      <Box sx={{
        backgroundColor: 'hsl(204deg, 67%, 85%);',
        height: 300,
        mt: 0
      }} />
      <svg sx={{ marginTop: "-100px", width: "100%" }} preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" fill="#fff"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
    </div>
    <Container>
      <Heading as="h1" pt={5}>
        <Link to="/" sx={{
          "visited": {
            color: 'blue'
          }
        }}>
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
    </Container>
  </>
)
