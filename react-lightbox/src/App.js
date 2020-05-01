import React, { useState } from 'react';
import './App.css';


function App() {
  //set an initial state for a blank image (because modal will only open if image is present)
  const [image, updateImage] = useState({
    src: ``,
    alt: ``
  });

  //create function to open the lightbox
  function openModal(event) {
    updateImage({
      src: event.target.src,
      alt: event.target.alt
    })
    console.log(image);
  }

  return (
    <div className="App">

    <section className="lightbox">
      <img onClick={openModal} src="/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg" alt="Sunset Behind Mountains by Artem Sapegin via Unsplash"/>
      <img onClick={openModal} src="/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg" alt="Antelope Canyon by Ashley Knedler via Unsplash"/>
      <img onClick={openModal} src="/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg" alt="Mountains And Trees Reflecting On Lake by Cristina Gottardi via Unsplash"/>
    </section>

    </div>
  );
}

export default App;
