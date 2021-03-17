import {plantList} from '../datas/plantList';
import '../styles/ShoppingList.css';

const ShoppingList = () => {
    return <ul className='tjh-plant-list'>
            {plantList.map((plant) => (
                <li className='tjh-plant-item' key={plant.id}>
                    {plant.name}{plant.isBestSale ? <span>🔥 </span> : null}
                    {plant.isSpecialOffer && <div className="tjh-sales">Sales</div>}
                </li>
            ))}
            </ul>
}

export default ShoppingList;