import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Score from "../components/Score";

const MainLayout = ({children, score = true}) => {
  return (
    <>
      <Header />
      <main className='main'>
        {score && <Score/>}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;