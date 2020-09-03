import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import Header from '../components/Header/Header';

const FavaPage = () => (
  <Layout>
    <Header>fava</Header>
    <Link to={'/'}>Powrót</Link>
  </Layout>
);

export default FavaPage;
