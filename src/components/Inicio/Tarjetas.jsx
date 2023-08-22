import Card from 'react-bootstrap/Card';
import '../../style/TarjetasStyle.css'

function Tarjetas() {
  return (
    <div className='tarjetas-container'>
      <Card className='tarjetas-individuales'>
        <Card.Img variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692652628/MonokuApp/Untitled_2_kd3wqb.png" />
        <Card.Body>
          <Card.Title>Beneficios Emocionales</Card.Title>
          <Card.Text>
          Llevar un registro de tus emociones te permite identificar patrones y tendencias en cómo te sientes.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='tarjetas-individuales'>
        <Card.Img variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692652626/MonokuApp/Untitled_1_m4sbii.png" />
        <Card.Body>
          <Card.Title>Progreso Personal</Card.Title>
          <Card.Text>
          Llevar un registro constante de tus emociones te brinda una visión clara de tu progreso personal. Puedes observar cómo tus sentimientos cambian con el tiempo y cómo enfrentas los desafíos.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='tarjetas-individuales'>
        <Card.Img variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1692652628/MonokuApp/Untitled_3_zcku9d.png" />
        <Card.Body>
          <Card.Title>Gestión Emocional</Card.Title>
          <Card.Text>
          Mantener un registro de tus emociones es una herramienta poderosa para la gestión emocional. Te permite rastrear lo que te desencadena y cómo respondes.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  );
}

export default Tarjetas;