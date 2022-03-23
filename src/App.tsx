import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Bingo from './pages/Bingo'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bingo" element={<Bingo />} />
      </Routes>
    </div>
  )
}

export default App