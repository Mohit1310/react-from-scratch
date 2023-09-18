import React, { useState } from "react";

function TruncateText({ text, maxWords }) {
  const words = text.split(" ");
  const truncatedText = words.slice(0, maxWords).join(" ");
  const remainingText = words.slice(maxWords).join(" ");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <span onClick={toggleExpansion} className="cursor-default">
        {isExpanded ? text : truncatedText}
        {words.length > maxWords && (
          <span className="bg-black text-white">
            {isExpanded ? "" : "....."}
          </span>
        )}
      </span>
    </div>
  );
}

export default TruncateText;
