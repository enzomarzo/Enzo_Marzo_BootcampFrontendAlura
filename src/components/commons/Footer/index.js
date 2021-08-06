import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  margin-top: 30px;
`;

const FooterIcons = styled.span`
  display: flex;
  gap: 20px;
`;

const FooterIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterIcons>
          <FooterIcon src="/images/iconGithub.svg" alt="github icon" />
          <FooterIcon src="/images/icon_linkedin.svg" alt="linkedin icon" />
          <FooterIcon src="/images/icon_medium.svg" alt="medium icon" />
        </FooterIcons>
      </FooterWrapper>
    </>
  );
}
