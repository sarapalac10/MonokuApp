import React, { useContext } from 'react'
import Entrada from './Entrada';
import { EntradasContext } from '../../contexts/EntradasContext';
import '../../style/FormEntradaStyle.css'

const EntradasList = () => {
    const { entradas } = useContext(EntradasContext)
  return (
    <div className='entradas'>
        <p style={{textAlign: 'right'}}>Hasta ahora has hecho {entradas.length} entradas en tu diario.</p>
        {
          entradas.map(entrada =>
          <Entrada
            key={entrada.id}
            title={entrada.title}
            message={entrada.message}
            date={entrada.date}
            id={entrada.id}
            /> )
        }
    </div>
  )
}

export default EntradasList