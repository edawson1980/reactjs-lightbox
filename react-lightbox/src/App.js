import React, { useState } from 'react';
import './App.css';


function App() {
  //set images in state, versus hardcoding
  const [images] = useState([
    //we add arbitrary ids b/c React requires children in a list to each have a unique key. In a WP scenario, these ids will the ids assigned automatically by the WP Media Library

    {
      id: 111,
      src: "/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg",
      alt: "Sunset Behind Mountains by Artem Sapegin via Unsplash"
    },

    {
      id: 112,
      src: "/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg",
      alt: "Antelope Canyon by Ashley Knedler via Unsplash"
    },

    {
      id: 113,
      src: "/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg",
      alt: "Mountains And Trees Reflecting On Lake by Cristina Gottardi via Unsplash"
    }


  ]);

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
    //add event listener to the entire browser window when openModal is called
    document.addEventListener(`keyup`, listenForClose);
  }

  //function to close lightbox either by pressing Esc or by clicking on the gray overlay itself
  function listenForClose(event) {
    if (event.target.id === `overlay` || event.key === `Escape`) {
      closeModal();
    }
  }

  //create a function to close the lightbox. we will attach it to the overlay div via onClick
  function closeModal(event) {
    updateImage({
      src: ``,
      alt: ``
    })
    document.removeEventListener(`keyup`, listenForClose);
  }

  return (
    <div className="App">

    <section className="lightbox">
      {images.map(image =>
        <img
        key={image.id}
        onClick={openModal}
        src={image.src}
        alt={image.alt}/>
      )}

    </section>

    {/*this conditional says that IF image.src isn't empty AND a div named "overlay" exists, show that overlay*/}
    {image.src !== `` && <div onClick={listenForClose} id="overlay">
      <figure>
        <img src={image.src} alt={image.alt}/>
        <figcaption>{image.alt}</figcaption>
      </figure>
    </div>}

    </div>
  );
}

export default App;
