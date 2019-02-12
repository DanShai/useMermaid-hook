# useMermaid-hook

A React hook for using Mermaid

# usage

```jsx
import React from "react";
import { useMermaid } from "./useMermaid";

const ExampleMermaid = () => {
  const graph = `
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  `;
 const svg = useMermaid("exampleID" , graph)

  if (!svg)
    return <div>Loading...</div>;

 return (
    <div
      style= {{
        width="90%",
        height="90%",
        margin="auto 16",
        padding="16",
        display="flex"
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

```
