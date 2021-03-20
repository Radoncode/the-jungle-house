import CareScale from "./CareScale"
import '../styles/PlantItem.css';

const PlantItem = ({name, cover, id, light, water}) => 
{   
    const handleClick = (e) => {
        console.log(e);
    }
    return <li className='tjh-plant-item' key={id} onClick={handleClick}>
                <img src={cover}  alt={`${name} cover`} className='tjh-plant-item-cover' />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
                
           </li>
}

export default PlantItem;