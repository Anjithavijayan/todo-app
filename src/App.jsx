
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Todo from './pages/Todo'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todo' element={<Todo/>}/>
    </Routes>
   
    
     
    </>
  )
}

export default App
