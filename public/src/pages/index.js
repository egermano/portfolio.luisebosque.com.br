import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Hero from '../sections/indexHero'
import Portfolio from '../sections/portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <Portfolio />
  </Layout>
)

export default IndexPage
