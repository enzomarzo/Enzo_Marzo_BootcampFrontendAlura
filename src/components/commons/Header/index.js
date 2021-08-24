import React, { useState } from 'react';
import styled from 'styled-components';
import { EmojiPeople, Code, MailOutline } from '@styled-icons/material-outlined';

const HomeIcon = styled(EmojiPeople)`
  margin-right: 4px;
  padding-bottom: 1.5px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  @media(max-width: 768px) {
    margin-right: 10px;
    vertical-align: top;
    padding-bottom: 0;
  }
`;

const ProjectIcon = styled(Code)`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  padding-bottom: 1.5px;
  @media(max-width: 768px) {
    margin-right: 10px;
    vertical-align: top;
    padding-bottom: 0;
  }
`;

const ContactIcon = styled(MailOutline)`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  padding-bottom: 1.5px;
  @media(max-width: 768px) {
    margin-right: 10px;
    vertical-align: top;
    padding-bottom: 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  align-self: center;
  position: absolute;
  margin: 0px 25px;
  span { 
    height:2px;
    width: 25px;
    background: ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : 'white')};
    margin-bottom: 4px;
    border-radius: 5px;
    transform-origin: 4px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (max-width: 768px) { 
    display: flex;
  }
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
    padding-right: 0px;
    opacity: 1;
    display: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
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
    <Nav>
      <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </MenuIcon>
      <HeaderMenu isOpen={isOpen}>
        <NavItem>
          <HomeIcon size="18" />
          Sobre
        </NavItem>
        <NavItem>
          <ProjectIcon size="18" />
          Projetos
        </NavItem>
        <NavItem>
          <ContactIcon size="18" />
          Contato
        </NavItem>
      </HeaderMenu>
    </Nav>
  );
}
