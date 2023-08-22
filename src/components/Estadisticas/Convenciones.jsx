import React from "react";
import "../../style/ConvencionesStyle.css";

function Convenciones() {
  return (
    <div className="container-convenciones">
        <table bordered size="sm" responsive="sm" style={{ width: 'fit-content'}}>
        <thead>
            <tr>
            <th>Escala</th>
            <th>Emoción</th>
            <th>Color</th>
            <th>Ícono</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>1</td>
            <td>Triste</td>
            <td><div id="circuloSad"></div></td>
            <td>
                <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Sad_Stage_3_ujr0jo.svg" alt="sad" />
            </td>
            </tr>
        </tbody>

        <tbody>
            <tr>
            <td>2</td>
            <td>Enojado</td>
            <td><div id="circuloAngry"></div></td>
            <td>
                <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Angry_Stage_3_uxmspl.svg" alt="Enojado" />
            </td>
            </tr>
        </tbody>

        <tbody>
            <tr>
            <td>3</td>
            <td>Meh</td>
            <td><div id="circuloMeh"></div></td>
            <td>
                <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Neutral_Stage_3_vzi7qd.svg" alt="Meh" />
            </td>
            </tr>
        </tbody>

        <tbody>
            <tr>
            <td>4</td>
            <td>Feliz</td>
            <td><div id="circuloFeliz"></div></td>
            <td>
                <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Happy_Stage_3_d0fszg.svg" alt="Feliz" />
            </td>
            </tr>
        </tbody>

        <tbody>
            <tr>
            <td>5</td>
            <td>Muy Feliz</td>
            <td><div id="circuloSuperFeliz"></div></td>
            <td>
                <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Super_Stage_3_rjide0.svg" alt="Muy feliz" />
            </td>
            </tr>
        </tbody>

        </table>
        <p className="texto-convenciones">Las convenciones te permiten tener una referencia para interpretar la información de la gráfica, identificar los estados en el calendario y sacar el máximo provecho de todas las características de Mood Master</p>
    </div>
  );
}

export default Convenciones;
