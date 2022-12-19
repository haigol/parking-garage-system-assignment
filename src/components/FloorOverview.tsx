import { Table, Tr, Th, Td, H2, H3 } from "@dnb/eufemia";
import { ICar } from "../types";

interface FloorOverviewProps {
  maxCap: number;
  cars: ICar[];
  statusText: string;
}
export const FloorOverview = (props: FloorOverviewProps) => {
  return (
    <div className="p-2">
      <div className="py-3">
        <H3 size="small">{props.statusText}</H3>
      </div>
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
  );
};
