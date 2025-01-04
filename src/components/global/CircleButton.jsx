import React from "react";

const CircleButton = ({ text, color, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <button
      style={{ backgroundColor: color }}
      className="circle_button"
      onClick={handleClick}
    >
      <p className="button__text">
        {text.split("").map((char, index) => (
          <span key={index} style={{ "--index": index }}>
            {char}
          </span>
        ))}
      </p>

      <div className="button__circle" style={{ color: color }}>
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon"
          width="14"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon button__icon--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default CircleButton;
