import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { chunk } from 'lodash'
import Img from 'gatsby-image'
import ProjectCover from '../components/projectCover'

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                path
                date
                cover
              }
            }
          }
        }
      }
    `}
    render={data => {
      const projects = data.allMarkdownRemark.edges.map(i => i.node)
      let slot = 0
      let chuckedProjects = []

      projects.forEach(c => {
        slot = slot >= 3 ? 0 : slot
        if (chuckedProjects[slot]) {
          chuckedProjects[slot].push(c)
        } else {
          chuckedProjects[slot] = [c]
        }
        slot++
      })

      return (
        <section className="section projects is-clearfix">
          {projects.map((project, i) => (
            <a
              key={`project-${i}`}
              className={`project ${i % 3 == 0 || i === 0 ? 'is-6' : 'is-3'}`}
              href={project.frontmatter.path}
            >
              <ProjectCover path={project.frontmatter.cover} />
              <p className="title has-text-centered">
                {project.frontmatter.title}
              </p>
            </a>
          ))}
        </section>
      )
    }}
  />
)
export default Portfolio
