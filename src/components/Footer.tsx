"use client"

import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: white;
  border-top: 1px solid #f0f0f0;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #2b2b2b;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>CADEX {new Date().getFullYear()}</Copyright>
    </FooterContainer>
  );
} 