import React from "react";

import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets//bootstrap/css/style.css";
const Footer = () => {
  return (
    <div>
      <footer id="foot" className="page-footer bg-dark">
        <div className="headfoot">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-12 text-center">
                <a href="https://web.facebook.com/?_rdc=1&_rdr">
                  <i className="fab fa-facebook fa-2x text-white mr-5" />
                </a>
                <a href="mailto:mochammadilhamz1006@gmail.com">
                  <i className="fab fa-google-plus-g fa-2x text-white mr-5" />
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <i className="fab fa-linkedin fa-2x text-white mr-5" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram fa-2x text-white mr-5" />
                </a>
                <a href="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center text-md-left mt-5 text-light">
          <div className="row">
            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">About</h6>
              <hr
                className="bg-secondary mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "125px", height: "2px" }}
              />
              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat blanditiis magnam provident numquam quod autem a
                perspiciatis laborum asperiores iste, assumenda, quisquam,
                ratione similique dolores harum! Minima blanditiis at fugit!
              </p>
            </div>
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Information</h6>
              <hr
                className="bg-secondary mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "125px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#">This Link</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Information</h6>
              <hr
                className="bg-secondary mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "125px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#">This Link 2</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link 2</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link 2</a>
                </li>
                <li className="my-2">
                  <a href="#">This Link 2</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Social Media</h6>
              <hr
                className="bg-secondary mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "125px", height: "2px" }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  {" "}
                  <a href="https://web.facebook.com/?_rdc=1&_rdr">
                    <i className="fab fa-facebook fa-2x text-white mr-3" />
                    Mochammad Ilham Maulaan
                  </a>
                </li>
                <li id="move" className="my-2">
                  {" "}
                  <a href="mailto:mochammadilhamz1006@gmail.com">
                    <i className="fab fa-google-plus-g fa-2x text-white mr-2" />
                    Mochammad Ilham Maulana
                  </a>
                </li>
                <li className="my-2">
                  {" "}
                  <a href="https://www.linkedin.com/feed/">
                    <i className="fab fa-linkedin fa-2x text-white mr-3" />
                    Mochammad Ilham Maulana
                  </a>
                </li>
                <li className="my-2">
                  {" "}
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram fa-2x text-white mr-3" />
                    @moch.ilham10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <p>
              © Copyright
              <a href="GroupPwl">By Mochammad Ilham Maulana</a>
            </p>
            <p>Designed By Mochammad Ilham Maulana</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
