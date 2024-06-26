import React, { useContext } from 'react';
import { StoreContext } from '../../Context/Storecontext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({Category}) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=' container mx-auto px-4 mt-10'>
      <h2 className='ml-2 text-3xl md:text-5xl mb-6'>Top Dishes Near You</h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5'>
        {food_list.map((item, index) => (
          (Category === 'All' || Category === item.category) ? (
            <FoodItem
              key={index}
              Id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ) : null
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
