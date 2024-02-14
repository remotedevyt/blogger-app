import { useState } from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Createblog from './pages/Createblog';
import Nopage from './pages/Nopage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/create' element={<Createblog />}></Route>
          <Route path='*' element={<Nopage />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
