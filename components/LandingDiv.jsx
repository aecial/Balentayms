import React from "react";
import Image from "next/image";
const LandingDiv = ({ imageSrc = "/hero0.jpg" }) => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image src={imageSrc} width={300} height={300} alt="Hero" />
      <h1 className="text-3xl lg:text-[100px] font-love">
        Will you be my Balentayms?
      </h1>
    </main>
  );
};

export default LandingDiv;
