import React, { createContext, useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/App.style";
import { WorkFlows, WorkFlow } from "./components/pages";
import { NotFound } from "./components/pages/NotFound";

type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
type Props = { children: JSX.Element };
interface ContextInterface {
  store: {
    purpose: string;
    scope: string;
    definitions: string;
    responsibilities: string;
    procedures: {};
    materials: string[];
    loading: boolean;
    error: string;
  };
  handleChange: ChangeEvent;
}

export const WorkflowContext = createContext<ContextInterface | null>(null);

export const WorkflowProvider = WorkflowContext.Provider;

export const ContextWrapper = ({ children }: Props) => {
  const [store, setStore] = useState({
    purpose: "",
    scope: "",
    definitions: "",
    responsibilities: "",
    materials: [],
    procedures: {},
    loading: false,
    error: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    setStore((prev) => ({
      ...prev,
      procedures: { ...prev.procedures, [name]: e.target.value },
    }));
  }, []);

  return (
    <WorkflowProvider value={{ store, handleChange }}>
      {children}
    </WorkflowProvider>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<WorkFlows />} />
        <Route path="/editor" element={<WorkFlow />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
