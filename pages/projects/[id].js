import React, { Fragment } from 'react';
import styled from 'styled-components';
import { gql } from '@apollo/client';
import { arrayOf, shape, string } from 'prop-types';

import { useRouter } from 'next/router';
import Header from '../../src/components/commons/Header';
import Text from '../../src/components/foundation/Text';
import Container from '../../src/components/shared/container';
import Button from '../../src/components/shared/Button';
import { TagBody } from '../about';
import { client } from '../_app';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query getProjects {
        allProjects {
          id
          about
          name
          img {
            alt
            url
          }
          stack {
            id
            langName
          }
        }
      }
    `,
  });
  return {
    props: {
      projects: data.allProjects,
    },
  };
}

export default function Projects({ projects }) {
  const router = useRouter(); // get the current path
  const path = router.asPath.split('/'); // add entire path inside an array
  const projectPath = path[path.length - 1]; // get the last part of the path (which has the name)
  const projectName = projectPath.split('%20').join(' ');

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
    border: 1px solid rgba(255, 255, 255, 0.2);
    z-index: -1;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const Hr = styled.hr`
    width: 50%;
    min-width: 100px;
    margin-left: 0px;
    margin-top: 0px;
    opacity: 0.3;
  `;

  return (
    <>
      <Header />
      <Container>
        <Text
          as="h1"
          font-weight="500"
          letter-spacing="1.2"
          text-align="center"
          variant="subTitle"
        >
          {projectName}
        </Text>
        {projects.map((project) => {
          if (projectName !== project.name) return false;
          return (
            <Fragment key={project.id}>
              <Img src={project.img.url} />
              <Button margin="0 auto">Visite o site</Button>
              <Text as="h2" variant="subTitle" margin="50px 0 10px 0">
                Sobre o projeto
              </Text>
              <Hr />
              <Text>{project.about}</Text>
              <Text as="h2" variant="subTitle" margin="50px 0 10px 0">
                Stack utilizada
              </Text>
              <Hr />
              <p>
                {project.stack.map((stack) => (
                  <TagBody key={stack.id}>
                    {stack.langName}
                  </TagBody>
                ))}
              </p>
            </Fragment>
          );
        })}
      </Container>
    </>
  );
}

Projects.propTypes = {
  projects: arrayOf(
    shape({
      id: string,
      about: string,
      name: string,
      img: shape({
        alt: string,
        url: string,
      }),
      stack: arrayOf(
        shape({
          id: string,
          langName: string,
        })
      ),
    })
  ),
};
