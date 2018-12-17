import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/lb-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} title="Luise Bosquê" style={{
                    maxWidth: '300px',
                    margin: '0 auto',
                }}/>
            </h1>
            <h2 className="subtitle has-text-centered">Estilista, personal stylist, blogueira e criativa.</h2>
          </div>
        </div>
      </section>
    )}
  />
)
export default Hero
