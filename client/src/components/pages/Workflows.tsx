import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Specification } from "../Specification";
import { WorkFlowsWrapper } from "../../styles/WorkFlows.style";

type Specs = {
  purpose: string;
  scope: string;
  definitions: string;
  responsibilities: string;
  materials: string[];
  procedures: string[];
};

export const WorkFlows = () => {
  const [specs, setSpecs] = useState<Specs[]>([]);

  useEffect(() => {
    const getSpecification = async () => {
      const options = {
        method: "get",
        url: `${process.env.REACT_APP_ROOT_API}/api/workflows`,
      };
      try {
        const response = await axios(options);
        if (response.status === 200) {
          setSpecs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSpecification();
  }, []);
  return (
    <WorkFlowsWrapper>
      <Link to={"/editor"}>
        <div className="button">Goto Workflow Editor</div>
      </Link>
      {specs.length > 0 ? (
        specs.map((spec, key) => {
          return <Specification spec={spec} key={key} />;
        })
      ) : (
        <div className="message">You have not created any workflow</div>
      )}
    </WorkFlowsWrapper>
  );
};
