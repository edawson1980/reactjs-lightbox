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
  }

  return (
    <div className="App">

    <section className="lightbox">
      <img
      onClick={openModal}
      src="/images/artem-sapegin-8c6eS43iq1o-unsplash.jpg"
      alt="Sunset Behind Mountains by Artem Sapegin via Unsplash"
      />
      <img
      onClick={openModal}
      src="/images/ashley-knedler-OwpgxILRR7c-unsplash.jpg"
      alt="Antelope Canyon by Ashley Knedler via Unsplash"
      />
      <img
      onClick={openModal}
      src="/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg"
      alt="Mountains And Trees Reflecting On Lake by Cristina Gottardi via Unsplash"
      />
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
