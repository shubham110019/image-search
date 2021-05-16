import React, { Component } from 'react'

export default class Submenu extends Component {
    render() {
        return (
            <>
                
                <div className="submenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                       
                        {
                        this.props.check?
                        <h2> {this.props.name}</h2> 
                        :<div>

                            <h2>{  this.props.title }</h2>
                                <p>Download: {this.props.download}</p>
                        </div>
                        
                      
                        
                        }
                          
                        
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
