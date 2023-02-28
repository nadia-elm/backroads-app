
import React from 'react'
import Title from "./Title";
import { tours } from '../data';
import Tour from './Tour';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="FEATURED" subTitle="TOURS" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour 
          key={tour.id}  
          image={tour.image}
          date={tour.data}
          title={tour.title} 
          info={tour.info}
          location={tour.location}
          duration={tour.duration} 
          cost={tour.cost}
          />

        })}

      </div>
    </section>
  );
}

export default Tours