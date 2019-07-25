var current_player = "O";

function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = current_player;
    if (current_player === "X"){
      current_player = "O";
  }
    else{
      current_player = "X";
  }
}
else{
  alert("You have already clicked this!");
  }
}
