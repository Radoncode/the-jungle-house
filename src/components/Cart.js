import '../styles/Cart.css';
const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const fleurPrice = 15;

    return <div className='tjh-cart'>
            <ul>
                <li> Monstera : {monsteraPrice}€</li>
                <li> Lierre : {lierrePrice}€</li>
                <li> Flower bouquet : {fleurPrice}€</li>
            </ul>
            <p>Total flowers : {monsteraPrice + lierrePrice + fleurPrice}€</p>
           </div>
}


export default Cart;