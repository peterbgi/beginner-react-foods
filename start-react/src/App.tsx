
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page'
import NavBar from './components/nav-bar'
import RecipePage from './pages/recipe-page'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecipePage />} />
      <Route path="*" element={<p>Az oldaal nem található</p>} />
    </Routes>
      
    </>
  )
}

export default App
