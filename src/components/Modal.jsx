import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="relative m-auto z-50 min-h-[200px] max-w-[80%] bg-slate-100 p-2">
            <div className="justify-end flex">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          <div className="absolute h-screen w-screen backdrop-blur z-40 top-0"/>
        </>
      )}
    </div>
  );
};

export default Modal;
