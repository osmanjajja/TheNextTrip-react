import React from "react";
import Layout from "./Layout";
import aboutimg from "./../image/about.png";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-4 mb-2">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border rounded shadow">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-success">
                  <i class="fa fa-tree" aria-hidden="true"></i> WHO ARE WE
                </h5>
                <img src={aboutimg} class="img-thumbnail" alt="" />
                <div class="card-body m-0 p-0">
                  <p className="text-justify p-3">
                    NextTrip is a Pakistani Tourism website created by university Students. It is the design to get
                    place in the top tourism website in Pakistan. NextTrip started as a fy project, but intended to
                    become a major project. NextTrip will provide many tourism packages in upcoming years. NextTrip aim
                    to have a website with different language support for different regions of the country and also
                    allowing booking to places of different countries also in future. Most travel websites charges
                    international charges for certain booking when opting internationally, but we aim to provide booking
                    free of any international charges across the globe without a single penny. We also aim to have
                    branches in many countries and we shall provide facility of user interest as per their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border rounded shadow">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase">
                  <i class="fa fa-history" aria-hidden="true"></i> Our History
                </h5>
                <div class="card-body m-0 p-0 mt-2">
                  <a href="#" className="p-3 font-weight-bold text-warning">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> ---2022---
                  </a>
                  <p className="text-justify p-3">
                    NextTrip website is created by Usman Saleem, Rabia Ijaz, Kashif Aziz and Muhammad Usman (Students at
                    UMT),credited with developing the predecessor to online website. The motivation behind is Most
                    travel websites charges for certain booking when opting internationally, but we aim to provide
                    booking free of any charges across the country and in future across the globes without a single
                    penny. We also aim to have branches in many countries and so we provide quality services to our
                    costumers.
                    <br />
                    <a href="#" className="font-weight-bold text-info">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> --- December 2022---
                    </a>
                    <br />
                    In the december 2022, We Plan to Deploy the website to various platform including github pages and
                    heroku <br />
                    <a href="#" className="font-weight-bold text-success">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> --- April 2022---
                    </a>
                    <br />
                    In the April 2022, NextTrip website complete development using MERN Stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border rounded shadow">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i> Developers
                </h5>
                <div class="card-body m-0 p-0">
                  <ul className="list-group">
                    <li className="list-group-item text-info h6 font-weight-bold">Muhammad Usman</li>
                    <li className="list-group-item text-info h6 font-weight-bold">Kashif Aziz</li>
                    <li className="list-group-item text-info h6 font-weight-bold">Rabia Ijaz</li>
                    <li className="list-group-item text-danger h6 font-weight-bold text-center">
                      <Link to="./team" className="text-danger">
                        <i class="fa fa-link" aria-hidden="true"></i>
                        &nbsp;&nbsp; meet our team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
