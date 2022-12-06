import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './Pages/home/home';
import Footer from './components/footer/footer';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";

export default function App() {

    return (
      <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>
            <Footer />
    </BrowserRouter>
    );
  }
