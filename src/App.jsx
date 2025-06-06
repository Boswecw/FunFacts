import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Deer from './components/Deer';
import Turtle from './components/Turtle';
import Cardinal from './components/Cardinal';
import Wildcat from './components/Wildcat';
import './App.css';

function App() {
  return (
<Router>
  <div className="App">
    <header>
      <h1>Wildlife Wonders of Kentucky</h1>
      <nav>
        <Link to="/deer">White-tailed Deer</Link>
        <Link to="/turtle">Eastern Box Turtle</Link>
        <Link to="/cardinal">Northern Cardinal</Link>
        <Link to="/Wildcat">Wild Cat</Link>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/deer" element={<Deer />} />
        <Route path="/turtle" element={<Turtle />} />
        <Route path="/cardinal" element={<Cardinal />} />
        <Route path="/Wildcat" element={<Wildcat />} />
      </Routes>
    </main>
  </div>
</Router>

  );
}

export default App;
