import { gql } from '@apollo/client';

export default gql`
  query getProjects {
    allProjects {
      id
      name
      smallImage {
        alt
        url
      }
    }
  }
`;
