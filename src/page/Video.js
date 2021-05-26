import React, { Component } from "react";
import Submenu from "../component/Submenu";
import ReactPlayer from 'react-player';

export default class Video extends Component {
    constructor()
    {
        super();
        this.state = {
            videopath:'',
            videothum:'',
        }
    }
    componentDidMount()
    {
        fetch("https://api.pexels.com/videos/videos/"+this.props.match.params.id, {
            headers: {
              Authorization:
                "563492ad6f9170000100000114dca29c13414211aae2fd85d7b4b742",
            },
          }).then((resq) => {
            resq.json().then((res) => {
              console.log(res);
              this.setState({videopath:res.video_files[0],
                videothum:res.image,
            })
            });
          });
    }
  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <Submenu name={this.props.match.params.id} check={true} />
        <h1>video page</h1>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 offset-md-3">

            <ReactPlayer url={this.state.videopath.link}  loop={true} controls={true}  width='100%'
          height='100%'/>

        
            </div>
          </div>
        </div>
      </>
    );
  }
}
