"use client";

import { Button, Layout } from 'antd';
import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const { Content } = Layout;

const MainContent = styled(Content)`
  min-height: calc(100vh - 130px);
  background: #fafafa;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled(Section)`
  background: white;
  padding-bottom: 6rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const VideoContainer = styled.div`
  flex: 1;
  max-width: 560px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
`;

const ContactButton = styled(Button)`
  height: 48px;
  padding: 0 2rem;
  font-size: 1rem;
  font-weight: 500;
  background: #2b2b2b;
  border: none;
  border-radius: 100px;

  &:hover {
    background: #404040 !important;
  }
`;

const SecondarySection = styled(Section)`
  background: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 4rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const LastSection = styled(Section)`
  background: #fafafa;
  text-align: center;
`;

export default function Home() {
  return (
    <Layout>
      <Header />
      <MainContent>
        <HeroSection>
          <ContentWrapper>
            <HeroContent>
              <Title>Most important<br />title on the page</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam mattis, leo et condimentum ultricies, sem urna
                convallis metus, vel suscipit nibh lacus tincidunt ante
              </Description>
              <Link href="/contact">
                <ContactButton type="primary">
                  Contact us
                </ContactButton>
              </Link>
            </HeroContent>
            <VideoContainer>
              <LiteYouTubeEmbed
                id="dQw4w9WgXcQ"
                title="YouTube video"
                noCookie={true}
              />
            </VideoContainer>
          </ContentWrapper>
        </HeroSection>

        <SecondarySection>
          <SectionTitle>Also very important title</SectionTitle>
          <Grid>
            {Array(6).fill(null).map((_, index) => (
              <Card key={index}>
                <CardTitle>Title</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aliquam mattis, leo et condimentum
                </CardDescription>
              </Card>
            ))}
          </Grid>
        </SecondarySection>

        <LastSection>
          <SectionTitle>Less important title</SectionTitle>
          <Link href="/contact">
            <ContactButton type="primary">
              Contact us
            </ContactButton>
          </Link>
        </LastSection>
      </MainContent>
      <Footer />
    </Layout>
  );
}
