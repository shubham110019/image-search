import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor()
    {
        super();
        this.state ={
            NavbarFixed:'',
        }
    }
    listenScrollEvent= () =>{
        if (window.scrollY > 50) {
            this.setState({NavbarFixed: 'NavbarFixed'})
          } else {
            this.setState({NavbarFixed: ''})
          }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.listenScrollEvent)
    }
 
    render() {
        return (
            <>
                <nav className={` navbar navbar-expand-lg ${this.state.NavbarFixed}`}>
                    <div className="container">
                        <div className="col-lg-3"> <Link className="navbar-brand" to="/">Imgpro</Link></div>
                       
                        <div className="col-lg-9 text-right">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/homw2">Home 2</Link>
                                </li>
                              
                               
                            </ul>

                        </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
