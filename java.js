function test()
{
	var red = parseInt(Math.random() * 256).toString(16);
  var green = parseInt(Math.random() * 256).toString(16);
  var blue = parseInt(Math.random() * 256).toString(16);
  
  if(red.length < 2) red="0" + red;
  if(green.length < 2) green="0" + green;
  if(blue.length < 2) blue="0" + blue;
  document.body.style.backgroundColor = "#" + red + green + blue;
}

