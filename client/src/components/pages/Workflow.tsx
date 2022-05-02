import React, { useState, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Node,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  MiniMap,
  Background,
  Controls,
  MarkerType,
} from "react-flow-renderer";
import { Sidebar } from "../Sidebar";
import { CustomEdge } from "../CustomEdge";
import { InputOutput } from "../shapes/InputOutput";
import { Calculate } from "../shapes/Calculate";
import { Start } from "../shapes/Start";
import { End } from "../shapes/End";
import { Decision } from "../shapes/Decision";
import { ContextWrapper } from "../../App";

const edgeTypes = {
  custom: CustomEdge,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "start",
    data: { label: "input node" },
    position: { x: 5, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

export const WorkFlow = () => {
  const reactFlowWrapper: any = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            animated: false,
            markerEnd: {
              type: MarkerType.Arrow,
            },
            type: "step edge",
          },
          eds
        )
      ),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode: any = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );
  const nodeTypes = useMemo(
    () => ({
      calculate: Calculate,
      start: Start,
      end: End,
      inputoutput: InputOutput,
      decision: Decision,
    }),
    []
  );
  return (
    // <WorkFlowWrapper>
    //   <Link className="back-button" to="/">
    //     <FaAngleLeft />
    //   </Link>
    //   <div className="container">
    //     <div className="workflow-section">
    //       <h2>WorkFlow</h2>
    //     </div>
    //     <div className="experiment-details">
    //       <h2>Guidelines</h2>
    //     </div>
    //   </div>
    // </WorkFlowWrapper>

    <ContextWrapper>
      <Wrapper>
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              fitView
            >
              <MiniMap />
              <Controls />
              <Background color="#ccc" gap={16} />
            </ReactFlow>
          </div>
          <Sidebar
            instance={reactFlowInstance}
            setNodes={setNodes}
            setEdges={setEdges}
          />
        </ReactFlowProvider>
      </Wrapper>
    </ContextWrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex-grow: 1;
  height: 100%;

  aside {
    width: 30%;
    border-right: 1px solid #eee;
    padding: 15px 10px;
    font-size: 12px;
    background: #fcfcfc;

    .description {
      margin-bottom: 10px;
    }
  }

  .dndnode {
    height: 50px;
    padding: 4px;
    border: 1px solid #1a192b;
    border-radius: 2px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
  }

  .dndnode.start {
    border-color: #b1d4a1;
  }
  .dndnode.end {
    border-color: #e34637;
  }
  .dndnode.input-output {
    border-color: #fdd765;
  }
  .dndnode.calculate {
    border-color: #07b3f7;
  }
  .dndnode.decision {
    border-color: #da4648;
  }

  .reactflow-wrapper {
    flex-grow: 1;
    width: 100%;
    height: 100vh;
  }
`;
