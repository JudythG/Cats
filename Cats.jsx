import getRandomCatImage from '../services/catService';
import React, { useState, useEffect } from "react";

function Cats () {
  const [catImage, setImage]= useState( '' );

  useEffect (() => {
    getRandomCatImage()
    .then (res => {
      setImage(res.data[0].url)
    })
  }, [])

  return <div>
    <h1>Hello Kitty!</h1>
    <img src={catImage} alt=""></img>
  </div>;
}

export default Cats 