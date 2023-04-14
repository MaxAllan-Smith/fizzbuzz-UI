import React, { useState } from "react";
import Modal from "../modal/modal";
import './homepage.css'

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-5">Welcome to FizzBuzz UI!</h1>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="text-white bg-slate-500 hover:bg-blue-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center"
        >
          Instructions
        </button>
      </div>
      <hr className="bg-black h-1 mx-10" />
      <div className="p-2 text-center flex justify-center items-center mt-6">
        <div id="game-background" className="bg-slate-200 w-screen mx-96 h-[700px] rounded-lg border-2 border-slate-300 drop-shadow-lg">
          <button className="bg-slate-400 hover:bg-blue-600 text-white font-semibold text-2xl px-5 py-2 rounded-lg border-2 border-slate-500 drop-shadow-lg m-5">
            Roll Dice!
          </button>
          <div className="absolute mt-[500px] ml-[40px]">
            <img className="max-h-24" src="images/bee.png" alt="" />
          </div>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="p-2 text-center">
          <h1 className="text-2xl text-black mb-5 underline font-bold">
            How to play
          </h1>
          <p className="text-lg italic border-2 border-slate-400 rounded-lg p-2 flex justify-center items-center">
            <div className="p-2 border border-black w-2/3 mr-1">
              <ul className="text-sm font-semibold">
                • "Fizz" = 1 Move Forward <br />
                • "Buzz" = 1 Move Back <br />
                • "FizzBuzz" = 2 Moves Forward <br />
                • "Baz" = 2 Moves Back <br />
              </ul>
            </div>
            • Click the 'Roll Dice' button and hope for the best!
          </p>
        </div>
      </Modal>
    </>
  );
}

export default HomePage;
