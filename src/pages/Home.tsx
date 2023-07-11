import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import React from 'react'
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Skills from '../components/Skills';
import OverviewList from '../components/OverviewList';

const Home = () => {
  return (
    <div className='' >
      
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