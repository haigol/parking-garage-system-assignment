import { createContext, ReactElement, useReducer } from "react";
import { IGarage } from "../types";

export interface ParkingGarageState {
  state: IGarage;
  dispatch: React.Dispatch<IAction>;
}
const initialState: ParkingGarageState = {
  state: {
    name: "",
    floors: [],
  },
  dispatch: () => null,
};

export const ParkingContext = createContext<ParkingGarageState>(initialState);
export interface IAction {
  type: string;
  payload: any;
}

const reducer = (state: IGarage, action: IAction) => {
  switch (action.type) {
    case "SET_GARAGE_DATA":
      return { ...action.payload };
    default:
      return state;
  }
};
interface StateProviderProps {
  children: any;
}
export const StateProvider = (props: StateProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <ParkingContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ParkingContext.Provider>
  );
};
