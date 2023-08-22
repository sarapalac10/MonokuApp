import React from 'react'
import '../../style/FormEntradaStyle.css'
import EntradaDeleteBtn from './EntradaDeleteBtn'
import Badge from 'react-bootstrap/Badge';
import { handleImages } from '../../utils/handleImages';

const Entrada = ({title, message, id, date, emotion, analysis}) => {
  return (
    <article className='entradaIndividual d-flex p-3 rounded'>
      <header className='d-flex justify-content-end'>
        <Badge bg="light" text='dark'>{date}</Badge>
      </header>
      <main className='d-flex flex-column justify-content-between mt-3'>
        <div className='d-flex flex-row align-items-center justify-content-between'>
          <h2 className='tituloEntrada m-0'>{title}</h2>
          <img src={handleImages(emotion)} alt='Emotion' />
        </div>
        <p className='cuerpoEntrada'>{message}</p>
        <p className='cuerpoAnalisis'>{analysis}</p>
      </main>
      <footer>
        <EntradaDeleteBtn id={id} />
      </footer>
    </article>
  )
}

export default Entrada