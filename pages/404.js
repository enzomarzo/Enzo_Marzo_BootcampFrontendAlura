import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../src/components/commons/Header';
import Text from '../src/components/foundation/Text';
import breakpointsMedia from '../src/theme/utils/breakpointsMedia';

export default function Page404() {
  const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  ${breakpointsMedia({
    lg: css`padding: 35px 150px;`,
    md: css`padding: 35px 100px;`,
    sm: css`padding: 95px 75px;`,
    xs: css`padding: 95px 40px;`,
  })}
`;
  return (
    <>
      <Header />
      <Container>
        <Text text-align="center" variant="subTitle">OOOps, alguma coisa deu errado!</Text>
        <Text text-align="center">
          Essa é uma página 404 e quer dizer que você clicou em uma URL
          inválida ou algum link que já não existe mais.
        </Text>
      </Container>
    </>
  );
}
