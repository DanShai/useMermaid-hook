# useMermaid

A React hook for using Mermaid

# usage

```jsx
import React from "react";
import { useMermaid } from "./useMermaid";

const ExampleMermaid = () => {
  const graph = `classDiagram
  Class01 <|-- AveryLongClass : Cool
  Class03 *-- Class04
  Class05 o-- Class06
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  Class08 <--> C2: Cool label`;

  const svg = useMermaid("exampleID", graph);

  if (!svg) return <div>Loading...</div>;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};
```

### class diagram working with my mermaid fix (look PR at mermaid)

![Screenshot](/uml.png)
