import '../style/NavbarStyle.css';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCalendarDays, faUser, faChartLine,  faHouse } from '@fortawesome/free-solid-svg-icons'

const elementRegistro = <FontAwesomeIcon icon={faFileLines} />
// const elementCalendario = <FontAwesomeIcon icon={faCalendarDays} />
const elementUser = <FontAwesomeIcon icon={faUser} />
const elementEstadistica = <FontAwesomeIcon icon={faChartLine} />
const elementInicio = <FontAwesomeIcon icon={faHouse} />

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Mood Master <img className='logo-navbar' src='https://res.cloudinary.com/dez9y1otk/image/upload/v1692394945/MonokuApp/logo-sin-fondo-bg_b1qkop.png' alt=''/>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <ul>
          <li>
            <a href="/">{elementInicio}</a>
          </li>
          <li>
            <a href="/registros">{elementRegistro}</a>
          </li>
          <li>
            <a href="/estadistica">{elementEstadistica}</a>
          </li>
          <li>
            <a href="/profile">{elementUser}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}