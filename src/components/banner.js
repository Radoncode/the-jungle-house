import '../styles/Banner.css';
import logo from '../assets/logo.png';

const Banner = () => {
    const title = "The jungle house";
    return <div className='tjh-banner'>
                <div className='tjh-banner-row'>
                    <img src={logo} alt='the logo of the jungle house' className='tjh-logo'/>
                    <h1 className='tjh-title'>{title}</h1>
                 </div>        
            </div>

}

export default Banner;