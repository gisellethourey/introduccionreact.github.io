import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({source, name, description, color, textBadge }) => {
return (
  <>
  <div className='order'>
  <Card style={{ width: "18rem", display: "flex", margin: "10px", textAlign:"center" }}>
<Card.Img variant="top" src={source}/>
<Card.Body>
<Card.Title>{name}</Card.Title>
   <Card.Text>
        {description}
    </Card.Text>
    <h1>
      </h1>
      <Tags color ={color} textBadge= {textBadge} />
</Card.Body>
</Card>
</div>
</>
)
}
export default MyCard;
