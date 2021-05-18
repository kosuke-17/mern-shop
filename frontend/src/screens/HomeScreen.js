import './HomeScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Product from '../components/Product';

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (<div className="homescreen">
    <h2 className="homescreen__title">最新商品</h2>

    <div className="homescreen__products">
      {loading ? <h2>loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
        <Product />
      ))}
    </div>
  </div>
  )
};

export default HomeScreen;