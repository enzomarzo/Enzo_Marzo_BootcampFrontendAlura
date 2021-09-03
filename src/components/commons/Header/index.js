import React, { useState } from 'react';
import Link from 'next/link';
import {
  MenuIcon, HomeIcon, AboutIcon, ProjectIcon, ContactIcon,
} from './styles/Icons';
import {
  HeaderMobileWrapper, Nav, NavRight, NavLeft, HeaderMenu, NavItem,
} from './styles/menu';

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
      <Nav>
        <NavLeft>
          <Link href="/">
            <NavItem>
              <HomeIcon size="30" />
            </NavItem>
          </Link>
        </NavLeft>
        <NavRight data-safe-area="true">
          <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </MenuIcon>
          <HeaderMenu isOpen={isOpen}>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <NavItem>
                <AboutIcon size="18" />
                Sobre
              </NavItem>
            </Link>
            <NavItem href="/#projetos" onClick={() => setIsOpen(false)}>
              <ProjectIcon size="18" />
              Projetos
            </NavItem>
            <NavItem href="/#contato" onClick={() => setIsOpen(false)}>
              <ContactIcon size="18" />
              Contato
            </NavItem>
          </HeaderMenu>
        </NavRight>
      </Nav>
    </HeaderMobileWrapper>
  );
}
