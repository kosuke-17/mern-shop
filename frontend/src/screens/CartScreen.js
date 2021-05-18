import './CartScreen.css';

// compornents
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return <div className="cartscreen">
    <div className="cartscreen_left">
      <h2>買い物かご</h2>

      <CartItem />
    </div>
    <div className="cartscreen__right">
      <div className="cartscreen__info">
        <p>(0)個</p>
        <p>小計 20000円</p>
      </div>
      <div>
        <button>会計へ進む</button>
      </div>
    </div>
  </div>;
};


export default CartScreen;