import { InfoCard } from "@dnb/eufemia"
import { StatusIcon } from "./StatusIcon"
import { StatusColors } from "../types"

interface SummaryCardProps {
    statusColor: keyof StatusColors
    statusText: (statusColor: keyof StatusColors) => string
    capacity: number,
    cars: number
}
export const SummaryCard = (props: SummaryCardProps) => {


    return (
        <>
            <InfoCard
                text={`Currently, the number of available spots is ${props.capacity - props.cars}/${props.capacity}. ${props.statusText(props.statusColor)}`}
                title={"Welcome to our garage"}
                icon={() => <div className="pt-3"><StatusIcon status={props.statusColor} /></div>}
            />
        </>
    )
}