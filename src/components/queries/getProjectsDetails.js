import { gql } from '@apollo/client';

export default gql`
  query getProjectsDetails {
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
`;
