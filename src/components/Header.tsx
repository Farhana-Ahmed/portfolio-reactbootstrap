import React from "react";
import picture from "../assets/Pic_Farhana.jpeg";
import {
  
  MDBCard,
  MDBCardBody,
  MDBCardImage,

  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
const Header = () => {
  return (
    // <div className="bg-success p-2 text-light bg-opacity-50">
    //   <div className="mt-3 mb-4 d-flex justify-content-center ">
    //     <MDBCardImage
    //       src={picture}
    //       className="rounded-circle "
    //       fluid
    //       style={{ width: "100px" }}
    //     />
    //   </div>
    //   <MDBTypography tag="h4" className="d-flex justify-content-center">
    //     Khashiya Farhana
    //   </MDBTypography>
    //   <MDBTypography tag="h5" className="d-flex justify-content-center">
    //     Fullstack Developer
    //   </MDBTypography>
    // </div>
    <div className="">
      <MDBContainer className="bg-success p-2 text-light bg-opacity-50" r>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={picture}
                      alt="profile picture"
                      fluid
                    />
                  </div>
                  <div className="ms-3">
                    <MDBCardTitle className="text-success">Khashiya Farhana</MDBCardTitle>
                    <MDBTypography tag="h6">FullStack Developer</MDBTypography>
                    <MDBTypography tag="h6">Amsterdam</MDBTypography>
                    <MDBTypography tag="h6">Netherlands</MDBTypography>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Header;
