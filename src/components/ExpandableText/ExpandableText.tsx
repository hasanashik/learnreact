import { useState } from "react";

interface Props {
  children: string;
  MaxChar?: number;
}
function ExpandableText({ children, MaxChar = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= MaxChar)
    return (
      <>
        <p>{children}</p>
      </>
    );
  const text = isExpanded ? children : children.substring(0, MaxChar) + "...";
  return (
    <>
      <p>
        {text}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
}

export default ExpandableText;
