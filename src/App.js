import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './components/pages/EventsPage';
function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/events' exact element={<EventsPage/>}/>

            </Routes>

        </Router>
        </>
    );
}

export default App;