import EmployedList from './components/EmployedList'
import EmployedDetaild from './components/EmployedDetail'
import EmployedForm from './components/EmployedForm'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { StrictMode } from 'react';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <StrictMode>
     <NavBar/>
     <Routes>
      <Route path='/' element={<EmployedList/>}/>
      <Route path='create_employed' element={<EmployedForm/>}/>
      <Route path='detail_employed/:id' element={<EmployedDetaild/>}/>
     </Routes>
     </StrictMode>
     </BrowserRouter>
    </div>
  );
}

export default App;
