import React from "react";
import Adminalert from "./Adminalert";
import './styles/Admin.css';
import './styles/Client.css';
import Axios from 'axios';

//Initialize Admin class
class Admin extends React.Component{
    constructor(){
        super();
        this.state = {
            password: '',
            route: '',
            records: []
        }
    }
    onChange = (e)=>{
        this.setState({password:e.target.value})
    }
    onPassSubmit = ()=>{
        Axios.get('http://localhost:3001/admin')
            .then(response=>this.setState({records:response.data}));
        if(this.state.password==='admin'){
            this.setState({route: 'signedin'})
        }
        else{
            alert('Incorrect password. Please Try again.')
        }
    }
    render(){
    return(
        <div>
        {this.state.route==='signedin'?<Adminalert records={this.state.records}/> :
        <div className="admin_wrapper">
            <h1>Log In to Administrator Account.</h1>
            <div className="admin_form">
            <div className="input_box">
                <input type="password" placeholder="Admin password" onChange={this.onChange}/>
                <span>Enter Admin Password</span>
            </div>
            <div className="admin_submit">
                <button className="client_submit" style={{background:"blue"}} onClick={this.onPassSubmit}>submit</button>
            </div>
            </div>
        </div>}
        </div>
    )
} }

export default Admin;