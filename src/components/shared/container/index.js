import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const Container = styled.div`

background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  ${propToStyle('background-color')}
  ${breakpointsMedia({
    lg: css`padding: 15px 65px;`,
    md: css`padding: 15px 50px;`,
    sm: css`padding: 65px 35px;`,
    xs: css`padding: 65px 25px;`,
  })}
`;

export default Container;
