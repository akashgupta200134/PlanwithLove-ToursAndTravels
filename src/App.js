import './App.css'
import React, { useState } from 'react';
import data from './components/data';

import Tours from './components/Tours';


const App = () => {

  const [tours, SetTours] = useState(data);


  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    SetTours(newTours);
  }

  if(tours.length === 0) {

    return(
      <div className='refresh'>
            <h2> No Tours Left</h2>
            <button  className='refresh-btn' onClick={() => SetTours(data)}>
              Refresh
            </button>

      </div>


    );

  }

 return( 
 
 <div>

  <Tours tours={tours} removeTour={removeTour}></Tours>

 </div>

  )
};

export default App;
