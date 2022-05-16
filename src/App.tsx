import React from "react";
import { createServer } from "miragejs";
import Content from "./components/Content";

interface IContent {
  text: string | null;
  subEntries: IContent[] | null;
  copyable: boolean;
  inline: boolean;
}

const res: IContent = {
  text: "This is recursive entry",
  subEntries: [
    {
      text: "This is sub-entry containing additional sub-entries:",
      subEntries: [
        {
          text: "a) This is first internal sub-entry",
          subEntries: null,
          copyable: false,
          inline: false
        },
        {
          text: null,
          subEntries: [
            {
              text: "b) This is second internal sub-entry",
              subEntries: null,
              copyable: false,
              inline: false
            },
            {
              text: " but with ",
              subEntries: null,
              copyable: false,
              inline: true
            },
            {
              text: "copyable element",
              subEntries: null,
              copyable: true,
              inline: true
            }
          ],
          copyable: false,
          inline: true
        }
      ],
      copyable: false,
      inline: false
    },
    {
      text: null,
      subEntries: [
        {
          text: "This sub-entry",
          subEntries: null,
          copyable: false,
          inline: false
        },
        {
          text: " without copyable element",
          subEntries: null,
          copyable: false,
          inline: true
        }
      ],
      copyable: false,
      inline: true
    },
    {
      text: null,
      subEntries: [
        {
          text: "This is another sub-entry, but it has ",
          subEntries: null,
          copyable: false,
          inline: false
        },
        {
          text: "a copyable element",
          subEntries: null,
          copyable: true,
          inline: false
        }
      ],
      copyable: false,
      inline: true
    },
    {
      text: "This sub-entry don't have any sub-entries",
      subEntries: null,
      copyable: false,
      inline: false
    }
  ],
  copyable: false,
  inline: false
};

createServer({
  routes() {
    this.namespace = "api";
    this.get("/content", () => res);
  }
});

function App() {
  const [response, setResponse] = React.useState<IContent | null>(null);

  React.useEffect(() => {
    fetch("/api/content/")
      .then((res) => res.json())
      .then((result: IContent) => {
        setResponse(result);
      });
  }, []);

  return <>{}</>;
}

export default App;
