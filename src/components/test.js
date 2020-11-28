import React, { Component } from 'react'

class Test extends Component {
  constructor (props){
    super(props);// super() yazarsak this.props kullanamayiz. super(props) yazmali
    this.state = {
      a:10
    }
    console.log("constructor");// ilk calisir
  }
  componentDidMount() {// mount edildikten hmeen sonra
    console.log("componentDidMount");
    // API istekleri burada yapilir genelde
    this.setState({
      a : 20 // did mount isleminden sonra yine set state yaptigimiz icin yine render calisir.
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate"); // en son state degistikten sonra yani update olduktan sonra calisir.
  }
  shouldComponentUpdate(nextProps, nextState) {// yazmazsak true döner ve render edilir.false yazarsak compnent i render etmez.
    console.log("shouldComponentUpdate");
    return true; // bu true oldugunda render ve component did update calistirilir.false ise render edilmez ve update calismaz.
  }



  render() {
    console.log("Render");// mount edilirken calisir
    // state degistirme islemlerini kesinliikle burda render icinde yapmiyoruz. render sadece JSX formatinda degisiklik icin kulllanilmali
    return (
      <div>

      </div>
    )
  }
}
export default Test;
