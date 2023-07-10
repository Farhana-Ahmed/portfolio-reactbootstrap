import React from "react";
import { titles } from "../components/Utils/Constants";
import { Card, Col, Container, Row } from "react-bootstrap";
import backend from "../assets/backend.jpeg";
import frontend from "../assets/frontend.jpeg";
import other from "../assets/tools.jpeg";

// interface OverviewProps {
//     titles:string[]
// }

const OverviewList = () => {
  return (
    <div className="p-3">
      <h4 className="d-flex text-center">Tools and Technologies</h4>
      <Container className="p-4 bg-dark mt-4 mb-4">
        <Row>
          {/* {titles.map((title) => ( */}
          <Col xs={12} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src={backend} />
                <Card.Title>Backend</Card.Title>
                <Card.Text>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Java</li>
                    <li className="list-group-item">Spring,Springboot</li>
                    <li className="list-group-item">Javascript/Typescript</li>
                    <li className="list-group-item">Node/Express</li>
                    <li className="list-group-item">Hibernate</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src={backend} />
                <Card.Title>Frontend</Card.Title>
                <Card.Text>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Redux</li>
                    <li className="list-group-item">HTML5</li>
                    <li className="list-group-item">CSS3</li>
                    <li className="list-group-item">Styled components</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src={other} />
                <Card.Title>Others</Card.Title>
                <Card.Text>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      PostgreSQL,MySQL,MongoDB
                    </li>
                    <li className="list-group-item">Git,Bit Bucket</li>
                    <li className="list-group-item">Jest/Mocha/JUnit</li>
                    <li className="list-group-item">Docker</li>
                    <li className="list-group-item">Figma</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col xs={12} md={4}>
            {titles.map((title) => (
              <>
                <Card className="cards" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))}
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default OverviewList;
