"use client"

import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #000;
`;

const ContactButton = styled.button`
  background: #2b2b2b;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #404040;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Logo>CADEX</Logo>
      </Link>
      <Link href="/contact">
        <ContactButton>Contact us</ContactButton>
      </Link>
    </HeaderContainer>
  );
} 