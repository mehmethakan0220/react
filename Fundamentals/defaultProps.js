import React from 'react';


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
//defaul props lar burada tanımlanır.

Card.defaul.Props={
  cardTitle: "Default Card Title";
}

// Propsların tiplerini belirtmek için.

Card.propTypes = {
  cardText: PropTypes.string
  // bir propsun required olarak işaretlemesini de yapabiliriz.
  updatedTime: PropTypes.number.isRequired
}









//
