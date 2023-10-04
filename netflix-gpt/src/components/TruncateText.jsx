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
    <div className="hidden md:inline-block py-6 text-lg w-1/4">
      <span onClick={toggleExpansion} className="cursor-default">
        {isExpanded ? text : truncatedText}
        {words.length > maxWords && (
          <>
            {isExpanded ? "" : "..."}
          </>
        )}
      </span>
    </div>
  );
}

export default TruncateText;
