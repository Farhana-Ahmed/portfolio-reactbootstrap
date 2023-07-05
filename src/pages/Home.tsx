import { MDBCardText } from 'mdb-react-ui-kit';
import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
           <MDBCardText className="text-muted mb-4 green">
     Passionate & curious junior developer with good problem solving skills. Enthusiastic, responsible & flexible person with ability to learn and collaborate in rapidly changing environments.
      Worked as a backend developer in India and now actively looking for a challengin role as a Fullstack developer.Skills include Java,Javascript/Typescript,React,HTML,CSS,TDD,CI/CD,Agile,kanban.
     </MDBCardText>
     <Skills/>
      {/* <Container>
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
      </Container> */}
    </div>
  )
}

export default Home