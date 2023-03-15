import Header from "./components/Header"
import NotFound from "./components/pages/NotFound"
import Projects from "./components/pages/Projects"

import Home from "./components/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/projects' element={<Projects />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
