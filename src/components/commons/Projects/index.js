import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const CardsRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  place-content: center;
  margin-bottom:20px;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column; 
      align-items: center;  
      flex-grow: 1;`,
    md: css`
      flex-direction: row`,
  })}
  @media(max-width: 768px) {
    > div > a:last-child > div { 
      margin-bottom: 0px;
    }
  }
`;

export const ProjectWrapper = styled.div`
  align-self: center;
  ${breakpointsMedia({
    xs: css` 
      display: flex;
      flex-direction: column; ,
    `,
  })}
`;
