import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import About from './pages/About'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Education from './pages/Education'
import './App.css'

function App() {
  return (
    <Router basename="/McCormack-Personal-Site">
      <div className="App">
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

