import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from '../../src/components/commons/Header';
import Text from '../../src/components/foundation/Text';
import Container from '../../src/components/shared/container';

export default function Projects() {
  const router = useRouter(); // pegando a rota
  const path = router.asPath.split('/'); // obtendo rota completa e colocando em um array
  const projectPath = path[path.length - 1];
  const projectName = projectPath.split('%20').join(' ');
  const projects = [
    {
      name: 'Instalura',
      githubName: 'instalura-base',
      img: '/images/instalura-1000x560.jpg',
      about: 'Criação de uma rede social baseada no Instagram. Esse projeto é parte do estudo do Bootcamp Avançado de Frontend da Alura com duração de 3 meses',
      skills: ['reactjs', 'hooks', 'context-api', 'javascript', 'nextjs', 'styled-compontens', 'github actions', 'CI & CD', 'devops', 'good practices'],
    },
    {
      name: 'Let me Ask',
      githubName: 'nlw-LetMeAsk',
      img: '/images/let-me-ask-1000x560.jpg',
      about: 'Durante a imersão React da Rocketseat criamos um projeto com',
      skills: ['reactjs', 'firebase', 'hooks', 'typescipt'],
    },
    {
      name: 'Corporating',
      img: '/images/Corporating-1000x560.jpg',
      about: 'Startup lançada em 2017. Idealizei essa startup com base em um gap de comunicação entre clientes e fornecedores encontrado no setor de turismo.',
      skills: ['Java', 'Angular', 'typescipt', 'OOP', 'AWS'],
    },
    {
      name: 'Skinkey',
      img: '/images/skinkey-1000x560.jpg',
      about: 'criação do MVP de um e-commerce de produtos de skincare coreanos vendidos no Brasil.',
      skills: ['WordPress', 'MVP', 'PHP'],
    },
  ];

  /*   const [GitHubRepo, setGitHubRepo] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/enzomarzo/repos')
      .then((res) => res.json())
      .then((data) => setGitHubRepo(data));
  }, []); */

  const Img = styled.img`
    display: block;
    width: 90%;
    max-width: 900px;
    margin: 15px auto;
    border-radius: 3px;
    background-size: cover;
    box-shadow: 5px 5px 0 rgb(155 155 155 / 15%);
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.95;
    border: 10px solid white;
`;

  const Button = styled.button`
  display: flex;
  margin: 0px auto;
  padding: 8px 15px;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;
  return (
    <>
      <Header />
      <Container>
        <Text as="h1" font-weight="500" letter-spacing="1.2" text-align="center" variant="subTitle">{projectName}</Text>
        {projects.map((project) => {
          let projectImg = '';
          if (projectName === project.name) {
            projectImg = project.img;
            return <Img src={projectImg} />;
          }
          return projectImg;
        })}
        <Button>Visite o site</Button>
        <Text as="h2" variant="subTitle">Sobre</Text>
        {projects.map((project) => {
          let projectAbout = '';
          if (projectName === project.name) {
            projectAbout = project.about;
            return <Text>{projectAbout}</Text>;
          }
          return projectAbout;
        })}
      </Container>
    </>
  );
}
