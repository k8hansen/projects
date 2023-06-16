import React from 'react';
import heroImg from './assets/undraw_fitting_pieces_re_nss7.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt earum modi sequi molestias quis voluptatum, praesentium
            perspiciatis facilis dolorum, temporibus ipsam soluta consectetur et
            officia nisi quo laboriosam explicabo?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and a browser' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
