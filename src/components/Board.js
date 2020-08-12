import "./board.css";
import React from "react";
import Square from "./Square";
import { calculateWinner } from "../api/game";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [IsONext, setIsONext] = React.useState(true);

  const winner = calculateWinner(squares);
  const nextPlayer = IsONext ? "O" : "X";
  // const status = isDogNext ? "Next player: 🐶" : "Next player: 🐱‍👤";
  // const status = "Next player: " + (isDogNext ? "🐶" : "🐱‍👤");

  // const status = `Next player: ${nextPlayer}`; gelöscht

  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  const handleClick = (index) => {
    // do we have a winner or is the square set?
    if (winner || squares[index]) {
      //Abort function
      return;
    }
    //  copy squares (.slice flache kopie)
    // const squaresCopy = squares.slice(); - alte schreibweise
    const squaresCopy = [...squares];

    // modify value bei index

    squaresCopy[index] = nextPlayer;
    // if (isONext) {
    //   squaresCopy[index] = "X";
    // } else {
    //   squaresCopy[index] = "O"
    // }

    // set new state
    setSquares(squaresCopy);
    setIsONext(!IsONext);
    // es ist wichtig copy zu erstellen
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
