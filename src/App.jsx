import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Events from './components/Events'
import Details from './components/Details'
import Tickets from './components/Tickets'

function Footer() {
  return (
    <div className="flex flex-row justify-center text-sm text-white bg-[#02191D] py-4">
      Coded by <a href="https://github.com/SusanGithaigaN"> <span className='pl-1.5 text-blue-500'>Susan Githaiga</span></a>.
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/details" element={<Details />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
