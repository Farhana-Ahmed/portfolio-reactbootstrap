import React from "react";
import picture from '../assets/Pic_Farhana.jpeg'
import { MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
const Header = () => {
  return (
    <div className="bg-success p-2 text-light bg-opacity-50">
      <div className="mt-3 mb-4 d-flex justify-content-center ">
                  <MDBCardImage src={picture}
                    className="rounded-circle " fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4" className="d-flex justify-content-center">Khashiya Farhana</MDBTypography>
                <MDBTypography tag="h5" className="d-flex justify-content-center">Fullstack Developer</MDBTypography>



    </div>
  );
};

export default Header;
