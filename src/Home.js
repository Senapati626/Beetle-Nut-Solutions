import React from 'react';
import Axios from 'axios';
import Branches from './Client';
import './styles/Client.css';
import {FcSearch} from 'react-icons/fc'; 

class Home extends React.Component{
    constructor(){
      super();
      this.state = {
        users: [],
        pin: '',
        name: '',
        email: '',
        route: ''
      }
    }
    onPinChange = (e) => {
      this.setState({pin: e.target.value})
    }
    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    onSubmit = () => {
      if(this.state.pin.length < 6){
        alert('A Pin Code should be of six characters.')
      }
      else if(!this.state.email.includes('@') && !this.state.email.includes('@')){
        alert('An email address must contain the characters @ and .')
      }
      else{
      Axios.post('http://localhost:3001/shows',{
        pin: this.state.pin
      })
      .then(response=>this.setState({users:response.data}))
      .then(this.setState({route: 'branches'}))
      Axios.post('http://localhost:3001/insert',{
        pin: this.state.pin,
        name: this.state.name,
        email: this.state.email
      })
      .then(response=>console.log(response))
    }}
    onSwitch = ()=>{
      this.setState({route: 'home'})
    }
    render(){
    return (
      <div className="client_wrapper">
          {this.state.route === 'branches'? <Branches users={this.state.users} pin={this.state.pin}/> :
          <div className="client_form">
          <div className="input_box">
          <input type="text" required="required" onChange={this.onNameChange} placeholder="Enter Full Name"/>
          <span>Enter your Name.</span>
          </div>
          <div className="input_box">
          <input type="email" required="required" onChange={this.onEmailChange} placeholder="Enter Contact Email"/>
          <span>Enter valid contact Email ID.</span>
          </div>
          <div className="input_box">
          <input type="text" required="required" onChange={this.onPinChange} maxLength="6" minLength="6" placeholder="Enter PIN"/>
          <span>Enter the PIN code of preferred location.</span>
          </div>
          <div className="input_box" style={{display:"flex",justifyContent:"center"}}>
          <button type="submit" onClick={this.onSubmit} className="client_submit">search beetlenut stores</button>
          </div>
          </div>}
          <img src='https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png' alt='' className="imgC" style={{top: '50%',left:'10%'}}/>
          <div className="switch_container">
          {this.state.route==='branches' ? 
          <div>
          <button onClick={this.onSwitch} className="btn_switch"><FcSearch/> Search for a different Location</button>
          </div> : <div></div>}
          </div>
    </div>
    );
    }
  }
  
  export default Home;
  