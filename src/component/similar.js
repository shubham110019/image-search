import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class similar extends Component {
    constructor()
    {
        super();
        this.state ={
            simi:'',
            datatype:''
        }
    }
    componentDidMount()
    {

        console.log(typeof(this.props.type))
               
        

        fetch(
            "https://api.unsplash.com/search/collections?page=2&per_page=20&query=" +
              this.props.type +
              "&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
          ).then((resqq) => {
            resqq.json().then((resultq) => {
            //   console.log(resultq.results);
              this.setState({
                simi: resultq.results,
              });
            });
          });


       
    }
    topcl(){
        window.scrollTo(0, 100);
    }
 
  render() {
    return (
      <>
        <section className="photos">
          {this.state.simi
            ? this.state.simi.map((itemm, i) => (
                <Link to={"/photot/" + itemm.cover_photo.id} key={i} onClick={()=>{this.topcl()}}>
                  <img
                    src={itemm.preview_photos[0].urls.regular}
                    key={i}
                    alt={itemm.preview_photos[0].urls.regular}
                  />
                </Link>
              ))
            : null}
        </section>
      </>
    );
  }
}

