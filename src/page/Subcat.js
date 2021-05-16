import React, { Component } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Submenu from "../component/Submenu";
export default class Subcat extends Component {
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
      "https://api.unsplash.com/search/collections?page=1&per_page=" +
        this.state.count +
        "&query=" +
        this.props.match.params.id +
        "&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
    ).then((resq) => {
      resq.json().then((result) => {
        console.log(result.results);
        this.setState({
          image: result.results,
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
      "https://api.unsplash.com/search/collections?page=1&per_page=" +
        this.state.count +
        "&query=" +
        this.props.match.params.id +
        "&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
    ).then((resq) => {
      resq.json().then((result) => {
        this.setState({
          image: result.results,
        });
      });
    });
  };

  render() {
    return (
      <>
        <Submenu name={this.props.match.params.id} check={true}/>

        <section className="photos">
          <InfiniteScroll
            dataLength={this.state.count}
            next={this.fetchImages}
            hasMore={true}
            loader={<h4>Loading..</h4>}
          >
            {this.state.image
              ? this.state.image.map((item, i) => (
                  <Link to={"/photot/" + item.cover_photo.id}>
                    <img
                      src={item.preview_photos[0].urls.regular}
                      key={i}
                      alt={item.preview_photos[0].urls.regular}
                    />
                  </Link>
                ))
              : null}
          </InfiniteScroll>
        </section>
      </>
    );
  }
}
