import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { EntradasContext } from '../../contexts/EntradasContext';
import { handleEmotion } from '../../utils/handleEmotions';
import '../../style/Fechas.css'

const handleDayWeek = (index) => {
  const days = {
    0:'Lunes',
    1:'Martes',
    2:'Miércoles',
    3:'Jueves',
    4:'Viernes',
    5:'Sábado',
    6:'Domingo'
  }

  return days[index]
}

const Grafico = () => {

  const { entradas } = useContext(EntradasContext)

  const formatDate = (date) => {
    const newDate = date.split('/')
    const [day, month, year] = newDate
    let newDay, newMonth
    newDay = day < 10 ?  `0${Number(day)}` :day
    newMonth = month < 10 ? `0${Number(month)}` : `${Number(month)}`
    return `${year}-${newMonth}-${newDay}`
  }

    const handleEntradas = () => {
      const newEntradas = entradas.map(entrada => {
        const day = new Date(formatDate(entrada.date)).getDay()
        const emotion = handleEmotion(entrada.emotion)
        return { name: handleDayWeek(day), emotion, index: day }
      }).sort((a, b) => a.index - b.index)
      return newEntradas
    }
    return (
        <>
            <h1 className='titulos-estadistica'>Gráfico</h1>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                width={700}
                height={300}
                data={handleEntradas()}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <XAxis dataKey="name" />
                <YAxis dataKey="emotion" type="number" domain={['dataMin', 'dataMax']} label={{ value: 'Emociones', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                <Tooltip />
                <Line type="monotone" dataKey="emotion" stroke="#9c1b9a" />
                </LineChart>
              </ResponsiveContainer>
            </div>
        </>
    );
}

export default Grafico
