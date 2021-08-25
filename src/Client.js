import React from 'react';
import Bad from './Bad';
import './styles/Client.css';
function Branches({users}){
    console.log(users)
    return(
        <div className="branches_container">
            {users.length !== 0 ? 
            users.map((item,index)=>{
                return(
                    <div className="branch_card">
                    <div className="branch_card_dp">
                        <img src={`https://robohash.org/${item.id}?bgset=bg2`} alt="dp" width="180px" height="180px"/>
                    </div>
                    <div className="branch_card_name">
                        <p>{item.Branch_Name}</p>
                    </div>
                    <div className="branch_card_details">
                        <p><strong>Branch ID- </strong>{item.id}</p>
                        <p><strong>Address- </strong>{item.Address}</p>
                        <p><strong>Supervisor- </strong>{item.Branch_Incharge}</p>
                        <p><strong>Contact - </strong>{item.Contact_Number}</p>
                    </div>
                    </div>
                )
            }) : <Bad/>}
        </div>
    )
}

export default Branches;