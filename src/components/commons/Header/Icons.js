import styled from 'styled-components';
import { EmojiPeople, Code, MailOutline } from '@styled-icons/material-outlined';

export const HomeIcon = styled(EmojiPeople)`
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

export const ProjectIcon = styled(Code)`
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

export const ContactIcon = styled(MailOutline)`
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

export const MenuIcon = styled.div`
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
    margin-top: 60px;
  }
`;
