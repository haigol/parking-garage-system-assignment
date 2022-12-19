import { StatusColors } from "../types"

type StatusProps = {
    status: keyof StatusColors
}

export const StatusIcon = ({ status }: StatusProps) => {
    console.log(status);

    const statusColors: StatusColors = {
        danger: 'bg-status-danger',
        warning: 'bg-status-warning',
        success: 'bg-status-success',
    }

    return (<div className={`w-4 h-4 ${statusColors[status]} rounded-full`}></div>)
}