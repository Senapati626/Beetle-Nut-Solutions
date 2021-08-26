import Axios from "axios";
import React from "react";
import {BiFoodTag} from 'react-icons/bi';
import './styles/Alert.css';
import {FiPhoneCall} from 'react-icons/fi';
import {RiStore3Fill} from 'react-icons/ri';
import {GrUserManager} from 'react-icons/gr';
import {io} from 'socket.io-client';

class Alerts extends React.Component{
    constructor(){
        super();
        this.state = {
            notifications: [],
            user: [],
            count: '',
            notify: [],
            arr: []
        }
    }
    componentDidMount(){
        const socket = io('https://beetle-nuts-backend123.herokuapp.com');
        socket.on('connection');
        socket.on(('alert'),(data)=>{
            this.setState({notify: data})
        });
        //Post request for all the alerts for branch.
        Axios.post('https://beetle-nuts-backend123.herokuapp.com/alerts',{
            username: this.props.username
        })
        .then(response=>this.setState({notifications:response.data}));
        // Post request for the count of number of alerts.
        Axios.post('https://beetle-nuts-backend123.herokuapp.com/count',{
            username: this.props.username
        })
        .then(response=>this.setState({count:response.data[0].count}));
        // Post request for branch details.
        Axios.post('https://beetle-nuts-backend123.herokuapp.com/details',{
            username: this.props.username
        })
        .then(response=>this.setState({user: response.data[0]}));
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.notify !== this.state.notify){
            if(this.state.user.Pincode_covered.includes(this.state.notify[2])){
                this.setState({arr: this.state.arr.concat([this.state.notify])})
            }
        }
    }
    render(){
        const {user,count,arr} = this.state;
        console.log(arr)
        return(
            <div className="alert_wrapper">
            <div className="alert_count">
                <p>{count + arr.length}</p>
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
                <div className="alert_wrappers">
                {arr.length > 0 ? arr.reverse().map((item,index)=>{
                    return(
                        <div className="alert_tab recent_alert" style={{background:'rgb(248, 166, 228)'}}>
                        <div className="alert_tab_text">
                        <p><strong>{item[0].toUpperCase()}</strong> was just looking for a beetle nut store within a location you deliver.</p>
                        </div>
                        <div className="alert_tab_cont">
                        <p><strong>Email- </strong>{item[1]}</p>
                        </div>
                        </div>
                    )
                }) : <div></div>}
                </div>
                <div className="alert_wrappers">
                {this.state.notifications.map((item,index)=>{
                    return(
                        <div className="alert_tab">
                        <div className="alert_tab_text">
                        <p><strong>{item.client.toUpperCase()}</strong> was looking for a beetle nut store in your location.</p>
                        </div>
                        <div className="alert_tab_cont">
                        <p><strong>Email- </strong>{item.client_email}</p>
                        <p>{item.date}</p>
                        </div>
                        </div>
                    )
                })}
                </div>
            </div> : <div style={{textAlign:"center"}}><h1>No alerts to show.</h1></div>
            }
            </div>
            </div>
        )
    }
}
export default Alerts