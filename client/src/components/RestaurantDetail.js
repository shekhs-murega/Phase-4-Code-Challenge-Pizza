import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/restaurantbyid/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRestaurant(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`http://127.0.0.1:5000/api/restaurant/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate('/restaurants');
      })
      .catch((error) => {
        console.error('Delete error:', error);
      });
  };

  return (
    <div className="restaurant-detail-container">
      {restaurant ? (
        <>
          <h1 className="restaurant-name">{restaurant.name}</h1>
          <p className="restaurant-address">{restaurant.address}</p>
          <h2>Pizzas:</h2>
          <ul>
            {restaurant.pizzas ? (
              restaurant.pizzas.map((pizza) => (
                <li key={pizza.id}>
                  <h3>{pizza.name}</h3>
                  <p>Ingredients: {pizza.ingredients}</p>
                </li>
              ))
            ) : (
              <p>No pizzas available for this restaurant.</p>
            )}
          </ul>
          <button onClick={handleDelete}>Delete Restaurant</button>
        </>
      ) : (
        <p className="loading-message">Loading restaurant details...</p>
      )}
    </div>
  );
}

export default RestaurantDetail;
