import React from 'react';
import styled from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const HeaderWrapper = styled.nav`
  display:flex;
  height: 60px;
  background-color: white;
  opacity: 0.95;
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
    xs: 'font-size: 14px; line-height: 18px ',
    md: 'font-size: 24px; line-height: 30px',
  })}
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenuLeft />
      <HeaderMenuRight>
        <Menu>Sobre</Menu>
        <Menu>Contato</Menu>
      </HeaderMenuRight>
    </HeaderWrapper>
  );
}
