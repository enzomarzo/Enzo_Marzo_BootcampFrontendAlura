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
    lg: css`padding: 15px 40px;`,
    md: css`padding: 15px 35px;`,
    sm: css`padding: 65px 30px;`,
    xs: css`padding: 65px 25px;`,
  })}
  `;

  return (
    <>
      <Header />
      <Container>
        <Text as="h1" variant="subTitle">teste</Text>
      </Container>
    </>
  );
}
