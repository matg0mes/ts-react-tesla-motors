import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisteredModel, getModelByName } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisteredModel(modelName),
    [modelName, unregisteredModel]
  );

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  );

  return { registerModel, getModel };
}
