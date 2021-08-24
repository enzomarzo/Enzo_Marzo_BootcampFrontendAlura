import React from 'react';
import Header from '../src/components/commons/Header';
import Card from '../src/components/commons/Projects/Cards/CardRow';
import CardFeatured from '../src/components/commons/Projects/Cards/CardFeatured';
import Cover from '../src/components/commons/Cover';
import { CardsRowWrapper, ProjectWrapper } from '../src/components/commons/Projects';
import SectionTitle from '../src/components/shared/SectionTitle';
import Footer from '../src/components/commons/Footer';
import Form from '../src/components/commons/Form';

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <SectionTitle name="últimos projetos" />
      <ProjectWrapper>
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
      <SectionTitle name="Vamos Conversar ?" />
      <Form />
      <Footer />
    </>
  );
}
