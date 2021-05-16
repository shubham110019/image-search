import React, { Component } from 'react'
import Submenu from "../component/Submenu";
export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state={
            imag:'',
            ig:'',
            down:'',
            tag:[],
            user:'',
            profile_image:'',
            tagsearch:'',
        }
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/photos/'+this.props.match.params.id+'?client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d').then((resq) => {
            resq.json().then((re) => {
                    console.log(re);   
                    this.setState({
                        imag:re,
                        ig:re.urls,
                        down:re.links,
                        tag:re.tags,
                        tagsearch:re.tags[0],
                        user:re.user,
                        profile_image:re.user.profile_image,
                    })           
                   
            })
        })
    }

    render() {
        console.log(this.state.ig.regular);
        return (
            <>

<Submenu name="sd" check={false} title={this.state.imag.alt_description}/>

<div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-4">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="imagebox">
                                    <img src={this.state.profile_image.medium} className="user-img"/>
                               
                                <span>{this.state.user.name}</span> 
                                </div>
                            
                            </div>
                            <div className="col-lg-6 text-right">
                                <button className="buton">{this.state.imag.likes}  likes</button>
                                {/* <button className="buton don"> Free Download</button> */}
                                <a href={this.state.down.download +"?force=true"} download className="buton don">Free Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                {/* <div className="container">

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <img src={this.state.ig.regular} className="img-fluid"/>
                        </div>

                        <div className="col-md-6">
                            <h2>{this.state.imag.alt_description}</h2>

                            <p>Download: {this.state.imag.downloads}</p>
                            <p>Date: {this.state.imag.created_at}</p>

                            <a href={this.state.down.download +"?force=true"} download >download</a>
                        </div>

                    </div>
                </div> */}

                <div className="container">

                    <div className="row mt-4">
                        <div className="col-md-4 offset-md-4">
                            <img src={this.state.ig.regular} className="img-fluid"/>

                            
                        </div>


                        <div className="col-md-12 mt-4">

                            <h3 className="homeh2">Similar Photos :</h3>

                            {this.state.tagsearch.title}
                        </div>


                    </div>
                </div>
        
            </>
        )
    }
}
