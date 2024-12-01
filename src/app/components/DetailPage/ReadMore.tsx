import React, { useState } from "react";
import { ReadMoreProps } from "src/types/detail";

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? text : text.slice(0, maxLength);
  return (
    <div className="">
      <p className="font-medium text-sm mt-4 !leading-loose text-black text-opacity-70">
        {displayedText}
        {text.length > maxLength && !isExpanded && "..."}
      </p>
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className="text-[rgb(38,38,255)]">
          {isExpanded ? "کمتر" : "بیشتر"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
