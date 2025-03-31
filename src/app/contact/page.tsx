"use client"

import { Layout, Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const { Content } = Layout;

const MainContent = styled(Content)`
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  background: #fafafa;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const StyledForm = styled(Form<FormData>)`
  .ant-form-item-label > label {
    font-weight: 500;
    color: #2b2b2b;
  }

  .ant-input {
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    transition: all 0.2s ease;

    &::placeholder {
      color: #999;
    }

    &:hover, &:focus {
      border-color: #2b2b2b;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }

  .ant-input-textarea {
    min-height: 120px;
  }

  .ant-btn {
    width: 100%;
    height: 48px;
    background: #2b2b2b;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;

    &:hover {
      background: #404040;
    }
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  
  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #2b2b2b;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form] = Form.useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const onFinish = async (values: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      setSubmittedName(values.name);
      setIsSubmitted(true);
    } catch (error) {
      message.error('Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <Header />
        <MainContent>
          <SuccessMessage>
            <h1>Thank you for your interest, {submittedName}!</h1>
          </SuccessMessage>
        </MainContent>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <MainContent>
        <Title>Only CTA on the page</Title>
        <FormContainer>
          <StyledForm
            form={form}
            name="contact"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Value" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Value" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea placeholder="Value" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
              </Button>
            </Form.Item>
          </StyledForm>
        </FormContainer>
      </MainContent>
      <Footer />
    </Layout>
  );
} 