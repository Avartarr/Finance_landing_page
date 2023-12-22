import React from 'react'
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Transaction from '../../components/Transaction';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar';


const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--primary-color)' }}>
       <Navbar />
        <Hero />
        <Section />
        <Card />
        <Transaction />
        <Footer />
    </div>
  )
}

export default Home;