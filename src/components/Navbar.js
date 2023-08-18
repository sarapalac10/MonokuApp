import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCalendarDays, faUser, faChartLine, faBars, faHouse } from '@fortawesome/free-solid-svg-icons'

const elementRegistro = <FontAwesomeIcon icon={faFileLines} />
const elementCalendario = <FontAwesomeIcon icon={faCalendarDays} />
const elementUser = <FontAwesomeIcon icon={faUser} />
const elementEstadistica = <FontAwesomeIcon icon={faChartLine} />
const menuHamburg = <FontAwesomeIcon icon={faBars} />
const elementInicio = <FontAwesomeIcon icon={faHouse} />


const Navbar = () => {
  return (
    <div>
      {menuHamburg}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Inicio {elementInicio}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/registros">Registros {elementRegistro}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Estadísticas {elementEstadistica}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Calendario {elementCalendario}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile" eventKey="link-2">Perfil {elementUser}</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  )
}

export default Navbar