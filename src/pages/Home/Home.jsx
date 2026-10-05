// import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Row/RowList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;