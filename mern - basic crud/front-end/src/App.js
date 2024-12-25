import './App.css';
import Addstud from './Component/Addstud';
import Allstud from './Component/Allstud';
import Editstud from './Component/Editstud';
import Navbar from './Component/Navbar';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Viewstud from './Component/Viewstud';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Allstud/>}></Route>
        <Route path='/addstud' element={<Addstud/>}></Route>
        <Route path='/editstud/:id' element={<Editstud/>}></Route>
        <Route path='/viewstud/:id' element={<Viewstud/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
