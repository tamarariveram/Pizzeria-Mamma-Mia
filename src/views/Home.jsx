import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import "./Home.css";
import { useEffect, useState } from "react";
// import { pizzas } from "../data/pizzas.js";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();

      setPizzas(data);
    };
    getPizzas();
  }, []);

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
