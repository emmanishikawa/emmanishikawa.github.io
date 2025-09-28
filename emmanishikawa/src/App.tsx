import './App.css'
import MusicPlayer from './components/MusicPlayer'
import NavBar from './components/NavBar'
import Content from './sections/Content'
import CaseStudy from './sections/CaseStudy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/project/:slug" element={<CaseStudy />} />
      </Routes>
      <MusicPlayer />
    </Router>
    </>
  )
}

export default App


//npm run deploy -m for message
//dont forget push pls