import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import { Route, Routes } from 'react-router-dom';
import StageSection from './components/Stage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/portfolio" element={<StageSection />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
