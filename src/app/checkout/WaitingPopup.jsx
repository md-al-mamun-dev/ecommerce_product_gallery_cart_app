"use client"
import Modal from "@/components/Modal";
import { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeWaitingPopup } from "@/lib/redux/features/control/controlSlice";


export default function WaitingPopup() {
  // const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch()
  const { showWaiting } = useSelector((state) => state.control);

  useEffect(() => {
    if (showWaiting) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showWaiting]);

  if (!showWaiting) return null;



  return (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">Requesting...</h2>
        <p>Please wait...</p>
      </div>
    </div>



      
  );
}

{/* <Modal show={showWaiting} onClose={() => dispatch(closeWaitingPopup())}>
        
        </Modal> */}
