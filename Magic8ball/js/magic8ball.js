function Magic8ball() {

  var futures = ["NO WAY!","HECK YES!","HONESTLY, I DON'T KNOW!"];
  var shakeResult = futures[Math.floor(Math.random() * futures.length)];

  return(shakeResult);
}

document.write(Magic8ball());
