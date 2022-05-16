import * as React from "react";
import CopyableText from "../CopyableText";

interface IComment {
  copyable: boolean;
  text: string;
}

const Comment: React.FC<IComment> = ({ copyable, text }) => {
  return copyable ? <CopyableText text={text} /> : <span>{text}</span>;
};

export default Comment;
