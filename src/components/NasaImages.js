import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NasaImages() {
  const [images, setImages] = useState([]);

  console.log("IMAGES STATE:", images);

  // Simone: 1 console.log data from api
  // Stefan: 1 console.log with empty array
  // Rein: 1 console.log -> [], another log with data

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

  return <div>NASA IMAGES</div>;
}
