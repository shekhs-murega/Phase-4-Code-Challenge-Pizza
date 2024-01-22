import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PizzaList() {
  const { id } = useParams();
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/restaurant/${id}/pizzas`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [id]);

  if (loading) {
    return <p>Loading pizzas...</p>;
  }

  return (
    <div className="container">
      <h1 className="pizza-header">Pizza List</h1>
      {pizzas.length === 0 ? (
        <p>No pizzas available for this restaurant.</p>
      ) : (
        <ul className="pizza-list">
          {pizzas.map((pizza) => (
            <li key={pizza.id} className="pizza-item">
              <h2 className="pizza-name">{pizza.name}</h2>
              <p className="pizza-ingredients">Ingredients: {pizza.ingredients}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PizzaList;
