import '../App.css';
import Banner from './banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import PlantCategories from "./PlantCategories";
import QuestionForm from './QuestionForm';

function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <QuestionForm />
      <PlantCategories />
      <ShoppingList />
    </div>
  );
}

export default App;
