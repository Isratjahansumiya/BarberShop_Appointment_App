import './App.css';
import Navbar from './components/Shared/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Appointment from './components/Appointment/Appointment';
import Register from './components/Login/Register';
import RequireAuth from './components/Login/RequireAuth';
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointments from './components/Dashboard/MyAppointments';
import MyReview from './components/Dashboard/MyReview';
import MyHistory from './components/Dashboard/MyHistory';


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" index element={<MyReview />}></Route>
          <Route path="history" index element={<MyHistory />}></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
