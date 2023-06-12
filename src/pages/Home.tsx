import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
       <Row>
        <Col>
          <Card className='my-3'>
            <Card.Body>
            <h1>Welcome to My Portfolio</h1>
              <p>Here is some information about me:</p>
              <ul>
                <li>Name: Khashiya Farhana</li>
                <li>Location: Amsterdam</li>
                <li>Skills: React, Node.js, MongoDB</li>
              </ul>
            </Card.Body>
          </Card> 
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home