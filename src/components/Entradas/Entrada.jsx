import React from 'react'
import '../../style/FormEntradaStyle.css'
import EntradaDeleteBtn from './EntradaDeleteBtn'

const Entrada = ({title, message, id, date}) => {
  return (
    <div className='entradaIndividual'>
      <h2 className='tituloEntrada'>{title}</h2>
      <p className='cuerpoEntrada'>{message}</p>
      <p>{date}</p>
      <EntradaDeleteBtn id={id} />
    </div>
  )
}

export default Entrada