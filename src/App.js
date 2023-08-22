import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import './style/BasicStyle.css';

import Profile from './views/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registros from './views/Registros';
import Estadistica from './views/Estadistica';
import ProtectedRoute from './components/ProtectedRoute';

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
    <>
        <div className="initContainer">
        <Navbar />
        <section>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/profile" exact element={<ProtectedRoute component={Profile}/>} />
            <Route path="/registros" exact element={<ProtectedRoute component={Registros} />} />
            <Route path="/estadistica" exact element={<ProtectedRoute component={Estadistica}/>} />
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );

}

export default App;
