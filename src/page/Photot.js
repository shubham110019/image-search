import React, { Component } from 'react'
import Submenu from "../component/Submenu";
import like from "../img/like.svg";
import { Link } from "react-router-dom";
import Similar from '../component/similar';
export default class Photot extends Component {
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
            simi:'',
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

    componentDidUpdate(){
        fetch('https://api.unsplash.com/photos/'+this.props.match.params.id+'?client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d').then((resq) => {
            resq.json().then((re) => {
                    // console.log(re);   
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
        // console.log(this.state.tag);
       
        return (
            <>
            <Submenu name="sd" check={false} title={this.state.imag.alt_description} download={this.state.imag.downloads}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-4">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="imagebox">
                                    <Link to={`../user/${this.state.user.username}`}>
                                    <img src={this.state.profile_image.medium} className="user-img"/>
                                    </Link>
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
                 
                <div className="container">

                    <div className="row mt-4">
                        <div className="col-md-4 offset-md-4 my-3">
                            <img src={this.state.ig.regular} className="img-fluid"/>

                            
                        </div>

                        <div className="col-md-12 mt-4">
                        <h3 className="homeh2">Tags :</h3>
                        <ul className="tag">
                                {
                                    this.state.tag?
                                        this.state.tag.map((item,i)=>
                                        <li><Link to={"/search/" + item.title}>{item.title}</Link></li>
                                        )
                                    :null
                                }
                            </ul>
                        </div>


                        <div className="col-md-12 mt-4">

                            <h3 className="homeh2">Similar Photos :</h3>

                       
                                {
                                   
                                    this.state.tagsearch.title?
                                    <Similar type={this.state.tagsearch.title}/>
                                    :null
                                }
                            

                           
                        </div>


                    </div>
                </div>
            </>
        )
    }
}
