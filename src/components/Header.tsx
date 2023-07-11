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
    <div className="bg-success p-2 text-light bg-opacity-50">
      <MDBContainer className="" >
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
        <MDBRow className="justify-content-center">
        <MDBCol>
      <MDBCard alignment='center' className='mt-4 ' style={{ borderRadius: "15px" }}>
        <h3 className="p-0 mb-0 text-">About me</h3>
           <MDBCardBody className="text-muted mb-4 mt-4 d-flex justify-content-center">
     Passionate & curious junior developer with good problem solving skills. Enthusiastic, responsible & flexible person with ability to learn and collaborate in rapidly changing environments.
      Worked as a backend developer in India and now actively looking for a challenging role as a Fullstack developer.
     </MDBCardBody>
     </MDBCard>
     </MDBCol>
     </MDBRow>
      </MDBContainer>
      
    </div>
  );
};

export default Header;
