import React, { useEffect, useRef } from "react";
import useModel from "../useModel";

import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelsSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, []);

  return (
    <Container ref={sectionRef} {...props}>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelsSection;
