const imageArray = [
  "https://i.pinimg.com/736x/d9/38/1f/d9381fc2acdc546b71a7c9756c246e01.jpg",
  "https://freestencilgallery.com/wp-content/uploads/2013/09/Jack-O-Lantern-Face-21-thumb.jpg",
  "https://www.publicdomainpictures.net/pictures/310000/nahled/jack-o-lantern-face-stencil-1568112529Gav.jpg",
  "https://img.favpng.com/8/21/3/pumpkin-face-jack-o-lantern-clip-art-png-favpng-qbpxAqrxP4GQRZqggJLYUie3F.jpg",
  "https://i.pinimg.com/originals/e3/8a/73/e38a73dad281db863a265ba680877005.jpg",
  "https://www.thebestideasforkids.com/wp-content/uploads/2018/09/Pumpkin-Carving-Stencils-Cover.jpg",
  "https://i.pinimg.com/originals/3a/1e/17/3a1e177dcf5ee0b9447d67f3506b9667.jpg",
  "https://i.pinimg.com/474x/9c/10/92/9c1092c730aa46551cadf2eec15b517b--free-printable-stencils-free-pumpkin-stencils.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/axODTXO6G9nlcUPMoTueU4w5zq4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/10/24/992/n/1922441/d08bc94cd45bc7c9_Screen_Shot_2016-10-24_at_3.47.33_PM/i/Jack-Skellington.png",
  "https://i.pinimg.com/originals/d7/13/50/d71350b77d3041fd5e57286bdbba9ebb.png",
  "https://freestencilgallery.com/wp-content/uploads/2017/02/Maleficent-Stencil-thumb.jpg",
  "https://i.pinimg.com/236x/a5/c5/cb/a5c5cbc130429e58ef6bd8de5a189502.jpg",
  "https://i.pinimg.com/originals/56/22/79/562279c7ad7fd3d2f874687ddd45216a.jpg",
  "https://i0.wp.com/thedisneyblog.com/wp-content/uploads/2011/09/disney-scar-pumpkin-pattern.jpg?resize=300%2C289&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOCg-MZgqba7rVd4u75HY8jlImuNS_6yQVGhK6UqrrfJZ4BQEhTrzK4X0TddSvYwf0Hw&usqp=CAU",
  "https://i.pinimg.com/originals/a7/d0/03/a7d003ab30e03c3a9cfff6dd557cddc4.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/358f384a-d146-4a5d-b81d-080c1e5f9172/d2ntorb-8e8f55e2-9fa6-4ade-a2b5-bf1639b9cd14.jpg/v1/fill/w_900,h_900,q_75,strp/super_mario_stencil_by_beraka_d2ntorb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMzU4ZjM4NGEtZDE0Ni00YTVkLWI4MWQtMDgwYzFlNWY5MTcyXC9kMm50b3JiLThlOGY1NWUyLTlmYTYtNGFkZS1hMmI1LWJmMTYzOWI5Y2QxNC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yUmi_NWL_x_6KAtI7tQDMcwMzGmcuZ-xGcMkWUPPsvQ",
  
  ];
  
  const image = document.querySelector("img");
  const button = document.querySelector("button");
  
  window.onload = () => generateRandomPicture(imageArray);
  
  button.addEventListener("click", () => generateRandomPicture(imageArray));
  
  function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length); 
    image.setAttribute("src", array[randomNum]);
  }