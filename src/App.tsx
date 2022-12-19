import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Error } from './pages/Error'

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer className='bg-dnb-green
             text-l text-center
             mt-auto
             p-4'>
          <p className="text-white">Hanna-Kai Barstad Golberg @ 2022</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
