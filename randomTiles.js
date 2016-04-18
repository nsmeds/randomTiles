// Declare a variable to hold the random color
var rgbColor;

// Declare a function that will generate a random number each time it is called
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// Build an rgb color and store it in a string by calling randomRGB() once for each rgb value.
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

// Use a for loop to generate random rgb values and apply them to the dom background as repeating linear gradients.
for (var i = 0; i < 10000; i += 1) {
  rgbColor = randomColor();
  rgbColor2 = randomColor();
  document.body.setAttribute("style", "background-image: repeating-linear-gradient(90deg, " + rgbColor + " 25px, " + rgbColor2 + " 50px)");
};