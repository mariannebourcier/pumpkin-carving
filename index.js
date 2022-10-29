const imageArray = [
  "https://i.pinimg.com/736x/d9/38/1f/d9381fc2acdc546b71a7c9756c246e01.jpg",
  "https://freestencilgallery.com/wp-content/uploads/2013/09/Jack-O-Lantern-Face-21-thumb.jpg",
  "https://www.publicdomainpictures.net/pictures/310000/nahled/jack-o-lantern-face-stencil-1568112529Gav.jpg",
  "https://img.favpng.com/8/21/3/pumpkin-face-jack-o-lantern-clip-art-png-favpng-qbpxAqrxP4GQRZqggJLYUie3F.jpg",
  
  ];
  
  const image = document.querySelector("img");
  const button = document.querySelector("button");
  
  window.onload = () => generateRandomPicture(imageArray);
  
  button.addEventListener("click", () => generateRandomPicture(imageArray));
  
  function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length); 
    image.setAttribute("src", array[randomNum]);
  }