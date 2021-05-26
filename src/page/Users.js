import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      userName:'',
      userImg:'',
    };
  }


  fetchapi = () =>{
    fetch(
        "https://api.unsplash.com/users/" +
          this.props.match.params.id +
          "/photos?client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
      ).then((resq) => {
        resq.json().then((res) => {
          console.log(res);
          this.setState({
            image: res,
            userName:res[0].user,
            userImg:res[0].user.profile_image,
          });
        });
      });
  }

  userApi = () =>{


   
  }
  componentDidMount() {
  this.fetchapi();

  }

  render() {
;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 pt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="imagebox">
                 
                      <img
                        src={this.state.userImg.medium}
                        className="user-img"
                      />
                     
                   
                    <span>{this.state.userName.name}</span>
                    <p>{this.state.userName.bio}</p>
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <button className="buton">
                   {this.state.userName.total_photos}  TOTAL PHOTOS
                  </button>
                  {/* <button className="buton don"> Free Download</button> */}
                  <a
                    href={ + "?force=true"}
                    download
                    className="buton don"
                  >
                    Free Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h2 className="homeh2">Users Images:</h2>
          <section className="photos">
            {this.state.image
              ? this.state.image.map((item, i) => (
                  <Link to={"/photot/" + item.id}>
                    <img
                      src={item.urls.regular}
                      key={i}
                      alt={item.urls.thumb}
                    />
                  </Link>
                ))
              : null}
          </section>
        </div>
      </>
    );
  }
}
