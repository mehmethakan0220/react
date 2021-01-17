import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false
    };

    //constructor ve render fonksiyonlarının this kullanmasına izin varken bizim oluşturduğumuz fonksiyonlar this kullanamıyor.
    //Bu durumda this binding kavramı ortaya çıkar. Fonkisyonun, contsructor un this nesnesini kullanmasını sağlıyoruz.
    //showMore fonksiyonu contructorun  veya renderin içerisinde tanımlanırsa okumayı zorlarştırır. Ondan dolay bu şekilde yaparız.
    this.showMore = this.showMore.bind(this);
  }
  showMore() {
    console.log(this.state.showContent);
    this.setState({showContent: !this.state.showContent});
  }
  //arrow function ile yaparsak binding yapmamıza gerek yok çünkü this üst scopetan referans alır.

  showMoreWithArrow = () => {
    this.setState({showContent: !this.state.showContent});
  };

  componentDidMount() {
    console.log("Component mount edildi.");
  }

  componentDidUpdate() {
    console.log("Component update edildi");
  }

  render() {
    //render metodu setSate tarafından trigger edilir.
    return (
      <div>
        <button
          className="btn btn-primary w-100"
          onClick={this.showMoreWithArrow}
        >
          {this.props.children.props.cardTitle}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
