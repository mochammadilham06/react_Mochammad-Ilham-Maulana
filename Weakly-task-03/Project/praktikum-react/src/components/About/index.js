import React, { useEffect } from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets//bootstrap/css/style.css";
import AboutPict from "../../assets/img/about.png";

import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/features/user/userSlice";
import CONST from "../../utils/constant";

const About = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user);
  console.log(userList);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row about mb-5 pt-5">
            <div className="col text-center">
              <h2>ABOUT</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <img
                src={AboutPict}
                height={475}
                width={700}
                className="img-fluid"
                alt="About"
              />
            </div>
            <div className="col-lg-5">
              <h3 className="pKanan">
                This is <span>US</span>
              </h3>
              <p>
                We are a group of 8 of advanced Web Programming courses, from
                the task given by lecturers as PWL teachers, we carry the theme
                of the group portfolio website consisting of 5 sections, the
                number of our members is 4 people with different jobdesc from
                each personnel
              </p>
              <a href="#" className="btn btn-secondary button">
                Join Us !
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container py-5 ">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto col-md-12 col-sm-12 col-12">
              <h2>Team</h2>
              <p>This is Our Team</p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            {userList.map((user) => {
              return (
                <div
                  key={user.id}
                  className="col-lg-6 col-md-12 col-sm-12 col-12"
                >
                  <div className="row">
                    <div className="teamimg col-lg-5 col-md-6 col-sm-6 col-6">
                      <img
                        src={user.avatar}
                        className="img-fluid"
                        alt="Mochammad Ilham Maulana"
                      />
                    </div>
                    <div className="teamstatus col-lg-7 col-md-6 col-sm-6 col-6 pt-3">
                      <h5>{user.name}</h5>
                      <small>LEADER</small>
                      <p className="p1">
                        Hidup itu sederhana. Goreng, angkat, lalu tiriskan
                      </p>
                      <span>
                        <i className="team fab fa-facebook" />
                      </span>
                      <span>
                        <i className="team fab fa-instagram" />
                      </span>
                      <span>
                        <i className="team fab fa-google-plus" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
