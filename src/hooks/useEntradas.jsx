import { useEffect, useState } from "react";
import { supabase } from '../utils/api'
import { createReview } from "../utils/chat";

function useEntradas(){
    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
      getAll()
    }, [])

    function getAll() {
      supabase.from('emotion-entries').select().order('id').then(({data}, error) => {
        console.log('Data: ', data)
        console.log('Error: ', error)
        setEntradas(data)
      })
    }

    function add(title, message, date, emotion) {
        const entradaObj = { title, message, date, emotion };
        // createReview(message).then(response => console.log(response))
        supabase.from('emotion-entries').insert(entradaObj).single().then((data, error) => {
          console.log('Data: ', data)
          console.log('Error: ', error)
        })
        setEntradas([ entradaObj, ...entradas]);
    }

    function remove(id){
      console.log(id)
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
        getAll
    }
}

export default useEntradas;