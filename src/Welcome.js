import {Link} from 'react-router-dom';
import './styles/Welcome.css';
import {FcShop,FcSearch,FcBusinessman} from 'react-icons/fc';
export default function Welcome(){
    return(
        <div className="welcome">
            <div className="welcome_header">
                <h1>Beetle Nut Solutions</h1>
                <p>Your only friend for scavenging beetle nuts.</p>
            </div>
            <div className="link_wrapper">
                <Link to="/client" className="links purple"><FcSearch/><p>Search for Beetlenuts</p></Link>
                <Link to="/branch" className="links green"><FcShop/><p>Login for a Branch</p></Link>
                <Link to="/admin" className="links blue"><FcBusinessman/><p>Login as Administrator</p></Link>
            </div>
            <img src='https://i.pinimg.com/originals/1e/af/60/1eaf6010c2544841b63b9d34705827df.jpg' alt='' className="imgA"/>
            <div className="imgB">
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/2008-1226-Pasadena-003-CityHall.jpg' alt=''/>
                <p>pasadena</p>
            </div>
            <img src='https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png' alt='' className="imgC"/>
            </div>
    )
}