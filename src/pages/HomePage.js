import React from 'react';
import Header from '../components/Header';
import './HomePage.css'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
const HomePage = () => {
  return (
    <>
   <Header />

    <Layout>
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-4">Welcome to Cred</h1>
          <p className="lead mb-4">Pay your credit card bills and earn amazing rewards!</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Manage Multiple Cards</h2>
              <p>Keep track of all your credit cards in one place.</p>
            </div>
            <div className="col-md-4">
              <h2>Exclusive Rewards</h2>
              <p>Earn exclusive rewards and cashbacks for on-time payments.</p>
            </div>
            <div className="col-md-4">
              <h2>Secure Transactions</h2>
              <p>Enjoy secure and seamless payment transactions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="display-4 mb-4">Join Cred Today</h2>
          <p className="lead mb-4">Start earning rewards by paying your credit card bills on time.</p>
          <button className="btn btn-primary btn-lg">Sign Up Now</button>
        </div>
      </section>

    </Layout>        <Footer/>

    </>
  );
};

export default HomePage;
