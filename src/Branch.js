import Axios from 'axios';
import React from 'react';
import Alerts from './Alerts';
import './styles/Branch.css';
import './styles/Client.css';

class Branch extends React.Component{
constructor(){
    super();
    this.state = {
        username: '',
        password: '',
        route: 'signedout',
        alerts: []
    }
}
onUsernameChange = (e)=>{
    this.setState({username: e.target.value})
}
onPasswordChange = (e)=>{
    this.setState({password: e.target.value})
}
onSignIn = ()=>{
    Axios.post('http://localhost:3001/signin',{
        username: this.state.username,
        password: this.state.password
    })
    //If credentials given by user matches then route is changed to signedin, else alert is displayed.
    .then(response=>response.data.length ?  this.setState({route: 'signedin'}): alert('Incorrect Credentials'))
}
componentDidMount(){
    Axios.post('http://localhost:3001/alerts',{
        username: this.state.username
    })
    .then(response=>console.log(response));
}
render(){
    return(
        <div style={{width:'100%'}}>
            {this.state.route === 'signedin' ? <div><Alerts username={this.state.username}/></div> : 
            <div className="branch_form_container">
                <div className="branch_form_header">
                    <h1>Login for a Branch</h1>
                </div>
                <div className="branch_form">
                    <div className="input_box">
                    <input type="text" required="required" placeholder="Username" onChange={this.onUsernameChange}/>
                    <span>{'Enter Branch username.'}</span>
                    </div>
                    <div className="input_box">
                    <input type="password" required="required" placeholder="Password" onChange={this.onPasswordChange}/>
                    <span>{'Enter branch password.'}</span>
                    </div>
                    <div className="input_box" style={{display:"flex",justifyContent:"center"}}>
                    <button className="branch_submit" onClick={this.onSignIn}>submit</button>
                    </div>
                </div>
                <img src='https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png' alt='' className="imgC" style={{top: '20px',right:'20px'}}/>
            </div>}
        </div>
    )
}}

export default Branch;