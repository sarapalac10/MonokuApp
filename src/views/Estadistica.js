import React from 'react'
import Fechas from '../components/Estadisticas/Fechas'
import Grafico from '../components/Estadisticas/Grafico'
import { EntradasProvider } from '../contexts/EntradasContext'
import Convenciones from '../components/Estadisticas/Convenciones'
import '../style/ConvencionesStyle.css'

const Estadistica = () => {
  return (
    <EntradasProvider>
        <Convenciones/>
        <div className='contenedor-estadisticas'>
          <Fechas />
          <Grafico/>
        </div>
    </EntradasProvider>
  )
}

export default Estadistica