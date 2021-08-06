import React from 'react';
import styled from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const HeaderWrapper = styled.nav`
  display:flex;
  height: 67px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderMenuLeft = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  text-transform: capitalize;
`;

const HeaderMenuRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px
`;

const Menu = styled.span`
${breakpointsMedia({
    xs: 'font-size: 18px; line-height: 22px ',
    md: 'font-size: 28px; line-height: 34px',
  })}
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenuLeft />
      <HeaderMenuRight>
        <Menu>Sobre mim</Menu>
        <Menu>Contato</Menu>
      </HeaderMenuRight>
    </HeaderWrapper>
  );
}
