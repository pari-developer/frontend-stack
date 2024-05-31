// This file is for practice . Generally we should break components,place it in different files and then import it .
import React, { useState, useEffect } from 'react';

//styles
import '../App.css';

//assets
import tictactoe from '../assets/images/tictactoe.png';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// I am checking just three conditions here. 
const winningCombinations = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 3, col: 3 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 3, col: 0 },
  ],
];

//Root component
export const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  useEffect(() => {
    // Create a new game board based on the initial state
    const updatedBoard = initialGameBoard.map((row) => [...row]);

    for (let turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      updatedBoard[row][col] = player;
    }
    setGameBoard(updatedBoard);
  }, [gameTurns]);

  let winner = null;
  for (const combination of winningCombinations) {
    const first = gameBoard[combination[0].row][combination[0].col];
    const second = gameBoard[combination[1].row][combination[1].col];
    const third = gameBoard[combination[2].row][combination[2].col];
    if (first && first === second && second === third) winner = first;
    break;
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === 'X' ? 'O' : 'X';
    });

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const isDraw = !winner && gameTurns.length === 9;

  const handleRematch = () => {
    setGameTurns([])
    setActivePlayer('X');
    
  }

  return (
    <div className='container black-border'>
      <div className='header'>
        <h4>Tic-Tac-Toe</h4>
        <img src={tictactoe} alt={tictactoe} width='50' height='50' />
      </div>
      <div className='section'>
        <ol id='players'>
          <Player name='Player1' symbol={'X'} isActive={activePlayer === 'X'} />
          <Player
            name='Player2'
            symbol={'O'}
            activePlayer={activePlayer}
            isActive={activePlayer === 'O'}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard
          activePlayer={activePlayer}
          onSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <div className='footer'>
        <Log turns={gameTurns} />
      </div>
    </div>
  );
};

//Player component
const Player = ({ name, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const buttonText = isEditing ? 'Save' : 'Edit';

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type='text' value={playerName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li className={isActive ? 'black-border highlighted-player' : ''}>
        <span className='player'>
          {' '}
          {editablePlayerName}
          <span className='player-symbol'> {symbol} </span>
        </span>
        <button onClick={handleEditClick}>{buttonText}</button>
      </li>
    </>
  );
};

//Gameboard component
const GameBoard = ({ onSelectSquare, gameBoard }) => {
  return (
    <ol id='game-board'>
      {gameBoard?.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((playerSymbol, colIndex) => {
              return (
                <button
                  className='tictoe-button'
                  key={colIndex}
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              );
            })}
          </div>
        );
      })}
    </ol>
  );
};

const Log = ({ turns }) => {
  return (
    <ol id='log'>
      {turns?.map((turn) => {
        const {
          square: { row, col },
          player,
        } = turn;
        return (
          <li key={`${row},${col}`}>{`${player} clicked ${row},${col}`}</li>
        );
      })}{' '}
    </ol>
  );
};

const GameOver = ({ winner, onRematch }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Game Over</h2>
        {winner ? <p>{winner} won!!</p> : <p>{winner} Its a draw</p>}

        <button onClick={onRematch}>Rematch</button>
      </div>
    </div>
  );
};

export default GameOver;
