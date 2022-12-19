import { ParkingContext } from "../store/store"
import { useContext, useEffect } from "react"
import { FloorOverview } from "../components/FloorOverview"
import { Accordion, H1, H2 } from "@dnb/eufemia"
import { SummaryCard } from "../components/SummaryCard"
import { StatusIcon } from "../components/StatusIcon"
import { IFloor } from "../types"

export const Home = () => {
    const { state, dispatch } = useContext(ParkingContext)


    useEffect(() => {
        fetch("/mockdata.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                dispatch({
                    type: "SET_GARAGE_DATA",
                    payload: data,
                });
            })
    }, []);

    const totalCapacity: number = state.floors.reduce((acc: number, curr: IFloor) =>
        acc + curr.maxCapacity
        , 0)
    const totalAvailableCars: number = state.floors.reduce((acc: number, curr: IFloor) =>
        acc + (curr.parkedCars.length)
        , 0)

    const statusIconColor = (capacity: number, cars: number) => {
        const availableSpots = capacity - cars
        if (availableSpots > Math.floor((capacity * 2) / 3)) {
            return "success"
        }
        else if (availableSpots >= Math.floor(capacity / 3)) {
            return "warning"
        }
        return "danger"
    }




    return (
        <div className="home m-6">
            <div className="py-5"><H1 size="x-large">{state.name}</H1></div>
            <div className="mb-6">
                <SummaryCard statusColor={statusIconColor(totalCapacity, totalAvailableCars)} />
            </div>
            <div>
                {state.floors && state.floors.map((floor, index) => (
                    <div key={`floor-${index}`} >
                        <Accordion
                            expanded
                            remember_state
                            id="single-accor
            dion"
                            title={<div className="flex w-full justify-between" >{`Floor ${floor.floorId} - Available spots: ${floor.maxCapacity - floor.parkedCars.length}/${floor.maxCapacity}`}<StatusIcon status={statusIconColor(floor.maxCapacity, floor.parkedCars.length)} /></div>}
                        >
                            <FloorOverview maxCap={floor.maxCapacity} key={`floor-overview${index}`} cars={floor.parkedCars} />
                        </Accordion>
                        <Accordion.Provider
                            top
                            remember_state
                            icon="chevron_down"
                            icon_position="right"
                        ></Accordion.Provider>
                    </div>))}
            </div >
        </div >
    )
}
