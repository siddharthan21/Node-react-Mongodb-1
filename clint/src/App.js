import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Page/Login';
import Sginup from './Page/Sginup';
import Home from './Page/Home';
import Context from './Context/Context';
function App() {
  return (
    // <Context >
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sginup' element={<Sginup />} />
            <Route path='/home/:id' element={<Home />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
