import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCards from './DetailsCards';

const DetailsCard = () => {
    const events = useLoaderData()
    console.log(events);
  
    return (
        <div>
          <div>
          {
            events.map(event =><DetailsCards 
            key={event.id}
            events={event}
            ></DetailsCards>)
           }
          </div>
        </div>
    );
};

export default DetailsCard;