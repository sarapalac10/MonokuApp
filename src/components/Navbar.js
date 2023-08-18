import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCalendarDays, faUser, faChartLine,  faHouse } from '@fortawesome/free-solid-svg-icons'
import { slide as Menu } from 'react-burger-menu';
import { FaBars } from 'react-icons/fa';

const elementRegistro = <FontAwesomeIcon icon={faFileLines} />
const elementCalendario = <FontAwesomeIcon icon={faCalendarDays} />
const elementUser = <FontAwesomeIcon icon={faUser} />
const elementEstadistica = <FontAwesomeIcon icon={faChartLine} />
const elementInicio = <FontAwesomeIcon icon={faHouse} />

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="App-header">
      <div className="navbar">
        <FaBars className="menu-icon" onClick={handleMenuToggle} />
      </div>
      <Menu isOpen={menuOpen} customBurgerIcon={false}>
        <Nav.Link href="/">Inicio {elementInicio}</Nav.Link>
        <Nav.Link href="/registros">Registros {elementRegistro}</Nav.Link>
        <Nav.Link eventKey="link-1">Estadísticas {elementEstadistica}</Nav.Link>
        <Nav.Link eventKey="link-2">Calendario {elementCalendario}</Nav.Link>
        <Nav.Link href="/profile" eventKey="link-2">Perfil {elementUser}</Nav.Link>
      </Menu>
    </header>
  );
}

export default Navbar;

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="navbar">
//             <FaBars className="menu-icon" onClick={handleMenuToggle} />
//             <h1>Responsive Navbar</h1>
//           </div>
//           <Menu isOpen={this.state.menuOpen} customBurgerIcon={false}>
//             <Nav.Link href="/">Inicio {elementInicio}</Nav.Link>
//             <Nav.Link href="/registros">Registros {elementRegistro}</Nav.Link>
//             <Nav.Link eventKey="link-1">Estadísticas {elementEstadistica}</Nav.Link>
//             <Nav.Link eventKey="link-2">Calendario {elementCalendario}</Nav.Link>
//             <Nav.Link href="/profile" eventKey="link-2">Perfil {elementUser}</Nav.Link>
//             <a href="/contact" className="menu-item">Contact</a>
//           </Menu>
//         </header>
//       </div>
//     );
//   }


// export default Navbar