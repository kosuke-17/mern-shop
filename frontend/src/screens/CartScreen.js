import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

// compornents
import CartItem from '../components/CartItem';

// Action
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const CartScreen = () => {
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  return <div className="cartscreen">
    <div className="cartscreen_left">
      <h2>買い物かご</h2>
        { cartItems.length === 0 ? (
          <div>
            あなたのカートは空です <Link to="/">戻る</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem 
              item={item} 
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
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