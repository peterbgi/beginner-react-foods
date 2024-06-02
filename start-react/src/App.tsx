
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RecepiePage from './pages/recipe-page'
import HomePage from './pages/home-page'
import NavBar from './components/nav-bar'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecepiePage />} />
      <Route path="*" element={<p>Az oldaal nem található</p>} />
    </Routes>
      
    </>
  )
}

export default App
