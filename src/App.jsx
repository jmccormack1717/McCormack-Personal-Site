import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Scholarship from './pages/Scholarship'
import Engineering from './pages/Engineering'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/engineering" element={<Engineering />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

