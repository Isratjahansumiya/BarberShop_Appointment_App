import React,{useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function MyAppointments(props) {
    const [appointments,setAppointments]=useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if (user){
            fetch(`http://localhost:5000/booking?email=${user.email}`)
              .then((res) => res.json())
              .then((data) => setAppointments(data));
        }
    },[user])
    const onClickValueChange=(order)=>{
      if (order === "oldest") {
        const sorted = [...appointments].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setAppointments(sorted);
      }
      if (order === "newest") {
        const sorted = [...appointments].sort(
          (a, b) => new Date(b.date)-new Date(a.date)
        );
        setAppointments(sorted);
      }
    }

    return (
      <div>
        <div className="dropdown dropdown-bottom flex justify-end">
          <label tabIndex="0" className="btn m-1">
            By Date
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => onClickValueChange("newest")}>
              <a>Newest on Top</a>
            </li>
            <li onClick={() => onClickValueChange("oldest")}>
              <a>Oldest on Top</a>
            </li>
          </ul>
        </div>
        <h2 className="px-5">My Appointments: {appointments.length}</h2>
        <div className="overflow-x-auto py-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{appointment.name}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.slot}</td>
                  <td>{appointment.serviceName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAppointments;