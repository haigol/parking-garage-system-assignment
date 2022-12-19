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