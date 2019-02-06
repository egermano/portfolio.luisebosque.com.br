import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import Hero from '../sections/aboutHero'
import Image from '../components/aboutImage'

const SecondPage = () => (
  <Layout>
    <SEO title="Sobre Luise Bosquê" />
    <Hero />
    <div className="container about-page">
      <Image />

      <div className="columns is-centered">
        <div className="column is-10">
          <p>
            Luise Bosquê é uma estilista, personal stylist e criadora
            apaixonada.
          </p>
          <p>
            Com 7 anos, ao observar sua mãe fazer enormes e lindas toalhas e
            cortinas de crochê, começou a criar roupas e pedir que sua mãe as
            fizesse.Aprendeu e, aos 8 anos, começou a fazer peças de bijuteria
            em crochê, e, mais tarde, suas próprias peças de roupa.
          </p>
          <p>
            Morando por muitos anos no litoral paulista, e com férias de verão
            na cidade de Paraty no Rio de Janeiro, as belas paisagens litorâneas
            e a natureza sempre foram sua inspiração.
          </p>
          <p>
            Após muitos anos de estudo, trabalho e passagens por profissões
            diversas, a paixão pela moda falou mais alto, continuou e se
            desenvolveu, e suas pesquisas na área foram desenvolvidas e
            lapidadas.
          </p>
          <p>
            Nas suas criações, ficam evidentes os conhecimentos em estilo e
            consultoria, as habilidades manuais combinando o moderno e o
            artesanal, e a valorização e encanto pelas matérias primas naturais.
          </p>
          <p>
            Hoje, além de prestar serviços de consultoria, e de seu trabalho com
            desenvolvimento de roupas casuais, se dedica à criação e
            desenvolvimento artesanal de vestidos de festa e à produção de seu
            e-commerce.
          </p>
          <p>
            Entre em contato comigo:{' '}
            <a
              href="mailto:contato@luisebosque.com.br"
              title="Entre em contato pelo email: contato@luisebosque.com.br"
            >
              contato@luisebosque.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
