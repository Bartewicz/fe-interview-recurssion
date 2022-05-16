import * as React from "react";
import Comment from "../Comment";

import "./style.scss";

interface IContent {
  text: string | null;
  subEntries: IContent[] | null;
  copyable: boolean;
  inline: boolean;
}

const Content: React.FC<IContent> = (props) => {
  const { text, subEntries, copyable, inline } = props;

  return (
    <div className="comment">
      <Comment copyable={copyable} text={text} />
      {subEntries?.map((entry, i) =>
        inline ? (
          <Comment key={`item-${i}`} {...entry} />
        ) : (
          <Content key={`item-${i}`} {...entry} />
        )
      )}
    </div>
  );
};

export default Content;
