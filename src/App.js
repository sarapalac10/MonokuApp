import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import './style/BasicStyle.css';

import Profile from './views/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registros from './views/Registros';
import Estadistica from './views/Estadistica';

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return(
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <BrowserRouter>
      <div className="initContainer">
        <Navbar />
        <>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/profile" exact element={<Profile/>} />
            <Route path="/registros" exact element={<Registros/>} />
            <Route path="/estadistica" exact element={<Estadistica/>} />
            {/* <Route path="/" exact element={</>} /> */}
          </Routes>
        </>
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
