import React from "react";

const ArrowRightIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${props.size} w-${props.size} text-${props.color}-400 icon icon-tabler icon-tabler-arrow-move-right`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M11 12h10"></path>
      <path d="M18 9l3 3l-3 3"></path>
      <path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z"></path>
    </svg>
  );
};

export { ArrowRightIcon };
