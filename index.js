var current_player = "O";

// var board = [
//   document.getElementById("11"),document.getElementById("12"),document.getElementById("13")],
//   [document.getElementById("21"),document.getElementById("22"),document.getElementById("23")],
//   [document.getElementById("31"),document.getElementById("32"),document.getElementById("33")],
// ]
var board = [["", "", ""], ["", "", ""], ["", "", ""]];

var x = 0;
var y = 0;
for(x = 0; x < 3; x++){
  for (y = 0; y < 3; y++){
    board[x][y] = document.getElementById(`${x + 1}${y + 1}`)
  }
}

function checkCol(col){
  var x =0;
  for(x = 0; x < 3; x ++){
    if(board[x][col].innerText != current_player){
      return false;
    }
  }
  return true;
}
  // return board[0][col].innerText === current_player && board[1][col].innerText === current_player && board[2][col].innerText === current_player;
}

function checkRow(row){
  var x =0;
  for(x = 0; x < 3; x ++){
    if(board[row][x].innerText != current_player){
      return false;
    }
  }
  return true;
}

function checkWin(){

}




function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = current_player;
    if (current_player === "X"){
      current_player = "O";
      //current_player = current_player === "X" ? "O" : "X";
  }
    else{
      current_player = "X";
  }
}
else{
  alert("You have already clicked this!");
  }
}
