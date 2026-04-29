const intervalID = setInterval(myCallback, 1000);

function myCallback(a, b) 
{
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}