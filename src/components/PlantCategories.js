import {plantList} from '../datas/plantList';

const PlantCategories = () => {
   const PlantCategories =  plantList.map((plant) => (plant.category));
   const PlantCategoriesFiltered = Array.from(new Set(PlantCategories));
   return     <ul>
                 {PlantCategoriesFiltered.map((category, index) => (
                    <li key={index}>{category}</li>
                 ))}
               </ul>
   
}
export default PlantCategories;