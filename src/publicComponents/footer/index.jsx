import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

import "./footer.css";

class Footer extends Component {

  render() {
    return (
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="footer-copyright text-center text-md-left">
          <MDBRow>
            <MDBCol md="12" style={{ width: "100%", textAlign: "center" }}>
              <a href="/" style={{ color: "#888888", fontFamily: "'Lobster', cursive" }} className="title">Tripinterest</a>
              <br /><br />
              <MDBIcon fab icon="github" /><a href="https://github.com/Hui0820" style={{ color: "#888888", fontFamily: "'Poppins', sans-serif" }} className="github">&nbsp;&nbsp;Tripinterest&nbsp;&nbsp;&nbsp;</a>
              <MDBIcon far icon="envelope" /><a href="mailto: hui.sun1926@gmail.com" style={{ color: "#888888", fontFamily: "'Poppins', sans-serif" }} className="email">&nbsp;&nbsp;Email: tripinterest@gmail.com</a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />

        <div style={{width: "100%", textAlign: "center"}}>
          <a href="#" className="icon"><MDBIcon fab icon="linkedin-in" size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="#" className="icon"><MDBIcon fab icon="instagram" size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="#" className="icon"><MDBIcon fab icon="facebook-f" size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="#" className="icon"><MDBIcon fab icon="twitter" size="2x" /></a>
        </div>

        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a> Tripinterest </a>
          </MDBContainer>
          <br/>
        </div>
      </MDBFooter>
    );
  }

}

export default Footer;