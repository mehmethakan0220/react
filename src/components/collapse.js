import React from "react";

const Collapse = props => {
  return (
    <div>

        <a
          className="btn btn-primary w-100"
          data-bs-toggle="collapse"
          href={"#".concat(props.href)}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Resimlerin başlıkları
        </a>

      <div className="collapse show" id={props.href}>
        <div className="card card-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
