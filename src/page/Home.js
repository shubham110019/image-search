import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchbox from "../component/Searchbox";
import InfiniteScroll from "react-infinite-scroll-component";
import loadImg from '../img/loading-buffering.gif';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      name: null,
      count: 10,
      imageid: null,
      pagecout: 1,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos?page=1&per_page=" +
        this.state.count +
        "&order_by=latest&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
    ).then((resq) => {
      resq.json().then((result) => {
        console.log(result);
        this.setState({
          image: result,
        });
      });
    });
  }

  fetchImages = () => {
    this.setState({
      pagecout: this.state.pagecout + 1,
      count: this.state.count + 10,
    });
    fetch(
      "https://api.unsplash.com/photos?page=1&per_page=" +
        this.state.count +
        "&order_by=latest&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
    ).then((resq) => {
      resq.json().then((result) => {
        console.log(result);
        this.setState({
          image: result,
        });
      });
    });
  };

  render() {
   
    return (
      <>
        <div className="header">
          <div className="header-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <Searchbox />
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* <div className="subcat">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <Link to="/search/car">car</Link>
              </div>
              <div className="col-md-2">
                <Link to="/search/laptop">laptop</Link>
              </div>
            </div>
          </div>
        </div> */}

        
        <div className="container-fluid">
        <h2 className="homeh2">Free Stock Photos:</h2>
        <section className="photos">
          <InfiniteScroll
            dataLength={this.state.count}
            next={this.fetchImages}
            hasMore={true}
            loader={<img src={loadImg}/>}
          >
            {this.state.image
              ? this.state.image.map(
                  (item, i) => (
                    <Link to={"/photot/" + item.id}>
                      <img
                        src={item.urls.regular}
                        key={i}
                        alt={item.urls.thumb}
                      />
                    </Link>
                  )
                )
              : null}
          </InfiniteScroll>
        </section>
        </div>
      </>
    );
  }
}
