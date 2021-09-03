import React from 'react';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import Card from '../src/components/commons/Projects/Cards/CardRow';
import CardFeatured from '../src/components/commons/Projects/Cards/CardFeatured';
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
          <Card
            imageDesktop="/images/letMeAskVer.png"
            imageMobile="/images/letMeAskHor.jpg"
            title="Let me Ask"
          />
          <Card
            imageDesktop="/images/alurakut-vert.jpg"
            imageMobile="/images/aluraKutHor.jpg"
            title="Alura Kut"
          />
          <Card />
        </CardsRowWrapper>
        <CardFeatured
          imageDesktop="images/instaluraDesktop.jpg"
          imageMobile="images/instaluraMobile.jpg"
          alt="Instalura"
        />
      </ProjectWrapper>
      <Text as="h1" variant="title" color="primary">vamos conversar?</Text>
      <div id="contato">
        <Form />
      </div>
      <Footer />
    </>
  );
}
