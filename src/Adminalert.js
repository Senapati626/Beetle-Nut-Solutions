import React from "react";
import {io} from 'socket.io-client';


export default class Adminalert extends React.Component{
    constructor(){
        super();
        this.state={
            loaded: false,
            notify: [],
            arr: []
        }
    }
    onLoadChange = ()=>{
        this.setState({loaded: !this.state.loaded});
        document.querySelector('.btn_load').style.display="none";
    }
    componentDidMount(){
        const socket = io('http://localhost:3001');
        socket.on('connection');
        socket.on(('alert'),(data)=>{
            this.setState({notify: data})
        });
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.notify !== this.state.notify){
            this.setState({arr: this.state.arr.concat([this.state.notify])});
            console.log('ok')
        }
    }

    render(){
    const {arr,loaded} = this.state;
    console.log(arr);
    return(
        <div>
        <div className="admin_header">
            <h1>{'Welcome Back Admin! Here are all the alerts.'}</h1>
        </div>
        <div className="admin_alerts">
            {arr.length > 0 ? arr.reverse().map((item,index)=>{
                return(
                    <div className="alert_tab recent_alert" style={{background:"wheat"}}>
                    <div className="alert_tab_text">
                    <p><strong>{item[0]}</strong> was just looking for a beetle nut store under PIN - {item[2]}</p>
                    </div>
                    <div className="alert_tab_cont">
                    <p><strong>Email- </strong>{item[1]}</p>
                    </div>
                    </div>)
            }) : <div></div>}
        </div>
        <div className="admin_alerts">
            {loaded ? this.props.records.map((item,index)=>{ // If the load button is clicked, the loaded state is turned true. If loaded state is true, then all records are shown, if not then only the first nine records are shown.
                return(
                    <div className="alert_tab">
                    <div className="alert_tab_text">
                    <p><strong>{item.client}</strong> was looking for a beetle nut store under PIN - {item.pin}</p>
                    </div>
                    <div className="alert_tab_cont">
                    <p><strong>Email- </strong>{item.client_email}</p>
                    <p>{item.date}</p>
                    </div>
                    </div>
                ) 
            }):
                this.props.records.slice(0,9).map((item,index)=>{
                return(
                    <div className="alert_tab">
                    <div className="alert_tab_text">
                    <p><strong>{item.client}</strong> was looking for a beetle nut store under PIN - {item.branch_pin}</p>
                    </div>
                    <div className="alert_tab_cont">
                    <p><strong>Email- </strong>{item.client_email}</p>
                    <p>{item.date}</p>
                    </div>
                    </div>
                )
            })}
        </div>
        <div className="btn_load_wrapper">
            <button onClick={this.onLoadChange} className="btn_load">show all alerts</button>
        </div>
        </div>
    )}
}