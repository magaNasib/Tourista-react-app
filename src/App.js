import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import { Main } from "./pages/Main";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import DestinationsRoutes from "./components/DestinationsRoutes";
import DestinationRoutes from "./components/DestinationRoutes";
import City from "./pages/Destinations/City";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="faq" element={<FAQ/>}/>
          <Route path="destinations/*" element={<DestinationsRoutes />}>
            <Route path=":country" element={<DestinationRoutes />} >
                <Route path=":city" element={<City/>}/>
            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<div>error</div>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
