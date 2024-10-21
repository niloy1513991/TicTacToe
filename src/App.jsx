// import { useEffect, useState } from "react";

// function App() {
//   const initialTttArray = [
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//     { imgSrcNmbr: 3 },
//   ];

//   const [tttArray, setTttArray] = useState(initialTttArray);
//   const [turn, setTurn] = useState(false);
//   const [winner, setWinner] = useState(null);
//   const [winnerMsg, setWinnerMsg] = useState("Can you win this?");
//   const [turnMsg, setTurnMsg] = useState("It's your turn");

//   const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const checkWinner = (array) => {
//     for (const combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (
//         array[a].imgSrcNmbr === array[b].imgSrcNmbr &&
//         array[a].imgSrcNmbr === array[c].imgSrcNmbr
//       ) {
//         if (array[a].imgSrcNmbr === 1) {
//           setWinner(true);
//           return;
//         } else if (array[a].imgSrcNmbr === 2) {
//           setWinner(false);
//           return;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     checkWinner(tttArray);
//   }, [tttArray]);

//   useEffect(() => {
//     if (winner === true) {
//       setWinnerMsg("You have won!");
//     } else if (winner === false) {
//       setWinnerMsg("Haha! you loser!");
//     }
//   }, [winner]);

//   useEffect(() => {
//     if (turn) {
//       setTurnMsg("It's the computer's turn");
//       setTimeout(computerMove, 500); // Delay for computer's move
//     } else {
//       setTurnMsg("It's your turn");
//     }
//   }, [turn]);

//   const updateImgSrcNmbr = (index, newImgSrcNmbr) => {
//     const updatedArray = tttArray.map((item, i) =>
//       i === index ? { ...item, imgSrcNmbr: newImgSrcNmbr } : item
//     );
//     setTttArray(updatedArray);
//     setTurn(!turn);
//   };

//   const handleClick = (index) => {
//     if (tttArray[index].imgSrcNmbr !== 3 || winner !== null || turn) {
//       return;
//     }
//     updateImgSrcNmbr(index, 1); // Human move
//   };

//   const computerMove = () => {
//     if (winner !== null) return;

//     // Find combinations where the human has clicked two indexes
//     for (const combination of winningCombinations) {
//       const humanClicks = combination.filter(
//         (index) => tttArray[index].imgSrcNmbr === 1
//       );
//       const emptyIndexes = combination.filter(
//         (index) => tttArray[index].imgSrcNmbr === 3
//       );
//       if (humanClicks.length === 2 && emptyIndexes.length === 1) {
//         updateImgSrcNmbr(emptyIndexes[0], 2); // Computer move
//         return;
//       }
//     }

//     // If no such combination, find combinations that include the human's last move
//     const humanLastMoveIndex = tttArray.findIndex(
//       (item) => item.imgSrcNmbr === 1
//     );
//     const relevantCombinations = winningCombinations.filter((combination) =>
//       combination.includes(humanLastMoveIndex)
//     );

//     // Find available indexes in the relevant combinations
//     const availableIndexes = [];
//     relevantCombinations.forEach((combination) => {
//       combination.forEach((index) => {
//         if (
//           tttArray[index].imgSrcNmbr === 3 &&
//           !availableIndexes.includes(index)
//         ) {
//           availableIndexes.push(index);
//         }
//       });
//     });

//     if (availableIndexes.length > 0) {
//       const randomIndex =
//         availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
//       updateImgSrcNmbr(randomIndex, 2); // Computer move
//     }
//   };

//   const resetGame = () => {
//     setTttArray(initialTttArray);
//     setTurn(false);
//     setWinner(null);
//     setWinnerMsg("Can you win this?");
//     setTurnMsg("It's your turn");
//   };

//   const getImagePath = (imgSrcNmbr) => {
//     return process.env.NODE_ENV === "production"
//       ? `/TicTacToe/images/${imgSrcNmbr}.svg`
//       : `/images/${imgSrcNmbr}.svg`;
//   };

