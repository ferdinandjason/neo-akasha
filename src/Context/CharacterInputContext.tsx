import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react";
import { Input } from "../Input/CharacterInputData";

const characterInputData =  new Map<string, Input>([
  ["autoIndex", {data: 1, unit: ""}],
  ["skillIndex", {data: 1, unit: ""}],
  ["burstIndex", {data: 1, unit: ""}],
  ["hp", { data: 0, unit: "" }],
  ["atk", { data: 0, unit: "" }],
  ["def", { data: 0, unit: "" }],
  ["em", { data: 0, unit: "" }],
  ["er", { data: 1, unit: "%" }],
  ["crate", { data: 0.05, unit: "%" }],
  ["cdmg", { data: 0.5, unit: "%" }],
  ["pyroDMGBonus", { data: 0, unit: "%" }],
  ["hydroDMGBonus", { data: 0, unit: "%" }],
  ["cryoDMGBonus", { data: 0, unit: "%" }],
  ["electroDMGBonus", { data: 0, unit: "%" }],
  ["geoDMGBonus", { data: 0, unit: "%" }],
  ["anemoDMGBonus", { data: 0, unit: "%" }],
  ["dendroDMGBonus", { data: 0, unit: "%" }],
  ["physicalDMGBonus", { data: 0, unit: "%" }],
  ["healingBonus", { data: 0, unit: "%" }],
  ["enemyLevel", { data: 0, unit: "" }],
  ["enemyPhysicalResist", { data: 0, unit: "%" }],
  ["enemyPyroResist", { data: 0, unit: "%" }],
  ["enemyHydroResist", { data: 0, unit: "%" }],
  ["enemyCryoResist", { data: 0, unit: "%" }],
  ["enemyElectroResist", { data: 0, unit: "%" }],
  ["enemyGeoResist", { data: 0, unit: "%" }],
  ["enemyAnemoResist", { data: 0, unit: "%" }],
  ["enemyDendroResist", { data: 0, unit: "%" }],
])

export const CharacterInputContext = createContext(characterInputData);
export const CharacterInputDispatchContext = createContext({} as Dispatch<characterInputReducerAction>)

export function CharacterInputProvider({ children }: PropsWithChildren) {
  const [character, dispatch] = useReducer(
    characterInputReducer,
    characterInputData
  )

  return <CharacterInputContext.Provider value={character}>
    <CharacterInputDispatchContext.Provider value={dispatch}>
      {children}
    </CharacterInputDispatchContext.Provider>
  </CharacterInputContext.Provider>
}


export function useCharacterInputContext() {
  return useContext(CharacterInputContext);
}

export function useCharacterInputDispatch() {
  return useContext(CharacterInputDispatchContext);
}

export function updateCharacterInputData(key: string, value: Input): characterInputReducerAction {
  return {
    type: CharacterInputAction.UPDATE,
    key, value
  }
}

enum CharacterInputAction {
  UPDATE = 'UPDATE',
}

type characterInputReducerAction = {
  type: CharacterInputAction
  key: string
  value: Input
}

function characterInputReducer(characterInput: Map<string, Input>, action: characterInputReducerAction): Map<string, Input> {
  const characterInputUpdated = new Map(characterInput)
  switch (action.type) {
    case CharacterInputAction.UPDATE:
      characterInputUpdated.set(action.key, action.value)
      return characterInputUpdated
  }
  return characterInput
}
