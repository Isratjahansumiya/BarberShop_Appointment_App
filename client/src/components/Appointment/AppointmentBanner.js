import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    return (
      <div className="hero-content flex-col lg:flex-row mt-24 bg-[url('/src/pics/bg-barberShop.jpg')] bg-cover text-white">
        <div className="flex-col lg:flex-row py-12 px-10">
          <h1 className="text-2xl font-bold mt-12">How to make an appointment?</h1>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur dicta nam necessitatibus, voluptatem dolorem in
              explicabo quibusdam alias nobis hic quaerat excepturi expedita
              perferendis delectus iste voluptatibus aspernatur beatae autem!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
              neque repellat ipsa quas, eligendi et incidunt optio, ipsum saepe
              consectetur nihil similique qui suscipit, quasi in cupiditate
              natus. Eos?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              consequuntur tenetur reiciendis blanditiis molestias magni odit
              harum aut et, id at maxime assumenda atque omnis adipisci
              perspiciatis ex quis quo?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              eos eveniet veritatis dignissimos, delectus error veniam possimus,
              incidunt distinctio nam totam commodi. Maiores optio voluptatum
              quibusdam praesentium quia delectus enim?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ut laudantium corrupti cumque iure magni quos voluptatum dolorum
              laborum amet nulla, aspernatur possimus, eligendi recusandae. Quod
              omnis voluptatum animi nulla?
            </li>
          </ul>
        </div>
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    );
};

export default AppointmentBanner;