import { useState, useEffect } from "react";
import mermaid from "mermaid";

export const useMermaid = (id, content) => {
  const [svg, setSvg] = useState(null);
  mermaid.mermaidAPI.initialize({
    theme: "forest",
    logLevel: 3,
    flowchart: { curve: "linear" },
    gantt: { axisFormat: "%m/%d/%Y" },
    sequence: { actorMargin: 20 }
  });

  useEffect(() => {
    mermaid.mermaidAPI.render(id, content, svgraph => {
      setSvg(svgraph);
    });
  }, [svg]);

  return svg;
};
