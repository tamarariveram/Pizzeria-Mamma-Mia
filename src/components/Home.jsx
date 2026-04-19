import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";
import './Home.css';

function Home() {
  return (
    <>
      <Header />

      <div className="home-cards">
      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="https://images.pexels.com/photos/35759991/pexels-photo-35759991.jpeg"
      />

      <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="https://images.pexels.com/photos/33457581/pexels-photo-33457581.jpeg"
      />

      <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="https://images.pexels.com/photos/30849268/pexels-photo-30849268.jpeg"
      />
      </div>
    </>
  );
}

export default Home;
