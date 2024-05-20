import React from 'react';

export const Modal: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    showModal && (
      <>
        <div
          onClick={() => setShowModal(false)}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div
              onClick={e => e.stopPropagation()}
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              asdas
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};
