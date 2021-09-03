import React from 'react';
import styled, { css } from 'styled-components';
import { Title, Subtitle } from '../../../theme/typographyVariants';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const CoverWrapper = styled.div`
  position: absolute;
  left: 120px;
  top: 220px;
  ${breakpointsMedia({
    xs: css`
      left: 30px;
    `,
    sm: css`
      left: 60px;
      width: 75%;
    `,
    md: css`
      left: 120px;
      width: 50%;
    `,
  })}
`;

const MainTitle = styled(Title)`
  display: block;
  margin: 0px auto;
  text-align: left;
  color: white;
  margin-bottom: 10px
`;

const MainSubtitle = styled(Subtitle)`
  display: block;
  margin: 0 0 0 5px;
  text-align: left;
  letter-spacing: 0.4px;
  color: white;
`;

const Button = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  background-color: transparent;
  overflow: visible;
  font-weight: 400px;
  color: #e6e4ec;
  letter-spacing: 2px;
  border: 1px solid rgba(238, 232, 255, 0.57);
  padding: 10px;
  border-radius: 2px;
  margin: 30px 0px 0px 7px ;
`;

export default function Cover() {
  return (
    <Container>
      <CoverWrapper>
        <MainTitle>Olá, sou o Enzo</MainTitle>
        <MainSubtitle>
          desenvolvedor front-end, apaixonado por inovação e movido por desafios
        </MainSubtitle>
        <Button href="#projetos">
          Saiba mais
        </Button>
      </CoverWrapper>
    </Container>
  );
}
