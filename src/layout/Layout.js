import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/close-up-photography-of-adult-black-and-white-short-coat-dog-733416.jpg';

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1 {
      color: white;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding-top: 15px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20vw;
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat 0% 50%;
  background-size: 100vw;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
