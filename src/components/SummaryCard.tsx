import { InfoCard } from "@dnb/eufemia"
import { StatusIcon } from "./StatusIcon"
import { StatusColors } from "../types"

interface SummaryCardProps {
    statusColor: keyof StatusColors
}
export const SummaryCard = (props: SummaryCardProps) => {
    const statusText = () => {
        switch (props.statusColor) {
            case "danger":
                return "A few spots left!"
            case "warning":
                return "Some spots left!"
            case "success":
                return "Many spots left!"
        }
    }

    return (
        <>
            <InfoCard
                text={statusText()}
                title={"Welcome to our garage"}
                icon={() => <StatusIcon status={props.statusColor} />}
            />
        </>
    )
}