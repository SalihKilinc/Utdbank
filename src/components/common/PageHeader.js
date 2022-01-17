import React from "react";

const PageHeader = (props) => {
  return (
    <header class="page-title page-bg" style={props.resim}>
      <div class="container">
        <div class="page-title-inner">
          <div class="section-title">
            <h1>{props.baslik}</h1>
            <ul class="page-breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>{props.konu}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
