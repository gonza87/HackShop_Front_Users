import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardsPerson() {
  return (
    
    <div className='container'>
    <div className="row mt-2" >
      <div className='col-6'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, debitis consequuntur, tempore accusamus excepturi omnis sint dignissimos ex nesciunt incidunt consectetur esse? Aut consectetur deserunt ipsum eaque, consequuntur culpa quia.</p>
      </div>
     <div className='col-6 d-flex justify-content-end'>   
    
    <Card style={{ width: '18rem' }}  >
      <Card.Img src="/public/HACHSHOP.png" style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>Mario Silveira</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
        <ListGroup.Item>Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Red social</Card.Link>
        <Card.Link href="#">Red social</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  >
      <Card.Img src="/public/HACHSHOP.png" style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>Mario Silveira</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
        <ListGroup.Item>Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Red social</Card.Link>
        <Card.Link href="#">Red social</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  >
      <Card.Img src="/public/HACHSHOP.png" style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>Mario Silveira</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Junior Full Stack Developer</ListGroup.Item>
        <ListGroup.Item>Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Red social</Card.Link>
        <Card.Link href="#">Red social</Card.Link>
      </Card.Body>
    </Card>
    </div>
   
    </div>
    </div>
    
  );
}

export default CardsPerson;