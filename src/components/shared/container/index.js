import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Container = styled.div`

background-color: ${({ theme, bgVariant }) => get(theme, `colors.${bgVariant}`)};
color: ${({ theme, variant }) => get(theme, `colors.${variant}`)};
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;

${breakpointsMedia({
    xl: css`max-width: 1170px `,
    lg: css`max-width: 970px `,
    md: css`max-width: 750px `,
    sm: css`max-width: 480px `,
    xs: css`max-width: 480px`,
  })}
`;

export default Container;
