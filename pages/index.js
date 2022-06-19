import React from 'react';
import { gql } from '@apollo/client';
import { arrayOf, shape, string } from 'prop-types';

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
          smallImage {
            alt
            url
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
          últimos Projetos
        </Text>
        <ProjectWrapper id="projetos">
          <CardsRowWrapper>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.name}
                imageDesktop={project.smallImage.url}
              />
            ))}
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

Home.propTypes = {
  projects: arrayOf(
    shape({
      id: string,
      name: string,
      smallImage: shape({
        alt: string,
        url: string,
      }),
    }),
  ),
};
