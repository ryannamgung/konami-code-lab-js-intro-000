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
  document.body.addEventListener("keydown", (event) => {
    var keyPressed = event.key;
    var combo = 0;
    if(keyPressed == codes[combo])
    {
      combo++;
      if(combo == codes.length)
      {
        combo = 0;
        alert("Congratulations!");
      }
    }else{
      combo = 0;
    }
  })
}
