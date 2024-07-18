import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Detail from './pages/Detail';
import Sparks from './components/Sparks';

const App = () => {
  
  return <>
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <Sparks />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='overview' element={<Overview />}></Route>
          <Route path='detail' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
};

export default App 