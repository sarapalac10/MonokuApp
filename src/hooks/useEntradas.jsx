import { useState, useEffect } from "react";

const LOCALSTORAGE_KEY = 'MIAPP.list'

function useEntradas(){
    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
        let localStorageSavedEntradas = localStorage.getItem(LOCALSTORAGE_KEY)
      if(localStorageSavedEntradas){
        setEntradas(
            JSON.parse(localStorageSavedEntradas)
        )
      }
    }, [])

    useEffect(() => {
        if(!entradas || entradas.length === 0) return
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(entradas))

    }, [entradas])

    function add(title, message, date){
        const id= Date.now();
        const entradaObj = { title, message, date, id};
        setEntradas([ entradaObj, ...entradas]);
    }

    function remove(id){
      let newEntradas = entradas.filter( entrada => entrada.id !== id);
      setEntradas(newEntradas)
    }

    return{
        entradas,
        add,
        remove
    }
}

export default useEntradas;