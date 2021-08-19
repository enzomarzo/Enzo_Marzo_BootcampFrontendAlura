import styled, { css } from 'styled-components';
import breakpointsMedia from './utils/breakpointsMedia';

export const Title = styled.h1`
  font-weight: 400;
  ${breakpointsMedia({
    xs: css`font-size: 42px;`, // 60%
    sm: css`font-size: 52.5px;`, // 75%
    md: css`font-size: 63px;`, // 90%
    lg: css`font-size: 70px;`, // 100%
  })} 
`;

export const Subtitle = styled.h2`
  font-weight: 300;
  ${breakpointsMedia({
    xs: css`font-size: 21.6px;`,
    sm: css`font-size: 27px;`,
    md: css`font-size: 32.4px;`,
    lg: css`font-size: 36px;`,
  })}
`;

export const Paragraph = styled.p`
  font-weight: 300;
  ${breakpointsMedia({
    xs: css`font-size: 13.2px;`,
    sm: css`font-size: 16.5px;`,
    md: css`font-size: 19.8px;`,
    lg: css`font-size: 22px;`,
  })}
`;

// export default typographyVariants;
