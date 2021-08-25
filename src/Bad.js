import './styles/Client.css';
import simpson from './styles/simpson.png';

export default function Bad(){
    return(
        <div className="bad_wrapper">
            <div className="bad_left">
                <h1>bad bad luck !</h1>
                <h2>no donut for you</h2>
            </div>
            <div className="bad_right">
            <img src={simpson} alt="" width="250px" height="250px"/>
            </div>
        </div>
    )
}