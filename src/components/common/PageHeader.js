import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ resim, konu, baslik }) => {
  return (
    <header
      className="page-title page-bg"
      style={{ backgroundImage: `url(${resim})` }}
    >
      <div className="container">
        <div className="page-title-inner">
          <div className="section-title">
            <h1>{baslik}</h1>
            <ul className="page-breadcrumbs">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>{konu}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
