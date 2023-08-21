import React from 'react'
import Fechas from '../components/Estadisticas/Fechas'
import Grafico from '../components/Estadisticas/Grafico'
import { EntradasProvider } from '../contexts/EntradasContext'

const Estadistica = () => {
  return (
    <EntradasProvider>
      <div>
        <Fechas />
      </div>
        <Grafico/>
    </EntradasProvider>

  )
}

export default Estadistica