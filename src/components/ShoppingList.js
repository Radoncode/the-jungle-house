import {plantList} from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

const ShoppingList = () => {
    return <div>
                <ul className='tjh-plant-list'>
                    {plantList.map((plant) => (
                            <PlantItem name={plant.name}
                                        cover={plant.cover}
                                        key={plant.id}
                                        light={plant.light}
                                        water={plant.water}
                            />
                    ))}
                </ul>
        </div>
}

export default ShoppingList;