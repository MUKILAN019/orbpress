import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from './pages/splashpage';
import Home from './pages/home';
import LoginForm from './pages/auth/signin';
import Signup from './pages/auth/signup';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<SplashPage/>}/>
          <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<Signup/>}/>
         </Routes>

     </Router>
      
    </>
  )
}

export default App
