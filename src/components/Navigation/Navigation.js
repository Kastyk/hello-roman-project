import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.ul`
  padding: 0;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-weight: 700;
  display: flex;
`;
const NavigationItem = styled.li`
  margin-right: 15px;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: -9px;
    display: block;
    height: 100%;
    width: 2px;
    background: white;
  }
  :last-child::after {
    display: none;
  }
`;

const Navigation = () => (
  <NavigationWrapper>
    <NavigationItem>
      <Link to={'/jozef/'}>Józef</Link>
    </NavigationItem>
    <NavigationItem>
      <Link to={'/basia/'}>Basia</Link>
    </NavigationItem>
    <NavigationItem>
      <Link to={'/fava/'}>Fava</Link>
    </NavigationItem>
  </NavigationWrapper>
);

export default Navigation;
