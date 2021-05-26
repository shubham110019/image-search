import React, { Component } from 'react'
import searchimg from '../img/loupe.svg';
import { withRouter,Redirect } from 'react-router-dom';
class Searchbox extends Component {
    constructor()
    {
        super();
        this.state={
            searchbox:'',
            error:''
        }
        this.myRef = React.createRef();
    }
    submit = (e) =>{
        e.preventDefault();
        if(this.myRef.current.value === '')
        {
            this.setState({
                error: 'fill the input',
            }) 
        }
        else{
            this.setState({
                error: '',
            }) 
            this.props.history.push("search/"+this.myRef.current.value);
        }
      
    }
 
    render() {
        const formsd = {
            position:"relative",
        };
        const Searchbtn ={
            position: "absolute",
            top: "7px",
            right: "7px",
            background: "transparent",
            border: "unset",
        };
        
        return (
            <>
            <h2>The best free stock photos & videos shared by talented creators.</h2>
            <form onSubmit={this.submit} style={formsd}>
            <input type="text" placeholder="Search free high-resolution photos" className="form-control" ref={this.myRef}/>
            <p style={{color:'white'}}>{this.state.error}</p>
            <button type="submit" style={Searchbtn}><img src={searchimg} style={{height:'30px'}}/></button>
            </form>
            </>
        )
    }
}
export default withRouter(Searchbox);