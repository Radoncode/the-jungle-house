import '../App.css';
import Banner from './banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import PlantCategories from "./PlantCategories";
import Footer from './Footer';

function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <PlantCategories />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
