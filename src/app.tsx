import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import '@styles/app.css';

import { Landing } from '@pages/landing.tsx';
import { Login } from '@pages/login.tsx';
import { My } from '@pages/my.tsx';
import { Booking } from '@pages/booking.tsx';

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait' initial={true}>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/my' element={<My />} />
                <Route path='/booking' element={<Booking />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
