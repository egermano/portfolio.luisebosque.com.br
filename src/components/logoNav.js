import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoNav = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "images/lb-logo-white.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <a href="/" className="logo-nav" title="Luise Bosquê" alt="Luise Bosquê">
        <Img
          fadeIn={true}
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Luise Bosquê"
          className="logo-picture is-hidden-mobile"
          style={{
            maxWidth: '150px',
          }}
        />
        <span className="logo-text is-hidden-tablet">
          <i>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.92847 8.49916L8.44571 15.0164" stroke="black" stroke-width="2" stroke-linecap="square" />
              <path d="M1.92847 8.49888L8.44571 1.98164" stroke="black" stroke-width="2" stroke-linecap="square" />
            </svg>
          </i>
          Voltar para Portfolio
        </span>
      </a>
    )}
  />
)

export default LogoNav;
