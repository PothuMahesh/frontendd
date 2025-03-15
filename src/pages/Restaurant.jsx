import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Restaurant.css";

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 250, image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  { id: 2, name: "Pepperoni Pizza", price: 300, image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Fruit Juice", price: 100, image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg" },
  { id: 4, name: "Cheese Burger", price: 150, image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg" },
  { id: 5, name: "Grilled Chicken Burger", price: 180, image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Noodles", price: 120, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "Salmon Sushi", price: 350, image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg" },
  { id: 8, name: "California Roll", price: 400, image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" },
  { id: 9, name: "Pasta", price: 220, image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg" },
];
const Restaurant = ({ cart, setCart }) => {
  const { id } = useParams();

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="restaurant">
      <h2>Menu</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price-cart">
              <span className="price">₹{item.price}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;





