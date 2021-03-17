import '../styles/Banner.css';
import logo from '../assets/logo.png';
import Recommendation from './Recommendation.js';

const Banner = () => {
    const title = "The jungle house";
    return <div className='tjh-banner'>
                <div className='tjh-banner-row'>
                    <h1 className='tjh-title'>{title}</h1>
                    <img src={logo} alt='the logo of the jungle house' className='tjh-logo'/>
                 </div>
                 <Recommendation />               
            </div>

}

export default Banner;