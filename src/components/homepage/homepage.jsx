import React, { useState } from "react";
import Modal from "../modal/modal";

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
            • Click the 'Roll The Dice' button and hope for the best!
          </p>
        </div>
      </Modal>
    </>
  );
}

export default HomePage;
