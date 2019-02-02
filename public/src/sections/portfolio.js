import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
      let projects = data.allMarkdownRemark.edges.map(i => i.node)
      let orientation = 'left'

      projects = projects.map((project, i) => {
        if (i > 0 && i % 3 === 0) {
          orientation = orientation === 'left' ? 'right' : 'left';
        }
        project.orientation = orientation;
        return project;
      }); 

      return <section className="section projects is-clearfix">
          {projects.map((project, i) => (
            <a
              key={`project-${i}`}
              className={`project ${
                i % 3 === 0 || i === 0 ? 'is-6' : 'is-3'
              }`}
              href={project.frontmatter.path}
              style={{
                float: project.orientation,
              }}
            >
              <ProjectCover path={project.frontmatter.cover} />
              <p className="title has-text-centered">
                {project.frontmatter.title}
              </p>
            </a>
          ))}
        <a key="project-sobre" 
             className={`project ${projects.length % 3 === 0 ? 'is-6' : 'is-3'}`} 
             href="/sobre">
            <ProjectCover path="images/projects/sobre/perfil.jpg" />
            <p className="title has-text-centered">
              Sobre
            </p>
          </a>
        </section>
    }}
  />
)
export default Portfolio
