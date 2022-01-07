import React from "react";
import Header from './../components/Header';
import Footer from './../components/Footer';

const PageWrapper = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
