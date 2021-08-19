import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/commons/Header';
import Card from '../src/components/commons/Cards/CardRow';
import CardFeatured from '../src/components/commons/Cards/CardFeatured';
import Cover from '../src/components/commons/Cover';
import { CardsRowWrapper, ProjectWrapper } from '../src/components/commons/ProjectsWrapper';
import SectionTitle from '../src/components/commons/SectionTitle';
import Footer from '../src/components/commons/Footer';

const BackgroundColor = styled.div`
  background-color: white;
`;

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundColor>
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
        <Footer />
      </BackgroundColor>
    </>
  );
}
