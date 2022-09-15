import React from "react";
import Layout from "./Layout";
import Usman from "./../image/team/img1.jpg";
import Rabia from "./../image/team/img2.jpg";
import Kashif from "./../image/team/img3.jpg";
import Usmanbg from "./../image/team/img-top1.jpeg";
import Rabiabg from "./../image/team/img-top2.jpeg";
import Kashifbg from "./../image/team/img-top3.jpeg";
import "./../CSS/team.css";
export default function Team() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Usmanbg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Usman} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">Muhammad Usman</h5>
                    <p className="card-text">Web Developer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                      <ul type="none">
                        <li className="text-warning text-center"> Web Design</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{ fontSize: "13px", color: "gray" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium
                          sequi explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                      <a href="https://github.com">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Kashifbg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Kashif} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">Kashif Aziz</h5>
                    <p className="card-text">Web Developer & Native App developer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                      <ul type="none">
                        <li className="text-warning text-center"> MS office</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{ fontSize: "13px", color: "gray" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium
                          sequi explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                      <a href="https://github.com">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Rabiabg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Rabia} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">Rabia Ijaz</h5>
                    <p className="card-text">Web Develope</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                      <ul type="none">
                        <li className="text-warning text-center">MS office</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{ fontSize: "13px", color: "gray" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium
                          sequi explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                      <a href="https://github.com">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
