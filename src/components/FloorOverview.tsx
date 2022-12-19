import { Button, Table, Tr, Th, Td, H2 } from "@dnb/eufemia";
import { ICar } from "../types";

interface FloorOverviewProps {
    maxCap: number,
    cars: ICar[]
}
export const FloorOverview = (props: FloorOverviewProps) => {
    return (
        <div className="p-2">
            <H2>Parked cars</H2>
            <Table>
                <caption className="dnb-sr-only">Parked cars</caption>
                <thead>
                    <Tr>
                        <Th>Numberplate</Th>
                        <Th>ID</Th>
                    </Tr>
                </thead>
                <tbody>
                    {props.cars.map((car, index) => (
                        <Tr key={`tr-car-${index}`}>
                            <Td>{car.numberPlate}</Td>
                            <Td>{car.id}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}