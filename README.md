# useMermaid

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
  const svg = useMermaid("exampleID", graph);

  if (!svg) return <div>Loading...</div>;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};
```

### class diagram working with my mermaid fix

- the issue opened here : [class diagram fix issue](https://github.com/knsv/mermaid/issues/794)
- the PR opened here : [class diagram fix PR](https://github.com/knsv/mermaid/pull/795)

![Screenshot](/uml.png)
