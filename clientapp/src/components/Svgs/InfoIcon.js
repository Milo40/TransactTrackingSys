import React from "react";

const InfoIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`h-${props.size} w-${props.size} text-${props.color}-400 icon icon-tabler icon-tabler-info-square`}
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <polyline points="11 12 12 12 12 16 13 16"></polyline>
    </svg>
  );
};

export { InfoIcon };
