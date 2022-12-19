export interface IGarage {
    floors: IFloor[]
    name: string,
}

export interface IFloor {
    floorId: number
    maxCapacity: number,
    parkedCars: ICar[]
}

export interface ICar {
    timeArrived: number,
    timeDeparture?:number,
    id: number,
    numberPlate: string,
    paymentFee?: number
}

export interface StatusColors {
    danger: string,
    warning: string,
    success: string
}

const car1: ICar = {
    id: 1,
    numberPlate: "SU12345",
    timeArrived: 1519211809934,
}
const car2: ICar = {
    id: 2,
    numberPlate: "SD23411",
    timeArrived: 1519211809934,
}
const car3: ICar = {
    id: 3,
    numberPlate: "TW22222",
    timeArrived: 1519211809934,
}
const car4: ICar = {
    id: 4,
    numberPlate: "ST12555",
    timeArrived: 1519211809934,
}
const car5: ICar = {
    id: 5,
    numberPlate: "LS23222",
    timeArrived: 1519211809934,
}

const floor1: IFloor = {
    floorId: 1,
    maxCapacity: 3,
    parkedCars: [car1, car2, car3]
}

const floor2: IFloor = {
    floorId: 2,
    maxCapacity: 5,
    parkedCars: [car4, car5, car2, car2]
}

export const garage1: IGarage = {
    name: "Parkeringshuset Park AS",
    floors: [floor1, floor2]

}