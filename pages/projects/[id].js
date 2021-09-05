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
      name: 'Let me Ask',
      githubName: 'nlw-LetMeAsk',
      img: '/images/let-me-ask-1000x560.jpg',
    },
    {
      name: 'Corporating',
      img: '/images/Corporating-1000x560.jpg',
    },
    {
      name: 'Instalura',
      githubName: 'instalura-base',
      img: '/images/instalura-1000x560.jpg',
    },
    {
      name: 'Skinkey',
      img: '/images/skinkey-1000x560.jpg',
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
    width: 100%;
    max-width: 900px;
    padding: 10px;
    margin: 10px auto;
    border-radius: 6px;
    background-size: cover;
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.95;
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
        <Text as="h1" text-align="center" variant="subTitle">{projectName}</Text>
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
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </Container>
    </>
  );
}
