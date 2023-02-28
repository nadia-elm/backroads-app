
import React from 'react'
import { services } from '../data';
import Title from './Title';
import Service from './Service'
function Services() {
  return (
    <section className="section services" id="services">
      <Title title='Our' subTitle='Services'/>
      <div className="section-center services-center">
       {services.map((service) => {
        return <Service 
        key={service.id}
        icon={service.icon}
        title={service.title}
        text={service.text}
         />
       })}

      
      </div>
    </section>
  );
}

export default Services