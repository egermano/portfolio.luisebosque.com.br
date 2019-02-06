import React from 'react'
import { graphql } from 'gatsby'
import LogoNav from '../components/logoNav'
import Layout from '../layouts/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export default function Project({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allFile } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const pictures = allFile.edges.map(i => i.node)

  return (
    <Layout>
      <SEO
        title={`Projeto ${frontmatter.title}`}
        keywords={[
          'Luise Bosquê',
          'Estilista',
          'Personal Stylist',
          'Vestidos Especiais',
          'Vestido para festa',
          frontmatter.title,
        ]}
      />
      <div className="project-page">
        <LogoNav />
        <div className="project-container">
          <div className="project-content">
            <h1 className="title">{frontmatter.title}</h1>
            <div
              className="project-content-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="project-content-content">
              <hr />
              <p>
                Entre em contato pelo email:{' '}
                <a
                  href="mailto:contato@luisebosque.com.br"
                  title="contato@luisebosque.com.br"
                >
                  contato@luisebosque.com.br
                </a>
              </p>
            </div>
          </div>

          <div className="project-pictures">
            {pictures.map((pic, i) => (
              <Img
                key={`project-picture-${i}`}
                className="project-picture"
                fluid={pic.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $folder: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover
      }
    }
    allFile(filter: { relativePath: { regex: $folder } }) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
