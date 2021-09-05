import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  ${propToStyle('background-color')}
  ${propToStyle('height')}
  ${propToStyle('padding')}
  ${breakpointsMedia({
    lg: css`padding: 15px 65px;`,
    md: css`padding: 15px 50px;`,
    sm: css`padding: 65px 35px;`,
    xs: css`padding: 65px 25px;`,
  })}
`;

export const ContainerCover = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  height: 100vh;
  padding: 0;
`;

export default Container;
