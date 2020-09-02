import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NasaImages() {
  const [images, setImages] = useState([]);

  console.log("IMAGES STATE:", images);

  useEffect(() => {
    async function fetchImages() {
      // console.log("Check");
      const response = await axios.get(
        "https://apodapi.herokuapp.com/api/?count=5"
      );

      // checking if we have the response
      // console.log("RES", response.data);

      // updating the state of images (setting the state)
      setImages(response.data);
    }

    fetchImages();
    // console.log("Hello");
  }, []);

  if (images.length === 0) {
    return (
      <img
        src={
          "https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
        }
      />
    );
  }

  return (
    <div>
      {images.map((image) => {
        // console.log("WHAT IS 1 image", image.url);
        return <img key={image.url} src={image.url} />;
      })}
    </div>
  );
}
