import { Exo_2 } from "next/font/google";
import React, { useState } from "react";
import { useGlobalContext } from "src/app/context/GlobalContext";
import { ReadMoreProps } from "src/types/detail";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { content, language } = useGlobalContext();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? text : text.slice(0, maxLength);

  const fontClass = language !== "pe" ? exo.className : "font-yekan";

  return (
    <div className={`${fontClass}`}>
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
