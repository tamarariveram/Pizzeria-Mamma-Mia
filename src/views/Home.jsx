import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { PizzaContext } from "../context/PizzaContext.jsx";
// import { pizzas } from "../data/pizzas.js";

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <>
      <Header />

      <div className="home-cards">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
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
