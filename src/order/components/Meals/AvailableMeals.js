import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 200,
      image :<img style={{width:"150px", borderRadius:"20px"}} src='https://www.bing.com/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'/>
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 300,
      image: <img style={{width:"150px", borderRadius:"20px"}} src='https://www.bing.com/th?id=OIP.MQL8JAtYTc7xXAM23md0dAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' />
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 250,
      image: <img style={{width:"150px", borderRadius:"20px"}} src='https://www.bing.com/th?id=OIP.O3CXcyMAvRrJpI1hyC7PtAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' />
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 330,
      image: <img style={{width:"150px", borderRadius:"20px"}} src='https://www.bing.com/th?id=OIP.zu41U-QgzD-5u3mp48OfnQHaEo&w=315&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' />
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
    image={meal.image}
    id={meal.id}
    key={meal.id} 
    
    name={meal.name}
    description={meal.description} 
    price={meal.price}/>));
  return<section className={classes.meals}>
     <Card>
      <ul>
          {mealsList}
      </ul>
      </Card>
  </section>
}

export default AvailableMeals;