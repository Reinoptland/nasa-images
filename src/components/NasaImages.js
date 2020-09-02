import React, { useState, useEffect } from "react";

export default function NasaImages() {
  const [images, setImages] = useState([]);
  console.log("INITIAL STATE:", images);
  return <div>NASA IMAGES</div>;
}