//   return (
//     <>
//       <div className="container bg-gradient-to-b from-slate-700 to-slate-300 to-90% h-[650px] w-[310px] mx-auto rounded-md mt-2 flex flex-col">
//         <div className="headerContainer w-[310px] h-28 flex mx-auto mt-8 flex-col justify-center items-center">
//           <h1 className="text-5xl font-semibold text-slate-200">Tic Tac Toe</h1>
//           <h1 className=" font-thin text-white mt-2">
//             Can you beat me? Let&apos;s see!
//           </h1>
//         </div>
//         <div className="mainContainer  w-[310px] h-[30rem] flex flex-col mx-auto">
//           <div className="turnMessage  w-72 h-8 flex mx-auto justify-center items-center text-lg mt-4">
//             {turnMsg}
//           </div>
//           <div className="ticTacToeContainer  h-72 w-72 mx-auto flex flex-col justify-center mt-4 text-[#fbfbfb]">
//             <div className="firstRowContainer flex w-auto h-auto mx-auto">
//               <div
//                 className="block1  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(0)}
//               >
//                 <img
//                   src={getImagePath(tttArray[0].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar1 bg-gradient-to-t from-black to-[#6D7889] to-90% h-20 w-1"></div>
//               <div
//                 className="block2  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(1)}
//               >
//                 <img
//                   src={getImagePath(tttArray[1].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar2 bg-gradient-to-t from-black to-[#6D7889] to-90% h-20 w-1"></div>
//               <div
//                 className="block3  h-20 w-20 flex items-centerflex justify-center items-center"
//                 onClick={() => handleClick(2)}
//               >
//                 <img
//                   src={getImagePath(tttArray[2].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//             </div>
//             <div className="hr1 bg-gradient-to-r from-[#838E9D] via-black to-[#838E9D] w-64 h-1 flex mx-auto"></div>
//             <div className="secondRowContainer flex w-auto h-auto mx-auto">
//               <div
//                 className="block1  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(3)}
//               >
//                 <img
//                   src={getImagePath(tttArray[3].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar1 bg-black h-20 w-1"></div>
//               <div
//                 className="block2  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(4)}
//               >
//                 <img
//                   src={getImagePath(tttArray[4].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar2 bg-black h-20 w-1"></div>
//               <div
//                 className="block3  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(5)}
//               >
//                 <img
//                   src={getImagePath(tttArray[5].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//             </div>
//             <div className="hr1 bg-gradient-to-r from-slate-400 via-black to-slate-400 w-64 h-1 flex mx-auto"></div>
//             <div className="thirdRowContainer flex w-auto h-auto mx-auto">
//               <div
//                 className="block1  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(6)}
//               >
//                 <img
//                   src={getImagePath(tttArray[6].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar1 bg-gradient-to-b from-black to-[#B0BBC8] h-20 w-1"></div>
//               <div
//                 className="block2  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(7)}
//               >
//                 <img
//                   src={getImagePath(tttArray[7].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//               <div className="bar2 bg-gradient-to-b from-black to-[#B0BBC8] h-20 w-1"></div>
//               <div
//                 className="block3  h-20 w-20 flex justify-center items-center"
//                 onClick={() => handleClick(8)}
//               >
//                 <img
//                   src={getImagePath(tttArray[8].imgSrcNmbr)}
//                   alt=""
//                   className="h-16 w-auto"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="winnerMessage bg-slate-600 w-72 h-12 flex mx-auto justify-center items-center mt-8 rounded-lg">
//             <h1 className="text-2xl font-bold text-slate-100">
//               {winnerMsg || "No winner yet"}
//             </h1>
//           </div>
//         </div>
//         <div className="reset h-10 flex justify-center items-center m-1">
//           <button
//             className=" bg-slate-400 h-8 w-16 font-semibold text-lg rounded-lg text-slate-800 "
//             onClick={resetGame}
//           >
//             Reset
//           </button>
//         </div>
//         <div className="footerContainer text-slate-200 text-center h-12 w-72 mx-auto flex flex-col justify-center items-center">
//           <div className="copyright  text-slate-600 text-center h-14 w-72 mx-auto mt-2 flex flex-col">
//             <a href="http://niloykm.me/profileLinks/" target="_blank">
//               Connect with &copy;Niloy
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const initialTttArray = [
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
    { imgSrcNmbr: 3 },
  ];

  const [tttArray, setTttArray] = useState(initialTttArray);
  const [turn, setTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerMsg, setWinnerMsg] = useState("Can you win this?");
  const [turnMsg, setTurnMsg] = useState("It's your turn");
  const [animateWinnerMsg, setAnimateWinnerMsg] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (array) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        array[a].imgSrcNmbr === array[b].imgSrcNmbr &&
        array[a].imgSrcNmbr === array[c].imgSrcNmbr
      ) {
        if (array[a].imgSrcNmbr === 1) {
          setWinner(true);
          return;
        } else if (array[a].imgSrcNmbr === 2) {
          setWinner(false);
          return;
        }
      }
    }
  };

  useEffect(() => {
    checkWinner(tttArray);
  }, [tttArray]);

  useEffect(() => {
    if (winner === true) {
      setWinnerMsg("You have won!");
    } else if (winner === false) {
      setWinnerMsg("Haha! you loser!");
    }

    // Trigger animation
    setAnimateWinnerMsg(true);
    const timer = setTimeout(() => setAnimateWinnerMsg(false), 1000); // Animation duration

    return () => clearTimeout(timer);
  }, [winner]);

  useEffect(() => {
    if (turn) {
      setTurnMsg("It's the computer's turn");
      setTimeout(computerMove, 500); // Delay for computer's move
    } else {
      setTurnMsg("It's your turn");
    }
  }, [turn]);

  const updateImgSrcNmbr = (index, newImgSrcNmbr) => {
    const updatedArray = tttArray.map((item, i) =>
      i === index ? { ...item, imgSrcNmbr: newImgSrcNmbr } : item
    );
    setTttArray(updatedArray);
    setTurn(!turn);
  };

  const handleClick = (index) => {
    if (tttArray[index].imgSrcNmbr !== 3 || winner !== null || turn) {
      return;
    }
    updateImgSrcNmbr(index, 1); // Human move
  };

  const computerMove = () => {
    if (winner !== null) return;

    // Find combinations where the human has clicked two indexes
    for (const combination of winningCombinations) {
      const humanClicks = combination.filter(
        (index) => tttArray[index].imgSrcNmbr === 1
      );
      const emptyIndexes = combination.filter(
        (index) => tttArray[index].imgSrcNmbr === 3
      );
      if (humanClicks.length === 2 && emptyIndexes.length === 1) {
        updateImgSrcNmbr(emptyIndexes[0], 2); // Computer move
        return;
      }
    }

    // If no such combination, find combinations that include the human's last move
    const humanLastMoveIndex = tttArray.findIndex(
      (item) => item.imgSrcNmbr === 1
    );
    const relevantCombinations = winningCombinations.filter((combination) =>
      combination.includes(humanLastMoveIndex)
    );

    // Find available indexes in the relevant combinations
    const availableIndexes = [];
    relevantCombinations.forEach((combination) => {
      combination.forEach((index) => {
        if (
          tttArray[index].imgSrcNmbr === 3 &&
          !availableIndexes.includes(index)
        ) {
          availableIndexes.push(index);
        }
      });
    });

    if (availableIndexes.length > 0) {
      const randomIndex =
        availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      updateImgSrcNmbr(randomIndex, 2); // Computer move
    }
  };

  const resetGame = () => {
    setTttArray(initialTttArray);
    setTurn(false);
    setWinner(null);
    setWinnerMsg("Can you win this?");
    setTurnMsg("It's your turn");
  };

  const getImagePath = (imgSrcNmbr) => {
    return process.env.NODE_ENV === "production"
      ? `/TicTacToe/images/${imgSrcNmbr}.svg`
      : `/images/${imgSrcNmbr}.svg`;
  };

  return (
    <>
      <div className="container bg-gradient-to-b from-slate-700 to-slate-300 to-90% h-[650px] w-[310px] mx-auto rounded-md mt-2 flex flex-col">
        <div className="headerContainer w-[310px] h-28 flex mx-auto mt-8 flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold text-slate-200">Tic Tac Toe</h1>
          <h1 className=" font-thin text-white mt-2">
            Can you beat me? Let&apos;s see!
          </h1>
        </div>
        <div className="mainContainer  w-[310px] h-[30rem] flex flex-col mx-auto">
          <div className="turnMessage  w-72 h-8 flex mx-auto justify-center items-center text-lg mt-4">
            {turnMsg}
          </div>
          <div className="ticTacToeContainer  h-72 w-72 mx-auto flex flex-col justify-center mt-4 text-[#fbfbfb]">
            <div className="firstRowContainer flex w-auto h-auto mx-auto">
              <div
                className="block1  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(0)}
              >
                <img
                  src={getImagePath(tttArray[0].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar1 bg-gradient-to-t from-black to-[#6D7889] to-90% h-20 w-1"></div>
              <div
                className="block2  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(1)}
              >
                <img
                  src={getImagePath(tttArray[1].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar2 bg-gradient-to-t from-black to-[#6D7889] to-90% h-20 w-1"></div>
              <div
                className="block3  h-20 w-20 flex items-centerflex justify-center items-center"
                onClick={() => handleClick(2)}
              >
                <img
                  src={getImagePath(tttArray[2].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <div className="hr1 bg-gradient-to-r from-[#838E9D] via-black to-[#838E9D] w-64 h-1 flex mx-auto"></div>
            <div className="secondRowContainer flex w-auto h-auto mx-auto">
              <div
                className="block1  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(3)}
              >
                <img
                  src={getImagePath(tttArray[3].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar1 bg-black h-20 w-1"></div>
              <div
                className="block2  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(4)}
              >
                <img
                  src={getImagePath(tttArray[4].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar2 bg-black h-20 w-1"></div>
              <div
                className="block3  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(5)}
              >
                <img
                  src={getImagePath(tttArray[5].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <div className="hr1 bg-gradient-to-r from-slate-400 via-black to-slate-400 w-64 h-1 flex mx-auto"></div>
            <div className="thirdRowContainer flex w-auto h-auto mx-auto">
              <div
                className="block1  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(6)}
              >
                <img
                  src={getImagePath(tttArray[6].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar1 bg-gradient-to-b from-black to-[#B0BBC8] h-20 w-1"></div>
              <div
                className="block2  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(7)}
              >
                <img
                  src={getImagePath(tttArray[7].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
              <div className="bar2 bg-gradient-to-b from-black to-[#B0BBC8] h-20 w-1"></div>
              <div
                className="block3  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(8)}
              >
                <img
                  src={getImagePath(tttArray[8].imgSrcNmbr)}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
          <div
            className={`winnerMessage bg-slate-600 w-72 h-12 flex mx-auto justify-center items-center mt-8 rounded-lg ${
              animateWinnerMsg ? "animate-fade-in" : ""
            }`}
          >
            <h1 className="text-2xl font-bold text-slate-100">
              {winnerMsg || "No winner yet"}
            </h1>
          </div>
        </div>
        <div className="reset h-10 flex justify-center items-center m-1">
          <button
            className=" bg-slate-400 h-8 w-16 font-semibold text-lg rounded-lg text-slate-800 "
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
        <div className="footerContainer text-slate-200 text-center h-12 w-72 mx-auto flex flex-col justify-center items-center">
          <div className="copyright  text-slate-600 text-center h-14 w-72 mx-auto mt-2 flex flex-col">
            <a href="http://niloykm.me/profileLinks/" target="_blank">
              Connect with &copy;Niloy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
