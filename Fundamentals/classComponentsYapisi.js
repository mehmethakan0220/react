import React from "react";

//not: class component yapısında gelen propslara this ile erişmek zorunludur.
//bu şekilde kullanım hatalıdır.
class Card extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}
// Aşağıdaki gibi this kullanılması gerekir.


class Card extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}
