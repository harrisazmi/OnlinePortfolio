import React from "react";
import Link from "next/link";
import Image from "next/image";

const BottomSection = () => {
  const paragraphStyle = {
    textAlign: "justify",
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p style={paragraphStyle} className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently exploring new opportunities and welcome any
          inquiries or messages you may have. Whether you have questions, ideas
          to discuss, or just want to say hello, feel free to reach out.
          I&apos;m committed to responding promptly and look forward to
          connecting with you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/harrisazmi">
            <Image
              src="./githubicon.svg"
              width={40}
              height={40}
              alt="Github Icon"
            />
          </Link>
          <Link href="http://www.linkedin.com/in/harris-azmi-roswadi">
            <Image
              src="./linkedinicon.svg"
              width={40}
              height={40}
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
