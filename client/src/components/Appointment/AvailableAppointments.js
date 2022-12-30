import { format } from 'date-fns';
import React, { useState,useEffect } from 'react';
import EachService  from './EachService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
  const [serviceTime,setServiceTime] = useState([]);
  const [booking,setBooking]=useState(null);
  const formattedDate=format(date,'PP');
  useEffect(() => {
  fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then((res) => res.json())
    .then((data) => setServiceTime(data));
  },[formattedDate])
    return (
      <div>
        <h1 className="text-xl text-secondary text-center font-bold">
          AvailableAppointments on {format(date, "PP")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceTime.map((service) => (
            <EachService
              key={service._id}
              service={service}
              setBooking={setBooking}
            >
              {" "}
            </EachService>
          ))}
        </div>
        {booking && <BookingModal booking={booking} setBooking={setBooking}date={date}></BookingModal>}
      </div>
    );
};

export default AvailableAppointments;