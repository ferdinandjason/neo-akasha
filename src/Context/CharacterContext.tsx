import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react"
import CharacterData from "../Data/Character/Character"

const characterValue: CharacterContextObject = {
  character: null
}

export type CharacterContextObject = {
  character: CharacterData | null
}

export const CharacterContext = createContext({} as CharacterContextObject)
export const CharacterDispatchContext = createContext({} as Dispatch<characterReducerAction>)

export function CharacterProvider({ children }: PropsWithChildren) {
  const [character, dispatch] = useReducer(
    characterReducer,
    characterValue
  )

  return <CharacterContext.Provider value={character}>
    <CharacterDispatchContext.Provider value={dispatch}>
      {children}
    </CharacterDispatchContext.Provider>
  </CharacterContext.Provider>
}

export function useCharacterContext() {
  return useContext(CharacterContext);
}

export function useCharacterDispatch() {
  return useContext(CharacterDispatchContext);
}

export function addCharacter(character: CharacterData): characterReducerAddAction {
  return {
    type: CharacterAction.ADD,
    value: character,
  }
}

enum CharacterAction {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
}

type characterReducerAddAction = {
  type: CharacterAction
  value: CharacterData
}

export type characterReducerAction = characterReducerAddAction

function characterReducer(character: CharacterContextObject, action: characterReducerAction): CharacterContextObject {
  switch (action.type) {
    case CharacterAction.ADD:
      return Object.assign({ ...character }, { character: action.value })
  }
  return character
}
