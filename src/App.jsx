import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Events from './components/Events'
import Tickets from './components/Tickets'
import About from './components/About'

function Footer() {
  return (
    <div className="flex flex-row justify-center text-sm text-white bg-[#02191D] py-4">
      Coded by <a href="https://github.com/SusanGithaigaN"> <span className='pl-1.5 text-blue-500'>Susan Githaiga</span></a>.
    </div>
  )
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
