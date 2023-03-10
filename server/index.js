const express = require("express");
const app = express();
const cors = require("cors");
require ("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8t4zgap.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const servicesCollection =client.db('services').collection('service');
    const bookingCollection=client.db('services').collection('booking');
    app.get("/service", async function (req, res) {
      const query={};
      const cursor = servicesCollection.find(query);
      const services = await cursor.toArray();
      return res.send(services);
    });
    //Not good enough query style. Need to use aggregate lookup,pipeline,match, group
    app.get("/available", async (req, res) => {
      const date= req.query.date;
      //get all services
      const services = await servicesCollection.find().toArray();
      //get all the booking on current day
      const query={date: date};
      const bookings=await bookingCollection.find(query).toArray();
      //find booking for each service
      services.forEach(service=>{
        const serviceBookings= bookings.filter(book=>book.serviceName===service.name);
        const booked= serviceBookings.map(s=>s.slot);
        const available= service.slots.filter(slot=>!booked.includes(slot));
        //set available slots to slots to make it easier
        service.slots=available;
      })
      res.send(services);
    })
    app.get("/booking", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const bookings = await bookingCollection.find(query).toArray();
      res.send(bookings);
    });
    app.post("/booking",async(req, res) => {
      const addBooking= req.body;
      const query = {
        serviceName: addBooking.serviceName,
        date: addBooking.date,
        email: addBooking.email
      };
      const exists= await bookingCollection.findOne(query);
      if (exists) {
        return res.send ({success: false, booking: exists});
      }
      const result=await bookingCollection.insertOne(addBooking);
      return res.send({success: true, result});
    })
  } catch (error) {}
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
