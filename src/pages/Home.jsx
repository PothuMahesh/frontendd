import { Link } from "react-router-dom";
import "../styles/Home.css";

const restaurants = [
  { id: 1, name: "Pizza Palace", image: "https://th.bing.com/th/id/OIP.2HvWc_LevHBE5UIDpMLhGwHaE7?rs=1&pid=ImgDetMain" },
  { id: 2, name: "Burger Haven", image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Green Chilli", image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Pasta Place", image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Nilofour", image: "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Barbeque", image: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "Nouba", image: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, name: "Delight kitchen", image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, name: "Milan dhaba", image: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 10, name: "Arabian mandi", image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const Home = () => {
  return (
    <div className="home">
      <h2>Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;