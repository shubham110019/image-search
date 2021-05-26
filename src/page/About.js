import React, { Component } from "react";
import { Link } from "react-router-dom";
import Submenu from "../component/Submenu";
export default class About extends Component {
  constructor() {
    super();
    this.state = {
      video: "",
    };
  }
  componentDidMount() {
    fetch("https://api.pexels.com/videos/popular?per_page=200", {
      headers: {
        Authorization:
          "563492ad6f9170000100000114dca29c13414211aae2fd85d7b4b742",
      },
    }).then((resq) => {
      resq.json().then((res) => {
        console.log(res.videos);
        this.setState({ video: res.videos });
      });
    });
  }
  render() {
    return (
      <>
        <Submenu name="videos" check={true} />

        <div className="container-fluid">
          <h2 className="homeh2">Free Stock Videos:</h2>
          <section className="photos">

                {
                    this.state.video?
                        this.state.video.map((item,i)=>
                        <Link to={"video/"+item.id} key={i}>
                        <img src={item.image} alt={item.image}/>
                        </Link>
                        )

                    :null
                }

          </section>
        </div>
      </>
    );
  }
}
