import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";
import "./Home.css";
import { pizzas } from "../data/pizzas.js";

function Home() {
  return (
    <>
      <Header />

      <div className="home-cards">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
