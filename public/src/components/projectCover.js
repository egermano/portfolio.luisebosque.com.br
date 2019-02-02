import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ProjectCover = ({ path }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "images/projects/" } }) {
          edges {
            node {
              id
              relativePath
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const cover = data.allFile.edges.find(f => {
        return f.node.relativePath === path
      })

        return <Img fluid={cover.node.childImageSharp.fluid} className="cover" style={{minHeight: '100%'}} />
    }}
  />
)

ProjectCover.propTypes = {
  path: PropTypes.string,
}

ProjectCover.defaultProps = {
  path: '',
}

export default ProjectCover
