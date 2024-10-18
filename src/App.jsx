import { useState } from "react";

function App() {
  const [tttArray, setTttArray] = useState([
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
    { imgSrcNmbr: null },
  ]);
  console.log(tttArray[2].imgSrcNmbr);
  const [turn, setTurn] = useState(false);

  const updateImgSrcNmbr = (index, newImgSrcNmbr) => {
    const updatedArray = tttArray.map((item, i) =>
      i === index ? { ...item, imgSrcNmbr: newImgSrcNmbr } : item
    );
    setTttArray(updatedArray);
    setTurn(!turn);
  };

  const handleClick = (index) => {
    const newImgSrcNmbr = turn ? 0 : 1;
    updateImgSrcNmbr(index, newImgSrcNmbr);
  };
  return (
    <>
      <div className="container bg-gradient-to-b from-slate-700 to-slate-300 to-90% h-[650px] w-80 mx-auto rounded-md mt-4 flex flex-col">
        <div className="headerContainer w-[310px] h-28 flex mx-auto mt-8 flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold text-slate-200">Tic Tac Toe</h1>
          <h1 className=" font-thin text-white mt-2">
            Can you beat me? Let&apos;s see!
          </h1>
        </div>
        <div className="mainContainer  w-[310px] h-[30rem] flex flex-col mx-auto">
          <div className="turnMessage  w-72 h-8 flex mx-auto justify-center items-center text-lg mt-4">
            Turn Message
          </div>
          <div className="ticTacToeContainer  h-72 w-72 mx-auto flex flex-col justify-center mt-4 text-[#fbfbfb]">
            <div className="firstRowContainer flex w-auto h-auto mx-auto">
              <div
                className="block1  h-20 w-20 flex justify-center items-center"
                onClick={() => handleClick(0)}
              >
                <img
                  src={`/public/images/${tttArray[0].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[1].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[2].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[3].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[4].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[5].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[6].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[7].imgSrcNmbr}.svg`}
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
                  src={`/public/images/${tttArray[8].imgSrcNmbr}.svg`}
                  alt=""
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
          <div className="winnerMessage bg-slate-600 w-72 h-12 flex mx-auto justify-center items-center mt-8 rounded-lg">
            <h1 className="text-2xl font-bold text-slate-100">
              You are the winner
            </h1>
          </div>
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
