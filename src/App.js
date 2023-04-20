
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componet/Dashboard';
import Navbar from './componet/Navbar';
import Addblog from './componet/Addblog';
import Blogcard from './componet/Blogcard';
import New from './componet/New';

function App() {
  return (
    <>
      <New />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/Blogcard' element={ <Blogcard /> } />
          <Route path='/addblog' element={ <Addblog /> } />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
