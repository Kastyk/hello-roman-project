import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import SubHeader from '../components/SubHeader/SubHeader';
const NotFoundPage = () => (
  <Layout>
    <SubHeader>Nie ma takiej strony</SubHeader>
    <Link to={'/'}>Powrót</Link>
  </Layout>
);

export default NotFoundPage;
