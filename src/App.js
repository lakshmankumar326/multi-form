import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Pages/Form';
import SideBar from './components/SideBar';



function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={ <Form/>} />
          
          
        </Routes>
        
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
