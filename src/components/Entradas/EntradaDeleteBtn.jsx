import React from 'react'
import { useContext } from 'react'
import { EntradasContext } from '../../contexts/EntradasContext'
import Button from 'react-bootstrap/Button';

function EntradaDeleteBtn({id}) {
    let { remove } = useContext(EntradasContext);
  return (
    <Button variant="outline-danger" onClick={ ev => remove(id) }>Eliminar registro</Button>
  )
}

export default EntradaDeleteBtn