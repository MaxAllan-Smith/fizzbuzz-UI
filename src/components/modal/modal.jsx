import React from "react";

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <div className="bg-slate-200 p-2 rounded-lg border border-slate-300 drop-shadow-lg">
          <div className="flex flex-col">
          <div className="bg-slate-100 p-2 rounded-lg border border-slate-300 mb-2">{children}</div>
            <button
              onClick={() => {
                onClose();
              }}
              className="text-white font-medium bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded-md place-self-end m-1"
            >
              Let Me Play!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
