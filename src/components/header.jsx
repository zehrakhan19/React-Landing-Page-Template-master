import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-0 intro-text">
                <h3>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h3>
                <h3>
                  {props.data ? props.data.subTitle : "Loading"}
                  <span></span>
                </h3>
                <p>
                  Harnessing the power of AI, we envision a future
                  <br /> where innovation knows no bounds.
                </p>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
