import {Link} from 'react-router-dom';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
export default function Navbar(){
    return(
        <div className="navbar">
        <Link to="/" exact><p><FaArrowAltCircleLeft/></p></Link>
        </div>
    )
}