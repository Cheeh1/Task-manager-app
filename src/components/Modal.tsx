import { FC } from "react";
import { ToastContainer } from "react-toastify";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import errorImg from "../assets/error.png";

interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const Modal: FC<Props> = ({ visible, onClose, onConfirm }) => {
  return (
    <>
    <ToastContainer/>
      <Rodal visible={visible} onClose={onClose} animation="rotate" width={400}>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5 items-start">
            <img className="w-5 mt-1" src={errorImg} alt="error" />
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-lg">Delete account</h1>
              <p className="font-normal text-gray-600">
                Are you sure you want to delete your account? All of your data
                will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
          <div className=" flex justify-end gap-5">
            <button
              className="font-semibold border-2 border-gray-300 rounded-lg py-1 px-3"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="font-semibold bg-blue-500 text-white border rounded-lg py-1 px-3"
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </Rodal>
    </>
  );
};
export default Modal;
