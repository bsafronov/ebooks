import { FC } from "react";

interface SearchLogoProps {
  onClick: () => void;
}

const SearchLogo: FC<SearchLogoProps> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 55.77 124.72"
      onClick={onClick}
      className="cursor-pointer"
    >
      <g
        fill="none"
        stroke="#393939"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        color="#000"
        transform="translate(-4285.918 -6007.44) scale(12.843)"
      >
        <circle
          cx="335.03"
          cy="472.13"
          r="3.625"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
        <path
          d="m337.91 474.44 2.91 2.267"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
      </g>
    </svg>
  );
};

export default SearchLogo;
