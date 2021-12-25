import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Subscribe from '../../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <Products />
            <Services />
            <Reviews />
            <About />
            <Blogs />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;