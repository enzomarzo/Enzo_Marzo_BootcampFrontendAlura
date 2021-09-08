import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from '../../src/components/commons/Header';
import Text from '../../src/components/foundation/Text';
import Container from '../../src/components/shared/container';
import Button from '../../src/components/shared/Button';

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
      about: 'Criação de uma rede social baseada no Instagram. Esse projeto é parte dos estudos do Bootcamp Avançado de Frontend da Alura com duração de 3 meses',
      skills: ['reactjs', 'hooks', 'context-api', 'javascript', 'nextjs', 'styled-compontens', 'github actions', 'CI & CD', 'devops', 'good practices'],
    },
    {
      name: 'Let me Ask',
      githubName: 'nlw-LetMeAsk',
      img: '/images/let-me-ask-1000x560.jpg',
      about: 'Durante a imersão React da Rocketseat criamos esse projeto com o create-react app utilizando o firebase para autenticação de usuário e para criação e consumo do banco de dados ',
      skills: ['reactjs', 'firebase', 'hooks', 'typescipt'],
    },
    {
      name: 'Corporating',
      img: '/images/Corporating-1000x560.jpg',
      about: 'Startup lançada em 2017. Idealizada na percepção de um problema de comunicação entre clientes e fornecedores encontrado no setor de turismo. Esse projeto foi desenvolvido com Java no Backend, Angular 6+ no Front-end, Nginx como servidor web e AWS como serviço de hospedagem.',
      skills: ['Java', 'Angular', 'typescipt', 'OOP', 'AWS'],
    },
    {
      name: 'Skinkey',
      img: '/images/skinkey-1000x560.jpg',
      about: 'criação do MVP de um e-commerce de produtos de skincare coreanos vendidos no Brasil.',
      skills: ['WordPress', 'MVP', 'PHP'],
    },
  ];

  /* const [GitHubRepo, setGitHubRepo] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/enzomarzo/repos')
      .then((res) => res.json())
      .then((data) => setGitHubRepo(data));
  }, []); */

  const Img = styled.img`
    display: block;
    width: 90%;
    max-width: 900px;
    margin: 15px auto 25px auto;
    border-radius: 3px;
    background-size: cover;
    box-shadow: 4px 4px 0 rgb(120 120 120 / 15%);
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.95;
    border: 1px solid rgba(255,255,255,0.2);
    z-index:-1;

    @media(max-width: 768px) {
      width: 100%;
  }
`;

  return (
    <>
      <Header />
      <Container>
        <Text as="h1" font-weight="500" letter-spacing="1.2" text-align="center" variant="subTitle">{projectName}</Text>
        {projects.map((project) => {
          if (projectName !== project.name) return;
          // eslint-disable-next-line consistent-return
          return (
            <>
              <Img src={project.img} />
              <Button margin="0 auto">Visite o site</Button>
              <Text as="h2" variant="subTitle">Sobre</Text>
              <Text>{project.about}</Text>
            </>
          );
        })}
      </Container>
    </>
  );
}
