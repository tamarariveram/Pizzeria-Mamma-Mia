import './CardPizza.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

function CardPizza({ name, price, ingredients, img, desc, id }) {
  const { addToCart } = useContext(CartContext);


  return (
    <div className="card-pizza">
      <img src={img} alt={name} />

      <div className="card-pizza-body">
        <h3>{name}</h3>

        <p>Ingredientes:</p>
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}> {ing}</li>
          ))}
        </ul>
        <p className="card-pizza-price">Precio: ${price.toLocaleString()}</p>

        <div className="card-pizza-actions">
          <Link to={`/pizza/${id}`} className="card-pizza-btn">Ver más</Link>
          <button onClick={() => addToCart({ id, name, price, img })}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;