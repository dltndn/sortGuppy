const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = "image/testBG.jpg";
  image.classList.add("bgImage");
  body.appendChild(image);
}

paintImage();
