// import './App.css';
// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import NavBar from '../../components/NavBar/NavBar';
// import HomePage from '../HomePage/HomePage';
// import EventsPage from "../EventsPage/EventsPage";
// import RestaurantPage from "../RestaurantPage/RestaurantPage";
// import Footer from "../../components/Footer/Footer";

// export default function App() {
//   const [user, setUser] = useState({});
//   return (
//     <main className="App">
//       { user ?
//         <>
//           <NavBar user={user} setUser={setUser} />
//             <Routes> 
//               <Route path="/home" element={<HomePage />} />
//               <Route path="/events" element={<EventsPage />} />
//               <Route path="/restaurant" element={<RestaurantPage />} />
//             </Routes> 
//           <Footer />
//         </>
//         : null
//       }
//     </ main>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import EventsPage from "../EventsPage/EventsPage";
import RestaurantPage from "../RestaurantPage/RestaurantPage";
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
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
