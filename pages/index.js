import React from 'react';
import { gql } from '@apollo/client';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import Card from '../src/components/commons/Projects/Cards/CardRow';
import Cover from '../src/components/commons/Cover';
import {
  CardsRowWrapper,
  ProjectWrapper,
} from '../src/components/commons/Projects';
import Form from '../src/components/commons/Form';
import Text from '../src/components/foundation/Text';
import Container, { ContainerCover } from '../src/components/shared/container';
import ParticleLib from '../src/assets/lib/Particle';
import { client } from './_app';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getProjects {
        allProjects {
          id
          name
          img {
            url
            title
          }
          stack {
            langName
          }
        }
      }
    `,
  });
  return {
    props: {
      projects: data.allProjects,
    },
  };
}

export default function Home({ projects }) {
  return (
    <>
      <Header />
      <ContainerCover>
        <ParticleLib />
        <Cover />
      </ContainerCover>
      <Container background-color="white">
        <Text as="h1" variant="title" color="primary">
          {console.log(projects)}
          últimos Projetos
        </Text>
        <ProjectWrapper id="projetos">
          <CardsRowWrapper>
            <div>
              <Card
                imageDesktop="/images/instalura-500x230.jpg"
                title="Instalura"
              />
              <Card
                imageDesktop="/images/let-me-ask-500x230.jpg"
                title="Let me Ask"
              />
            </div>
            <div>
              <Card
                imageDesktop="/images/Corporating-500x230.jpg"
                title="Corporating"
              />
              <Card
                imageDesktop="/images/skinkey-500x230.jpg"
                title="Skinkey"
              />
            </div>
          </CardsRowWrapper>
        </ProjectWrapper>
      </Container>
      <Container>
        <Text as="h1" variant="title" color="light">
          vamos conversar?
        </Text>
        <div id="contato">
          <Form />
        </div>
      </Container>
      <Footer />
    </>
  );
}
