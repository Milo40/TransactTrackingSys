import React from "react";

const CheckIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${props.size} w-${props.size} text-${props.color}-400 icon icon-tabler icon-tabler-circle-check`}
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
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9 12l2 2l4 -4"></path>
    </svg>
  );
};

export { CheckIcon };
