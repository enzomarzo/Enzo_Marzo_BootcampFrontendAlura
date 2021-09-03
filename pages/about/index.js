/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Header from '../../src/components/commons/Header';
import Footer from '../../src/components/commons/Footer';
import Text from '../../src/components/foundation/Text';
import breakpointsMedia from '../../src/theme/utils/breakpointsMedia';

export default function About() {
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

  const A = styled.a`
    color: inherit;
    text-decoration: underline;
  `;

  const Tag = styled.span`
    display: inline-block;
    padding: 8px 5px;
    background-color: #313131;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #222;
    border-radius: 3px;
    text-transform: uppercase;
    line-height: 1em;
    box-shadow: 1px 1px 0 rgb(0 0 0 / 25%);
    font-size: 0.8em;
    opacity: 1;
    position: relative;
    overflow: hidden;
  `;

  const TagTitle = styled(Tag)`
    width: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 3px 10px 3px 0;
    color: #FCFCFC;
  `;

  const TagBody = styled(Tag)`
    font-weight: 500;
    margin: 3px;
    color: #999;

    &:hover { 
      opacity: 0.7;
      background-color: #3b3b3b;
    }
  `;

  const linguagensNew = [
    { 2019: ['HTML', 'CSS', 'Javascript', 'Angular', 'Git', 'Lean StartUp'] },
    { 2020: ['Angular', 'Javascript', 'Typescript', 'Java', 'PHP', 'OOP', 'Scrum', 'Regex'] },
    { 2021: ['React', 'NextJS', 'Styled Components', 'Clean Code'] },
  ];

  return (
    <>
      <Header />
      <Container>
        <Text as="h1" variant="subTitle">Quem sou eu ?</Text>
        <Text>
          Gosto de filosofia, de xadrez, de cerveja e de conhecer e conversar com pessoas.
          Curto me desafiar e aprender coisas novas. Descobri a paixão pelo código em 2019.
        </Text>
        <Text>
          Claro, isso é apenas uma pequena parte, somos seres complexos que não cabem
          em caracteres. Se quiser saber mais sobre mim, será um prazer conversar contigo!
          Mande uma
          {' '}
          <Link href="/#contato"><A>mensagem</A></Link>
          .
        </Text>
        <Text as="h1" variant="subTitle">Por onde andei ?</Text>
        <Text>
          Uma curiosidade em conhecer como as coisas funcionam no mundo dos negócios me levou
          a cursar administração e a minha facilidade pela área de exatas me fez adentrar
          pela área financeira em algumas grandes empresas.
        </Text>
        <Text>
          Comecei em compras em uma empresa de tecnologia chamada GXS,
          depois fui para um grande banco de Investimento chamada Arab Banking Corporation
          e mais tarde fui ser tesoureiro em uma empresa na área de saúde.
        </Text>
        <Text>
          Precisava dar um up no meu inglês e queria viver novos ares e uma nova cultura.
          Nessa altura da vida dei um pausa na carreira e fui fazer um intercâmbio de um
          ano pela Australia. Trabalhei de garçom, lava-louças, fiz pizzas, fui bartender
          e cheguei a prospectar pessoas na rua para contribuir para instituições de caridade
          como a save the children
        </Text>
        <Text>
          O meu desejo de colocar em prática minhas idéias e por a mão na massa me fez
          começar a empreender. Tive uma empresa no segmento de viagens chamada
          Triplab Viagens, no qual obtive um crescimento médio de 35% ao ano durante 10 anos.
          E como eu sempre fui um entusiasta de tecnologia e percebi um gap de comunicação entre
          clientes e fornecedores no turismo, criei uma startup, chamada Corporating, que tinha
          como core tornar o segmento de turismo mais colaborativo e inclusivo.
        </Text>
        <Text as="h1" variant="subTitle">O que estudei em Tecnologia ?</Text>
        {linguagensNew.map((year) => (
          <div>
            <TagTitle>{Object.keys(year)}</TagTitle>
            {Object.values(year)[0].map((linguagem) => <TagBody>{linguagem}</TagBody>)}
          </div>
        ))}
        <div />
        <div style={{ marginBottom: '50px' }} />
      </Container>
      <Footer />
    </>
  );
}
