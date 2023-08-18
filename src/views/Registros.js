import React from 'react'
import EntradasList from "../components/Entradas/EntradasList";
import EntradaForm from "../components/Entradas/EntradaForm";
import '../style/FormEntradaStyle.css'
import { EntradasProvider } from '../contexts/EntradasContext';

const Registros = () => {
  return (
    <div className="divEntrada">
      <EntradasProvider>
        <EntradaForm />

        <EntradasList />
      </EntradasProvider>

    </div>
  )
}

export default Registros