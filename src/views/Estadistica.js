import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Estadistica = () => {
    const [value, onChange] = useState(new Date(2023, 2, 12));

    const handleDateChange = (value) => {
        const date = new Intl.DateTimeFormat('es-CO').format(value);
        console.log(date)
    }

    return (
      <div>
        <Calendar onChange={handleDateChange} value={value} />
      </div>
    );
  }

  export default Estadistica