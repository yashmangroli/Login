import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Insert from './Insert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Get from './Get';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Insert/>} />
                <Route path='/view' element={<Get/>} />
                {/* <Route path='/edit/:id' element={<Update />} /> */}
            </Routes>
        </BrowserRouter>
</>
);


