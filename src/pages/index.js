import React from 'react'
import Layout from '../layouts/layout'
import SEO from '../components/seo'
import Hero from '../sections/indexHero'
import Portfolio from '../sections/portfolio';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={[
        'Luise Bosquê',
        'Estilista',
        'Personal Stylist',
        'Vestidos Especiais',
        'Vestido para festa',
      ]}
    />
    <Hero />
    <Portfolio />
  </Layout>
)

export default IndexPage
