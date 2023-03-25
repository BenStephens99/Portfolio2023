import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';


export const MainRefContext = React.createContext(null);
export const DirectionContext = React.createContext(null);

function App() {

  const mainRef = React.useRef(null)
  const [direction, setDirection] = React.useState(null);
  
  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      <MainRefContext.Provider value={mainRef}>
        <>
          
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </>
      </MainRefContext.Provider>
    </DirectionContext.Provider>
  );
}

export default App;
