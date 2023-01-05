import React from 'react';
import trimmingHair from '../../pics/trimmingHair.jpg'

const Intro = () => {
    return (
      <div>
        <div className="hero min-screen mt-12">
          <div className="hero-content flex-col lg:flex-row">
            <img src={trimmingHair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
            <div className='px-10'>
              <h1 className="text-5xl font-bold text-secondary">Make A New Hair Style</h1>
              <p className="py-6">
                Whether you want to get a simple, classic hair cut or you want
                to get a personalized look from the stylists, BarberShop is for
                you. We offer a range of services starting from hair styling,
                hair coloring, eyelash extensions,hair removal and barbering.
              </p>
              <button className="btn btn-accent text-white bg-gradient-to-r from-secondary to-primary font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Intro;