import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className="cursor-pointer"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaArrowCircleUp className="text-gray-600 w-[15px] h-[20px]" />
    </Button>
  );
}

export default ScrollTop;
