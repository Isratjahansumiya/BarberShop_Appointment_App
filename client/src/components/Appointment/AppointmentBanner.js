import groomed from '../../pics/groomed.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={groomed}
              className="max-w-sm rounded-lg shadow-2xl" alt=""
            />
            <div>
              <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              />
            </div>
          </div>
        </div>
    );
};

export default AppointmentBanner;