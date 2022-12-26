import React from 'react';

const EachService = ({service,setBooking}) => {
    const {name,slots}=service;
    return (
      <div>
        <div className="card w-full bg-base-100 shadow-xl my-10">
          <div className="card-body text-center">
            <h2 className=" text-xl font-bold text-secondary">{name}</h2>
            <p>
              {slots.length > 0 ? (
                <span>{slots[0]}</span>
              ) : (
                <span className="text-red-500">Try another date</span>
              )}
            </p>
            <p>
              {slots.length} {slots.length > 0 ? "Spaces " : "Space "}available
            </p>
            <div className="card-actions justify-center">
              <label
                htmlFor="booking-modal"
                disabled={slots.length === 0}
                onClick={() => setBooking(service)}
               className="btn btn-sm btn-secondary text-white Uppercase"
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EachService;