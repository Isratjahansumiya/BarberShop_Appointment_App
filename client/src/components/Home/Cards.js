// @flow strict

import * as React from 'react';
import InfoCards from './InfoCards';
import open from "../../pics/open.png";
import phone from "../../pics/phone.png";
import location from "../../pics/location.png";

const Cards=()=> {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InfoCards
          cardTitle="Opening Hours"
          bgClass="bg-gradient-to-r from-secondary to-primary font-bold"
          img={open}
        ></InfoCards>
        <InfoCards
          cardTitle="Contact Us"
          bgClass="bg-base-200"
          img={phone}
        ></InfoCards>
        <InfoCards
          cardTitle="Our location"
          bgClass="bg-gradient-to-r from-secondary to-primary font-bold"
          img={location}
        ></InfoCards>
      </div>
    );
};

export default Cards;