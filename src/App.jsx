import Footer from './Components/Footer';1
import './App.css'
import HomeLayout from './Layouts/HomeLayout';
import { Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
     </Routes>
      
    </>
  )
}

export default App
