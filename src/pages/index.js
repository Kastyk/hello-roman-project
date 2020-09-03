import React from 'react';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import Layout from '../layout/Layout';
import Navigation from '../components/Navigation/Navigation';

const IndexPage = () => (
  <Layout>
    <Header>roman</Header>
    <SubHeader>+ animal</SubHeader>
    <Navigation />
  </Layout>
);

export default IndexPage;
