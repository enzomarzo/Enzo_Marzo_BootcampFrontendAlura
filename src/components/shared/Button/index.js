import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Button = styled.button`
  display: flex;
  background-color: rgb(0, 150, 136);
  color: ${({ theme }) => theme.colors.light};
  border-radius: 3px;
  font-weight: 600;
  padding: 10px 15px;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  border: none;
  cursor: pointer;
  ${propToStyle('margin')}
`;

export default Button;
