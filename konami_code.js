const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init()
{
  var combo = 0;
  document.body.addEventListener("keydown", (event) => {
    var keyPressed = event.key;
    if(keyPressed == codes[combo])
    {
      combo++;
      if(combo == codes.length)
      {
        combo = 0;
        alert("Hurray");
      }
    }else{
      combo = 0;
    }
  })
}
