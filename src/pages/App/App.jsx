import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { useState } from "react';
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EventsPage from "../EventsPage/EventsPage";
import RestaurantPage from "../RestaurantPage/RestaurantPage";
import StaffPage from "../StaffPage/StaffPage";
import CoursesPage from "../CoursesPage/CoursesPage";
import Footer from "../../components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/school/staff" element={<StaffPage />} />
          <Route path="/school/courses" element={<CoursesPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
