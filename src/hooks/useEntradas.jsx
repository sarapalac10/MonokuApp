import { useEffect, useState } from "react";
import { supabase } from '../utils/api'
import { createReview } from "../utils/chat";

function useEntradas(){
    const [entradas, setEntradas] = useState([]);
    const [error, setError] = useState('')
    const [show, setShow] = useState(false);


    useEffect(() => {
      setShow(false)
      setError('')
      getAll()
    }, [])

    function getAll() {
      supabase.from('emotion-entries').select().order('id').then(({data}) => setEntradas(data))
    }

    async function checkDate(date) {
      const { data } = await supabase.from('emotion-entries').select('*').eq('date', date)
      if (data.length > 0) {
        setShow(true)
        setError('Ya realizaste el registro de este día')
        return false
      }
      setShow(false)
      setError('')
      return true
    }

    function add(title, message, date, emotion) {
        const description = `Hoy me siento: ${message}` 
        createReview(message).then(response => {
          const analysis = response
          const entradaObj = { title, message: description, date, emotion, analysis: `Análisis: ${analysis}` };
          supabase.from('emotion-entries').insert(entradaObj).single().then(() => setEntradas([ entradaObj, ...entradas]))
        })
    }

    function remove(id){
      supabase
        .from('emotion-entries')
        .delete()
        .eq('id', id).then(() => {
          let newEntradas = entradas.filter( entrada => entrada.id !== id);
          setEntradas(newEntradas)
        })
    }

    return{
        entradas,
        add,
        remove,
        getAll,
        checkDate,
        error,
        show
    }
}

export default useEntradas;