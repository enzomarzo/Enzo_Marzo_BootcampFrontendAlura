import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../../src/components/commons/Header';
import Text from '../../src/components/foundation/Text';
import breakpointsMedia from '../../src/theme/utils/breakpointsMedia';

export default function Projects() {
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
    max-width: 1000px;
    margin: 10px auto;
    padding: 0px 10px;
    display: block;
  `;

  return (
    <>
      <Header />
      <Container>
        <Text as="h1" text-align="center" variant="subTitle">Teste Título (marcação)</Text>
        <Img src="https://via.placeholder.com/1000x600" />
        <button>Visite o site</button>
        <Text as="h2" variant="subTitle">Sobre</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </Container>
    </>
  );
}
