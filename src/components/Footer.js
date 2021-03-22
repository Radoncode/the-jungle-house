import { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        return (!inputValue.includes('@')) ? alert('il ne contient pas @') : null;
    }


    return <footer className='tjh-footer' onBlur={handleBlur}>
                <div className='tjh-footer-elem'>
                    Pour les passionnées de plantes 🌿 🌴 🌳
                </div>
                <div className='tjh-footer-elem'>Laissez-nous votre email : </div>
                <input type="email" value={inputValue} onChange={handleInput}/>
    </footer>
}

export default Footer;