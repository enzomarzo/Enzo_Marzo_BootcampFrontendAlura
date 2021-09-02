import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import {
  MenuIcon,
  HomeIcon,
  ProjectIcon,
  ContactIcon,
} from './Icons';

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
    `;
  }}
`;

const Nav = styled.nav`
  display: flex;
  height: 60px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-right: 30px;
  opacity: 0.95;
  @media (max-width: 768px) { 
    height: 0;
    padding-right: 0px;
    opacity: 1;
    display: absolute;
  }
`;

const HeaderMenu = styled.div`
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

const NavItem = styled.a`
    padding: 16px 12px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    transition: all 0.3s ease-in;

    &:hover { 
      opacity: 0.65;
    }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderMobileWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-safe-area="true"]');
        if (!isSafeArea) {
          setIsOpen(false);
        }
      }}
    >
      <Nav data-safe-area="true">
        <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </MenuIcon>
        <HeaderMenu isOpen={isOpen}>
          <Link href="/about">
            <NavItem>
              <HomeIcon size="18" />
              Sobre
            </NavItem>
          </Link>
          <NavItem href="/#projetos">
            <ProjectIcon size="18" />
            Projetos
          </NavItem>
          <NavItem href="/#contato">
            <ContactIcon size="18" />
            Contato
          </NavItem>
        </HeaderMenu>
      </Nav>
    </HeaderMobileWrapper>
  );
}
