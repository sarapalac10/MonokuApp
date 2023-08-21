import React, { useContext, useEffect, useState }  from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../style/Fechas.css'
import { EntradasContext } from '../../contexts/EntradasContext';

const Fechas = () => {
    const [ fechas, setFechas] = useState([]);
    const [ rango, setRango] = useState([])
    const { entradas } = useContext(EntradasContext)

    useEffect(() => {
      if (entradas.length > 0) {
        const newEntradas = entradas.map(entrada => {
          const newDate = entrada?.date.split('/')
          const [day, month, year] = newDate
          let newDay, newMonth
          newDay = day < 10 ?  `0${Number(day)}` :day
          newMonth = month < 10 ? `0${Number(month)}` : `${Number(month)}`
          return { ...entrada, index: Number(day), range: `${year}-${newMonth}-${newDay}` }
        }).sort((a, b) => a.index - b.index)
        setFechas(newEntradas)

        const startDate = newEntradas?.at(0)?.date
        const endDate = newEntradas?.at(-1)?.date

        const startDateSplit = startDate.split('/')
        const endDateSplit = endDate.split('/')
        const [startDay, startMonth, startYear] = startDateSplit
        const [endDay, endMonth, endYear] = endDateSplit

        setRango([
          new Date(Number(startYear), Number(startMonth) - 1, Number(startDay)),
          new Date(Number(endYear), Number(endMonth) - 1, Number(endDay))
        ])
      }
    }, [entradas])

    const handleDateColor = ({ date, view }) => {
      const color = fechas.find(fecha => date.toDateString() === new Date(fecha.range).toDateString())
      return color?.emotion
    }

    return (
      <div>
        <h1>Calendario</h1>
        <h3>Así podrás ver la evolución diaria de tus emociones.</h3>

        <Calendar tileClassName={handleDateColor} value={rango} />
      </div>
    );
  }

export default Fechas;