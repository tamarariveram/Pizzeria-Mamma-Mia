import './CardPizza.css';

function CardPizza({ name, price, ingredients, img, desc }) {
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
          <button>Ver más</button>
          <button>Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;