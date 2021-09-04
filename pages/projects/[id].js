import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Header from '../../src/components/commons/Header';
import Text from '../../src/components/foundation/Text';
import breakpointsMedia from '../../src/theme/utils/breakpointsMedia';

export default function Projects() {
  const router = useRouter(); // pegando a rota
  const path = router.asPath.split('/'); // obtendo rota completa e colocando em um array
  const projectPath = path[path.length - 1];
  const projectName = projectPath.split('%20').join(' ');
  const projects = [
    {
      name: 'Let me Ask',
      img: '/images/let-me-ask-1000x560.jpg',
    },
    {
      name: 'Corporating',
      img: '/images/Corporating-1000x560.jpg',
    },
    {
      name: 'Instalura',
      img: '/images/instalura-1000x560.jpg',
    },
    {
      name: 'Skinkey',
      img: '/images/skinkey-1000x560.jpg',
    },
  ];

  const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  ${breakpointsMedia({
    lg: css`padding: 15px 65px;`,
    md: css`padding: 15px 50px;`,
    sm: css`padding: 65px 35px;`,
    xs: css`padding: 65px 25px;`,
  })}
  `;

  const Img = styled.img`
    width: 100%;
    max-width: 900px;
    margin: 10px auto;
    padding: 0px 10px;
    display: block;
  `;

  return (
    <>
      <Header />
      <Container>
        <Text as="h1" text-align="center" variant="subTitle">{projectName}</Text>
        {projects.map((project) => {
          let projectImg = '';
          if (projectName === project.name) {
            projectImg = project.img;
          }
          return <Img src={projectImg} />;
        })}
        <button>Visite o site</button>
        <Text as="h2" variant="subTitle">Sobre</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </Container>
    </>
  );
}
