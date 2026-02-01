"use client";
import LandingDiv from "@/components/LandingDiv";
import ValentineCard from "@/components/ValentineCard";
import YesDiv from "@/components/YesDiv";
import { useState } from "react";
export default function Home() {
  const [imgIdx, setImgIdx] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const handleNo = (noCount) => {
    setImgIdx((i) => Math.min(i + 1, Images.length - 1));
  };
  const Images = [
    "/hero0.jpg",
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
  ];
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans text-black bg-cover"
      style={{ backgroundImage: "url(/Balentayms/bg.png)" }}
    >
      {yesPressed ? (
        <YesDiv />
      ) : (
        <LandingDiv imageSrc={`/Balentayms${Images[imgIdx]}`} />
      )}
      <ValentineCard
        yesPressed={yesPressed}
        setYesPressed={setYesPressed}
        onNoClick={handleNo}
      />
    </div>
  );
}
