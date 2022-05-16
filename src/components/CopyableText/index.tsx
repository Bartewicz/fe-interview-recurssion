import * as React from "react";
import copy from "copy-to-clipboard";

import "./style.scss";

interface CopyableTextProps {
  text: string;
}

const copyableTextDefaults = {
  options: {
    format: "text/plain",
  },
};

const CopyableText: React.FC<CopyableTextProps> = ({
  text,
}: CopyableTextProps) => {
  const handleClick = () => {
    copy(text, copyableTextDefaults.options);
  };

  return (
    <span className="copyable-text" onClick={handleClick}>
      {text}
    </span>
  );
};

export default CopyableText;
