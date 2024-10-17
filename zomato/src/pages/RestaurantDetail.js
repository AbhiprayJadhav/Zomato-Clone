import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurantData from '../data/restaurantData.json'; // Import the JSON data
import '../styles/RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurant = restaurantData.find((rest) => rest.id === parseInt(id));

  const [cart, setCart] = useState([]);

  if (!restaurant) return <div>Restaurant not found!</div>;

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.item} added to cart!`);
  };

  return (
    <div className="restaurant-detail-container">
      <div className="restaurant-detail-left">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      </div>
      <div className="restaurant-detail-right">
        <h1 className="restaurant-name">{restaurant.name}</h1>
        <p className="restaurant-category">{restaurant.category}</p>
        <p className="restaurant-description">{restaurant.description}</p>
        
        <div className="restaurant-details">
          <p>Price: {restaurant.price}</p>
          <p>Delivery Time: {restaurant.deliveryTime}</p>
          <p>Rating: {restaurant.rating} ⭐</p>
          <p>Reviews: {restaurant.reviews} reviews</p>
          <p>Address: {restaurant.address}</p>
        </div>

        <h3>Menu:</h3>
        <ul className="menu-list">
          {restaurant.menu.map((item, index) => (
            <li key={index} className="menu-item">
              {item.item}: {item.price}
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
