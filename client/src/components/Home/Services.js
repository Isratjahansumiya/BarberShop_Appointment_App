import * as React from 'react';
import {Service} from './ServiceMenu';
import MenuList from './MenuList.json'
const Services=()=> {
    return (
      <div className="my-28 text-center">
        <div>
          <h1 className="text-secondary text-xl font-bold uppercase">
            Our Services and Prices
          </h1>
        </div>
        <div className="my-20">
          {MenuList.allServices.map((service) => (
            <Service
              key={service._id}
              service={service}
            ></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;