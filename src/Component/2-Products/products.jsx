import { useEffect } from 'react';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../rtk/Slices/slice-products';
import { addToCart } from '../../rtk/Slices/slice-cart';

export default function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []); // Provide an empty dependency array

  return (
    <div className='main-content border container'>
      {products.map((item) => (
        <div key={item.id} className="card">
          <div className="card-img">
            <img src={item.image} alt='' />
          </div>
          <div className="card-info">
            <p className="text-title">{item.title}</p>
            <p className="text-body">{item.rating.count}</p>
          </div>
          <div className="card-footer">
            <span className="text-title"></span>
            <div className="card-button">
              <button onClick={() => dispatch(addToCart(item))} className="svg-icon">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
