import '../styles/Header.css';
import logo from '../images/icon.svg'
import cameraicon from '../images/camera.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="app-header">
            <div className="div-logo">
                <img id="logo" src={logo} alt="logo" />
                <h3>Instaclone</h3>
            </div>
            <div className="div-cameraicon">
                <Link to="/posts/create"><img id="cameraicon" src={cameraicon} alt="cameraicon"/></Link>
            </div>
        </div>
    )
}