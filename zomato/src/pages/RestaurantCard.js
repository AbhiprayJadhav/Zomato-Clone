import React from 'react';
import '../styles/RestaurantCard.css';

const RestaurantCard = () => {
  // Sample data for 9 restaurants
  const restaurants = [
    {
      id: 1,
      name: "McDonald's",
      image: "/macd.jpeg",
      category: "Burgers, Fast Food",
      price: "₹125 off above ₹649",
      deliveryTime: "20-25 mins",
    },
    {
      id: 2,
      name: "KFC",
      image: "/kfcc.jpeg",
      category: "Chicken, Fast Food",
      price: "Items at ₹199",
      deliveryTime: "30-35 mins",
    },
    {
      id: 3,
      name: "Burger King",
      image: "/burgerking.jpeg",
      category: "Burgers, American",
      price: "Items at ₹99",
      deliveryTime: "35-40 mins",
    },
    {
      id: 4,
      name: "Wow! China",
      image: "/wow.avif",
      category: "Chinese, Asian",
      price: "Items at ₹129",
      deliveryTime: "35-40 mins",
    },
    {
      id: 5,
      name: "Olio - The Wood Fired...",
      image: "/olio.jpg",
      category: "Pizzas, Pastas",
      price: "₹125 off above ₹249",
      deliveryTime: "35-40 mins",
    },
    {
      id: 6,
      name: "Grameen Kulfi",
      image: "/kulfi.jpeg",
      category: "Desserts, Ice Cream",
      price: "60% off upto ₹120",
      deliveryTime: "25-30 mins",
    },
    {
      id: 7,
      name: "Navratri Meals by LunchBox",
      image: "/nav1.jpg",
      category: "Veg, North Indian",
      price: "Items at ₹149",
      deliveryTime: "30-35 mins",
    },
    {
      id: 8,
      name: "CFC Shalimar Family...",
      image: "/south.jpeg",
      category: "Biryani, North Indian",
      price: "₹125 off above ₹199",
      deliveryTime: "30-35 mins",
    },
    {
      id: 9,
      name: "Domino's Pizza",
      image: "/dom.jpeg",
      category: "Pizzas, Fast Food",
      price: "Get 50% off on orders",
      deliveryTime: "30-40 mins",
    },
  ];

  return (<div style={{
    backgroundColor: "#F4F4F2"
  }}><h1 className="div1" style={{
    marginBottom: "20px",
    textAlign: "center",
  
    fontSize: "60px",
    color: "#E23744",
    backgroundColor: "#F4F4F2",
    padding: "32px"
  }}>Here's our best sellers!!!</h1>
    <div className="restaurant-cards" style={{ marginTop: "10px" }}>
      {restaurants.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>{restaurant.name}</h3>
          <p>{restaurant.category}</p>
          <p>{restaurant.price}</p>
          <p>Delivery time: {restaurant.deliveryTime}</p>
        </div>
      ))}
    </div>
    <br /></div>
  );
};

export default RestaurantCard;
