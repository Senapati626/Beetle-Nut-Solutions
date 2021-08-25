import Axios from "axios";
import React from "react";
import {BiFoodTag} from 'react-icons/bi';
import './styles/Alert.css';
import {FiPhoneCall} from 'react-icons/fi';
import {RiStore3Fill} from 'react-icons/ri';
import {GrUserManager} from 'react-icons/gr';

class Alerts extends React.Component{
    constructor(){
        super();
        this.state = {
            notifications: [],
            user: [],
            count: ''
        }
    }
    componentDidMount(){
        //Post request for all the alerts for branch.
        Axios.post('http://localhost:3001/alerts',{
            username: this.props.username
        })
        .then(response=>this.setState({notifications:response.data}));
        // Post request for the count of number of alerts.
        Axios.post('http://localhost:3001/count',{
            username: this.props.username
        })
        .then(response=>this.setState({count:response.data[0].count}));
        // Post request for branch details.
        Axios.post('http://localhost:3001/details',{
            username: this.props.username
        })
        .then(response=>this.setState({user: response.data[0]}));
    }
    render(){
        const {user,count} = this.state;
        return(
            <div className="alert_wrapper">
            <div className="alert_count">
                <p>{count}</p>
            </div>
            <div className="alert_wrapper_left">
                <div className="branch_img_holder">
                    <img src={`https://robohash.org/${user.id}?bgset=bg1`} alt='dp'/>
                </div>
                <div className="branch_header_holder">
                <h1>{user.Branch_Name}</h1>
                </div>
                <div className="branch_details_holder">
                    <p><strong>Branch ID- </strong>{user.id}</p>
                    <p><BiFoodTag/> {user.Insitution_Name}</p>
                    <p><RiStore3Fill/> {user.Address}</p>
                    <p><GrUserManager/> {user.Branch_Incharge}</p>
                    <p><FiPhoneCall/> {user.Contact_Number}</p>
                </div>
            </div>
            <div className="alert_wrapper_right">
            {this.state.notifications.length!==0 ?
            <div className="alerts">
                <div className="alert_tab" style={{background: 'cyan'}}>
                <div className="alert_tab_text">
                <p>{this.state.notifications[0].client} was looking for a beetle nut store in your location.</p>
                </div>
                <div className="alert_tab_cont">
                <p><strong>Email- </strong>{this.state.notifications[0].client_email}</p>
                <p>{this.state.notifications[0].date}</p>
                </div>
                </div>
                {this.state.notifications.slice(1,this.state.notifications.length).map((item,index)=>{
                    return(
                        <div className="alert_tab">
                        <div className="alert_tab_text">
                        <p>{item.client} was looking for a beetle nut store in your location.</p>
                        </div>
                        <div className="alert_tab_cont">
                        <p><strong>Email- </strong>{item.client_email}</p>
                        <p>{item.date}</p>
                        </div>
                        </div>
                    )
                })}
            </div> : <div style={{textAlign:"center"}}><h1>No alerts to show.</h1></div>
            }
            </div>
            </div>
        )
    }
}
export default Alerts