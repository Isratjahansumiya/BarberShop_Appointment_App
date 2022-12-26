// @flow strict

import * as React from 'react';
import { format } from "date-fns";
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
function BookingModal({date,booking,setBooking}) {
    const {_id,name,slots}=booking;
    const [user, loading, error] = useAuthState(auth);
    const handleBooking=event => {
        event.preventDefault();
        const slot=event.target.slot.value;
        console.log(_id,name,slot);
        setBooking(null);
    }
    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="booking-modal"
             className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <h3 className="font-bold text-lg text-secondary">
              Booking for : {name}
            </h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
              <input
                type="text"
                disabled
                value={format(date, "PP")}
               className="input input-bordered w-full max-w-xs"
              />
              <select name="slot"className="select select-bordered w-full max-w-xs">
                {slots.map((slot,index)=><option value={slot} key={index}>{slot}</option>)}
              </select>
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || null }
               className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || null}
                placeholder="Email Address"
               className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
               className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
               className="btn btn-secondary text-white w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookingModal;