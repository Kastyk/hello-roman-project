import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import Header from '../components/Header/Header';

const BasiaPage = () => (
  <Layout>
    <Header>basia</Header>
    <Link to={'/'}>Powrót</Link>
  </Layout>
);

export default BasiaPage;
