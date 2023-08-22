import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

function EntradaDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        locale="es"
        value={startDate}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          console.log(date);
        }}
      />
    );
}

export default EntradaDatePicker