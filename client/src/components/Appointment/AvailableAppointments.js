import { format } from 'date-fns';
import React, { useState } from 'react';
import EachService  from './EachService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';

const AvailableAppointments = ({date}) => {
  const [booking,setBooking]=useState(null);
  const formattedDate=format(date,'PP');
  const {data: serviceTime, isLoading, refetch}=useQuery(['available',formattedDate],()=>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then((res) => res.json()
    ));
  if(isLoading){
    return <Loading/>

  }
    return (
      <div>
        <h1 className="text-xl text-secondary text-center font-bold mt-40">
          AvailableAppointments on {format(date, "PP")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceTime?.map((service) => (
            <EachService
              key={service._id}
              service={service}
              setBooking={setBooking}
            >
              {" "}
            </EachService>
          ))}
        </div>
        {booking && <BookingModal booking={booking} setBooking={setBooking} date={date} refetch={refetch}></BookingModal>}
      </div>
    );
};

export default AvailableAppointments;