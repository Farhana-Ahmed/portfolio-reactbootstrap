import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

interface FooterProps {
  image: string;
}

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href="farhana.khashiya@gmail.com" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>

          <a
            href="https://www.linkedin.com/in/farhanakhashiya/"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/Farhana-Ahmed"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </section>
    </MDBFooter>
  );

  // return <div className='icons-list'>
  // <a
  // className="faLinkedin app-link social-media-list"
  // href="https://www.linkedin.com/in/farhanakhashiya/"
  // target="_blank"
  // rel="noopener noreferrer"
  // >
  // <FontAwesomeIcon icon={faLinkedin} size="2x" />
  // </a>
  // <a
  // className="faGithub app-link social-media-list"
  // href="https://github.com/Farhana-Ahmed"
  // target="_blank"
  // rel="noopener noreferrer"
  // >
  // <FontAwesomeIcon icon={faGithub} size="2x" />
  // </a>

  // </div>
};

export default Footer;
