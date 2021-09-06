import styled, { css } from 'styled-components';

export const HeaderMobileWrapper = styled.div`
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        transition: .3s;
        z-index: 999;
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 1;
      z-index: 999;
    `;
  }}
`;

export const HeaderMenu = styled.div`
  display: flex;
  @media(max-width: 768px) {
    flex-direction: column;
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    padding-top: 55px;
    background-color: white;
    opacity: 1;
    transition: 0.3s ease;
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 60px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  flex-wrap: wrap;
  opacity: 0.95;
  @media (max-width: 768px) { 
    height: 0;
    opacity: 1;
  }
`;

export const NavLeft = styled.nav`
  padding-left: 30px;
  display: flex;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) { 
    padding-left: 15px;
  }
`;

export const NavRight = styled.nav`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-right: 30px;
  @media (max-width: 768px) { 
    height: 0;
    padding-right: 0px;
    opacity: 1;
    display: absolute;
  }
`;

export const NavItem = styled.a`
    padding: 16px 12px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    transition: all 0.3s ease-in;
    color: ${({ theme }) => theme.colors.primary};

    &:hover { 
      opacity: 0.65;
    }
`;
