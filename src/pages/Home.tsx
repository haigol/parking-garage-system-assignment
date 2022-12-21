import { ParkingContext } from "../store/store";
import { useContext, useEffect } from "react";
import { FloorOverview } from "../components/FloorOverview";
import { Accordion, H1 } from "@dnb/eufemia";
import { SummaryCard } from "../components/SummaryCard";
import { StatusIcon } from "../components/StatusIcon";
import { IFloor, StatusColors } from "../types";

export const Home = () => {
  //Using a context store for this purpose may be a bit ,
  //Could be nice if full app was to be implemented
  const { state, dispatch } = useContext(ParkingContext);

  //Mockdata has unique ID, but not unique numberplates
  useEffect(() => {
    fetch("/mockdata.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_GARAGE_DATA",
          payload: data,
        });
      });
  }, []);

  const totalCapacity: number = state.floors.reduce(
    (acc: number, curr: IFloor) => acc + curr.maxCapacity,
    0
  );
  const totalParkedCars: number = state.floors.reduce(
    (acc: number, curr: IFloor) => acc + curr.parkedCars.length,
    0
  );

  const statusIconColor = (capacity: number, cars: number) => {
    const availableSpots = capacity - cars;
    if (availableSpots > Math.floor((capacity * 2) / 3)) {
      return "success";
    } else if (availableSpots >= Math.floor(capacity / 3)) {
      return "warning";
    }
    return "danger";
  };
  const statusText = (statusColor: keyof StatusColors) => {
    switch (statusColor) {
      case "danger":
        return "Only a few spots left!";
      case "warning":
        return "Some spots left!";
      case "success":
        return "Many spots left!";
    }
  };

  return (
    <div className="home m-6 container px-10 mx-auto">
      <div className="py-5" data-cy="home-header">
        <H1 size="x-large">{state.name}</H1>
      </div>
      <div className="mb-6">
        <SummaryCard
          statusColor={statusIconColor(totalCapacity, totalParkedCars)}
          statusText={statusText}
          capacity={totalCapacity}
          cars={totalParkedCars}
        />
      </div>
      <div>
        {state.floors &&
          state.floors.map((floor, index) => (
            <div key={`floor-${index}`}>
              <Accordion
                remember_state
                top
                id="single-accordion"
                title={
                  <div className="flex w-full justify-between">
                    {`Floor ${floor.floorId} - Available spots: ${
                      floor.maxCapacity - floor.parkedCars.length
                    }/${floor.maxCapacity}`}
                    <StatusIcon
                      status={statusIconColor(
                        floor.maxCapacity,
                        floor.parkedCars.length
                      )}
                    />
                  </div>
                }
              >
                <FloorOverview
                  maxCap={floor.maxCapacity}
                  key={`floor-overview${index}`}
                  cars={floor.parkedCars}
                  statusText={statusText(
                    statusIconColor(floor.maxCapacity, floor.parkedCars.length)
                  )}
                />
              </Accordion>
            </div>
          ))}
      </div>
    </div>
  );
};
