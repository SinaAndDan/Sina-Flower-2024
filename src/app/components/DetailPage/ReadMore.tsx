import React, { useState } from "react";
import { useLanguage } from "src/app/context/LanguageContext";
import { ReadMoreProps } from "src/types/detail";

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { content } = useLanguage();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? text : text.slice(0, maxLength);
  return (
    <div className="">
      <p className="font-medium text-sm sm:text-base mt-4 !leading-loose text-black text-opacity-70">
        {displayedText}
        {text.length > maxLength && !isExpanded && "..."}
      </p>
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className="text-[rgb(38,38,255)]">
          {isExpanded ? content.showLess : content.showMore}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
