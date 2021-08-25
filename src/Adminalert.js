import React from "react"

export default class Adminalert extends React.Component{
    constructor(){
        super();
        this.state={
            loaded: false
        }
    }
    onLoadChange = ()=>{
        this.setState({loaded: !this.state.loaded});
        document.querySelector('.btn_load').style.display="none";
    }
    render(){
        console.log(this.state.loaded);
    return(
        <div>
        <div className="admin_header">
            <h1>{'Welcome Back Admin! Here are all the alerts.'}</h1>
        </div>
        <div className="admin_alerts">
            {this.state.loaded ? this.props.records.map((item,index)=>{ // If the load button is clicked, the loaded state is turned true. If loaded state is true, then all records are shown, if not then only the first nine records are shown.
                return(
                    <div className="alert_tab">
                    <div className="alert_tab_text">
                    <p>{item.client} was looking for a beetle nut store.</p>
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
                    <p>{item.client} was looking for a beetle nut store.</p>
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