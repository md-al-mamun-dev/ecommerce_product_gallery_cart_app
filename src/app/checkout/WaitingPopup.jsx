"use client"
import { useEffect} from "react";
import { useSelector } from "react-redux";


export default function WaitingPopup() {
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
