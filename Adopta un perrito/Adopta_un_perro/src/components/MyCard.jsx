import Boton from './Boton';
import Card from 'react-bootstrap/Card';

function MyCard({image, title, btnColor, text, description}) {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Boton btnColor={btnColor} text={text}></Boton>
            </Card.Body>
        </Card>
    );
}   

export default MyCard;