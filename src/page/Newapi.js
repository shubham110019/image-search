import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
export default class Newapi extends Component {
    constructor()
    {
        super();
        this.state = {
            image: null,
            name: null,
            count: 20,
            imageid: null,
            pagecout: 1,
          };
    }
    componentDidMount(){
        fetch("https://api.pexels.com/v1/curated?page=1&per_page="+this.state.count,{
            headers: {
              Authorization: "563492ad6f9170000100000114dca29c13414211aae2fd85d7b4b742"
            }
          }).then((resq)=>resq.json().then((res)=>{
            console.log(res.photos);
            this.setState({
                image:res.photos,
              })
          }))
    }

    fetchImages = () => {
        this.setState({
          pagecout: this.state.pagecout + 1,
          count: this.state.count + 1,
        });

        fetch("https://api.pexels.com/v1/curated?page=1&per_page="+this.state.count,{
            headers: {
              Authorization: "563492ad6f9170000100000114dca29c13414211aae2fd85d7b4b742"
            }
          }).then((resq)=>resq.json().then((res)=>{
            console.log(res.photos);
            this.setState({
                image:res.photos,
              })
          }))
      };

      
    render() {
        return (
            <div>
                <section className="photos">
          <InfiniteScroll
            dataLength={this.state.count}
            next={this.fetchImages}
            hasMore={true}
            loader={<h4>Loading..</h4>}
          >
            {this.state.image
              ? this.state.image.map(
                  (item, i) => (
                    <Link to={"/photo/" + item.id}>
                      <img
                        src={item.src.medium}
                        key={i}
                        alt="new"
                      />
                    </Link>
                  )
                )
              : null}
          </InfiniteScroll>
        </section>
            </div>
        )
    }
}
