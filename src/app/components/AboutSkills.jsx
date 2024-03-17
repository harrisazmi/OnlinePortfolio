"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LogoContainer = ({ children }) => {
  return (
    <div className="flex-none w-1/7 mx-4">
      <div className="m-4 p-4 bg-gray-800 rounded-lg shadow-md">{children}</div>
    </div>
  );
};

const AboutSkills = () => {
  const [logosPerRow, setLogosPerRow] = useState(4); // Initial number of logos per row

  useEffect(() => {
    const calculateLogosPerRow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setLogosPerRow(7);
      } else if (screenWidth >= 1024) {
        setLogosPerRow(4);
      } else if (screenWidth >= 768) {
        setLogosPerRow(3);
      } else {
        setLogosPerRow(2);
      }
    };

    calculateLogosPerRow();

    const handleResize = () => {
      calculateLogosPerRow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numberOfLogos = 36; // Total number of logos

  const rows = Math.ceil(numberOfLogos / logosPerRow);

  const logoArray = [...Array(numberOfLogos).keys()];

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {[...Array(rows).keys()].map((rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-center">
            {logoArray
              .slice(rowIndex * logosPerRow, (rowIndex + 1) * logosPerRow)
              .map((index) => (
                <LogoContainer key={index}>
                  <Image
                    src={`/logos/${index + 1}.png`}
                    alt={`Logo ${index + 1}`}
                    width={80}
                    height={80}
                  />
                </LogoContainer>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
