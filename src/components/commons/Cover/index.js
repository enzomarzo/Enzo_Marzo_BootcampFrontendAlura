import React from 'react';
import styled from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  display: block;
  font-weight: 400;
  margin: 0px auto;
  text-align: center;
  ${breakpointsMedia({
    xs: 'font-size: 64px; line-height: 77px ',
    md: 'font-size: 90px; line-height: 108px',
  })}

`;

const MainSubtitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 48px;
  line-height: 57.6px;
  margin: 0px auto;
  text-align: center;
`;

const author = 'Enzo Marzo';

export default function Cover() {
  return (
    <>
      <Container>
        <MainTitle>{author.toUpperCase()}</MainTitle>
        <MainSubtitle>Portfolio</MainSubtitle>
      </Container>
    </>
  );
}
