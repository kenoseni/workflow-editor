import React, { useCallback } from "react";
import styled from "styled-components";

import { useReactFlow } from "react-flow-renderer";

export const Sidebar = ({ instance, setNodes, setEdges }: any) => {
  const { setViewport } = useReactFlow();

  const flowKey = "example-flow";

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onSave = useCallback(() => {
    if (instance) {
      const flow = instance.toObject();
      sessionStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [instance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(sessionStorage.getItem(flowKey)!);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;

        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };
    restoreFlow();
  }, [setNodes, setEdges, setViewport]);

  return (
    <SidebarWrapper>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode start"
        onDragStart={(event) => onDragStart(event, "start")}
        draggable
      >
        Start Node
      </div>
      <div
        className="dndnode input-output"
        onDragStart={(event) => onDragStart(event, "inputoutput")}
        draggable
      >
        Input/Output Node
      </div>
      <div
        className="dndnode end"
        onDragStart={(event) => onDragStart(event, "end")}
        draggable
      >
        End Node
      </div>
      <div
        className="dndnode calculate"
        onDragStart={(event) => onDragStart(event, "calculate")}
        draggable
      >
        Calculate Node
      </div>
      <div
        className="dndnode decision"
        onDragStart={(event) => onDragStart(event, "decision")}
        draggable
      >
        Decision Node
      </div>
      <div className="buttons">
        <button onClick={onSave}>save</button>
        <button onClick={onRestore}>restore</button>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  .buttons {
    button {
      padding: 1.2rem;
      margin-left: 1rem;
      width: 40%;
      margin-top: 3rem;
      cursor: pointer;
      border: 1px solid red;
      background-color: #fff;
    }
  }
`;
