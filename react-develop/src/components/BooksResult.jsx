import { memo } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import useSearch from "../hooks/useSearch";

const BooksResult = memo((props) => {

  const { items } = props;

  return (
    <div className="overflow-auto">
      <div className="m-4 p-0" style={{ padding: '0px'}}>
      <ListGroup horizontal className="" >
        {items.map((item, index) => {
          return (
            <Container fluid>
            <Row>
              <Col>

          
          <div key={index} className="m-2 border border-2 border-secondary">
              <ListGroup.Item style={{ width: '18rem',}}>
              {/* <Card className="p-2" style={{ width: '18rem',}}> */}
              <Card.Img 
                variant="top" 
                src={item.image}  
                alt={item.description} 
                className="border border-3 border-secondary"
                style={{height: '15rem'}}
              />
              <Card.Body className="m-2">
                <Card.Title style={{height: '5rem'}}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{height: '5rem'}}>
                  {(item.description).length > 45 
                    ? item.description.substr(0, 45) + ' ........' 
                    : item.description
                  }
                </Card.Text>
                <Button 
                  className="me-2"
                  href={item.link}
                  variant="primary"
                >
                  詳細ページ
                </Button>
                <Button 
                  onClick={localStorage.setItem(item.title, JSON.stringify(item))} 
                  variant="success"
                >
                  保存
                </Button>
              </Card.Body>
            {/* </Card> */}
            </ListGroup.Item>
            
            
          </div>
          </Col>
          </Row>
          </Container>)
        })}
        </ListGroup>
      </div>
    </div>
  )
})
export default BooksResult;