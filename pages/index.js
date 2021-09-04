import React from 'react';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import Card from '../src/components/commons/Projects/Cards/CardRow';
import Cover from '../src/components/commons/Cover';
import { CardsRowWrapper, ProjectWrapper } from '../src/components/commons/Projects';
import Form from '../src/components/commons/Form';
import Text from '../src/components/foundation/Text';

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Text as="h1" variant="title" color="primary"> últimos Projetos</Text>
      <ProjectWrapper id="projetos">
        <CardsRowWrapper>
          <div>
            <Card
              imageDesktop="/images/let-me-ask-500x230.jpg"
              title="Let me Ask"
            />
            <Card
              imageDesktop="/images/Corporating-500x230.jpg"
              title="Corporating"
            />
          </div>
          <div>
            <Card
              imageDesktop="/images/instalura-500x230.jpg"
              title="Instalura"
            />
            <Card
              imageDesktop="/images/skinkey-500x230.jpg"
              title="Skinkey"
            />
          </div>

        </CardsRowWrapper>
      </ProjectWrapper>
      <Text as="h1" variant="title" color="primary">vamos conversar?</Text>
      <div id="contato">
        <Form />
      </div>
      <Footer />
    </>
  );
}
