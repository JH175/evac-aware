import React, { useState } from "react";

export default function Modal({
  trigger,
  children,
}: {
  trigger: any;
  children: React.ReactNode;
}) {
  const [displayModal, setDisplayModal] = useState(false);
  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <>
      {displayModal ? (
        <div className="absolute w-screen h-screen z-10 bg-[#00000099] p-5 top-0 left-0 flex flex-col justify-center items-center">
          <div className="border bg-black rounded-md p-5">
            <div className="flex justify-end">
              <button onClick={toggleModal}>X</button>
            </div>
            {children}
          </div>
        </div>
      ) : (
        <button onClick={toggleModal}>{trigger}</button>
      )}
    </>
  );
}
