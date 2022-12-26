// @flow strict

import * as React from 'react';

const InfoCards=({img,cardTitle,bgClass})=> {
    return (
      <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure className="pl-5 w-32">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCards;