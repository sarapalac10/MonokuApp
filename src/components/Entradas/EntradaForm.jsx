import React, { useContext, useState } from 'react'
import '../../style/FormEntradaStyle.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import EmotionGroup from '../Emotions/EmotionGroup';
import { EntradasContext } from '../../contexts/EntradasContext';
import Alert from 'react-bootstrap/Alert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

function EntradaForm() {
    const { add, checkDate, error, show } = useContext(EntradasContext);
    const [startDate, setStartDate] = useState(new Date());
    const [emotion, setEmotion] = useState('');

    const handleEmotionSelected = (event) => setEmotion(event.target.value)

    return (
        <Formik
            initialValues={{ title: '', message: '', date: '' }}
            validate={ values => {
                const errors = {};
                if(!values.message){
                    errors.message = "El mensaje es requerido";
                }if(!values.title){
                    errors.title = "El título es requerido"
                }
                return errors;
            }}
            onSubmit={
                async (values, { setSubmitting }) => {
                    const date = new Intl.DateTimeFormat('es-CO').format(startDate);
                    const isValidDate = await checkDate(date)
                    if (isValidDate) {
                        add(values.title, values.message, date, emotion);
                        values.title = '';
                        values.message = '';
                    } else {
                        setSubmitting(false);
                    }
                }
            }
        >
            {
                ({ isSubmitting })=>(
                    <Form className='form'>
                        <div>
                            <label htmlFor="title">Título</label>
                            <Field type="text" name="title" placeholder="Título de la entrada" />
                            <ErrorMessage name='title' component="p" />
                        </div>
                        <div>
                            <label htmlFor="date">Ingresa la fecha de tu nuevo registro:
                            <DatePicker
                                locale="es"
                                value={startDate}
                                selected={startDate}
                                onChange={(date) => { setStartDate(date)}}
                            />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="message">Entrada del día</label>
                            <Field as='textarea' name="message" placeholder="¿Cómo te sientes hoy"/>
                            <ErrorMessage name='message' component="p" />
                        </div>
                        <>
                            <EmotionGroup handleEmotion={handleEmotionSelected} />
                        </>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Guardando...' : 'Guardar Entrada'}
                        </button>
                        {show && <Alert variant="danger" >
        <Alert.Heading>Error</Alert.Heading>
        <p>{error}</p>
      </Alert> }
                        
                    </Form>
                )
            }
        </Formik>
)
}

export default EntradaForm