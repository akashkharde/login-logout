import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Register from './Component/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Component/Login';
import Home from './Component/Home';
import Header from './Component/Header';
import Profile from './Component/Profile';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Register/> }/>
        <Route path = '/login' element = { <Login/>}/>
        <Route path = '/home' element = {<div> <Header/> <Home/></div>  }/>
        <Route path = '/profile' element = {<div> <Header/> <Profile/></div>  }/>
        <Route path = '/contactUs' element = {<div> <Header/> <ContactUs/></div>  }/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
