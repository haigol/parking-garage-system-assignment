import { createContext, Provider, ReactElement, useReducer } from 'react'
import { garage1, IGarage } from '../types'

const initialState: IGarage = {
    name: "Parkeringshuset",
    floors: [{ floorId: 1, maxCapacity: 20, parkedCars: [{ numberPlate: "LL11111", timeArrived: 1111111, id: 6 }] }]
}

export const ParkingContext = createContext<{
    state: IGarage
    dispatch: React.Dispatch<Action>
}>({
    state: initialState,
    dispatch: () => null
})
//TODO: Help
export interface Action {
    type: string;
    payload: unknown;
}

const reducer = (state: IGarage, action: Action) => {
    switch (action.type) {
        case "SET_GARAGE_DATA":
            return { ...state, state: action.payload };
        default:
            return state
    }
}
interface StateProviderProps {
    children: any,
}
export const StateProvider = (props: StateProviderProps): ReactElement => {
    const [state, dispatch] = useReducer(reducer, garage1)

    return (
        <ParkingContext.Provider value={{ state, dispatch }} >
            {props.children}
        </ParkingContext.Provider >
    )

}

