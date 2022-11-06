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
  const pageSize = 8;

  return (

    <div className='app_con' >
         
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Register/> }/>
        <Route path = '/login' element = { <Login/>}/>
        <Route path = '/home' element = {<div> <Header/> <Home pageSize={pageSize} /></div>  }/>
        <Route path = '/profile' element = {<div> <Header/> <Profile/></div>  }/>
        <Route path = '/contactUs' element = {<div> <Header/> <ContactUs/> </div>  }/>
      </Routes>
      </BrowserRouter>
      <div>
      {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
