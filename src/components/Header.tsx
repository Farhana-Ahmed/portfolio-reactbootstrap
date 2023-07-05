import React from "react";
import picture from '../assets/Pic_Farhana.jpeg'
import { MDBCardImage, MDBCardText, MDBTypography } from 'mdb-react-ui-kit';
const Header = () => {
  return (
    <div className="bg-light">
      <div className="mt-3 mb-4 d-flex justify-content-center ">
                  <MDBCardImage src={picture}
                    className="rounded-circle " fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4" className="d-flex justify-content-center text-success">Khashiya Farhana</MDBTypography>


    </div>
  );
};

export default Header;
