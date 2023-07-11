import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import React from 'react'
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Skills from '../components/Skills';
import OverviewList from '../components/OverviewList';

const Home = () => {
  return (
    <div className='' >
      <MDBCard alignment='center' className='mt-4 bg-info bg-opacity-50'>
           <MDBCardBody className="text-muted mb-4 mt-4 d-flex justify-content-center">
     Passionate & curious junior developer with good problem solving skills. Enthusiastic, responsible & flexible person with ability to learn and collaborate in rapidly changing environments.
      Worked as a backend developer in India and now actively looking for a challenging role as a Fullstack developer.Skills include Java,Javascript/Typescript,React,HTML,CSS,TDD,CI/CD,Agile,kanban.
     </MDBCardBody>
     </MDBCard>
     <OverviewList />
     {/* <Skills/>
      */}
     {/* <MDBCard alignment='center'>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
    </MDBCard> */}
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