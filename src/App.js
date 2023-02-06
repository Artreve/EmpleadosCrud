import './App.css';
import EmployedList from './components/EmployedList'
import EmployedDetaild from './components/EmployedDetail'
import EmployedForm from './components/EmployedForm'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<EmployedList/>}/>
      <Route path='create_employed' element={<EmployedForm/>}/>
      <Route path='detail_employed' element={<EmployedDetaild/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
