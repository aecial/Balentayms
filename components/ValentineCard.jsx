"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineCard({
  yesPressed,
  setYesPressed,
  onNoClick,
}) {
  const [noCount, setNoCount] = useState(0);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    const next = noCount + 1;
    setNoCount(next);
    if (typeof onNoClick === "function") onNoClick(next);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Hindi:<?",
      "Di Talaga:<<?",
      "Ayusin Mo!",
      "Last chance!",
      "Dimonako Lab:<?",
      "Yes mo na pls:<",
      "Sak8",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {yesPressed ? (
        <></>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
