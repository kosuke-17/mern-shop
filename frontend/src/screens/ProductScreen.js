import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  return <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
        </div>
        <div className="left__info">
          <p className="left__name">商品１</p>
          <p>価格：20000円</p>
          <p>商品説明：これは商品１です</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            価格： <span>20000円</span>
          </p>
          <p>
            在庫： <span>あり</span>
          </p>
          <p>
            数量
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">カートに入れる</button>
          </p>
        </div>
      </div>
    </div>
};


export default ProductScreen;