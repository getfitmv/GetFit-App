import React from "react";

export default function ServiceCard() {
  return (
    <div className="grid-container-service">
      <div className="pic-serivce">
        <div className="wrapper-diamond">
          <ul className="grid--featured">
            <li>
              <div className="show show5" />
            </li>
            <li>
              <div className="show show6" />
            </li>
            <li>
              <div className="show show7" />
            </li>
            <li>
              <div className="show show8" />
            </li>
          </ul>
        </div>
      </div>

      <div className="serv1">
        <div id="item-list" className="first-serv">
          <ul>
            <li>
              <div className="icon london">
                <i className="fas fa-chart-line" />
              </div>
              <div className="dimond-detail">
                <span>London</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="serv3">
        <div id="item-list" className="">
          <ul>
            <li>
              <div className="icon london ">
                <i className="fas fa-dumbbell" />
              </div>
              <div className="dimond-detail">
                <span>London</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="serv2">
        {" "}
        <div id="item-list" className="mar-top">
          <ul>
            <li>
              <div className="icon london icon-right">
                <i className="fas fa-users" />
              </div>
              <div className="dimond-detail">
                <span>London</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="serv4">
        {" "}
        <div id="item-list" className="mar-top">
          <ul>
            <li>
              <div className="icon london icon-right">
                <i className="fas fa-book-reader" />
              </div>
              <div className="dimond-detail">
                <span>London</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
